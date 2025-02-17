import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {

  @Input() item:string|undefined

  @Output() onCancel = new EventEmitter()

  constructor() { 
    console.log(this.item);
    
  }

  ngOnInit(): void {
  }

  cancel(){
    this.onCancel.emit()
  }

}
