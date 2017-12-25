import { Component, OnInit } from '@angular/core';

import { GitBooksService } from '../../services/gitbooks.service';

@Component({
    moduleId: module.id,
    selector: 'gitbooks',
    templateUrl: 'gitbooks.component.html'
})
export class GitBooksComponent implements OnInit {
    books: any;
    stars: number;
    subscriptions: number;
    discussions: number;

    constructor(private gitBookService: GitBooksService) { }

    getBooks() {
        this.gitBookService.getGitBooks().subscribe(books => {
            this.books = books.list;
            this.getStats(this.books);
        });
    }

    getStats(books) {
        books.forEach(book => {
            this.stars = this.stars + parseInt(book.counts.stars);
            this.subscriptions += book.counts.subscriptions;
            this.discussions += book.counts.discussions;
        });
        console.log(this.stars);
    }

    ngOnInit() {
        this.getBooks();
    }
}