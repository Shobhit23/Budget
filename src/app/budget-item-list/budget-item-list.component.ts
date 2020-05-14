import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.module';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.css']
})
export class BudgetItemListComponent implements OnInit {

  @Input() itemList : BudgetItem[];
  @Output() localItem : EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() editItem : EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  constructor() { }

  ngOnInit(): void {
  }

  delete(item : BudgetItem){
    this.localItem.emit(item);
  }

  editItemMethod(item : BudgetItem){
    this.editItem.emit(item);
  }


}
