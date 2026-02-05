import { Component, OnInit } from '@angular/core';
import {BackServiceService} from '../service/back-service.service';



@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  videos: any[] = [];
  videoUrl?: any;
  indicieVideo = 0;

  constructor(private service: BackServiceService) { }

  ngOnInit(): void {
  this.service.mostrarVideos().subscribe(videos => {
    this.videos = videos;
    if (videos.length > 0) {
      this.videoUrl = videos[0];
    }
  });
  }

  proximoVideo(): void {
    if (this.indicieVideo < this.videos.length - 1) {
      this.indicieVideo++;
      this.videoUrl = this.videos[this.indicieVideo];
    }
  }
  voltarVideo(): void {
    if (this.indicieVideo > 0) {
      this.indicieVideo--;
      this.videoUrl = this.videos[this.indicieVideo];
    }
  }


}
