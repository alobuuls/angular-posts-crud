import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { IBodyPost, IPostData, IPostDelete, IPostItem, IPostResBody } from '../interfaces/api-posts.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private apiUrl = environment.endpointPosts;

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<IPostData> {
    return this.http.get<IPostData>(`${this.apiUrl}/posts/all`);
  }

  getPostById(id: string): Observable<IPostItem> {
    return this.http.get<IPostItem>(`${this.apiUrl}/post/${id}`);
  }

  createPost(post: IBodyPost): Observable<IPostResBody> {
    return this.http.post<IPostResBody>(`${this.apiUrl}/post/create`, post);
  }

  updatePost(id: string, post: IBodyPost): Observable<IPostResBody> {
    return this.http.put<IPostResBody>(`${this.apiUrl}/post/update/${id}`, post);
  }

  deletePost(id: number): Observable<IPostDelete> {
    return this.http.delete<IPostDelete>(`${this.apiUrl}/post/delete/${id}`);
  }
}
