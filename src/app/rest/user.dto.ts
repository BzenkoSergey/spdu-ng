export class UserDto {
	id: number;
	name: string;

	constructor(user?: UserDto) {
		if (!user) {
			return;
		}
		this.id = user.id;
		this.name = user.name;
	}
}
