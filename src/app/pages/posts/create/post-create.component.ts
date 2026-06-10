import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IBodyPost } from 'src/app/interfaces/api-posts.interface';
import { AlertsService } from 'src/app/services/alerts.service';
import { PostsService } from 'src/app/services/posts.service';
import { PostFormComponent } from '../form/post-form.component';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  isSendingForm: boolean = false;
  @ViewChild('postForm') postForm!: PostFormComponent;

  get wasFormSubmitted() {
    return this.postForm?.wasFormSubmitted ?? false;
  }

  constructor(
    private _posts: PostsService,
    private _alerts: AlertsService,
    private router: Router
  ) {}

  isFormEmptyGuardPendingChanges() {
    return this.postForm?.isFormEmpty() ?? true;
  }

  onSubmit(body: IBodyPost): void {
    this.isSendingForm = true;
    this._posts.createPost(body).subscribe(() => {
      this.isSendingForm = false;
      this.postForm.clearLs();
      this._alerts.showToast({ title: 'The post has been created', icon: 'success' });
      this.router.navigateByUrl('/posts');
    });
  }
}
