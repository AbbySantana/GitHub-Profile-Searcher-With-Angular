import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username: string;
  private client_id = 'c8982c8492856fffce64';
  private client_secret = 'b8ba5f2bee98e289028c1de97887ab07b887af09';

  constructor(private _http: Http) {}

  getUser() {
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id='+this.client_id+'&client_secret='+this.client_secret)
    .map(res => res.json())
  }

  getRepos() {
    return this._http.get('http://api.github.com/users/' + this.username + '/repos'+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
    .map(res => res.json())
  }

  updateUser(username) {
    this.username = username;
  }

}
