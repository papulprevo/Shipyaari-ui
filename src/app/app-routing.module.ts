import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { NdrComponent } from './ndr/ndr.component';
import { TrackingComponent } from './tracking/tracking.component';
import { RtoComponent } from './rto/rto.component';
import { TemplateComponent } from './template/template.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { ModuleschannelComponent } from './moduleschannel/moduleschannel.component';
import { AddShipmentComponent } from './order/add-shipment/add-shipment.component';
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
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [

{path: '', component: ClientDashboardComponent},
{path: 'clientdashboard', component: ClientDashboardComponent},
{path: 'ndr', component: NdrComponent},
{path: 'tracking', component: TrackingComponent},
{path: 'rto', component: RtoComponent},
{path: 'template', component: TemplateComponent},
{path: 'addressbook', component: AddressBookComponent},
{path: 'moduleschannel', component: ModuleschannelComponent},
{path: 'addShipment', component:AddShipmentComponent},
{path: 'customersupport', component: CustomerSupportComponent},
{path: 'feedback', component: FeedbackComponent},
{path: 'cod', component: CodComponent},
{path: 'allincvoices', component: AllinvoicesComponent},
{path: 'reports', component: ReportsComponent},
{path: 'labelsetting', component: LabelSettingComponent},
{path: 'changepass', component: ChangePassComponent},
{path: 'priority', component: PriorityComponent},
{path: 'b2bshipment', component: B2bshipmentComponent},
{path: 'addbulk', component: AddbulkComponent},
{path: 'allorder', component: AllorderComponent},
{path: 'channelorder', component: ChannelOrderComponent},
{path: 'signup', component:SignupComponent},
{path: 'login', component:LoginComponent},
{path: 'forgetpass', component:ForgotPassComponent},
{path: 'profile', component:ProfileComponent},
{path: '**', component: ClientDashboardComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
