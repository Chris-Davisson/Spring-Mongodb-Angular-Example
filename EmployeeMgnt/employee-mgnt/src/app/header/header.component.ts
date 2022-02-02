import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showAboutAlert() {
    alert('Christopher Davisson 2071579\nc.davisson@tcs.com\nTata Consultancy Services\nAngular, Mongodb, Spring Boot Stack Example Application\n');
  }

}
