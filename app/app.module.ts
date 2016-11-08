import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';
import { HttpModule }    from '@angular/http';
import { MaterialModule }    from '@angular/material';

import { AppComponent } from "./app.component";
import { BlogComponent } from "./blog.component";
import { ArticleComponent } from "./article.component";

import { BlogService } from './blog.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
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
                path: 'article',
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
