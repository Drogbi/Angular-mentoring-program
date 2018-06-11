import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    users: User;
    constructor() {}


}
