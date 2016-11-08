import { Component } from '@angular/core';
import { BlogService } from './blog.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { ArticleComponent } from './article.component';

@Component({
    selector: 'blog',
    template: `<md-list>
                    <md-list-item *ngFor="let article of articles | async">
                      {{ article.id }}
                    </md-list-item>
                </md-list>
                <router-outlet></router-outlet>
    `
})

export class BlogComponent {
    articles: Observable<ArticleComponent[]>;

    constructor(private blogService: BlogService) {
        this.articles = blogService.getAllArticles();
    }
}
