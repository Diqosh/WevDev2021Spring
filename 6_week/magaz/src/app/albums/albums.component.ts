import { Component, OnInit } from '@angular/core';
import {AlbumsService} from "../services/albums.service";

export interface Album{
  userId: number,
  id: number,
  title: string
}

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  //@ts-ignore
  loaded: boolean;
  //@ts-ignore
  albums: Album[]
  //@ts-ignore
  newPost: string
  constructor(public service: AlbumsService) {

  }

  ngOnInit(): void {
    this.getAlbums()
  }

  getAlbums(){
    this.loaded = false
    this.service.getAlbums().subscribe(albums =>{
      this.albums = albums
      this.loaded = true
    })
  }

  deleteAlbum(id: number){

    this.albums = this.albums.filter(album => album.id != id )

    this.service.deleteAlbum(id).subscribe(() =>{
      console.log('deleted', id)
    })
  }
  addPost() {
    this.loaded = false
    const album = {
      title: this.newPost
    }
    this.service.addAlbum(album as Album).subscribe((album)=>{
      console.log('added', album)
      this.albums.push(album)
      this.newPost = ''
      this.loaded = true
    })
  }

}
