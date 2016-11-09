import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { BlogService } from './blog.service';

@Component({
    selector: 'blog-article',
    template: `
        <header>
            <h3 *ngIf="!editMode">{{title}}</h3>
            <div *ngIf="editMode">
                <md-input placeholder="Article title" [(ngModel)]="title"></md-input>
                <button md-raised-button color="primary" (click)="onSave($event)">Save</button>
            </div>
        </header>
        <article class="blog-article">
            {{body}}                               
        </article>
        <md-button-toggle-group (change)="onModeChange($event)">
            <md-button-toggle value="view" checked>View Mode</md-button-toggle>
            <md-button-toggle value="edit">Edit Mode</md-button-toggle>
        </md-button-toggle-group>`,
    styles: [`
        .blog-article {
            background-color: #eee;
            min-height: 200px;
            border: 1px solid #777;
            padding: 10px;
        }
    `]
})

export class ArticleComponent implements OnInit {
    private editMode: boolean;

    // TODO: move DTO properties to separate component
    id: number;
    userId: number;
    title: string;
    body: string;

    constructor(private blogService: BlogService,
                private route: ActivatedRoute) { }

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
        this.blogService.update(this.id, this.title).then(function() {
            this.editMode = false;
        }.bind(this));
    }
}
