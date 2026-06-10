import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/interfaces/api-posts.interface';
import { PostsService } from 'src/app/services/posts.service';
import { initDataHelper } from '../../../helpers/utils/operator-with-status';
import { ErrorHandlerService } from 'src/app/services/errHandler.service';
import { DataState } from 'src/app/interfaces/data-structure-apis';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent {
  vm$!: Observable<DataState<IPost>>;

  constructor(
    private _post: PostsService,
    private route: ActivatedRoute,
    private _errorHandler: ErrorHandlerService
  ) {
    this.route.params.subscribe(({ id }) => this.getPostById(id));
  }

  getPostById(id: string) {
    this.vm$ = initDataHelper(this._post.getPostById(id), this._errorHandler);
  }
}
