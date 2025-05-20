import { Component } from '@angular/core';
import { InventoryComponent } from '../components/bookComp/inventory/inventory.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [InventoryComponent,RouterModule,RouterOutlet , RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
