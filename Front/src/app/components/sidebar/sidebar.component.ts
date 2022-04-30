import { Component, OnInit } from "@angular/core";

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
  }/*,
  {
    path: "icons",
    title: "Icons",
    rtlTitle: "الرموز",
    icon: "icon-atom",
    class: ""
  }*/,
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
    path: "tables",
    title: "Table Admin List",
    rtlTitle: "قائمة الجدول",
    icon: "icon-shape-star",
    class: ""
  }/*,
  {
    path: "typography",
    title: "Typography",
    rtlTitle: "طباعة",
    icon: "icon-align-center",
    class: ""
  }*/,
  {
    path: "agenttable",
    title: "Table Agent List",
    rtlTitle: "قائمة الجدول",
    icon: "icon-bullet-list-67",
    class: ""
  },
  {
    path: "experttable",
    title: "Table Expert List",
    rtlTitle: "قائمة الجدول",
    icon: "icon-chart-bar-32",
    class: ""
  },
  {
    path: "clienttable",
    title: "Table Client List",
    rtlTitle: "قائمة الجدول",
    icon: "icon-single-02",
    class: ""
  }/*,
  {
    path: "rtl",
    title: "RTL Support",
    rtlTitle: "ار تي ال",
    icon: "icon-world",
    class: ""
  }*/
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
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
