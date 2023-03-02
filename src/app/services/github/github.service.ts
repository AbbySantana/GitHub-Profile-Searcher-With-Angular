import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username: string;
  private client_id = 'd3a4653c1a9602825bba';
  private client_secret = '4e687a1f8f868dac19e087d689e51ebd808f6417';

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
