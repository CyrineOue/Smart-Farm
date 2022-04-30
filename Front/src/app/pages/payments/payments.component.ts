import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Payment } from 'src/app/model/Payment';
import { PaymentService } from 'src/app/shared/payment/payment.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  //styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
listPayments : Payment[];
form : boolean = false;
  closeResult! : string;
  payment!:Payment;
  constructor(private paymentService : PaymentService, private modalService :NgbModal) { }

  ngOnInit(): void {
    this.getPayments();
  }
getPayments(){
  this.paymentService.getPayments().subscribe(res => {console.log(res); this.listPayments= res});
}
}
