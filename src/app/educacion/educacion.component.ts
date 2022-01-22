import { Component, OnInit } from '@angular/core';
import { transition, trigger, state, style, animate } from '@angular/animations';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
  animations: [

    trigger('fade', [

    state('void', style({ opacity: 0})),

    transition('void => *', [
      animate(500)
    ]),

    transition('* => void', [
      animate(500)
    ])

    ])

    /* trigger('fadeInOut', [
      
      state('void', style({

        opacity: 0,
        
      })),
      state('*', style({
        
        opacity: 1,
        
      })),
      transition('void => *', [
        animate('0.5s')
      ]),
      transition('* => void', [
        animate('0.5s')
      ]),
    ]), */

  ]
})


export class EducacionComponent implements OnInit {

  visible = true;

  toggle(){
    this.visible = !this.visible;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
