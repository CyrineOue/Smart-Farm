import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { Admin } from "src/app/model/admin";
import { AdminService } from "src/app/shared/admin/admin.service";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatTable } from "@angular/material/table";

@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html",
  styleUrls: ['tables.component.scss']
})
export class TablesComponent implements OnInit, AfterViewInit{
  listAdmins: Admin[];
  dataSource: MatTableDataSource<Admin>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private adminservice: AdminService) { this.dataSource = new MatTableDataSource(this.listAdmins);}

  ngOnInit(): void {
    this.adminservice.getAdmins().subscribe(res => { console.log(res); this.listAdmins = res });
    //this.adminservice.getAdmins().subscribe((data:Admin[]) => this.listAdmins = data);
    
  }

  //displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  //dataSource: MatTableDataSource<UserData>;
  

  /*constructor() {
    // Create 100 users
    const users = Array.from({length: 20}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }*/

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
/*function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };
}*/
