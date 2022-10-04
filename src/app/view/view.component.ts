import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  term=""
  result:any;
  clicke=()=>
{
var x=+this.term;
var sign=1;
if(x%2==0)
{
  sign=-1;
}
this.result=x*x+sign
}
  

}
