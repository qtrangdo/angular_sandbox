import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() isEdit: boolean;

  constructor (private postService: PostService) { }

  ngOnInit() {
  }

  addPost(title: string, body: string): void {
    if (!title || !body) {
      alert('Missing field');
    } else {
      this.postService.savePost(title, body).subscribe(post => {
        this.newPost.emit(post);
        this.currentPost.title = '';
        this.currentPost.body = '';
      })
    }
  }

  updatePost(): void {
    this.postService.updatePost(this.currentPost).subscribe(post => {
      this.isEdit = false;
      this.updatedPost.emit(post);
    });
  }
}
