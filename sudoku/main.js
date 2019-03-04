(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");




var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\t<router-outlet></router-outlet>\r\n\t<div class=\"footer\">\r\n\t\t&copy; Developed by Tonmoy Nandy\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'sudoku';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./container/container.component */ "./src/app/container/container.component.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common.service */ "./src/app/common.service.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _container_container_component__WEBPACK_IMPORTED_MODULE_9__["ContainerComponent"]
            ],
            imports: [
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__["AngularFontAwesomeModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"]
            ],
            providers: [_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common.service.ts":
/*!***********************************!*\
  !*** ./src/app/common.service.ts ***!
  \***********************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var CommonService = /** @class */ (function () {
    function CommonService() {
        this.gameEndSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.gameEnd = this.gameEndSource.asObservable();
    }
    CommonService.prototype.setGameEnd = function (status) {
        this.gameEndSource.next(status);
    };
    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: SAMPLEDATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAMPLEDATA", function() { return SAMPLEDATA; });
var SAMPLEDATA = [
    {
        "1": [5, 2, 6, 1, 3, 4, 7, 8, 9],
        "2": [8, 7, 9, 2, 5, 6, 1, 3, 4],
        "3": [4, 3, 1, 7, 8, 9, 2, 5, 6],
        "4": [1, 4, 2, 5, 7, 3, 6, 9, 8],
        "5": [9, 5, 7, 8, 6, 2, 4, 1, 3],
        "6": [3, 6, 8, 9, 4, 1, 5, 2, 7],
        "7": [6, 1, 3, 4, 9, 5, 8, 7, 2],
        "8": [2, 8, 4, 3, 1, 7, 9, 6, 5],
        "9": [7, 9, 5, 6, 2, 8, 3, 4, 1]
    },
    {
        "1": [6, 7, 8, 1, 2, 3, 4, 5, 9],
        "2": [4, 9, 3, 5, 6, 7, 1, 2, 8],
        "3": [5, 1, 2, 4, 8, 9, 3, 6, 7],
        "4": [9, 2, 4, 6, 5, 8, 7, 3, 1],
        "5": [1, 3, 5, 7, 9, 2, 6, 8, 4],
        "6": [7, 6, 5, 3, 4, 8, 2, 9, 5],
        "7": [2, 4, 1, 8, 3, 5, 9, 7, 6],
        "8": [3, 5, 6, 9, 7, 4, 8, 1, 2],
        "9": [8, 3, 7, 2, 9, 6, 5, 4, 3]
    },
    {
        "1": [2, 9, 1, 3, 4, 5, 6, 7, 8],
        "2": [7, 8, 3, 1, 2, 6, 5, 9, 4],
        "3": [6, 5, 4, 7, 8, 9, 1, 2, 3],
        "4": [1, 2, 5, 4, 6, 7, 3, 8, 9],
        "5": [3, 4, 9, 8, 5, 2, 7, 1, 6],
        "6": [8, 6, 7, 9, 3, 1, 2, 4, 5],
        "7": [4, 1, 8, 5, 7, 3, 9, 6, 2],
        "8": [5, 7, 2, 6, 9, 4, 8, 3, 1],
        "9": [9, 3, 6, 2, 1, 8, 4, 5, 7]
    },
    {
        "1": [2, 6, 4, 1, 3, 5, 7, 8, 9],
        "2": [9, 8, 7, 2, 4, 6, 3, 5, 1],
        "3": [3, 1, 5, 7, 8, 9, 2, 4, 6],
        "4": [1, 2, 3, 9, 6, 4, 5, 7, 8],
        "5": [7, 5, 6, 3, 2, 8, 1, 9, 4],
        "6": [4, 9, 8, 5, 1, 7, 6, 2, 3],
        "7": [8, 3, 1, 4, 7, 2, 9, 6, 5],
        "8": [5, 4, 2, 6, 9, 1, 8, 3, 7],
        "9": [6, 7, 9, 8, 5, 3, 4, 1, 2]
    },
    {
        "1": [4, 7, 8, 1, 2, 3, 5, 6, 9],
        "2": [9, 3, 6, 4, 5, 7, 2, 8, 1],
        "3": [2, 1, 5, 6, 8, 9, 3, 4, 7],
        "4": [1, 2, 3, 9, 4, 6, 7, 5, 8],
        "5": [5, 4, 7, 8, 3, 2, 1, 9, 6],
        "6": [6, 8, 9, 7, 1, 5, 4, 2, 3],
        "7": [3, 5, 1, 2, 6, 8, 9, 7, 4],
        "8": [7, 6, 2, 3, 9, 4, 8, 1, 5],
        "9": [8, 9, 4, 5, 7, 1, 6, 3, 2]
    },
    {
        "1": [1, 7, 5, 2, 3, 4, 6, 8, 9],
        "2": [9, 8, 4, 1, 5, 6, 2, 7, 3],
        "3": [3, 2, 6, 7, 8, 9, 1, 4, 5],
        "4": [2, 1, 3, 6, 9, 7, 4, 5, 8],
        "5": [4, 5, 7, 8, 2, 3, 9, 1, 6],
        "6": [6, 9, 8, 4, 1, 5, 3, 2, 7],
        "7": [5, 3, 1, 9, 7, 2, 8, 6, 4],
        "8": [7, 4, 2, 3, 6, 8, 5, 9, 1],
        "9": [8, 6, 9, 5, 4, 1, 7, 3, 2]
    },
    {
        "1": [7, 3, 5, 1, 2, 4, 6, 8, 9],
        "2": [8, 2, 9, 3, 5, 6, 4, 7, 1],
        "3": [4, 1, 6, 7, 8, 9, 2, 3, 5],
        "4": [1, 9, 2, 8, 3, 7, 5, 6, 4],
        "5": [6, 4, 7, 5, 9, 1, 8, 2, 3],
        "6": [3, 5, 8, 4, 6, 2, 1, 9, 7],
        "7": [2, 6, 1, 9, 4, 3, 7, 5, 8],
        "8": [5, 7, 3, 2, 1, 8, 9, 4, 6],
        "9": [9, 8, 4, 6, 7, 5, 3, 1, 2]
    },
    {
        "1": [7, 1, 6, 2, 3, 4, 5, 8, 9],
        "2": [9, 8, 4, 1, 5, 6, 2, 3, 7],
        "3": [3, 2, 5, 7, 8, 9, 1, 4, 6],
        "4": [1, 9, 2, 5, 6, 8, 4, 7, 3],
        "5": [4, 3, 7, 9, 2, 1, 6, 5, 8],
        "6": [5, 6, 8, 3, 4, 7, 9, 1, 2],
        "7": [2, 4, 1, 6, 7, 3, 8, 9, 5],
        "8": [8, 5, 3, 4, 9, 2, 7, 6, 1],
        "9": [6, 7, 9, 8, 1, 5, 3, 2, 4]
    },
    {
        "1": [4, 1, 9, 2, 3, 5, 6, 7, 8],
        "2": [6, 8, 2, 1, 4, 7, 3, 9, 5],
        "3": [7, 3, 5, 6, 8, 9, 1, 2, 4],
        "4": [1, 2, 3, 8, 7, 4, 5, 6, 9],
        "5": [5, 4, 6, 3, 9, 1, 2, 8, 7],
        "6": [8, 7, 9, 5, 6, 2, 4, 3, 1],
        "7": [3, 5, 7, 4, 2, 8, 9, 1, 6],
        "8": [9, 6, 1, 7, 5, 3, 8, 4, 2],
        "9": [2, 1, 4, 8, 8, 6, 7, 5, 3]
    },
    {
        "1": [3, 1, 7, 2, 4, 5, 6, 8, 9],
        "2": [9, 8, 6, 1, 3, 7, 2, 4, 5],
        "3": [5, 4, 2, 6, 8, 9, 1, 3, 7],
        "4": [1, 2, 3, 7, 6, 4, 5, 9, 8],
        "5": [4, 5, 8, 9, 2, 3, 7, 1, 6],
        "6": [6, 7, 9, 8, 5, 1, 3, 2, 4],
        "7": [2, 9, 1, 4, 7, 6, 8, 5, 3],
        "8": [7, 3, 4, 5, 1, 8, 9, 6, 2],
        "9": [8, 6, 5, 3, 9, 2, 4, 7, 1]
    }
];


/***/ }),

/***/ "./src/app/container/container.component.css":
/*!***************************************************!*\
  !*** ./src/app/container/container.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#content table{\r\n\tmargin: 0 auto;\r\n\tposition: relative;\r\n}\r\n\r\n#action-content .extra-action-container {\r\n\tmargin-top: 10px;\r\n}\r\n\r\n.game-stat-container{\r\n\tcolor: #FFF;\r\n}\r\n\r\n.result-content{\r\n\tposition: absolute;\r\n    background: rgba(255,255,255,0.8);\r\n    top: 0;\r\n    left: 50%;\r\n    height: 100%;\r\n    width: 100%;\r\n    -webkit-transform: translate(-50%,0);\r\n            transform: translate(-50%,0);\r\n    text-align: center;\r\n    font-weight: bold;\r\n    z-index: 99;\r\n}\r\n\r\n.result-content img {\r\n\twidth: 100px;\r\n\tmargin-top: 100px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtDQUNDLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkI7O0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakI7O0FBQ0Q7Q0FDQyxZQUFZO0NBQ1o7O0FBQ0Q7Q0FDQyxtQkFBbUI7SUFDaEIsa0NBQWtDO0lBQ2xDLE9BQU87SUFDUCxVQUFVO0lBQ1YsYUFBYTtJQUNiLFlBQVk7SUFDWixxQ0FBNkI7WUFBN0IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtDQUNmOztBQUNEO0NBQ0MsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jY29udGVudCB0YWJsZXtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNhY3Rpb24tY29udGVudCAuZXh0cmEtYWN0aW9uLWNvbnRhaW5lciB7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uZ2FtZS1zdGF0LWNvbnRhaW5lcntcclxuXHRjb2xvcjogI0ZGRjtcclxufVxyXG4ucmVzdWx0LWNvbnRlbnR7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLDApO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB6LWluZGV4OiA5OTtcclxufVxyXG4ucmVzdWx0LWNvbnRlbnQgaW1nIHtcclxuXHR3aWR0aDogMTAwcHg7XHJcblx0bWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/container/container.component.html":
/*!****************************************************!*\
  !*** ./src/app/container/container.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\" >\r\n\t<div id=\"game-container\" (keydown)=\"checkInput($event)\" (keyup)=\"moveCell($event)\" (click)=\"setFocusCell($event)\"></div>\r\n\t<div class=\"result-content\" *ngIf=\"displayResult\">\r\n\t\t<img src=\"assets/thumbs-down.png\" *ngIf=\"!resultStatus\">\r\n\t\t<p *ngIf=\"!resultStatus\">Opps, You fail.</p>\r\n\t\t<img src=\"assets/thumbs-up.png\" *ngIf=\"resultStatus\">\r\n\t\t<p *ngIf=\"resultStatus\">Congratulations, You win.</p>\r\n\r\n\t\t<p>\r\n\t\t\tYou took {{gameTime.total}} second(s)\r\n\t\t</p>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/container/container.component.ts":
/*!**************************************************!*\
  !*** ./src/app/container/container.component.ts ***!
  \**************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");




var ContainerComponent = /** @class */ (function () {
    function ContainerComponent(el, cService) {
        this.el = el;
        this.cService = cService;
        this.cell = 0;
        this.totalCell = 0;
        this.totalBlock = 0;
        this.cellWidth = 50;
        this.cellGenerateOrder = [5];
        this.gameMode = 'e';
        this.resultCellObj = {};
        this.helpCount = 20;
        this.gameStatus = false;
        this.helpStatus = false;
        this.displayResult = false;
        this.resultStatus = false;
        this.solvedCellCount = 0;
        this.totalHideCellCount = 0;
        this.gameTime = {
            start: 0,
            end: 0,
            total: 0
        };
    }
    ContainerComponent.prototype.ngOnInit = function () {
        this.totalBlock = this.cell * this.cell;
        this.totalCell = this.totalBlock * this.totalBlock;
        this.el.nativeElement.style.display = 'inline-block';
        this.regenerateCells();
    };
    ContainerComponent.prototype.getRandomArrayElements = function (arr, count) {
        var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
        while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(min);
    };
    ContainerComponent.prototype.startGame = function () {
        this.changeMode();
        this.gameStatus = true;
        this.displayResult = false;
        this.gameTime.start = new Date().getTime();
    };
    ContainerComponent.prototype.quitGame = function () {
        var _this = this;
        var nodeArr = Array.prototype.slice.call(document.querySelectorAll("td.hide-cell"));
        nodeArr.forEach(function (element) {
            var targetRow = element.dataset.row;
            var index = Array.prototype.indexOf.call(element.parentNode.children, element);
            var item = _this.resultCellObj[targetRow][index];
            if (!element.classList.contains('right')) {
                element.classList.add('highlight');
            }
            element.innerText = item;
        });
        this.gameStatus = false;
        this.calculateresult();
        return this.gameStatus;
    };
    ContainerComponent.prototype.helpGame = function () {
        var _this = this;
        if (this.helpCount > 0) {
            this.helpStatus = true;
            var nodeArr = Array.prototype.slice.call(document.querySelectorAll("td.hide-cell:not(.highlighted)"));
            var randomNods = this.getRandomArrayElements(nodeArr, 1);
            if (randomNods && randomNods.length > 0) {
                var targetElement_1 = randomNods[0];
                var targetRow = targetElement_1.dataset.row;
                var index = Array.prototype.indexOf.call(targetElement_1.parentNode.children, targetElement_1);
                var item = this.resultCellObj[targetRow][index];
                targetElement_1.classList.add('highlight');
                targetElement_1.innerText = item;
                setTimeout(function () {
                    targetElement_1.classList.remove('highlight');
                    targetElement_1.classList.add('highlighted');
                    targetElement_1.innerText = "";
                    _this.helpStatus = false;
                }, 1000);
                this.helpCount--;
            }
        }
        return this.helpCount;
    };
    ContainerComponent.prototype.changeMode = function (mode) {
        if (mode === void 0) { mode = ''; }
        if (this.gameStatus === false) {
            if (mode != '') {
                this.gameMode = mode;
            }
            if (this.gameMode === 'e') {
                this.totalHideCellCount = 25;
            }
            else if (this.gameMode === 'm') {
                this.totalHideCellCount = 40;
            }
            else if (this.gameMode === 'h') {
                this.totalHideCellCount = 50;
            }
            this.regenerateCells();
            /* REMOVE RANDOM TABLE CELL CONTENT*/
            var nodeArr = Array.prototype.slice.call(document.querySelectorAll("td"));
            nodeArr.forEach(function (item) {
                item.removeAttribute('data-column');
                item.removeAttribute('data-block');
            });
            var randomNods = this.getRandomArrayElements(nodeArr, this.totalHideCellCount);
            randomNods.forEach(function (e) {
                e.innerHTML = "";
                e.classList.remove("display-cell");
                e.classList.add("hide-cell");
                e.setAttribute('contenteditable', 'true');
            });
        }
    };
    ContainerComponent.prototype.regenerateCells = function (regenerate) {
        if (regenerate === void 0) { regenerate = false; }
        if (regenerate === true) {
            var randomIndex = Math.floor(Math.random() * _config__WEBPACK_IMPORTED_MODULE_2__["SAMPLEDATA"].length);
            this.resultCellObj = _config__WEBPACK_IMPORTED_MODULE_2__["SAMPLEDATA"][randomIndex];
        }
        this.generateCells(regenerate);
        this.generatecellText();
        this.displayResult = false;
    };
    ContainerComponent.prototype.generateCells = function (regenerate) {
        if (regenerate === void 0) { regenerate = false; }
        var row = 1;
        var column = 1;
        var block = 1;
        var blockRowCount = 0;
        this.el.nativeElement.querySelector("#game-container").innerHTML = "";
        var table = document.createElement('table');
        table.setAttribute("cellpadding", "0");
        table.setAttribute("cellspacing", "0");
        table.setAttribute("border", "0");
        this.el.nativeElement.querySelector("#game-container").appendChild(table);
        var tr = document.createElement('tr');
        table.appendChild(tr);
        for (var c = 1; c <= this.totalCell; c++) {
            var td = document.createElement('td');
            td.setAttribute('data-column', column.toString());
            td.setAttribute('data-row', row.toString());
            var module = c % this.totalBlock;
            if (module >= 1 && module < 3) {
                block = 1 + blockRowCount;
            }
            else if (module > 3 && module < 6) {
                block = 2 + blockRowCount;
            }
            else if ((module > 6 && module < 9) || module === 0) {
                block = 3 + blockRowCount;
            }
            if (c % (this.cell * this.totalBlock) === 0) {
                blockRowCount += this.cell;
            }
            td.setAttribute('data-block', block.toString());
            td.setAttribute('data-cellIndex', c);
            if (regenerate === true) {
                var cellvalue = this.resultCellObj[row][(c - 1) % this.totalBlock];
                td.innerText = cellvalue;
            }
            if (column % this.cell === 0) {
                td.style["border-right"] = '2px solid #000';
            }
            else if (column === 1) {
                td.style["border-left"] = '2px solid #000';
                td.style["border-right"] = '1px solid #CCC';
            }
            else {
                td.style["border-right"] = '1px solid #CCC';
            }
            if (row === 1) {
                td.style["border-top"] = '2px solid #000';
                td.style["border-bottom"] = '1px solid #CCC';
            }
            else if (row % this.cell === 0) {
                td.style["border-bottom"] = '2px solid #000';
            }
            else {
                td.style["border-bottom"] = '1px solid #CCC';
            }
            td.classList.add("display-cell");
            tr.appendChild(td);
            if (column === this.totalBlock) {
                column = 1;
                row += 1;
                tr = document.createElement('tr');
                table.appendChild(tr);
            }
            else {
                column += 1;
            }
        }
    };
    ContainerComponent.prototype.generatecellText = function () {
        var _this = this;
        var _loop_1 = function (row) {
            var blankElements = document.querySelectorAll("td[data-row='" + row + "']:not([data-value])");
            blankElements.forEach(function (element) {
                var fullCells = [];
                var cellArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                var fullElements = document.querySelectorAll("td[data-row='" + row + "']");
                fullElements.forEach(function (e) {
                    if (cellArr.indexOf(Number(e.dataset.value)) > -1) {
                        cellArr.splice(cellArr.indexOf(Number(e.dataset.value)), 1);
                    }
                    else if (cellArr.indexOf(Number(e.dataset.tmpvalue)) > -1) {
                        cellArr.splice(cellArr.indexOf(Number(e.dataset.tmpvalue)), 1);
                    }
                });
                var lastCell = cellArr[0];
                var colElements = document.querySelectorAll("td[data-column='" + element.dataset.column + "']");
                colElements.forEach(function (e) {
                    if (cellArr.indexOf(Number(e.dataset.value)) > -1) {
                        cellArr.splice(cellArr.indexOf(Number(e.dataset.value)), 1);
                    }
                    else if (cellArr.indexOf(Number(e.dataset.tmpvalue)) > -1) {
                        cellArr.splice(cellArr.indexOf(Number(e.dataset.tmpvalue)), 1);
                    }
                });
                var blockElements = document.querySelectorAll("td[data-block='" + element.dataset.block + "']");
                if (cellArr.length > 0) {
                    lastCell = cellArr[0];
                }
                blockElements.forEach(function (e) {
                    if (cellArr.indexOf(Number(e.dataset.value)) > -1) {
                        cellArr.splice(cellArr.indexOf(Number(e.dataset.value)), 1);
                    }
                    else if (cellArr.indexOf(Number(e.dataset.tmpvalue)) > -1) {
                        cellArr.splice(cellArr.indexOf(Number(e.dataset.tmpvalue)), 1);
                    }
                });
                var cell = _this.getProperCell(cellArr, element);
                if (cell) {
                    element.setAttribute("data-value", cell);
                    element.innerText = cell;
                    cellArr.splice(cellArr.indexOf(cell), 1);
                }
                else {
                    element.setAttribute("data-tmpvalue", lastCell);
                    cellArr.splice(cellArr.indexOf(lastCell), 1);
                }
            });
            var blankRowElements = document.querySelectorAll("td[data-tmpvalue]");
            blankRowElements.forEach(function (element, index) {
                var cellValue = element.dataset.tmpvalue;
                var filterCell = _this.swapLastCell(element, cellValue);
                if (filterCell.length > 0) {
                    var filterCellValue = (filterCell[0].dataset.tmpvalue) ? filterCell[0].dataset.tmpvalue : filterCell[0].dataset.value;
                    element.setAttribute('data-value', filterCellValue);
                    element.innerText = filterCellValue;
                    element.removeAttribute('data-tmpvalue');
                    filterCell[0].setAttribute('data-value', cellValue);
                    filterCell[0].innerText = cellValue;
                }
            });
        };
        for (var row = 1; row <= this.totalBlock; row++) {
            _loop_1(row);
        }
        if (document.querySelectorAll("td[data-value]").length !== this.totalCell) {
            this.regenerateCells(true);
        }
        else {
            this.resultCellObj = {};
            document.querySelectorAll("td[data-value]").forEach(function (element) {
                if (_this.resultCellObj[element.dataset.row] === undefined) {
                    _this.resultCellObj[element.dataset.row] = [];
                }
                _this.resultCellObj[element.dataset.row].push(Number(element.dataset.value));
                element.removeAttribute("data-value");
                element.removeAttribute("data-tmpvalue");
            });
        }
    };
    ContainerComponent.prototype.swapLastCell = function (targetElement, targetCell) {
        var targetRow = targetElement.dataset.row;
        var targetBlock = targetElement.dataset.block;
        var targetColumn = targetElement.dataset.column;
        var rowCells = document.querySelectorAll("td[data-row='" + targetRow + "']:not([data-tmpvalue='" + targetCell + "'])");
        var filterNodes = [];
        rowCells.forEach(function (element, index) {
            var filterData = {
                index: index,
                column: element.dataset.column,
                block: element.dataset.block,
                value: (element.dataset.tmpvalue) ? element.dataset.tmpvalue : element.dataset.value,
                field: (element.dataset.tmpvalue) ? "data-tmpvalue" : "data-value",
            };
            if (document.querySelectorAll("td[data-column='" + filterData.column + "'][" + filterData.field + "='" + targetCell + "']").length === 0
                &&
                    document.querySelectorAll("td[data-column='" + targetColumn + "'][" + filterData.field + "='" + filterData.value + "']").length === 0
                &&
                    document.querySelectorAll("td[data-block='" + filterData.block + "'][" + filterData.field + "='" + targetCell + "']").length === 0
                &&
                    document.querySelectorAll("td[data-block='" + targetBlock + "'][" + filterData.field + "='" + filterData.value + "']").length === 0) {
                filterNodes.push(element);
            }
        });
        return filterNodes;
    };
    ContainerComponent.prototype.getProperCell = function (cellArr, targetElement, cellIndex) {
        if (cellIndex === void 0) { cellIndex = 0; }
        var targetColumn = targetElement.dataset.column;
        var targetRow = targetElement.dataset.row;
        var targetBlock = targetElement.dataset.block;
        var randormIndex = (targetBlock === "5" || targetBlock === "1" || targetBlock === "9") ? Math.floor(Math.random() * cellArr.length) : cellIndex;
        var cell = cellArr[randormIndex];
        cellArr.splice(cellArr.indexOf(cell), 1);
        if (cellArr.length > 0
            &&
                (document.querySelectorAll("td[data-column='" + targetColumn + "'][data-value='" + cell + "']").length > 0
                    ||
                        document.querySelectorAll("td[data-row='" + targetRow + "'][data-value='" + cell + "']").length > 0)) {
            return this.getProperCell(cellArr, targetElement);
        }
        return cell;
    };
    ContainerComponent.prototype.calculateresult = function () {
        var _this = this;
        this.displayResult = true;
        if (this.solvedCellCount >= this.totalHideCellCount) {
            this.resultStatus = true;
        }
        else {
            this.resultStatus = false;
        }
        if (this.displayResult === true) {
            this.cService.setGameEnd(true);
            this.gameTime.end = new Date().getTime();
            this.gameTime.total = Math.round((this.gameTime.end - this.gameTime.start) / 1000);
            setTimeout(function () {
                _this.displayResult = false;
            }, 5000);
        }
    };
    ContainerComponent.prototype.checkInput = function (e) {
        if ((((e.keyCode >= 97 && e.keyCode <= 105) || (e.keyCode >= 49 && e.keyCode <= 57)) && e.target.innerText == '') || e.keyCode === 8 || e.keyCode === 46) {
            var targetElement = e.target;
            var targetRow = targetElement.dataset.row;
            var index = Array.prototype.indexOf.call(targetElement.parentNode.children, targetElement);
            if (Number(e.key) === this.resultCellObj[targetRow][index]) {
                this.solvedCellCount++;
                targetElement.classList.add('right');
                if (this.solvedCellCount >= this.totalHideCellCount) {
                    this.calculateresult();
                }
            }
            else {
                targetElement.classList.remove('right');
            }
        }
        else {
            e.preventDefault();
        }
    };
    ContainerComponent.prototype.moveCell = function (event) {
        if (event.keyCode >= 37 && event.keyCode <= 40) {
            var targetCell = event.target;
            var targetCellIndex = parseInt(targetCell.getAttribute('data-cellIndex'));
            var focusElement = null;
            if (event.keyCode === 37) { //left key
                focusElement = this.moveToCell(targetCellIndex, 'left');
            }
            else if (event.keyCode === 38) { // top key
                focusElement = this.moveToCell(targetCellIndex, 'top');
            }
            else if (event.keyCode === 39) { // right key
                focusElement = this.moveToCell(targetCellIndex, 'right');
            }
            else if (event.keyCode === 40) { // bottom key
                focusElement = this.moveToCell(targetCellIndex, 'bottom');
            }
            if (focusElement) {
                focusElement.focus();
                if (document.querySelector(".highlight-cell")) {
                    document.querySelector(".highlight-cell").classList.remove('highlight-cell');
                }
                focusElement.classList.add("highlight-cell");
            }
        }
    };
    ContainerComponent.prototype.moveToCell = function (targetIndex, side) {
        if (side === 'left') {
            var target = document.querySelector("[data-cellIndex='" + (targetIndex - 1) + "']");
            if (target) {
                if (target.classList.value.indexOf("hide-cell") == -1) {
                    targetIndex -= 1;
                    return this.moveToCell(targetIndex, side);
                }
                else {
                    return target;
                }
            }
        }
        else if (side === 'top') {
            var target = document.querySelector("[data-cellIndex='" + (targetIndex - 9) + "']");
            if (target) {
                if (target.classList.value.indexOf("hide-cell") == -1) {
                    targetIndex -= 9;
                    return this.moveToCell(targetIndex, side);
                }
                else {
                    return target;
                }
            }
        }
        else if (side === 'right') {
            var target = document.querySelector("[data-cellIndex='" + (targetIndex + 1) + "']");
            if (target) {
                if (target.classList.value.indexOf("hide-cell") == -1) {
                    targetIndex += 1;
                    return this.moveToCell(targetIndex, side);
                }
                else {
                    return target;
                }
            }
        }
        else if (side === 'bottom') {
            var target = document.querySelector("[data-cellIndex='" + (targetIndex + 9) + "']");
            if (target) {
                if (target.classList.value.indexOf("hide-cell") == -1) {
                    targetIndex += 9;
                    return this.moveToCell(targetIndex, side);
                }
                else {
                    return target;
                }
            }
        }
    };
    ContainerComponent.prototype.setFocusCell = function (event) {
        if (document.querySelector(".highlight-cell")) {
            document.querySelector(".highlight-cell").classList.remove('highlight-cell');
        }
        event.target.classList.add("highlight-cell");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("cell"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ContainerComponent.prototype, "cell", void 0);
    ContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-container',
            template: __webpack_require__(/*! ./container.component.html */ "./src/app/container/container.component.html"),
            styles: [__webpack_require__(/*! ./container.component.css */ "./src/app/container/container.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n    height: 50px;\n}\n.timer-container {\n    position: absolute;\n    left: 50%;\n    line-height: 50px;\n    font-size: 25px;\n    font-weight: bold;\n}\n#action-content {\n\tmargin-top: 10px;\n    text-align: center;\n    position: absolute;\n    top: 40px;\n    right: 0;\n    background:rgba(247, 247, 247, 0.4);\n    width: 300px;\n    height : calc(100% - 50px);\n}\n.slider {\n    max-height: calc(100% - 50px);\n\toverflow-y: hidden;\n\ttransition-property: all;\n\ttransition-duration: .5s;\n\ttransition-timing-function: cubic-bezier(0, 1, 0.5, 1);\n}\n.slider.closed {\n\tmax-height: 0;\n}\n.header-menu {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    float: right;\n    \n}\n.header-menu li {\n    display: inline;\n    padding: 0 15px;\n    line-height: 50px;\n    color: #FFF;\n    font-size: 25px;\n}\n.game-container {\n\twidth: 100%;\n\tmargin: 0 auto;\n}\n/* MODAL */\n.modal {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0,0,0,0.5);\n}\n.modal .modal-container {\n    width: 50%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%,-50%);\n            transform: translate(-50%,-50%);\n    background: #FFF;\n    padding: 10px;\n    border-radius: 5px;\n}\n.modal .modal-container {\n    color: #222;\n}\n.modal .modal-container .modal-header {\n    width: 100%;\n}\n.modal .modal-container .modal-header h2 {\n    width: 90%;\n    float: left;\n    \n}\n.modal .modal-container .modal-header span.modal-close {\n    font-size: 23px;\n    cursor: pointer;\n    color: #757575;\n    width: 10%;\n    float: right;\n    text-align: right;\n}\n.modal .modal-container .modal-header::after {\n    content: \"\";\n    display: block;\n    clear: both;\n    border-bottom: 1px solid #cccccc;\n}\n.modal .modal-container .modal-body {\n    padding: 5px;\n    position: relative;\n    max-height: 90vh;\n    overflow-y: scroll;\n    font-size: 13px;\n}\n.modal .modal-container .modal-body ul{\n    /* margin: 0;\n    padding: 0; */\n}\n.modal .modal-container .modal-body ul li {\n    padding: 5px;\n    line-height: 20px;\n}\n/* END MODAL */\n@media screen and (max-width:414px ) {\n    .modal .modal-container {\n        width: 90%;\n        top: 5px;\n        left: 5px;\n        -webkit-transform: translate(0,0);\n                transform: translate(0,0);\n    }\n\t#action-content {\n        width: 100%;\n        background:rgba(247, 247, 247, 0.9);\n\t}\n}\n@media screen and (min-width:415px ) {\n\t.game-container {\n\t\twidth: 50%;\n\t\tmargin: 0 auto;\n    }\n    .game-container.active {\n\t\tmargin: 0 0 0 15%;\n\t}\n\t.game-container table{\n\t\twidth: 50%;\n\t}\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0NBQ3JCO0FBQ0Q7Q0FDQyxpQkFBaUI7SUFDZCxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixTQUFTO0lBQ1Qsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYiwyQkFBMkI7Q0FDOUI7QUFDRDtJQUNJLDhCQUE4QjtDQUNqQyxtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLHlCQUF5QjtDQUN6Qix1REFBdUQ7Q0FDdkQ7QUFDRDtDQUNDLGNBQWM7Q0FDZDtBQUNEO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsYUFBYTs7Q0FFaEI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7Q0FDbkI7QUFDRDtDQUNDLFlBQVk7Q0FDWixlQUFlO0NBQ2Y7QUFFRCxXQUFXO0FBQ1g7SUFDSSxtQkFBbUI7SUFDbkIsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0lBQ1osYUFBYTtJQUNiLDRCQUE0QjtDQUMvQjtBQUNEO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtJQUNWLHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksWUFBWTtDQUNmO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsWUFBWTs7Q0FFZjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7Q0FDckI7QUFFRDtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGlDQUFpQztDQUNwQztBQUdEO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0k7a0JBQ2M7Q0FDakI7QUFDRDtJQUNJLGFBQWE7SUFDYixrQkFBa0I7Q0FDckI7QUFDRCxlQUFlO0FBQ2Y7SUFDSTtRQUNJLFdBQVc7UUFDWCxTQUFTO1FBQ1QsVUFBVTtRQUNWLGtDQUEwQjtnQkFBMUIsMEJBQTBCO0tBQzdCO0NBQ0o7UUFDTyxZQUFZO1FBQ1osb0NBQW9DO0VBQzFDO0NBQ0Q7QUFDRDtDQUNDO0VBQ0MsV0FBVztFQUNYLGVBQWU7S0FDWjtJQUNEO0VBQ0Ysa0JBQWtCO0VBQ2xCO0NBQ0Q7RUFDQyxXQUFXO0VBQ1g7O0NBRUQiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICAgIGhlaWdodDogNTBweDtcbn1cbi50aW1lci1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI2FjdGlvbi1jb250ZW50IHtcblx0bWFyZ2luLXRvcDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDBweDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMjQ3LCAyNDcsIDI0NywgMC40KTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0IDogY2FsYygxMDAlIC0gNTBweCk7XG59XG4uc2xpZGVyIHtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KTtcblx0b3ZlcmZsb3cteTogaGlkZGVuO1xuXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG5cdHRyYW5zaXRpb24tZHVyYXRpb246IC41cztcblx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAxLCAwLjUsIDEpO1xufVxuLnNsaWRlci5jbG9zZWQge1xuXHRtYXgtaGVpZ2h0OiAwO1xufVxuLmhlYWRlci1tZW51IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBcbn1cbi5oZWFkZXItbWVudSBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG4uZ2FtZS1jb250YWluZXIge1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luOiAwIGF1dG87XG59XG5cbi8qIE1PREFMICovXG4ubW9kYWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpO1xufVxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubW9kYWwgLm1vZGFsLWNvbnRhaW5lciB7XG4gICAgY29sb3I6ICMyMjI7XG59XG4ubW9kYWwgLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC1oZWFkZXIgaDIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgXG59XG4ubW9kYWwgLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtaGVhZGVyIHNwYW4ubW9kYWwtY2xvc2Uge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICM3NTc1NzU7XG4gICAgd2lkdGg6IDEwJTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC1oZWFkZXI6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NjO1xufVxuXG5cbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC1ib2R5IHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1heC1oZWlnaHQ6IDkwdmg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC1ib2R5IHVse1xuICAgIC8qIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwOyAqL1xufVxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLWJvZHkgdWwgbGkge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi8qIEVORCBNT0RBTCAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MTRweCApIHtcbiAgICAubW9kYWwgLm1vZGFsLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7XG4gICAgfVxuXHQjYWN0aW9uLWNvbnRlbnQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDpyZ2JhKDI0NywgMjQ3LCAyNDcsIDAuOSk7XG5cdH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NDE1cHggKSB7XG5cdC5nYW1lLWNvbnRhaW5lciB7XG5cdFx0d2lkdGg6IDUwJTtcblx0XHRtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgLmdhbWUtY29udGFpbmVyLmFjdGl2ZSB7XG5cdFx0bWFyZ2luOiAwIDAgMCAxNSU7XG5cdH1cblx0LmdhbWUtY29udGFpbmVyIHRhYmxle1xuXHRcdHdpZHRoOiA1MCU7XG5cdH1cblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n        <div class=\"timer-container\" *ngIf=\"status.gamestart\">\n            <span>{{ gameTime.show }}</span>\n        </div>\n        <ul class=\"header-menu\">\n            <li (click)=\"helpGame()\" *ngIf=\"status.gamestart\">\n                <span [matBadge]=\"helpCount\" matBadgeColor=\"warn\"> <fa name=\"question-circle\" ></fa></span>\n\n            </li>\n            <li (click)=\"toggleMenu()\"><fa name=\"cog\"></fa></li>\n        </ul>\n        <div id=\"action-content\" class=\"slider\" [class.closed]=\"status.sidebarmenu\">\n\n                <div class=\"game-mode\" >\n                    <mat-button-toggle-group #mode=\"matButtonToggleGroup\" value=\"e\" (click)=\"changeMode(mode.value)\" [disabled]=\"status.gamestart\">\n                      <mat-button-toggle value=\"e\">Easy\n                      </mat-button-toggle>\n                      <mat-button-toggle value=\"m\">Medium\n                      </mat-button-toggle>\n                      <mat-button-toggle value=\"h\">Hard\n                      </mat-button-toggle>\n                    </mat-button-toggle-group>\n                </div>\n                <div class=\"extra-action-container game-start-action-container\" >\n                    <mat-button-toggle-group #startAction=\"matButtonToggleGroup\"  (click)=\"startGameAction(startAction.value)\" [disabled]=\"status.gamestart\">\n                        <mat-button-toggle value=\"r\">Refresh\n                        </mat-button-toggle>\n                        <mat-button-toggle value=\"s\">Start\n                        </mat-button-toggle>\n                      </mat-button-toggle-group>\n                </div>\n                <div class=\"extra-action-container quit-action-container\" *ngIf=\"status.gamestart\">\n                    <mat-button-toggle-group #quitAction=\"matButtonToggleGroup\"  (click)=\"quitGameAction()\" >\n                        <mat-button-toggle value=\"q\">Quit\n                        </mat-button-toggle>\n                    </mat-button-toggle-group>\n                    \n                </div>\n            </div>\n</div>\n<div class=\"game-container\" [class.active]=\"!status.sidebarmenu\">\n<app-container [cell]=\"3\"></app-container>\n</div>\n<div class=\"modal\" *ngIf=\"!howToPlaymodalDismiss\" >\n    <div class=\"modal-container\">\n        <div class=\"modal-header\">\n            <h2>Your Guidance</h2>\n            <span class=\"modal-close\" (click)=\"howToPlaymodalDismiss=true\"><fa name=\"times\"></fa></span>\n            <!-- <div class=\"clearfix\"></div> -->\n        </div>\n        <div class=\"modal-body\">\n                <ul>\n                    <li>This is a Sudoku game</li>\n                    <li>A simple puzzle game, you have to fill up the blank cells with correct numbers</li>\n                    <li>\n                        <div>Remember a few things</div>\n                        <ul>\n                            <li>The blank cells must be filled up by only 1 to 9 numbers</li>\n                            <li>There is a total of 9 blocks, every block, row, and column must be filled up by 1 to 9 uniquely.  <br/>\n                                <strong>For example: </strong>in the 1st row, there would be 1,2,3,4,5,6,7,8,9. In First column there would be 1,2,3,4,5,6,7,8,9 and in first block would also be same 1,2,3,4,5,6,7,8,9 </li>\n                        </ul>\n                    </li>\n                    <li>There are 3 modes available. <strong>Easy, Midium and Hard</strong>. Before starting the game, you can change the mode. After the game start, you can not able to change the mode.</li>\n                    <li>Before start game if you want to puzzle once more, click <strong>Refresh</strong> button</li>\n                    <li>After starting the game you will get help for 20 times. In the right top, there will be a button with the sign <strong>'?'</strong> you can click and get the help </li>\n                    <li>When your game is going on, A timer will be running.</li>\n                    <li>Anytime within the game, you can quit by clicking a button <strong>Quit</strong></li>\n                </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../container/container.component */ "./src/app/container/container.component.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(cService) {
        this.cService = cService;
        this.helpCount = 20;
        this.status = {
            sidebarmenu: false,
            gamestart: false
        };
        this.gameTime = {
            interval: null,
            time: 0,
            show: ''
        };
        this.howToPlaymodalDismiss = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cService.gameEnd.subscribe(function (status) {
            if (status) {
                _this.timer(true);
            }
        });
    };
    HomeComponent.prototype.toggleMenu = function () {
        this.status.sidebarmenu = (this.status.sidebarmenu == true) ? false : true;
    };
    HomeComponent.prototype.timer = function (stop) {
        var _this = this;
        if (stop === void 0) { stop = false; }
        if (stop === true && this.gameTime.interval != null) {
            clearInterval(this.gameTime.interval);
        }
        else {
            this.gameTime.interval = setInterval(function () {
                _this.gameTime.time += 1;
                var min = Math.floor(_this.gameTime.time / 60);
                var sec = _this.gameTime.time - (min * 60);
                _this.gameTime.show = ((min < 10) ? '0' + min : min) + ':' + ((sec < 10) ? '0' + sec : sec);
            }, 1000);
        }
    };
    HomeComponent.prototype.startGameAction = function (type) {
        switch (type) {
            case "r":
                this.container.regenerateCells();
                break;
            case "s":
                this.container.startGame();
                this.status.gamestart = true;
                this.gameTime.time = 0;
                this.gameTime.show = '';
                this.toggleMenu();
                this.timer();
                break;
        }
    };
    HomeComponent.prototype.changeMode = function (mode) {
        this.container.changeMode(mode);
    };
    HomeComponent.prototype.helpGame = function () {
        this.helpCount = this.container.helpGame();
    };
    HomeComponent.prototype.quitGameAction = function () {
        this.status.gamestart = this.container.quitGame();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_container_container_component__WEBPACK_IMPORTED_MODULE_2__["ContainerComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _container_container_component__WEBPACK_IMPORTED_MODULE_2__["ContainerComponent"])
    ], HomeComponent.prototype, "container", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/games/sudoku-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map