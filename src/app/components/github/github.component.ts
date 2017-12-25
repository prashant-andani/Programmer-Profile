import { Component, OnInit } from '@angular/core';

import { GitHubService } from '../../services/github.service';
import _ from 'underscore';

@Component({
    moduleId: module.id,
    selector: 'github',
    templateUrl: 'github.component.html',
    styleUrls: ['./github.component.css']

})
export class GitHubComponent implements OnInit {
    githubData: any;
    repoList: any;
    languages: {};

    constructor(private GitHubService: GitHubService) { }

    loadGithubData() {
        this.GitHubService.getGithubData().subscribe(data => {
            this.githubData = data;
            this.getRepos(this.githubData.repos_url);
        });
    }

    getRepos(repos_url) {
        this.GitHubService.getRepos(repos_url).subscribe(repos => {
            this.repoList = repos;
            this.getLanguageList(this.repoList);
        });
    }

    /**
     * Function to list the Languages and no. of occurances and return an array of object
     * @param this
     * @param repoList
     */
    getLanguageList(repoList) {
        this.languages = {};
        if (!repoList) {
            return [];
        }
        repoList.forEach(repo => {
            console.log(repo.langauge);
            if (repo.language !== null && repo.langugage !== undefined)  {
                if (_.has(this.languages, repo.language)) {
                    this.languages[repo.language] += 1;
                } else {
                    this.languages[repo.langauge] = 1;
                    console.log(this.languages);
                }
            }
        });
        console.log(this.languages);
    }

    ngOnInit() {
        this.loadGithubData();
    }
}
