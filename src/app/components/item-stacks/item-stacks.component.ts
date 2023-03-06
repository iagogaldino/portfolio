import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-stacks',
  templateUrl: './item-stacks.component.html',
  styleUrls: ['./item-stacks.component.css']
})
export class ItemStacksComponent implements OnInit {

  @Input() iconName = '';

  constructor() { }

  ngOnInit() { }


}
