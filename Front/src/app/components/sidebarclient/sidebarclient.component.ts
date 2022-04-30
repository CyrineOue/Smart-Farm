import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "maps",
    title: "Maps",
    rtlTitle: "خرائط",
    icon: "icon-pin",
    class: "" },
  {
    path: "notifications",
    title: "Notifications",
    rtlTitle: "إخطارات",
    icon: "icon-bell-55",
    class: ""
  },

  {
    path: "user",
    title: "User Profile",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "contracts",
    title: "Contracts",
    rtlTitle: "طباعة",
    icon: "icon-badge",
    class: ""
  },
  {
    path: "payments",
    title: "Payments",
    rtlTitle: "طباعة",
    icon: "icon-money-coins",
    class: ""
  },
  {
    path: "sinisters",
    title: "Sinisters",
    rtlTitle: "طباعة",
    icon: "icon-user-run",
    class: ""
  },
  {
    path: "rtl",
    title: "RTL Support",
    rtlTitle: "ار تي ال",
    icon: "icon-world",
    class: ""
  }
];

@Component({
  selector: 'app-sidebarclient',
  templateUrl: './sidebarclient.component.html',
  styleUrls: ['./sidebarclient.component.scss']
})
export class SidebarclientComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }

}
