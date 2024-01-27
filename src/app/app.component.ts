import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LifecycleHookComponent } from './lifecycle-hook/lifecycle-hook.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,LifecycleHookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'componentLifeCycle';
  showLifeCycle:boolean=false;
  onShowOrHide():void{
    this.showLifeCycle=!this.showLifeCycle;
  }
}
