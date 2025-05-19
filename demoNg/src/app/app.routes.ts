import { Routes } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
import { UserComponent } from '../../components/userComp/user/user.component';
import { ManagerComponent } from '../../components/managerComp/manager/manager.component';
import { InventoryComponent } from '../../components/bookComp/inventory/inventory.component';
import { AdminComponent } from '../../components/adminComp/admin/admin.component';

export const routes: Routes = [
    { path: " ",component:LoginComponent},
    { path: "user",component:UserComponent},
    { path: "manager",component:ManagerComponent},
    { path: "admin",component:AdminComponent},
    { path: "inventory",component:InventoryComponent},
    { path: "",component:LoginComponent},
];
