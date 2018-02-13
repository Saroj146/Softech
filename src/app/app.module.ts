import { UserService } from './Services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { requestOptionsProvider } from './default-request-options.service';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from './app.component';
import { UserCreateComponent } from './User/user-create/user-create.component';
import { UserViewComponent } from './User/user-view/user-view.component';
import { SoftechRoutingModule } from './softech-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    UserCreateComponent,
    UserViewComponent
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    FormsModule,
    SoftechRoutingModule
  ],
  providers: [
    requestOptionsProvider,
    CookieService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
