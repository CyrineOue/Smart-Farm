import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/shared/admin/admin.service';

@Component({
  selector: 'app-agenttable',
  templateUrl: './agenttable.component.html',
  styleUrls: ['./agenttable.component.scss']
})
export class AgenttableComponent implements OnInit {

  listAdmins: Admin[];
  closeResult! : string;
  form : boolean = false;
  constructor(private adminservice : AdminService, private modalService: NgbModal) {}

  ngOnInit() : void {
    this.getAllAdmins();

    //this.adminservice.getAdmins().subscribe(res => {console.log(res); this.listAdmins= res});
    //this.adminservice.getAdmins().subscribe((data:Admin[]) => this.listAdmins = data);
  }

  getAllAdmins(){
    this.adminservice.getAdmins().subscribe(res => {console.log(res); this.listAdmins= res});
  }

  deleteAdmin(id:number){
    this.adminservice.deleteAdminById(id).subscribe(() => this.getAllAdmins);
  }

  editAdmin(admin: Admin){
    this.adminservice.editAdmin(admin).subscribe();
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

    closeForm(){

    }
    cancel(){
      this.form = false;
    }


}
