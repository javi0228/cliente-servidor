import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public posts = Array<Post>();
  public errors = false;
  public loading = false;

  constructor(private postService: PostService) {

  }
  
  ngOnInit(): void {
    // Get all posts
    this.loading = true;
    this.postService.getPosts().subscribe(res => {
      if (res.success)
        this.posts = res.data.map((post: Post) => {
          return new Post(post._id, post.user_id, post.title, post.text);
        })
      else {

        this.errors = res.message;
      }
      this.loading = false;
    });

  }
}
