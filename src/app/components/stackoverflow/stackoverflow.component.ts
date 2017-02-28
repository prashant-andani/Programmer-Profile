import { Component, OnInit } from '@angular/core';

import { StackoverflowService } from '../../services/stackoverflow.service';

@Component({
    selector: 'stackoverflow',
    templateUrl: 'stackoverflow.component.html'
})
export class StackoverflowComponent implements OnInit {
    soData: any;
    constructor(private soService: StackoverflowService) { }

    getSOData() {
        this.soService.getStackoverflowData().subscribe(data => {
            this.soData = {
                link: data.items[0].link,
                badgeCounts: data.items[0].badge_counts,
                reputation: data.items[0].reputation
            };
        });
    }

    ngOnInit() {
        this.getSOData();
    }
}