import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.module';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() itemPopup : BudgetItem;
  item : BudgetItem = new BudgetItem(null,"");
  @Output() updatedItem : EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    let button = document.getElementById('close-button');
    button.click();
    this.itemPopup.amount=form.controls["amount"].value;
    this.itemPopup.description=form.controls["description"].value;
    this.updatedItem.emit(this.itemPopup);
  }

}
