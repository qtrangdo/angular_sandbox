import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  };
  isEdit: boolean = false;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }

  onNewPost(post: Post): void {
    this.posts.unshift(post)
  }

  onUpdatedPost(post: Post): void {
    this.posts.forEach((current, i) => {
      if (post.id === current.id) {
        this.posts.splice(i, 1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentPost = {
          id: 0,
          title: '',
          body: ''
        }
      }
    })
  }

  editPost(post: Post): void {
    this.currentPost = post;
    this.isEdit = true;
  }

  removePost(post: Post): void {
    if (confirm("Are you sure?")) {
      this.postService.removePost(post).subscribe(() => {
        this.posts.forEach((current, i) => {
          if (post.id === current.id) {
            this.posts.splice(i, 1);
          }
        })
      })
    }
  }
}
