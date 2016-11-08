import { Injectable } from '@angular/core';
import { Http, Response} from "@angular/http";
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

import { ArticleComponent } from './article.component';

@Injectable()
export class BlogService {
    private blogUrl = 'http://jsonplaceholder.typicode.com/posts';

    constructor(private http: Http) { }

    getAllArticles(): Observable<ArticleComponent[]> {
        return this.http
            .get(this.blogUrl)
            .map((r: Response) => r.json().data as ArticleComponent[]);
    }
}
