import { Component, OnInit,Input, } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hook',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle-hook.component.html',
  styleUrl: './lifecycle-hook.component.css'
})
export class LifecycleHookComponent implements OnInit{
      // @Input() value:string; 
      @Input() size="";

      constructor(){
          console.log("constructor",this.size)  
      }
      ngOnChanges():void{
        console.log("onChanges")
      }
      ngOnInit(): void {
        console.log("onInit")
      }
      ngAfterDoCheck(){
        console.log("DOCheck")
      }
      ngAfterContentInit():void{
        console.log("aftercontent init")
      }
      ngAfterContentChecked():void{
        console.log("after content checked")
      }
      ngAfterViewInit():void{
        console.log("after view init")
      }
      ngAfterViewChecked():void{
        console.log("after view checked")
      }
      ngOnDestroy():void{
        console.log("destroyed")
      }
}
