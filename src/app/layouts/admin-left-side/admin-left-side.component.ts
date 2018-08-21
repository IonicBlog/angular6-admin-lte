import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-left-side',
  templateUrl: './admin-left-side.component.html',
  styleUrls: ['./admin-left-side.component.scss']
})
export class AdminLeftSideComponent implements OnInit {

  menus: Array<any> = [];

  constructor(public service: AppService, public router: Router) { }

  ngOnInit() {
    this.getMenus();
  }

  getMenus() {
    this.service.httpGet('/assets/data/menus.json', {}, rs => {
      this.menus = rs;
      // if (this.router.url == "/") {
      //   this.addTab(this.menus[0], this.menus[0].children[0]);
      // } else {
      //   let m = this.getMenuItem(this.router.url);
      //   if (m.childitem == null) {
      //     this.addTab(this.menus[0], this.menus[0].children[0]);
      //   } else {
      //     this.addTab(m.menuitem, m.childitem);
      //   }
      // }
    }, err => {
    })
  }

}
