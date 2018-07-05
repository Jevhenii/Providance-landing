import { Component, OnInit } from '@angular/core';
import { HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
declare const window: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public isActive = false;
  constructor() { }
  public imgUrl = '../../assets/images/logo.png';
  openNav() {
    document.getElementById('mySidenav').style.width = '300px';
  }
  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }
  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 30) {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
  }
}
