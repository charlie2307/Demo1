import { Component } from '@angular/core';
import { InventoryComponent } from '../components/bookComp/inventory/inventory.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartItems: any[] = [];

  getCartItems() {
    return this.cartItems;
  }
}
