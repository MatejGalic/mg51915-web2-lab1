import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  links = ['matches', 'scoreboard'];
  activeLink = this.links[0];

  constructor() {}

  ngOnInit(): void {}
}
