import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AddForm} from './add-form/add-form.component'
import {AppList} from './app-list/app-list.component'
import {MyComponent} from './app.component';
import {ApiService} from "../Services/api.service";
import {Http, HttpModule} from "@angular/http";

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [MyComponent, AddForm, AppList],
    bootstrap: [MyComponent],
    providers: [ApiService]
})
export class AppModule {}