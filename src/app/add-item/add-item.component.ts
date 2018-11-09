import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  typeToAdd: string;

  constructor() { }

  ngOnInit() {
    this.typeToAdd = "book";
  }

  toggleView(type:string){
   this.typeToAdd = type;
  }

}
