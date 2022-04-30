import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout/admin-layout.routing";

// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ClientLayoutRoutes } from "./client-layout/client-layout.routing";
import { DashboardComponent } from "../pages/dashboard/dashboard.component";
import { UserComponent } from "../pages/user/user.component";
import { TablesComponent } from "../pages/tables/tables.component";
import { IconsComponent } from "../pages/icons/icons.component";
import { TypographyComponent } from "../pages/typography/typography.component";
import { NotificationsComponent } from "../pages/notifications/notifications.component";
import { MapComponent } from "../pages/map/map.component";
import { ExpertLayoutRoutes } from "./expert-layout/expert-layout.routing";
import { AgentLayoutComponent } from './agent-layout/agent-layout.component';
import { AgentLayoutRoutes } from "./agent-layout/agent-layout.routing";
import { AgenttableComponent } from "../pages/agenttable/agenttable.component";
import { ClienttableComponent } from "../pages/clienttable/clienttable.component";
import { ContractsComponent } from "../pages/contracts/contracts.component";
import { ExperttableComponent } from "../pages/experttable/experttable.component";
import { PaymentsComponent } from "../pages/payments/payments.component";
import { ProductsComponent } from "../pages/products/products.component";
import { SinistersComponent } from "../pages/sinisters/sinisters.component";
import { MatSortModule } from "@angular/material/sort";
import { MatFormField, MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorIntl, MatPaginatorModule } from "@angular/material/paginator";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";


@NgModule({
  imports: [
    CommonModule,
    //RouterModule.forChild(ClientLayoutRoutes),
    RouterModule.forChild(AdminLayoutRoutes),
    RouterModule.forChild(ClientLayoutRoutes),
    RouterModule.forChild(AgentLayoutRoutes),
    RouterModule.forChild(ExpertLayoutRoutes),
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    AgenttableComponent,
    ClienttableComponent,
    ContractsComponent,
    ExperttableComponent,
    PaymentsComponent,
    ProductsComponent,
    SinistersComponent,
    UserComponent
    // RtlComponent
  ]
})
export class UserLayoutModule {}
//export class ClientLayoutModule {} 