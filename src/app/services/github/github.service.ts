import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username: string;
  private client_id = 'bb9231996e51a5d11fea';
  private client_secret = '675ff5569bb782e51795ecc65198d033a76827f6';

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
