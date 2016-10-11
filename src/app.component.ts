import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ApiService} from "../Services/api.service";

@Component({
  selector: 'my-app',
  styleUrls: ['css/style.css'],
    template : `<div class="app">
            <app-list></app-list>
            <add-form></add-form>
        
    </div>
    `
})
export class MyComponent {


}