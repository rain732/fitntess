import { Component, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import {
  IPayPalConfig,
  ICreateOrderRequest,
  NgxPaypalComponent
} from 'ngx-paypal';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {
  @Input()
  value!: number;
  @Input()
  currency!: string;
  @Input()
  coachName!: string;

  @ViewChild(NgxPaypalComponent, { static: false }) paypalComponent?: NgxPaypalComponent;

  public payPalConfig?: IPayPalConfig;
  public showButton: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.initConfig();
      this.showButton = true;
    }, 0);
  }
  constructor(private renderer: Renderer2) { }
  ngOnDestroy(): void {
    let paypalButton = document.querySelector('#buttons-container');
    if (paypalButton) {
        this.renderer.removeChild(document.body, paypalButton);
    }
}
  private initConfig(): void {
    this.payPalConfig = {
      currency: this.currency,
      clientId: 'AQi-RdOi_UwLCqfayKl_OJWPMhxj6QcB-bUfkNPIYPrronbibFCPcigKrryQ_wpP1r6MtHRYAR_lj2LW',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: this.currency,
            value: this.value.toString(),
            breakdown: {
              item_total: {
                currency_code: this.currency,
                value: this.value.toString(),
              }
            }
          }
        }]
      },
      onApprove: (data, actions) => {
        console.log('Payment was successful');
        if(localStorage.getItem("isLoggedIn") ==  'true'){
          if(this.coachName.startsWith("Body")){
            localStorage.setItem("className",this.coachName.toString());
          }
          else localStorage.setItem("coachName",this.coachName.toString());
        }
        
        // Perform actions for successful payment (e.g., update database, notify user)
      },
      onError: (err) => {
        console.log('Payment error:', err);
        // Handle payment error (e.g., display error message to the user)
      }
      // other configuration here
    };
  }
}
