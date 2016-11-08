import { Component } from '@angular/core';
import { BlogService } from './blog.service';

import { ArticleComponent } from './article.component';

@Component({
    selector: 'blog',
    template: `<h1>Hello Angular2!</h1>
                <li *ngFor="let article of articles">
                  {{ hero }}
                </li>`
})

export class BlogComponent {
    articles: ArticleComponent[];

    constructor(private blogService: BlogService) {
        this.articles = blogService.getAllArticles();
    }
}
