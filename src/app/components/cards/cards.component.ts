import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'cards',
  templateUrl: 'cards.component.html',
  styleUrls: ['cards.component.css']
})

export class CardsComponent implements OnInit {
  userCardsData: {};

  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.userCardsData = this.dataService.getUserData();
    console.log(this.userCardsData);
  }
}
