import {
  ChangeDetectorRef, Component, EventEmitter, Input, NgZone, OnInit, Output,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MyNewComponentComponent implements OnInit {
  inputString: string;

  d = {
    name: 'angular'
  };

  @Input() data: Array<any> = [];
  @Input() temp: string = '';

  @Output() emitSomething = new EventEmitter();

  constructor() {
    this.inputString = '';
  }


  ngOnInit() {
    console.log('Component has initialized');

    setTimeout(() => {
      this.emitSomething.emit('FROM CHILD');
    }, 5000)
  }


}
