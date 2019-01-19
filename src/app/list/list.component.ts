import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private userPost:{};
  private userId:any;
	constructor(private service:ApiService) {}

   ngOnInit() {
   	this.service.getData().subscribe(res => {this.userPost = res;
  		console.log(this.userPost);
  	});
    
    }

}
