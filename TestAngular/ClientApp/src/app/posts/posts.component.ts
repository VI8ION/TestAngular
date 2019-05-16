import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  title = "List of posts";

  posts: any;

  constructor(private service: PostService) {

  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => this.posts = posts),
      ((error: AppError) => {
        if (error instanceof NotFoundError)
          alert('url not found');
        else {
          throw error;
        }
      });
  }

}
