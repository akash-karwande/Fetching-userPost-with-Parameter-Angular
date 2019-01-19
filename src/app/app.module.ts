import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { ApiService } from './api.service';
import { HttpClientModule} from '@angular/common/http';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    PostDetailComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
