import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';

import { ArticleComponent } from './article.component';

@Injectable()
export class BlogService {
    private blogUrl = 'http://jsonplaceholder.typicode.com/posts';


    constructor(private http: Http) { }

    getAllArticles(): ArticleComponent[] {
        return this.http.get(this.blogUrl)
            .toPromise()
            .then(response => response.json().data as ArticleComponent[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Error loading articles', error);
        return Promise.reject(error.message || error);
    }
}
