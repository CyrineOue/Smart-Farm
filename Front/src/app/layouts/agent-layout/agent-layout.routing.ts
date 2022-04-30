import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { ClienttableComponent } from "src/app/pages/clienttable/clienttable.component";
import { ProductsComponent } from "src/app/pages/products/products.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AgentLayoutRoutes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  { path: "dashboard", component: DashboardComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "clienttable", component: ClienttableComponent },
  { path: "products", component: ProductsComponent },
  // { path: "rtl", component: RtlComponent }
];