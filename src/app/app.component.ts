import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { GitHubService } from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  githubData: Object;
  soData: Object;
  reposUrl: string;
  repoList: Object;
  constructor(private Service: DataService, private GitHubService: GitHubService) {
    //this.jsFiddle();
  }

  jsFiddle() {
    this.Service.getJsFiddles().subscribe(data => {
      console.log(data);
    });
  }
}