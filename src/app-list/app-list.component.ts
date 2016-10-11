import {Component, OnInit} from '@angular/core';
import {ApiService, IOrganizationUnit} from "../../Services/api.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: 'src/app-list/app-list.component.html',
  host : {
    class: 'list'
  }
})
export class AppList implements OnInit{
  constructor(private apiService : ApiService) {}
  list : IOrganizationUnit[];
  ngOnInit(): void {
    //noinspection TypeScriptUnresolvedVariable
    Promise
        .resolve(this.apiService.fetchData())
        .then(res => this.list = res.organisationUnits)
        .catch(err => console.log(err));
  }

}