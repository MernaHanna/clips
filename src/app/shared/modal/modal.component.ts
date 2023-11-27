import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  // providers: [ModalService]
})
export class ModalComponent implements OnInit {

  constructor(public modal: ModalService){
    //
  }
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  closeModal(){
    this.modal.toggleModal();
  }
}
