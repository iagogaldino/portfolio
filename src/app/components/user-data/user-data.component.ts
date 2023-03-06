import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

name: string = this.appService.appData.profile.name;
profession: string = this.appService.appData.profile.profession;

  constructor(public appService: AppService) { }

  ngOnInit() {
  }

}
