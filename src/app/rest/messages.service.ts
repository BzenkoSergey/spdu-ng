import { Subject } from 'rxjs/Subject';

import { Rest } from './rest';
import { MessageDto } from './message.dto';

export class MessagesService {
	private messages = new Subject<MessageDto[]>();
	private running = true;

	init() {
		if (!this.running) {
			return;
		}
		Rest.getMessages()
			.subscribe(messages => {
				this.messages.next(messages);
				setTimeout(
					() => {
						this.init();
					},
					1000
				);
			});
	}

	destroy() {
		this.running = false;
	}

	get() {
		return this.messages;
	}

	add(message: MessageDto) {
		return Rest.addMessage(message);
	}
}
