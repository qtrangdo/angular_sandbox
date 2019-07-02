import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  post: Post;
  @Output() newPost: EventEmitter<Post> = new EventEmitter();

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost(title: string, body: string): void {
    if(!title || !body) {
      alert('Missing field');
    } else {
      this.postService.savePost(title, body).subscribe(post => {
        this.newPost.emit(post);
      })
    }
  }
}
