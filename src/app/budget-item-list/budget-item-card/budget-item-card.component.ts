import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.module';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.css']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() isIncome : Boolean;
  @Input() amount : number;
  @Input() description : string;

  constructor() { }

  @Input() item : BudgetItem;
  @Output() xButtonClick : EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  ngOnInit(): void {
  }

  delete(){
    this.xButtonClick.emit(this.item);
  }


}
