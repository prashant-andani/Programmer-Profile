import { Component, OnInit } from '@angular/core';

import { GitHubService } from '../../services/github.service';
@Component({
    moduleId: module.id,
    selector: 'github',
    templateUrl: 'github.component.html'
})
export class GitHubComponent implements OnInit {
    githubData: any;
    repoList: any;

    constructor(private GitHubService: GitHubService) { }

    loadGithubData() {
        this.GitHubService.getGithubData().subscribe(data => {
            this.githubData = data;
            this.GitHubService.getRepos(data.repos_url).subscribe(repos => {
                this.repoList = repos;
            });
        });
    }

    ngOnInit() {
        this.loadGithubData();
    }
}