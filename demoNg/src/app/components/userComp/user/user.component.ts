import { Component } from '@angular/core';
import { InventoryComponent } from '../../bookComp/inventory/inventory.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserSidebarComponent } from '../user-sidebar/user-sidebar.component';
import { SidebarComponent } from '../../../sidebar/sidebar.component';
import { HeaderComponent } from "../../../header/header.component";
import { AdminComponent } from '../../adminComp/admin/admin.component';
import { ManagerComponent } from '../../managerComp/manager/manager.component';


@Component({
  selector: 'app-user',
  imports: [RouterOutlet, RouterModule, UserSidebarComponent, HeaderComponent,InventoryComponent,AdminComponent,UserComponent,ManagerComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
