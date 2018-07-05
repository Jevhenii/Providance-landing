import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  imgUrl = '../../assets/images/header_iphone.png';
  constructor() { }
  @ViewChild('videoPlayer') public player;

  stopVideoPlayer() {
      this.player.nativeElement.src = this.player.nativeElement.src;
  }
  ngOnInit() {
  }

}
