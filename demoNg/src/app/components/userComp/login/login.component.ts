import { Component } from '@angular/core';
import { HeaderComponent } from '../../../header/header.component';
import { RegisterUserComponent } from '../register-user/register-user.component';
import { RegisterManagerComponent } from '../../managerComp/register-manager/register-manager.component';

@Component({
  selector: 'app-login',
  imports: [HeaderComponent,RegisterUserComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
}
