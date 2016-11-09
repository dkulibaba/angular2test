import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';

import { ArticleComponent } from './article.component';

@Component({
    selector: 'blog',
    template: `<md-list>
                    <md-list-item *ngFor="let article of articles">
                      <a routerLink="/article/{{ article.id }}">{{ article.title }}</a>
                    </md-list-item>
                </md-list>
                <router-outlet></router-outlet>
    `
})

export class BlogComponent implements OnInit {
    articles: ArticleComponent[];

    constructor(private blogService: BlogService) { }

    ngOnInit(): void {
        this.blogService.getAllArticles().then(articles => this.articles = articles);
    }
}
