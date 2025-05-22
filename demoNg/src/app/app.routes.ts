import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/userComp/user/user.component';
import { ManagerComponent } from './components/managerComp/manager/manager.component';
import { AdminComponent } from './components/adminComp/admin/admin.component';
import { InventoryComponent } from './components/bookComp/inventory/inventory.component';
import { PendingOrdersComponent } from './components/user/pending-orders/pending-orders.component';


export const routes: Routes = [
    { path: " ",component:LoginComponent},
    { path: "user",component:UserComponent},
    { path: "manager",component:ManagerComponent},
    { path: "admin",component:AdminComponent},
    { path: "inventory",component:InventoryComponent},
    { path: "pendingOrders", component:PendingOrdersComponent}
];
