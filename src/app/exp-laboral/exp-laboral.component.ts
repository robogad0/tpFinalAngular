import { Component, OnInit } from '@angular/core';
import { transition, trigger, state, style, animate } from '@angular/animations';

@Component({
  selector: 'app-exp-laboral',
  templateUrl: './exp-laboral.component.html',
  styleUrls: ['./exp-laboral.component.css'],
  animations:[

    trigger('fade', [

      state('void', style({ opacity: 0})),
  
      transition('void => *', [
        animate(500)
      ]),
  
      transition('* => void', [
        animate(500)
      ])
  
      ])
    ]
  })


export class ExpLaboralComponent implements OnInit {

  visible = true;

  toggle(){
    this.visible = !this.visible;
  }

  visible2 = true;

  toggle2(){
    this.visible2 = !this.visible2;
  }

  



  constructor() { }

  ngOnInit(): void {
  }

}
