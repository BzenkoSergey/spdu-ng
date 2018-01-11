import { Subject } from 'rxjs/Subject';

import { Rest } from './rest';
import { UserDto } from './user.dto';

export class UsersService {
	private users = new Subject<UserDto[]>();
	private running = true;

	init() {
		this.running = true;
		this.performIntervalSync();
	}

	destroy() {
		this.running = false;
	}

	get() {
		return this.users;
	}

	add(user: UserDto) {
		return Rest.addUser(user);
	}

	private performIntervalSync() {
		if (!this.running) {
			return;
		}
		Rest.getUsers()
			.subscribe(users => {
				this.users.next(users);
				setTimeout(
					() => {
						this.init();
					},
					10000
				);
			});
	}
}
