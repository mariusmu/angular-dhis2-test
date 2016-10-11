"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var api_service_1 = require("../../Services/api.service");
var AppList = (function () {
    function AppList(apiService) {
        this.apiService = apiService;
    }
    AppList.prototype.ngOnInit = function () {
        var _this = this;
        //noinspection TypeScriptUnresolvedVariable
        Promise
            .resolve(this.apiService.fetchData())
            .then(function (res) { return _this.list = res.organisationUnits; })
            .catch(function (err) { return console.log(err); });
    };
    AppList = __decorate([
        core_1.Component({
            selector: 'app-list',
            templateUrl: 'src/app-list/app-list.component.html',
            host: {
                class: 'list'
            }
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], AppList);
    return AppList;
}());
exports.AppList = AppList;
//# sourceMappingURL=app-list.component.js.map