import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserComponent } from '../../user/user.component';
import { EventComponent } from '../../event/event.component';
import { BlogComponent } from '../../blog/blog.component';
import { FoodComponent } from '../../food/food.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { EnquiryComponent } from '../../enquiry/enquiry.component';
import { NeweventComponent } from '../../event/newevent.component';
import { NewblogsComponent } from '../../blog/newblogs.component';
// import { LoginComponent } from '../../login/login.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: BlogsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard', component: DashboardComponent },
    { path: 'users', component: UserComponent },
    {
        path: 'events',
        children: [{
            path: "",
            component: EventComponent,
        },
        {
            path: "new",
            component: NeweventComponent
        }]
    },
    { path: 'blogs',
    children: [{
        path: "",
        component: BlogComponent 
    },{
        path: "new",
        component: NewblogsComponent
    }]},
    { path: 'food', component: FoodComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent },
    { path: 'enquiry', component: EnquiryComponent },
    { path: 'newevent', component: NeweventComponent },
    // { path: 'login',        component: LoginComponent },
];
