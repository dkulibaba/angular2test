import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import { BlogService } from '../../service/blog.service';

import { ArticleComponent } from './article/article';

@Component({
    selector: 'blog',
    templateUrl: 'app/component/blog/blog.html',
    styleUrls: ['app/component/blog/blog.css'],
    encapsulation: ViewEncapsulation.None
})

export class BlogComponent implements OnInit {
    articles: ArticleComponent[];

    constructor(private blogService: BlogService) { }

    ngOnInit(): void {
        this.blogService.getAllArticles().then(articles => this.articles = articles);
    }
}
