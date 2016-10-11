import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'add-form',
  templateUrl: 'src/add-form/add-form.component.html',
  host : {
    class: 'form'
  }
})
export class AddForm {

  private fullName : string;
  private shortName : string;

  fullNameChange(newVal) {
    this.fullName = newVal;
    console.log("Fullname changed", newVal);
  }

  shortNameChange(newVal) {
    this.shortName = newVal;
  }

  displayName(e) {
    e.preventDefault();
    console.log(this.fullName);
  }
}