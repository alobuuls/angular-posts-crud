import { NgModule } from '@angular/core';
import { CanMatchFn, RouterModule, Routes } from '@angular/router';

// Components
import { PostsComponent } from './posts.component';
import { PostCreateComponent } from './create/post-create.component';
import { PostDetailComponent } from './detail/post-detail.component';
import { PostEditComponent } from './edit/post-edit.component';
import { pendingChangesFormGuard } from 'src/app/guards/pending-changes-form.guard';

// Routes for Posts
const postsRoutes: Routes = [
  {
    path: '',
    component: PostsComponent,
  },

  {
    path: 'new',
    component: PostCreateComponent,
    canDeactivate: [pendingChangesFormGuard],
  },

  {
    path: 'edit/:id',
    component: PostEditComponent,
    data: {},
  },

  {
    path: 'detail/:id',
    component: PostDetailComponent,
  },

  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(postsRoutes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
