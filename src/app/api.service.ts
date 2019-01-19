import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
import { Http, Headers, Response } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

@Injectable()
export class ApiService {

  constructor(private http:HttpClient) { }


  getData(){
  	return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getBodyPost(id){
  	 return this.http.get('https://jsonplaceholder.typicode.com/posts/' +id);	 
 }



}
