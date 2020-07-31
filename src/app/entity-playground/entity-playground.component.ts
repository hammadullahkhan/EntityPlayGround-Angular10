import { Component, OnInit } from '@angular/core';
import { FieldModified } from "./models";

@Component({
  selector: 'app-entity-playground',
  templateUrl: './entity-playground.component.html',
  styleUrls: ['./entity-playground.component.scss']
})
export class EntityPlaygroundComponent implements OnInit {
 
  jsonOutput: string;
  constructor() { }

  ngOnInit() {   
  }

  showJsonOutput(jsonOutput: FieldModified): void {
    // console.log(jsonOutput)
    this.jsonOutput = JSON.stringify(jsonOutput, null, 2);
    // console.log(this.jsonOutput)
  }

}
