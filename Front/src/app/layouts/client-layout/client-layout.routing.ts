import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { ContractsComponent } from "src/app/pages/contracts/contracts.component";
import { PaymentsComponent } from "src/app/pages/payments/payments.component";
import { SinistersComponent } from "src/app/pages/sinisters/sinisters.component";
import { RtlComponent } from "src/app/pages/rtl/rtl.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const ClientLayoutRoutes: Routes = [
  {
    path: "",
    redirectTo: "user",
    pathMatch: "full"
  },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "contracts", component: ContractsComponent },
  { path: "payments", component: PaymentsComponent },
  { path: "sinisters", component: SinistersComponent },
  { path: "rtl", component: RtlComponent },
  // { path: "rtl", component: RtlComponent }
];