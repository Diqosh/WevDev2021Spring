import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Album} from "../albums/albums.component";
import {AlbumsService} from "../services/albums.service";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  //@ts-ignore
  album: Album
  loaded: boolean = false

  constructor(
    private route: ActivatedRoute,
    private service: AlbumsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAlbum()
  }

  getAlbum(){
    this.route.params.subscribe( (params: Params)=>{

        this.service.getAlbum(+params['id']).subscribe(album =>{
          this.loaded = true;
          this.album = album
        })
      }
    )
  }

  updateAlbum(){
    this.loaded = false;
    this.service.updateAlbum(this.album).subscribe((album)=>{
      console.log(album)
      this.loaded = true
    })
  }


  goBack() {
    this.router.navigate(['/albums']);
  }


  goPhotos() {
    this.route.params.subscribe( (params: Params)=>{
        this.router.navigate(['/albums', +params['id'], 'photos']);
      }
    )
  }
}
