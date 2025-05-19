import { Component } from '@angular/core';
import { InventoryComponent } from '../../bookComp/inventory/inventory.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserSidebarComponent } from '../user-sidebar/user-sidebar.component';


@Component({
  selector: 'app-user',
  imports: [InventoryComponent,RouterOutlet,RouterModule,UserSidebarComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
