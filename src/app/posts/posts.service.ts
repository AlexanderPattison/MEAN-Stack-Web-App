import {Post} from './post.model';
import {Subject} from 'rxjs';

export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts]; // Protect posts with another array instance
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPosts(title: string, content: string){
    const post: Post = {title: title, content: content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
