export class MessageDto {
	id: number;
	text: string;
	userId: number;
	channelId: number;
	date: Date;

	constructor(message?: MessageDto) {
		if (!message) {
			return;
		}
		this.id = message.id;
		this.text = message.text;
		this.userId = message.userId;
		this.channelId = message.channelId;
		this.date = message.date;
	}
}
