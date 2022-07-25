import { SideNavItem } from '@angular-anim/shared/presentational';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-anim-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  sideNavItems: SideNavItem[] = [];

  ngOnInit() {
    this.sideNavItems = [
      { title: 'Account Overview', subtitle: '', link: '/' },
      { title: 'Transfers', subtitle: '', link: '/transfers' },
      { title: 'About Challenge', subtitle: '', link: '/about' },
    ]
  }
}
