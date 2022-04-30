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
    path: "dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },
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
    path: "clienttable",
    title: "Table Client List",
    rtlTitle: "قائمة الجدول",
    icon: "icon-satisfied",
    class: ""
  },
  {
    path: "products",
    title: "Products",
    rtlTitle: "قائمة الجدول",
    icon: "icon-delivery-fast",
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
  selector: 'app-sidebaragent',
  templateUrl: './sidebaragent.component.html',
  styleUrls: ['./sidebaragent.component.scss']
})
export class SidebaragentComponent implements OnInit {

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
