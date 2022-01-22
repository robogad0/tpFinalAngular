import { Component, OnInit } from '@angular/core';
import { transition, trigger, state, style, animate } from '@angular/animations';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
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

export class HabilidadesComponent implements OnInit {

  visible = true;

  toggle(){
    this.visible = !this.visible;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
