import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { LatestPostAlertComponent } from '../latest-post-alert/latest-post-alert.component';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { CreatePostFormComponent } from '../create-post-form/create-post-form.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [NzListModule, NzButtonModule, LatestPostAlertComponent,NzSkeletonModule,NzPaginationModule,CreatePostFormComponent, NzGridModule,NzCardModule],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  visiblePosts: Post[] = [];
  latestPost?: Post
  pageIndex: number = 1;
  pageSize: number = 20; 

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
      this.latestPost = posts[0]
      this.updateVisiblePosts();
    });
  }
  updateVisiblePosts() {
    const start = (this.pageIndex - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.visiblePosts = this.posts.slice(start, end);
  }
  handleNewPost(newPost: Post) {
    this.posts.unshift(newPost);
    this.latestPost = newPost
    this.updateVisiblePosts();
  }
  onPageChange(index: number) {
    this.pageIndex = index;
    this.updateVisiblePosts();
  }
}
