import { Component } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgCircleProgressModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
