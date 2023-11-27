import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {

  constructor(public modal: ModalService){
    console.log(this.modal.visible);
    
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
