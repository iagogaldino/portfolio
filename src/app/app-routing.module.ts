import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/Projects/Projects.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [

    {path: 'curriculo', component: UserInfoComponent},
    {path: 'contato', component: ContactComponent},
    {path: 'projetos', component: ProjectsComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
