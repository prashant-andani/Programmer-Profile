import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css', '../../../assets/main.css']
})

export class HomeComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router) { }
  cards: {
    github_user_id: '',
    stack_user_id: ''
  };
  ngOnInit() { }

  showCards() {
    this.dataService.setUserData(this.cards);
    this.router.navigate(['cards']);
  }
}
