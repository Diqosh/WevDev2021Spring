import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Params} from "@angular/router";
import {Post, PostsService} from "../posts.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{
  //@ts-ignore
  post: Post;

  constructor(

    private route: ActivatedRoute,
    private postsService: PostsService) {


  }
  ngOnInit(): void{
    this.route.params.subscribe( (params: Params)=>{
      //@ts-ignore
        this.post = this.postsService.getById(+params['id'])
      }
    )

  }

}
