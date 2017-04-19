import { Component, Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string) {
        console.log("here");
        return this.http.post('http://localhost:3000/api/authenticate/', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                console.log(user);
            });
    }

    /*logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }*/
} 