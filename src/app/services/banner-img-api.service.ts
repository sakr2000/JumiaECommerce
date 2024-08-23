import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BannerImgApiService {

  baseUrl:string = 'http://localhost:3000/Banner'
  constructor( private http:HttpClient) { }
  getAll(){
    return this.http.get(this.baseUrl);
  }
}
