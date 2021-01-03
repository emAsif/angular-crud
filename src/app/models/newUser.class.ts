import { INewUser } from './newUser.interface';

export class NewUser implements INewUser {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    birthday: string;
    address?: string;
}