import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'items-networks',
  templateUrl: './items-networks.component.html',
  styleUrls: ['./items-networks.component.css']
})
export class ItemsNetworksComponent implements OnInit {

  items = this.appService.appData.nets;

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

}
