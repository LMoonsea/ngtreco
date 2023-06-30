import { environment } from './../../environments/environment';
import { Component } from '@angular/core';
import { environment as env } from 'src/environments/environment';
@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {
public env = environment;







}
