(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items/items.component */ 4216);
/* harmony import */ var _participants_participants_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./participants/participants.component */ 7715);
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./summary/summary.component */ 6155);






const routes = [
    {
        path: 'items',
        component: _items_items_component__WEBPACK_IMPORTED_MODULE_0__.ItemsComponent
    },
    {
        path: 'participants',
        component: _participants_participants_component__WEBPACK_IMPORTED_MODULE_1__.ParticipantsComponent
    },
    {
        path: 'summary',
        component: _summary_summary_component__WEBPACK_IMPORTED_MODULE_2__.SummaryComponent
    },
    {
        path: '',
        redirectTo: 'items',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items/items.component */ 4216);
/* harmony import */ var _participants_participants_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./participants/participants.component */ 7715);
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./summary/summary.component */ 6155);
/* harmony import */ var _money_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./money.pipe */ 7276);













let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
            _items_items_component__WEBPACK_IMPORTED_MODULE_2__.ItemsComponent,
            _participants_participants_component__WEBPACK_IMPORTED_MODULE_3__.ParticipantsComponent,
            _summary_summary_component__WEBPACK_IMPORTED_MODULE_4__.SummaryComponent,
            _money_pipe__WEBPACK_IMPORTED_MODULE_5__.MoneyPipe
        ],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 9325:
/*!**********************************!*\
  !*** ./src/app/billy.service.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillyService": () => (/* binding */ BillyService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6942);




let BillyService = class BillyService {
    constructor() {
        this._participants$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
        this._items$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
        this._assocs$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(new Map());
        const startingItems = [
            { name: "Pizza", price: 800 },
            { name: "Beer", price: 400 }
        ];
        const startingParticipants = [
            { name: "Ana" },
            { name: "Bob" },
            { name: "Paul" },
            { name: "Susan" },
        ];
        startingItems.forEach((item) => this.addItem(item));
        startingParticipants.forEach((participant) => this.addParticipant(participant));
    }
    getItems() {
        return this._items$;
    }
    getParticipants() {
        return this._participants$;
    }
    addItem(item) {
        const allItems = this._items$.getValue();
        this._items$.next([...allItems, item]);
        const assocs = this._assocs$.getValue();
        assocs.set(item, new Set());
        this._assocs$.next(assocs);
    }
    addParticipant(participant) {
        const allParticipants = this._participants$.getValue();
        this._participants$.next([...allParticipants, participant]);
    }
    removeItem(item) {
        const allItems = this._items$.getValue();
        this._items$.next(this.remove(allItems, item));
        const assocs = this._assocs$.getValue();
        assocs.delete(item);
        this._assocs$.next(assocs);
    }
    removeParticipant(participant) {
        const allParticipants = this._participants$.getValue();
        this._participants$.next(this.remove(allParticipants, participant));
        const assocs = this._assocs$.getValue();
        for (const [_, participants] of assocs) {
            participants.delete(participant);
        }
        this._assocs$.next(assocs);
    }
    setParticipantItems(participant, items) {
        const allParticipants = this._participants$.getValue();
        if (allParticipants.indexOf(participant) < 0) {
            throw new Error("Invariant violation");
        }
        const assocs = this._assocs$.getValue();
        const allItems = this._items$.getValue();
        for (const item of items) {
            if (allItems.indexOf(item) < 0) {
                throw new Error("Invariant violation");
            }
            assocs.get(item).add(participant);
        }
        this._assocs$.next(assocs);
    }
    getSummary() {
        return this._assocs$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(assocs => {
            var _a;
            /*
            Calculate the splitted price of each Item.
            */
            const splittedPrice = new Map();
            for (const [item, participants] of assocs) {
                if (participants.size > 0) {
                    splittedPrice.set(item, item.price / participants.size);
                }
            }
            /*
            For each Participant, find all the items in which its participant
            Sum the splitted price of each item.
            */
            const result = new Map();
            for (const [item, participants] of assocs) {
                for (const participant of participants) {
                    const acc = (_a = result.get(participant)) !== null && _a !== void 0 ? _a : 0;
                    const splitted = splittedPrice.get(item);
                    result.set(participant, acc + splitted);
                }
            }
            return result;
        }));
    }
    /**
     * Remove the first occurence (if any) of `item` from `array`.
     * @param array the array which contains the `item`.
     * @param item the item to be removed.
     * @returns the updated `array`.
     */
    remove(array, item) {
        let idx = array.indexOf(item);
        array.splice(idx, 1);
        return array;
    }
};
BillyService.ctorParameters = () => [];
BillyService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], BillyService);



