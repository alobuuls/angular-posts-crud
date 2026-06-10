import { NgModule } from '@angular/core';

// Modules
import { SharedModule } from 'src/app/shared/shared.module';
import { PostsRoutingModule } from './posts.routing.module';

// Components
import { PostsComponent } from './posts.component';
import { PostDetailComponent } from './detail/post-detail.component';
import { PostCreateComponent } from './create/post-create.component';
import { PostFormComponent } from './form/post-form.component';
import { PostEditComponent } from './edit/post-edit.component';

@NgModule({
  declarations: [PostsComponent, PostDetailComponent, PostCreateComponent, PostFormComponent, PostEditComponent],
  imports: [SharedModule, PostsRoutingModule],
})
export class PostsModule {}
