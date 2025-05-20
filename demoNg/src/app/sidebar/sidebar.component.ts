import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { InventoryComponent } from '../components/bookComp/inventory/inventory.component';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule,RouterOutlet],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
