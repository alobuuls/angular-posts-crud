import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Interfaces
import { IPost } from 'src/app/interfaces/api-posts.interface';
import { DataState } from 'src/app/interfaces/data-structure-apis';

// Utils
import { initDataHelper } from 'src/app/helpers/utils/operator-with-status';

// Services
import { PostsService } from 'src/app/services/posts.service';
import { AlertsService } from 'src/app/services/alerts.service';
import { ErrorHandlerService } from 'src/app/services/errHandler.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  vm$!: Observable<DataState<IPost[]>>;

  constructor(
    private _posts: PostsService,
    private _alerts: AlertsService,
    private _errorHandler: ErrorHandlerService
  ) {}

  ngOnInit(): void {
    this.getAllPosts();
  }

  confirmDelete(item: IPost): void {
    this._alerts
      .showAlert({
        title: 'Estás seguro que deseas eliminar el post',
        icon: 'question',
        html: 'Al eliminar no podrá recuperar el post, es una acción definitiva',
        cancelText: 'Cancelar',
        confirmText: 'Si estoy seguro',
        opts: {
          confirmButtonColor: 'red',
        },
      })
      .then(({ isConfirmed }) => {
        isConfirmed && this.deletePost(item);
      });
  }

  hasNoActivePosts(data: IPost[]): boolean {
    return data.filter(p => !p.wasRemoved).length === 0;
  }

  private deletePost(item: IPost): void {
    item.wasRemoved = true;
    this._posts.deletePost(item.id).subscribe({
      next: () => this._alerts.showToast({ icon: 'success', title: 'The post has been deleted successfully' }),
      error: () => {
        item.wasRemoved = false;
        this._alerts.showToast({ icon: 'error', title: 'Error by deleting' });
      },
    });
  }

  private getAllPosts(): void {
    this.vm$ = initDataHelper(this._posts.getAllPosts(), this._errorHandler);
  }

  trackByPostId(idx: number, post: IPost): number {
    return post.id;
  }
}
