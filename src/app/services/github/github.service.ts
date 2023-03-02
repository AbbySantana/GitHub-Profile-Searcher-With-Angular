import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username: string;
  private client_id = 'a0b52e3d762b0823cb00';
  private client_secret = 'd4ba5d451bd11533bc34e824cf64cd8b49a33ee1';

  constructor(private _http: Http) {
    this.username = 'bradtraversy'
  }

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
