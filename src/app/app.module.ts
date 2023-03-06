import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemsNetworksComponent } from './components/items-networks/items-networks.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemsCarrerComponent } from './components/items-carrer/items-carrer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemStacksComponent } from './components/item-stacks/item-stacks.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconApp } from './items/icons/icons-app';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    HomeComponent,
    ItemsNetworksComponent,
    UserDataComponent,
    UserInfoComponent,
    FooterComponent,
    ItemsCarrerComponent,
    ItemStacksComponent,
    ContactComponent,
    // icons
    IconApp
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
