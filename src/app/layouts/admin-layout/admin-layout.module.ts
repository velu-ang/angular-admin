import { PackageComponent } from './../../package/package.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserComponent } from '../../user/user.component';
import { EventComponent } from '../../event/event.component';
import { BlogComponent } from '../../blog/blog.component';
import { FoodComponent } from '../../food/food.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { EnquiryComponent } from '../../enquiry/enquiry.component';
// import { LoginComponent } from '../../login/login.component';
import { NeweventComponent } from '../../event/newevent.component';
import { NewblogsComponent } from '../../blog/newblogs.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
} from '@angular/material';
import { SubscriptionComponent } from '../../subscription/subscription.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    EventComponent,
    BlogComponent,
    FoodComponent,
    MapsComponent,
    // LoginComponent,
    NotificationsComponent,
    UpgradeComponent,
    EnquiryComponent,
    NeweventComponent,
    NewblogsComponent,
    SubscriptionComponent,
    PackageComponent
  ]
})

export class AdminLayoutModule {}
