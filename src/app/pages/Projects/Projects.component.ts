import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-Projects',
  templateUrl: './Projects.component.html',
  styleUrls: ['./Projects.component.css']
})
export class ProjectsComponent implements OnInit {

  list: Array<any> = this.dataService.appData.projects;
  text: string =  this.dataService.appData.projectsInfo.text;
  constructor(public dataService: AppService) { }

  ngOnInit() {
  }

}
