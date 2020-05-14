import { Component, OnInit, ViewChild } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.module';
import { BudgetItemListComponent } from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  netBalance : number = null;
  itemHome : BudgetItem = new BudgetItem(null,"");
  indexToBeUpdated : number;
  oldItem : BudgetItem = new BudgetItem(null,"");
  newItem : BudgetItem = new BudgetItem(null,""); 
  constructor() { }

  itemList : BudgetItem[] = new Array<BudgetItem>();
  ngOnInit(): void {
  }
  
  addItem(item:BudgetItem){
    if(item.amount!=0){
    this.itemList.push(item);
    this.netBalance=this.netBalance+item.amount;
  }
  }

  deleteItem(item : BudgetItem){
    let index = this.itemList.indexOf(item);
    this.itemList.splice(index,1);
    this.netBalance=this.netBalance-item.amount;
  }

  editItem(item : BudgetItem){
    let button = document.getElementById('hidden-button');
    button.click();
    this.oldItem.amount=item.amount;
    this.oldItem.description=item.description;
    this.itemHome=item;
  }

  updateItem(item : BudgetItem){
    this.newItem = item;
    this.netBalance=this.netBalance+this.newItem.amount-this.oldItem.amount;
  }
}
