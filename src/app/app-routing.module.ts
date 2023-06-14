import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/Projects/Projects.component';
import { ItemAnimComponent } from './components/item-anim/item-anim.component';
import { MobileWebComponent } from './components/mobile-web/mobile-web.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'curriculo', component: UserInfoComponent },
      { path: 'contato', component: ContactComponent },
      { path: 'projetos', component: ProjectsComponent },
      { path: 'mobile-web', component: MobileWebComponent },
    ],
  },
  { path: 'load', component: ItemAnimComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
