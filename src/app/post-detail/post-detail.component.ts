import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service';
import {Observable} from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  private id: any;
  constructor(private service:ApiService, private route: ActivatedRoute) { }

 ngOnInit() {
 	this.route.params.subscribe(params => {
       this.id = params['id'];
       console.log(this.id);
       this.service.getBodyPost(this.id).subscribe(
       data => { this.id = data;
         console.log(this.id);},
  );
    });


  }

    
}