/***/ }),

/***/ 4216:
/*!******************************************!*\
  !*** ./src/app/items/items.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsComponent": () => (/* binding */ ItemsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _items_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items.component.html?ngResource */ 2657);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _billy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../billy.service */ 9325);





let ItemsComponent = class ItemsComponent {
    constructor(billy, alertController) {
        this.billy = billy;
        this.alertController = alertController;
    }
    ngOnInit() {
        this.items$ = this.billy.getItems();
    }
    addItem() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Add Item",
                inputs: [
                    {
                        name: "name",
                        type: "text",
                        placeholder: "Item"
                    },
                    {
                        name: "price",
                        type: "number",
                        placeholder: "$",
                    }
                ],
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                    },
                    {
                        text: "Add",
                        role: "submit"
                    }
                ]
            });
            yield alert.present();
            const { data, role } = yield alert.onDidDismiss();
            if (role == "submit") {
                const item = data.values;
                this.billy.addItem(item);
            }
        });
    }
    removeItem(item) {
        this.billy.removeItem(item);
    }
};
ItemsComponent.ctorParameters = () => [
    { type: _billy_service__WEBPACK_IMPORTED_MODULE_1__.BillyService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController }
];
ItemsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-items',
        template: _items_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
    })
], ItemsComponent);



/***/ }),

/***/ 7276:
/*!*******************************!*\
  !*** ./src/app/money.pipe.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoneyPipe": () => (/* binding */ MoneyPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let MoneyPipe = class MoneyPipe {
    transform(value) {
        return `$ ${Number(value).toFixed(2)}`;
    }
};
MoneyPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'money'
    })
], MoneyPipe);



/***/ }),

/***/ 7715:
/*!********************************************************!*\
  !*** ./src/app/participants/participants.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParticipantsComponent": () => (/* binding */ ParticipantsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _participants_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./participants.component.html?ngResource */ 3682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _billy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../billy.service */ 9325);





let ParticipantsComponent = class ParticipantsComponent {
    constructor(billy, alertController) {
        this.billy = billy;
        this.alertController = alertController;
    }
    ngOnInit() {
        this.participants$ = this.billy.getParticipants();
        this.items$ = this.billy.getItems();
    }
    addParticipant() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Add Participant",
                inputs: [
                    {
                        name: "name",
                        type: "text",
                        placeholder: "Name"
                    }
                ],
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                    },
                    {
                        text: "Add",
                        role: "submit"
                    }
                ]
            });
            yield alert.present();
            const { data, role } = yield alert.onDidDismiss();
            if (role == "submit") {
                const participant = data.values;
                this.billy.addParticipant(participant);
            }
        });
    }
    removeParticipant(participant) {
        this.billy.removeParticipant(participant);
    }
    setParticipantItems(participant, event) {
        // See: https://github.com/ionic-team/ionic-framework/issues/24245
        const items = event.detail.value;
        console.log(items);
        this.billy.setParticipantItems(participant, items);
    }
};
ParticipantsComponent.ctorParameters = () => [
    { type: _billy_service__WEBPACK_IMPORTED_MODULE_1__.BillyService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController }
];
ParticipantsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-participants',
        template: _participants_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
    })
], ParticipantsComponent);



