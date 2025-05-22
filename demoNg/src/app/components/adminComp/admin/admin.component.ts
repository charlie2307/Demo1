import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../../sidebar/sidebar.component';
import { AdminSidebarComponent } from "../admin-sidebar/admin-sidebar.component";


@Component({
  selector: 'app-admin',
  imports: [RouterOutlet, RouterModule, AdminSidebarComponent,AdminSidebarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
