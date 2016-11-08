import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';
import { HttpModule }    from '@angular/http';

import { BlogComponent } from "./blog.component";
import { ArticleComponent } from "./article.component";

import { BlogService } from './blog.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(<Routes>[
            {
                path: 'article',
                component: ArticleComponent
            }
        ])
    ],
    declarations: [
        BlogComponent,
        ArticleComponent
    ],
    providers: [
        BlogService
    ],
    bootstrap:    [ BlogComponent ]
})

export class AppModule { }
