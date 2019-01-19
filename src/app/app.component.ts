import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})


export class AppComponent {
  
}
  
