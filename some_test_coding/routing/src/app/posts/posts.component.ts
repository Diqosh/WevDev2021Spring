import {Component, OnInit} from '@angular/core'
import {PostsService} from '../posts.service'
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{

  showIDs = false

  constructor(
    public postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router) {

  }
  ngOnInit() {
    this.route.queryParamMap.subscribe((params: Params)=>{

      this.showIDs = !!params['params']['showIDs'];
    })
    this.route.fragment.subscribe(fr =>{
      console.log(fr)
    })
  }

  showIDsProgram() {
    this.router.navigate(['/posts'], {
      queryParams:{
        showIDs: true
      }
    })
  }
}
