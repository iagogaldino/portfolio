import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/animations/fadeInAnimation';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class UserInfoComponent implements OnInit {

  list: Array<any> = this.dataService.appData.experience;
  about:string = this.dataService.appData.about;

  constructor(public dataService: AppService) { }

  ngOnInit() {
  }

}
