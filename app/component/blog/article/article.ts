import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { BlogService } from '../../../service/blog.service';

@Component({
    selector: 'blog-article',
    templateUrl: 'app/component/blog/article/article.html',
    styleUrls: ['app/component/blog/article/article.css']
})

export class ArticleComponent implements OnInit {
    private editMode: boolean;

    id: number;
    userId: number;
    title: string;
    body: string;

    constructor(private blogService: BlogService,
                private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.blogService.getById(+params['id']).then(article => {
                this.id = article.id;
                this.userId = article.userId;
                this.title = article.title;
                this.body = article.body;
            });
        });

    }

    onModeChange(event): void {
        this.editMode = event.value === 'edit';
    }

    onSave(): void {
        this.blogService.update(this.id, this.title, this.body).then(function() {
            this.editMode = false;
        }.bind(this));
    }
}
