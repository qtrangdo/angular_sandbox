import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost(title: string, body: string): void {
    if(!title || !body) {
      alert('Missing field');
    } else {
      this.postService.savePost(title, body).subscribe(post => {
        console.log(post)
      })
    }
  }
}
