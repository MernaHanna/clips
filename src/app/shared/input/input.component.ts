import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit{
  @Input() control: FormControl = new FormControl();
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() format: string = '';

  constructor(){
    //
  }

  ngOnInit(): void {
    //
  }

}
