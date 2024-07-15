import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { WelcomeComponent } from './welcome/welcome.component';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TsclassComponent } from './tsclass/tsclass.component';
import { TodoComponent } from './todo/todo.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { React1Component } from './react1/react1.component';
import { React2Component } from './react2/react2.component';
import { React3Component } from './react3/react3.component';
import { SampleloginComponent } from './samplelogin/samplelogin.component';
import { LoginformComponent } from './loginform/loginform.component';
import { EmpsComponent } from './emps/emps.component';
import { EmpsDetailsComponent } from './emps-details/emps-details.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LogoutComponent } from './logout/logout.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { ShowFavComponent } from './show-fav/show-fav.component';
import { DeletefavComponent } from './deletefav/deletefav.component';
import { NewsComponent } from './news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { LightswitchComponent } from './lightswitch/lightswitch.component'



@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    WelcomeComponent,
    ParentComponent,
    ChildComponent,
    TsclassComponent,
    TodoComponent,
    React1Component,
    React2Component,
    React3Component,
    SampleloginComponent,
    LoginformComponent,
    EmpsComponent,
    EmpsDetailsComponent,
    ProductslistComponent,
    TopbarComponent,
    LogoutComponent,
    EmpDetailsComponent,
    ShowFavComponent,
    DeletefavComponent,
    NewsComponent,
    LightswitchComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatBadgeModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
    }),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
