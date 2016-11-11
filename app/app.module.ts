import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';
import { HttpModule }    from '@angular/http';
import { MaterialModule }    from '@angular/material';

import { AppComponent } from "./component/app";
import { BlogComponent } from "./component/blog/blog";
import { ArticleComponent } from "./component/blog/article/article";

import { BlogService } from './service/blog.service';

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule.forRoot(),
        FormsModule,
        HttpModule,
        RouterModule.forRoot(<Routes>[
            {
                path: '',
                redirectTo: '/blog',
                pathMatch: 'full'
            },
            {
                path: 'blog',
                component: BlogComponent
            },
            {
                path: 'article/:id',
                component: ArticleComponent
            }
        ])
    ],
    declarations: [
        AppComponent,
        BlogComponent,
        ArticleComponent
    ],
    providers: [
        BlogService
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
