import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";


@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    CommonModule
  ]
})
export class LoginPage {

}
