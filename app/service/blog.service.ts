import { Injectable } from '@angular/core';
import {Headers, Http, Response} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import { ArticleComponent } from '../component/blog/article/article';

@Injectable()
export class BlogService {
    private blogUrl = 'http://jsonplaceholder.typicode.com/posts';

    constructor(private http: Http) { }

    getAllArticles(): Promise<ArticleComponent[]> {
        return this.http
            .get(this.blogUrl)
            .toPromise()
            .then(response => response.json() as ArticleComponent[])
            .catch(this.handleError);
    }

    getById(id: number): Promise<ArticleComponent> {
        return this.http
            .get(`${this.blogUrl}/${id}`)
            .toPromise()
            .then(response => response.json() as ArticleComponent)
            .catch(this.handleError);
    }

    update(id: number, title: string, body: string): Promise<Response> {
        const url = `${this.blogUrl}/${id}`;
        return this.http
            .put(url, JSON.stringify({title, body}), {headers: new Headers({'Content-Type': 'application/json'})})
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Error loading data', error);
        return Promise.reject(error.message || error);
    }
}
