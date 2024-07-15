import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ParentComponent } from './parent/parent.component';
import { TsclassComponent } from './tsclass/tsclass.component';
import { TodoComponent } from './todo/todo.component';
import { React1Component } from './react1/react1.component';
import { React2Component } from './react2/react2.component';
import { React3Component } from './react3/react3.component';
import { SampleloginComponent } from './samplelogin/samplelogin.component';
import { LoginformComponent } from './loginform/loginform.component';
import { EmpsComponent } from './emps/emps.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { authGuard } from './auth.guard';
import { adminGuard } from './admin.guard';
import { TopbarComponent } from './topbar/topbar.component';
import { LogoutComponent } from './logout/logout.component';
import { ShowFavComponent } from './show-fav/show-fav.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { DeletefavComponent } from './deletefav/deletefav.component';
import { NewsComponent } from './news/news.component';


const routes: Routes = [
  {path:"hello",component:HelloComponent, canActivate: [authGuard]},
  {path:"welcome",component:WelcomeComponent, canActivate:[adminGuard] },
  {path:"parent", component: ParentComponent},
  {path:"tsclass", component: TsclassComponent},
  {path: "todo", component: TodoComponent},
  {path: "react1", component: React1Component},
  {path: "react2", component: React2Component},
  {path: "react3", component: React3Component},
  {path: "samplelogin", component:SampleloginComponent},
  {path: "loginform", component:LoginformComponent},
  {path: "emps", component:EmpsComponent},
  {path: "productslist", component:ProductslistComponent},
  {path:"topbar", component:TopbarComponent},
  {path:"logout", component:LogoutComponent},
  {path:"emp/:Id",component:EmpDetailsComponent},
  {path:"showfav",component:ShowFavComponent},
  {path:"delfav",component:DeletefavComponent},
  {path:"news", component:NewsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
