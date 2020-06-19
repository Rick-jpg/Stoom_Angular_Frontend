import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GameDetail } from './game-detail';

@Injectable({
  providedIn: 'root'
})
export class GameserviceService {
  formData: GameDetail;
  list: GameDetail[];
  readonly BaseURI = 'http://localhost:60734/api'

  constructor(private http:HttpClient) { }

  postGame(formData: GameDetail)
  {
    return this.http.post(this.BaseURI+'/GameDetails',formData);
  }

  refreshList()
  {
    this.http.get(this.BaseURI+'/GameDetails')
    .toPromise().then(res=> this.list = res as GameDetail[]);
  }

  putGame(formData: GameDetail)
  {
    return this.http.put(this.BaseURI+'/GameDetails/'+ formData.id,formData);
  }

  DeleteGame(id: number)
  {
    return this.http.delete(this.BaseURI+'/GameDetails/')
  }
}
