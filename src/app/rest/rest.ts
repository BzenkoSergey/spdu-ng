import { Subject } from 'rxjs/Subject';

import { MessageDto } from './message.dto';
import { UserDto } from './user.dto';
import { ChannelDto } from './channel.dto';

const MONGODB_API = 'https://api.mlab.com/api/1/databases/spdu-ng';
const API_KEY = '9UxYMuHYHmellW_9udyW2Y-vmVfFvP1E';
const USERS_URL = MONGODB_API + '/collections/users?apiKey=' + API_KEY;
const MESSAGES_URL = MONGODB_API + '/collections/messages?apiKey=' + API_KEY;
const CHANNELS_URL = MONGODB_API + '/collections/channels?apiKey=' + API_KEY;

export class Rest {
	static addChannel(channel: ChannelDto) {
		const subj = new Subject<ChannelDto>();
		const xhr = new XMLHttpRequest();

		xhr.open('POST', CHANNELS_URL, true);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify(channel));

		xhr.onreadystatechange = function() {
			if (xhr.readyState !== 4) {
				return;
			}
			if (xhr.status !== 200) {
				subj.error(null);
				return;
			}

			const data = JSON.parse(xhr.responseText);
			subj.next(new ChannelDto(data));
			subj.complete();
		};
		return subj;
	}

	static getChannels() {
		const subj = new Subject<ChannelDto[]>();
		const xhr = new XMLHttpRequest();

		xhr.open('GET', CHANNELS_URL, true);
		xhr.send();

		xhr.onreadystatechange = function() {
			if (xhr.readyState !== 4) {
				return;
			}
			if (xhr.status !== 200) {
				subj.error(null);
				return;
			}

			const data = JSON.parse(xhr.responseText);
			const channels = data.map(u => new ChannelDto(u));
			subj.next(channels);
			subj.complete();
		};
		return subj;
	}

	static addUser(user: UserDto) {
		const subj = new Subject<UserDto>();
		const xhr = new XMLHttpRequest();

		xhr.open('POST', USERS_URL, true);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify(user));

		xhr.onreadystatechange = function() {
			if (xhr.readyState !== 4) {
				return;
			}
			if (xhr.status !== 200) {
				subj.error(null);
				return;
			}

			const data = JSON.parse(xhr.responseText);
			subj.next(new UserDto(data));
			subj.complete();
		};
		return subj;
	}

	static getUsers() {
		const subj = new Subject<UserDto[]>();
		const xhr = new XMLHttpRequest();

		xhr.open('GET', USERS_URL, true);
		xhr.send();

		xhr.onreadystatechange = function() {
			if (xhr.readyState !== 4) {
				return;
			}
			if (xhr.status !== 200) {
				subj.error(null);
				return;
			}

			const data = JSON.parse(xhr.responseText);
			const users = data.map(u => new UserDto(u));
			subj.next(users);
			subj.complete();
		};
		return subj;
	}

	static getMessages() {
		const subj = new Subject<MessageDto[]>();
		const xhr = new XMLHttpRequest();

		xhr.open('GET', MESSAGES_URL, true);
		xhr.send();

		xhr.onreadystatechange = function() {
			if (xhr.readyState !== 4) {
				return;
			}
			if (xhr.status !== 200) {
				subj.error(null);
				return;
			}

			const data = JSON.parse(xhr.responseText);
			const messages = data.map(u => new MessageDto(u));
			subj.next(messages);
			subj.complete();
		};
		return subj;
	}

	static addMessage(message: MessageDto) {
		const subj = new Subject<MessageDto>();
		const xhr = new XMLHttpRequest();

		xhr.open('POST', MESSAGES_URL, true);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify(message));

		xhr.onreadystatechange = function() {
			if (xhr.readyState !== 4) {
				return;
			}
			if (xhr.status !== 200) {
				subj.error(null);
				return;
			}

			const data = JSON.parse(xhr.responseText);
			subj.next(new MessageDto(data));
			subj.complete();
		};
		return subj;
	}
}
