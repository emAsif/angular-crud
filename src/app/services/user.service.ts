import { Injectable } from '@angular/core';
import { NewUser } from 'src/app/models/newUser';


@Injectable({ providedIn: 'root' })
export class UserService {
    newUser: NewUser; // stores newly created user

    constructor() { }
}
