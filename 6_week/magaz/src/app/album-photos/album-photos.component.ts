import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AlbumsService} from "../services/albums.service";

export interface Photo{
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}


@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {

  loaded: boolean = false
  //@ts-ignore
  photos: Photo[]

  constructor(private route: ActivatedRoute,
              private service: AlbumsService,
              private router: Router) { }

  ngOnInit(): void {
    this.getPhotos()
  }


  getPhotos(){
    this.route.params.subscribe( (params: Params)=>{
        this.service.getAlbumPhotos(+params['id']).subscribe(photos =>{
          this.loaded = true;
          console.log(+params['id'])
          this.photos = photos
        })
      }
    )
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}
