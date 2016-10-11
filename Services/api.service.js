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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var serverUrl = 'http://localhost:8082/api/';
var basicAuth = "Basic " + btoa('admin:district');
var loadUrl = "organisationUnits?paging=false&level=1";
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.getOptions = function () {
        var options = new http_1.RequestOptions();
        options.headers = new http_1.Headers();
        options.headers.append("Authorization", basicAuth);
        options.headers.append("Content-Type", 'application/json');
        options.method = 'GET';
        return options;
    };
    ApiService.prototype.handleResponse = function (res) {
        return res.json();
    };
    ApiService.prototype.fetchData = function () {
        return this.http.get(serverUrl + loadUrl, this.getOptions())
            .toPromise()
            .then(this.handleResponse)
            .catch(function (err) { return console.log(err); });
    };
    ApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map