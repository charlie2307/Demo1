import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManagerSidebarComponent } from '../manager-sidebar/manager-sidebar.component';

@Component({
  selector: 'app-manager',
  imports: [RouterOutlet,ManagerSidebarComponent],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css'
})
export class ManagerComponent {

}
