import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from "ng-apexcharts";
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AppComponent } from './app.component';



import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { Chart1Component } from './client-dashboard/chart1/chart1.component';
import { Chart2Component } from './client-dashboard/chart2/chart2.component';
import { Chart3Component } from './client-dashboard/chart3/chart3.component';
import { NdrComponent } from './ndr/ndr.component';
import { TrackingComponent } from './tracking/tracking.component';
import { RtoComponent } from './rto/rto.component';
import { TemplateComponent } from './template/template.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { ModuleschannelComponent } from './moduleschannel/moduleschannel.component';
import { AddShipmentComponent } from './order/add-shipment/add-shipment.component';
import { TrackChart1Component } from './tracking/track-chart1/track-chart1.component';
import { TrackChart2Component } from './tracking/track-chart2/track-chart2.component';
import { TrackChart3Component } from './tracking/track-chart3/track-chart3.component';
import { TrackChart4Component } from './tracking/track-chart4/track-chart4.component';
import { RtoChart1Component } from './rto/rto-chart1/rto-chart1.component';
import { CustomerSupportComponent } from './help/customer-support/customer-support.component';
import { FeedbackComponent } from './help/feedback/feedback.component';
import { CodComponent } from './billing/cod/cod.component';
import { AllinvoicesComponent } from './billing/allinvoices/allinvoices.component';
import { ReportsComponent } from './billing/reports/reports.component';
import { LabelSettingComponent } from './setting/label-setting/label-setting.component';
import { ChangePassComponent } from './setting/change-pass/change-pass.component';
import { PriorityComponent } from './setting/priority/priority.component';
import { B2bshipmentComponent } from './order/b2bshipment/b2bshipment.component';
import { AddbulkComponent } from './order/addbulk/addbulk.component';
import { AllorderComponent } from './order/allorder/allorder.component';
import { ChannelOrderComponent } from './order/channel-order/channel-order.component';
import { StarComponent } from './shared/star/star.component';
import { ShippingChargesComponent } from './billing/allinvoices/shipping-charges/shipping-charges.component';
import { WeightReconciliationComponent } from './billing/allinvoices/weight-reconciliation/weight-reconciliation.component';
import { RechargeComponent } from './billing/allinvoices/recharge/recharge.component';
import { InvoiceComponent } from './billing/allinvoices/invoice/invoice.component';
import { CreditnoteComponent } from './billing/allinvoices/creditnote/creditnote.component';
import { TempAddPickAddressComponent } from './template/temp-add-pick-address/temp-add-pick-address.component';
import { TempEditPickAddressComponent } from './template/temp-edit-pick-address/temp-edit-pick-address.component';
import { TempViewPickAddressComponent } from './template/temp-view-pick-address/temp-view-pick-address.component';
import { TempBulkUploadPickAddressComponent } from './template/temp-bulk-upload-pick-address/temp-bulk-upload-pick-address.component';
import { AddPickupAddComponent } from './address-book/add-pickup-add/add-pickup-add.component';
import { EditPickupAddComponent } from './address-book/edit-pickup-add/edit-pickup-add.component';
import { ViewPickupAddComponent } from './address-book/view-pickup-add/view-pickup-add.component';
import { ViewDelAddComponent } from './address-book/view-del-add/view-del-add.component';
import { EditDelAddComponent } from './address-book/edit-del-add/edit-del-add.component';
import { AddDelAddComponent } from './address-book/add-del-add/add-del-add.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';




@NgModule({
  declarations: [
    AppComponent,
    ClientDashboardComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    Chart1Component,
    Chart2Component,
    Chart3Component,
    NdrComponent,
    TrackingComponent,
    RtoComponent,
    TemplateComponent,
    AddressBookComponent,
    ModuleschannelComponent,
    AddShipmentComponent,
    TrackChart1Component,
    TrackChart2Component,
    TrackChart3Component,
    TrackChart4Component,
    RtoChart1Component,
    CustomerSupportComponent,
    FeedbackComponent,
    CodComponent,
    AllinvoicesComponent,
    ReportsComponent,
    LabelSettingComponent,
    ChangePassComponent,
    PriorityComponent,
    B2bshipmentComponent,
    AddbulkComponent,
    AllorderComponent,
    ChannelOrderComponent,
    StarComponent,
    ShippingChargesComponent,
    WeightReconciliationComponent,
    RechargeComponent,
    InvoiceComponent,
    CreditnoteComponent,
    TempAddPickAddressComponent,
    TempEditPickAddressComponent,
    TempViewPickAddressComponent,
    TempBulkUploadPickAddressComponent,
    AddPickupAddComponent,
    EditPickupAddComponent,
    ViewPickupAddComponent,
    ViewDelAddComponent,
    EditDelAddComponent,
    AddDelAddComponent,
    SignupComponent,
    LoginComponent,
    ForgotPassComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    NgApexchartsModule,
    AccordionModule.forRoot(),
    CommonModule,
    CollapseModule.forRoot(),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
