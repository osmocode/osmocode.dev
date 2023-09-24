import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss'],
})
export class AppPage {
  title = 'web';
}
