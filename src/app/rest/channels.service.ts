import { Subject } from 'rxjs/Subject';

import { Rest } from './rest';
import { ChannelDto } from './channel.dto';

export class ChannelsService {
	private channels = new Subject<ChannelDto[]>();
	private running = false;

	get() {
		this.running = true;
		this.performIntervalSync();
		return this.channels;
	}

	add(channel: ChannelDto) {
		return Rest.addChannel(channel);
	}

	private performIntervalSync() {
		if (!this.running) {
			return;
		}
		Rest.getChannels()
			.subscribe(channels => {
				this.channels.next(channels);
				setTimeout(
					() => {
						this.performIntervalSync();
					},
					10000
				);
			});
	}
}
