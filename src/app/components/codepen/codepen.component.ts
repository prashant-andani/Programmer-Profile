import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  moduleId: module.id,
  selector: 'codepen',
  templateUrl: 'codepen.component.html',
  styleUrls: ['./codepen.component.css']
})

export class CodepenComponent implements OnInit {
  pens: any;

  constructor(private dataService: DataService) { }
  getPens() {
    this.dataService.getPens().subscribe(pens => {
        this.pens = pens.data;
    });
  }
  ngOnInit() {
    this.getPens();
  }
}