/***/ }),

/***/ 6155:
/*!**********************************************!*\
  !*** ./src/app/summary/summary.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryComponent": () => (/* binding */ SummaryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _summary_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./summary.component.html?ngResource */ 2497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _billy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../billy.service */ 9325);




let SummaryComponent = class SummaryComponent {
    constructor(billy) {
        this.billy = billy;
    }
    ngOnInit() {
        this.summary$ = this.billy.getSummary();
    }
};
SummaryComponent.ctorParameters = () => [
    { type: _billy_service__WEBPACK_IMPORTED_MODULE_1__.BillyService }
];
SummaryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-summary',
        template: _summary_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
    })
], SummaryComponent);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 8150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n  <ion-tabs>\n\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button tab=\"items\">\n        <ion-icon name=\"cart-outline\"></ion-icon>\n        <ion-label>Items</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"participants\">\n        <ion-icon name=\"people-outline\"></ion-icon>\n        <ion-label>Participants</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"summary\">\n        <ion-icon name=\"document-text-outline\"></ion-icon>\n        <ion-label>Summary</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n\n  </ion-tabs>\n\n</ion-app>";

/***/ }),

/***/ 2657:
/*!*******************************************************!*\
  !*** ./src/app/items/items.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Items\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Items</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ng-container *ngIf=\"items$ | async as items\">\n    <ion-list lines=\"full\" *ngIf=\"items.length > 0; else empty\">\n      <ion-item-sliding *ngFor=\"let item of items\">\n        <ion-item>\n          <ion-label>{{ item.name }}</ion-label>\n          <ion-note slot=\"end\">{{ item.price | money }}</ion-note>\n        </ion-item>\n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"danger\" (click)=\"removeItem(item)\">Remove</ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n\n    <ng-template #empty>\n      <div class=\"empty-list\">\n        <h3>Add some Items</h3>\n      </div>\n    </ng-template>\n  </ng-container>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"addItem()\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>";

/***/ }),

/***/ 3682:
/*!*********************************************************************!*\
  !*** ./src/app/participants/participants.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Participants\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Participants</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ng-container *ngIf=\"participants$ | async as participants\">\n    <ng-container *ngIf=\"items$ | async as items\">\n      <ion-list lines=\"full\" *ngIf=\"participants.length > 0; else empty\">\n        <ion-item-sliding *ngFor=\"let participant of participants\">\n          <ion-item>\n            <ion-label>{{ participant.name }}</ion-label>\n            <ion-select multiple=\"true\" (ionChange)=\"setParticipantItems(participant, $event)\">\n              <ion-select-option *ngFor=\"let item of items\" [value]=\"item\">{{ item.name }}</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item-options side=\"end\">\n            <ion-item-option color=\"danger\" (click)=\"removeParticipant(participant)\">Remove</ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n\n      <ng-template #empty>\n        <div class=\"empty-list\">\n          <h3>Add some Participants</h3>\n        </div>\n      </ng-template>\n    </ng-container>\n  </ng-container>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"addParticipant()\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>";

/***/ }),

/***/ 2497:
/*!***********************************************************!*\
  !*** ./src/app/summary/summary.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Summary\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Summary</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ng-container *ngIf=\"summary$ | async as summary\">\n    <ion-list lines=\"full\" *ngIf=\"summary.size > 0; else empty\">\n      <ion-item-sliding *ngFor=\"let entry of summary | keyvalue\">\n        <ion-item>\n          <ion-label>{{ entry.key.name }}</ion-label>\n          <ion-note slot=\"end\">{{ entry.value | money }}</ion-note>\n        </ion-item>\n      </ion-item-sliding>\n    </ion-list>\n\n    <ng-template #empty>\n      <div class=\"empty-list\">\n        <h3>No summary available</h3>\n      </div>\n    </ng-template>\n  </ng-container>\n\n</ion-content>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map