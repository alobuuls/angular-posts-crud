import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBodyPost } from 'src/app/interfaces/api-posts.interface';
import { AlertsService } from 'src/app/services/alerts.service';
import { PostsService } from 'src/app/services/posts.service';
import { PostFormComponent } from '../form/post-form.component';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  idParam!: string;
  postInfo: Partial<IBodyPost> | null = null;
  isSendingForm: boolean = false;

  @ViewChild('postForm') postForm!: PostFormComponent;

  constructor(
    private _posts: PostsService,
    private _alerts: AlertsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.idParam = id;
      const { title, content, author, dataFromUrl } = history.state;
      if (dataFromUrl) {
        this.postInfo = { title, content, author };
        return;
      }
      this._posts.getPostById(id).subscribe(({ data }) => (this.postInfo = data));
    });
  }

  onSubmit(body: IBodyPost): void {
    if (this.isEqual(body, this.postInfo as IBodyPost)) {
      this._alerts.showAlert({ icon: 'warning', title: 'No changes', html: 'Change at least one value' });
      return;
    }
    this.isSendingForm = true;
    this._posts.updatePost(this.idParam, body).subscribe(() => {
      this.isSendingForm = false;
      this._alerts.showToast({ title: 'The post has beeen edited', icon: 'success' });
      this.router.navigateByUrl('/posts');
    });
  }

  private isEqual(a: IBodyPost, b: IBodyPost): boolean {
    return (Object.keys(a) as (keyof IBodyPost)[]).every(k => a[k] === b[k]);
  }
}
