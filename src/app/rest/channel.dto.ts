export class ChannelDto {
	id: number;
	name: string;

	constructor(channel?: ChannelDto) {
		if (!channel) {
			return;
		}
		this.id = channel.id;
		this.name = channel.name;
	}
}
