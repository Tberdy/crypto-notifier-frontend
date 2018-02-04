import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import {RestApi} from '../lib/rest-api';

import {AuthService} from '../services/auth.service';

import {User} from '../models/user';

@Injectable()
export class UserService extends RestApi {

    constructor(http: HttpClient, authService: AuthService) {
        super(http, authService);
        this.apiBaseUrl = '/api/users';
    }

    getUsers() {
        return this.get(this.apiBaseUrl);
    }

    getUser(id: number) {
        return this.get(this.apiBaseUrl + '/' + id);
    }
    
    addUser(user: User) {
        return this.post(this.apiBaseUrl, JSON.stringify(user));
    }
    
    putUser(user: User) {
        return this.put(this.apiBaseUrl + '/' + user.id, JSON.stringify(user));
    }
    
    deleteUser(user: User) {
        return this.delete(this.apiBaseUrl + '/' + user.id);
    }

}
