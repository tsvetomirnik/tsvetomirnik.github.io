webpackJsonp([0,3],{

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_github_api__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_user_config_resolver_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_config_service__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(title, gitHubApi, config, userConfigResolver) {
        this.title = title;
        this.gitHubApi = gitHubApi;
        this.config = config;
        this.userConfigResolver = userConfigResolver;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.config.getConfiguration()
            .subscribe(function (userConfig) {
            _this.title.setTitle("" + userConfig.githubUsername);
            _this.gitHubApi.getUser(userConfig.githubUsername)
                .subscribe(function (user) {
                _this.user = _this.userConfigResolver.resolve(user, userConfig);
            });
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.scss']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_github_api__ !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_github_api__["ApiService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_config_service__["a" /* ConfigService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_config_service__["a" /* ConfigService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_user_config_resolver_service__["a" /* UserConfigResolverService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_user_config_resolver_service__["a" /* UserConfigResolverService */]) === 'function' && _d) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/Repos/gh-aboutme/src/profile.component.js.map

/***/ },

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/Repos/gh-aboutme/src/app.component.js.map

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_SocialIconTypes__ = __webpack_require__(347);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SocialIconPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocialIconPipe = (function () {
    function SocialIconPipe() {
        this.profileIcons = {};
        this.profileIcons[__WEBPACK_IMPORTED_MODULE_1__enums_SocialIconTypes__["a" /* SocialIconTypes */].ANGELLIST] = 'angellist';
        this.profileIcons[__WEBPACK_IMPORTED_MODULE_1__enums_SocialIconTypes__["a" /* SocialIconTypes */].EMAIL] = 'envelope';
        this.profileIcons[__WEBPACK_IMPORTED_MODULE_1__enums_SocialIconTypes__["a" /* SocialIconTypes */].BEHANCE] = 'behance';
        this.profileIcons[__WEBPACK_IMPORTED_MODULE_1__enums_SocialIconTypes__["a" /* SocialIconTypes */].CODEPEN] = 'codepen';
        this.profileIcons[__WEBPACK_IMPORTED_MODULE_1__enums_SocialIconTypes__["a" /* SocialIconTypes */].DRIBBBLE] = 'dribbble';
        this.profileIcons[__WEBPACK_IMPORTED_MODULE_1__enums_SocialIconTypes__["a" /* SocialIconTypes */].FACEBOOK] = 'facebook';
        this.profileIcons[__WEBPACK_IMPORTED_MODULE_1__enums_SocialIconTypes__["a" /* SocialIconTypes */].GITHUB] = 'github-alt';
        this.profileIcons[__WEBPACK_IMPORTED_MODULE_1__enums_SocialIconTypes__["a" /* SocialIconTypes */].GOOGLE_PLUS] = 'google-plus';
        this.profileIcons[__WEBPACK_IMPORTED_MODULE_1__enums_SocialIconTypes__["a" /* SocialIconTypes */].INSTAGRAM] = 'instagram';
        this.profileIcons[__WEBPACK_IMPORTED_MODULE_1__enums_SocialIconTypes__["a" /* SocialIconTypes */].LINKEDIN] = 'linkedin';
        this.profileIcons[__WEBPACK_IMPORTED_MODULE_1__enums_SocialIconTypes__["a" /* SocialIconTypes */].PINTEREST] = 'pinterest';
        this.profileIcons[__WEBPACK_IMPORTED_MODULE_1__enums_SocialIconTypes__["a" /* SocialIconTypes */].STACK_OVERFLOW] = 'stack-overflow';
        this.profileIcons[__WEBPACK_IMPORTED_MODULE_1__enums_SocialIconTypes__["a" /* SocialIconTypes */].SKYPE] = 'skype';
        this.profileIcons[__WEBPACK_IMPORTED_MODULE_1__enums_SocialIconTypes__["a" /* SocialIconTypes */].TWITTER] = 'twitter';
        this.profileIcons[__WEBPACK_IMPORTED_MODULE_1__enums_SocialIconTypes__["a" /* SocialIconTypes */].YOUTUBE] = 'youtube';
        this.profileIcons[__WEBPACK_IMPORTED_MODULE_1__enums_SocialIconTypes__["a" /* SocialIconTypes */].WEBSITE] = 'bookmark';
    }
    SocialIconPipe.prototype.transform = function (value, args) {
        var icon = SocialIconPipe.prefix;
        if (this.profileIcons[value]) {
            icon = icon + this.profileIcons[value];
        }
        else {
            icon = icon + SocialIconPipe.defaultIcon;
        }
        return icon;
    };
    SocialIconPipe.defaultIcon = 'paperclip';
    SocialIconPipe.prefix = 'fa-';
    SocialIconPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Pipe */])({
            name: 'socialIcon'
        }), 
        __metadata('design:paramtypes', [])
    ], SocialIconPipe);
    return SocialIconPipe;
}());
//# sourceMappingURL=D:/Repos/gh-aboutme/src/social-icon.pipe.js.map

/***/ },

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__User__ = __webpack_require__(351);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__User__["a"]; });

//# sourceMappingURL=D:/Repos/gh-aboutme/src/index.js.map

/***/ },

/***/ 273:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 273;


/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gendir_app_app_module_ngfactory__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(108);





if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["U" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["d" /* platformBrowser */])().bootstrapModuleFactory(__WEBPACK_IMPORTED_MODULE_3__gendir_app_app_module_ngfactory__["a" /* AppModuleNgFactory */]);
//# sourceMappingURL=D:/Repos/gh-aboutme/src/main.js.map

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_component__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component_scss_shim_ngstyle__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_profile_profile_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_profile_component_ngfactory__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_src_browser_title__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_shared_services_github_api_api_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_shared_services_config_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_shared_services_user_config_resolver_service__ = __webpack_require__(55);
/* unused harmony export Wrapper_AppComponent */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponentNgFactory; });
/* unused harmony export View_AppComponent0 */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};














var Wrapper_AppComponent = (function () {
    function Wrapper_AppComponent() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* AppComponent */]();
    }
    Wrapper_AppComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AppComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_AppComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_AppComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AppComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_AppComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AppComponent;
}());
var renderType_AppComponent_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_AppComponent_Host0 = (function (_super) {
    __extends(View_AppComponent_Host0, _super);
    function View_AppComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AppComponent_Host0, renderType_AppComponent_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_AppComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'app-root', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_AppComponent0(this.viewUtils, this, 0, this._el_0);
        this._AppComponent_0_3 = new Wrapper_AppComponent();
        this.compView_0.create(this._AppComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["b" /* ComponentRef_ */](0, this, this._el_0, this._AppComponent_0_3.context);
    };
    View_AppComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* AppComponent */]) && (0 === requestNodeIndex))) {
            return this._AppComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AppComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AppComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_AppComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var AppComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["a" /* ComponentFactory */]('app-root', View_AppComponent_Host0, __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* AppComponent */]);
var styles_AppComponent = [__WEBPACK_IMPORTED_MODULE_7__app_component_scss_shim_ngstyle__["a" /* styles */]];
var renderType_AppComponent = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_AppComponent, {});
var View_AppComponent0 = (function (_super) {
    __extends(View_AppComponent0, _super);
    function View_AppComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AppComponent0, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_AppComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'app-profile', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this.compView_0 = new __WEBPACK_IMPORTED_MODULE_9__profile_profile_component_ngfactory__["a" /* View_ProfileComponent0 */](this.viewUtils, this, 0, this._el_0);
        this._ProfileComponent_0_3 = new __WEBPACK_IMPORTED_MODULE_9__profile_profile_component_ngfactory__["b" /* Wrapper_ProfileComponent */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_src_browser_title__["a" /* Title */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_11__app_shared_services_github_api_api_service__["a" /* ApiService */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_12__app_shared_services_config_service__["a" /* ConfigService */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__app_shared_services_user_config_resolver_service__["a" /* UserConfigResolverService */], this.parentIndex));
        this.compView_0.create(this._ProfileComponent_0_3.context);
        this.init(null, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_AppComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_8__app_profile_profile_component__["a" /* ProfileComponent */]) && (0 === requestNodeIndex))) {
            return this._ProfileComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ProfileComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AppComponent0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    return View_AppComponent0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=D:/Repos/gh-aboutme/src/app.component.ngfactory.js.map

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = [''];
//# sourceMappingURL=D:/Repos/gh-aboutme/src/app.component.scss.shim.ngstyle.js.map

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms_src_directives__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms_src_form_providers__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http_module__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_src_localization__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core_src_application_init__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core_src_testability_testability__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core_src_application_ref__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_compiler__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_src_dom_events_hammer_gestures__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_src_dom_events_event_manager__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_src_dom_shared_styles_host__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_src_dom_dom_renderer__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_src_security_dom_sanitization_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_core_src_animation_animation_queue__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_view_utils__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_src_browser_title__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_radio_control_value_accessor__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_http_src_backends_browser_xhr__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_http_src_base_response_options__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_http_src_backends_xhr_backend__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_http_src_base_request_options__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__app_shared_services_github_api_api_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__app_shared_services_user_config_resolver_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__app_shared_services_config_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__app_component_ngfactory__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_core_src_i18n_tokens__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_core_src_application_tokens__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_platform_browser_src_dom_events_dom_events__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_platform_browser_src_dom_events_key_events__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_core_src_zone_ng_zone__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_platform_browser_src_dom_debug_ng_probe__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_core_src_console__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_core_src_error_handler__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__angular_platform_browser_src_dom_dom_tokens__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__angular_platform_browser_src_dom_animation_driver__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_core_src_render_api__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__angular_core_src_security__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_core_src_change_detection_differs_iterable_differs__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__angular_core_src_change_detection_differs_keyvalue_differs__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__angular_http_src_interfaces__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__angular_http_src_http__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModuleNgFactory; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};














































var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        _super.call(this, parent, [__WEBPACK_IMPORTED_MODULE_29__app_component_ngfactory__["a" /* AppComponentNgFactory */]], [__WEBPACK_IMPORTED_MODULE_29__app_component_ngfactory__["a" /* AppComponentNgFactory */]]);
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_7", {
        get: function () {
            if ((this.__LOCALE_ID_7 == null)) {
                (this.__LOCALE_ID_7 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["b" /* _localeFactory */](this.parent.get(__WEBPACK_IMPORTED_MODULE_30__angular_core_src_i18n_tokens__["a" /* LOCALE_ID */], null)));
            }
            return this.__LOCALE_ID_7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_8", {
        get: function () {
            if ((this.__NgLocalization_8 == null)) {
                (this.__NgLocalization_8 = new __WEBPACK_IMPORTED_MODULE_8__angular_common_src_localization__["c" /* NgLocaleLocalization */](this._LOCALE_ID_7));
            }
            return this.__NgLocalization_8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_13", {
        get: function () {
            if ((this.__ApplicationRef_13 == null)) {
                (this.__ApplicationRef_13 = this._ApplicationRef__12);
            }
            return this.__ApplicationRef_13;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_14", {
        get: function () {
            if ((this.__Compiler_14 == null)) {
                (this.__Compiler_14 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_compiler__["b" /* Compiler */]());
            }
            return this.__Compiler_14;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_15", {
        get: function () {
            if ((this.__APP_ID_15 == null)) {
                (this.__APP_ID_15 = __WEBPACK_IMPORTED_MODULE_31__angular_core_src_application_tokens__["e" /* _appIdRandomProviderFactory */]());
            }
            return this.__APP_ID_15;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_16", {
        get: function () {
            if ((this.__DOCUMENT_16 == null)) {
                (this.__DOCUMENT_16 = __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["e" /* _document */]());
            }
            return this.__DOCUMENT_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_17", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_17 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_17 = new __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_src_dom_events_hammer_gestures__["c" /* HammerGestureConfig */]());
            }
            return this.__HAMMER_GESTURE_CONFIG_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_18", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_18 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_18 = [
                    new __WEBPACK_IMPORTED_MODULE_32__angular_platform_browser_src_dom_events_dom_events__["a" /* DomEventsPlugin */](),
                    new __WEBPACK_IMPORTED_MODULE_33__angular_platform_browser_src_dom_events_key_events__["a" /* KeyEventsPlugin */](),
                    new __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_src_dom_events_hammer_gestures__["a" /* HammerGesturesPlugin */](this._HAMMER_GESTURE_CONFIG_17)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_19", {
        get: function () {
            if ((this.__EventManager_19 == null)) {
                (this.__EventManager_19 = new __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_src_dom_events_event_manager__["a" /* EventManager */](this._EVENT_MANAGER_PLUGINS_18, this.parent.get(__WEBPACK_IMPORTED_MODULE_34__angular_core_src_zone_ng_zone__["a" /* NgZone */])));
            }
            return this.__EventManager_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_20", {
        get: function () {
            if ((this.__DomSharedStylesHost_20 == null)) {
                (this.__DomSharedStylesHost_20 = new __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_src_dom_shared_styles_host__["a" /* DomSharedStylesHost */](this._DOCUMENT_16));
            }
            return this.__DomSharedStylesHost_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_21", {
        get: function () {
            if ((this.__AnimationDriver_21 == null)) {
                (this.__AnimationDriver_21 = __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["f" /* _resolveDefaultAnimationDriver */]());
            }
            return this.__AnimationDriver_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_22", {
        get: function () {
            if ((this.__DomRootRenderer_22 == null)) {
                (this.__DomRootRenderer_22 = new __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_src_dom_dom_renderer__["b" /* DomRootRenderer_ */](this._DOCUMENT_16, this._EventManager_19, this._DomSharedStylesHost_20, this._AnimationDriver_21, this._APP_ID_15));
            }
            return this.__DomRootRenderer_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_23", {
        get: function () {
            if ((this.__RootRenderer_23 == null)) {
                (this.__RootRenderer_23 = __WEBPACK_IMPORTED_MODULE_35__angular_platform_browser_src_dom_debug_ng_probe__["b" /* _createConditionalRootRenderer */](this._DomRootRenderer_22, this.parent.get(__WEBPACK_IMPORTED_MODULE_35__angular_platform_browser_src_dom_debug_ng_probe__["c" /* NgProbeToken */], null), this.parent.get(__WEBPACK_IMPORTED_MODULE_11__angular_core_src_application_ref__["g" /* NgProbeToken */], null)));
            }
            return this.__RootRenderer_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_24", {
        get: function () {
            if ((this.__DomSanitizer_24 == null)) {
                (this.__DomSanitizer_24 = new __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_src_security_dom_sanitization_service__["b" /* DomSanitizerImpl */]());
            }
            return this.__DomSanitizer_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_25", {
        get: function () {
            if ((this.__Sanitizer_25 == null)) {
                (this.__Sanitizer_25 = this._DomSanitizer_24);
            }
            return this.__Sanitizer_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationQueue_26", {
        get: function () {
            if ((this.__AnimationQueue_26 == null)) {
                (this.__AnimationQueue_26 = new __WEBPACK_IMPORTED_MODULE_18__angular_core_src_animation_animation_queue__["a" /* AnimationQueue */](this.parent.get(__WEBPACK_IMPORTED_MODULE_34__angular_core_src_zone_ng_zone__["a" /* NgZone */])));
            }
            return this.__AnimationQueue_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_27", {
        get: function () {
            if ((this.__ViewUtils_27 == null)) {
                (this.__ViewUtils_27 = new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_view_utils__["ViewUtils"](this._RootRenderer_23, this._Sanitizer_25, this._AnimationQueue_26));
            }
            return this.__ViewUtils_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_28", {
        get: function () {
            if ((this.__IterableDiffers_28 == null)) {
                (this.__IterableDiffers_28 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["c" /* _iterableDiffersFactory */]());
            }
            return this.__IterableDiffers_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_29", {
        get: function () {
            if ((this.__KeyValueDiffers_29 == null)) {
                (this.__KeyValueDiffers_29 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["d" /* _keyValueDiffersFactory */]());
            }
            return this.__KeyValueDiffers_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_30", {
        get: function () {
            if ((this.__SharedStylesHost_30 == null)) {
                (this.__SharedStylesHost_30 = this._DomSharedStylesHost_20);
            }
            return this.__SharedStylesHost_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_31", {
        get: function () {
            if ((this.__Title_31 == null)) {
                (this.__Title_31 = new __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_src_browser_title__["a" /* Title */]());
            }
            return this.__Title_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RadioControlRegistry_32", {
        get: function () {
            if ((this.__RadioControlRegistry_32 == null)) {
                (this.__RadioControlRegistry_32 = new __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_radio_control_value_accessor__["b" /* RadioControlRegistry */]());
            }
            return this.__RadioControlRegistry_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_33", {
        get: function () {
            if ((this.__BrowserXhr_33 == null)) {
                (this.__BrowserXhr_33 = new __WEBPACK_IMPORTED_MODULE_22__angular_http_src_backends_browser_xhr__["a" /* BrowserXhr */]());
            }
            return this.__BrowserXhr_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_34", {
        get: function () {
            if ((this.__ResponseOptions_34 == null)) {
                (this.__ResponseOptions_34 = new __WEBPACK_IMPORTED_MODULE_23__angular_http_src_base_response_options__["b" /* BaseResponseOptions */]());
            }
            return this.__ResponseOptions_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_35", {
        get: function () {
            if ((this.__XSRFStrategy_35 == null)) {
                (this.__XSRFStrategy_35 = __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http_module__["b" /* _createDefaultCookieXSRFStrategy */]());
            }
            return this.__XSRFStrategy_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_36", {
        get: function () {
            if ((this.__XHRBackend_36 == null)) {
                (this.__XHRBackend_36 = new __WEBPACK_IMPORTED_MODULE_24__angular_http_src_backends_xhr_backend__["b" /* XHRBackend */](this._BrowserXhr_33, this._ResponseOptions_34, this._XSRFStrategy_35));
            }
            return this.__XHRBackend_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_37", {
        get: function () {
            if ((this.__RequestOptions_37 == null)) {
                (this.__RequestOptions_37 = new __WEBPACK_IMPORTED_MODULE_25__angular_http_src_base_request_options__["b" /* BaseRequestOptions */]());
            }
            return this.__RequestOptions_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_38", {
        get: function () {
            if ((this.__Http_38 == null)) {
                (this.__Http_38 = __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http_module__["c" /* httpFactory */](this._XHRBackend_36, this._RequestOptions_37));
            }
            return this.__Http_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApiService_39", {
        get: function () {
            if ((this.__ApiService_39 == null)) {
                (this.__ApiService_39 = new __WEBPACK_IMPORTED_MODULE_26__app_shared_services_github_api_api_service__["a" /* ApiService */](this._Http_38));
            }
            return this.__ApiService_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UserConfigResolverService_40", {
        get: function () {
            if ((this.__UserConfigResolverService_40 == null)) {
                (this.__UserConfigResolverService_40 = new __WEBPACK_IMPORTED_MODULE_27__app_shared_services_user_config_resolver_service__["a" /* UserConfigResolverService */]());
            }
            return this.__UserConfigResolverService_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ConfigService_41", {
        get: function () {
            if ((this.__ConfigService_41 == null)) {
                (this.__ConfigService_41 = new __WEBPACK_IMPORTED_MODULE_28__app_shared_services_config_service__["a" /* ConfigService */](this._Http_38, this._UserConfigResolverService_40));
            }
            return this.__ConfigService_41;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__["a" /* CommonModule */]();
        this._ApplicationModule_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["a" /* ApplicationModule */]();
        this._BrowserModule_2 = new __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["d" /* BrowserModule */](this.parent.get(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["d" /* BrowserModule */], null));
        this._InternalFormsSharedModule_3 = new __WEBPACK_IMPORTED_MODULE_5__angular_forms_src_directives__["b" /* InternalFormsSharedModule */]();
        this._FormsModule_4 = new __WEBPACK_IMPORTED_MODULE_6__angular_forms_src_form_providers__["a" /* FormsModule */]();
        this._HttpModule_5 = new __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http_module__["a" /* HttpModule */]();
        this._AppModule_6 = new __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]();
        this._ErrorHandler_9 = __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["g" /* errorHandler */]();
        this._ApplicationInitStatus_10 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_application_init__["a" /* ApplicationInitStatus */](this.parent.get(__WEBPACK_IMPORTED_MODULE_9__angular_core_src_application_init__["b" /* APP_INITIALIZER */], null));
        this._Testability_11 = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_testability_testability__["a" /* Testability */](this.parent.get(__WEBPACK_IMPORTED_MODULE_34__angular_core_src_zone_ng_zone__["a" /* NgZone */]));
        this._ApplicationRef__12 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_application_ref__["d" /* ApplicationRef_ */](this.parent.get(__WEBPACK_IMPORTED_MODULE_34__angular_core_src_zone_ng_zone__["a" /* NgZone */]), this.parent.get(__WEBPACK_IMPORTED_MODULE_36__angular_core_src_console__["a" /* Console */]), this, this._ErrorHandler_9, this, this._ApplicationInitStatus_10, this.parent.get(__WEBPACK_IMPORTED_MODULE_10__angular_core_src_testability_testability__["b" /* TestabilityRegistry */], null), this._Testability_11);
        return this._AppModule_6;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__["a" /* CommonModule */])) {
            return this._CommonModule_0;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["a" /* ApplicationModule */])) {
            return this._ApplicationModule_1;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["d" /* BrowserModule */])) {
            return this._BrowserModule_2;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_forms_src_directives__["b" /* InternalFormsSharedModule */])) {
            return this._InternalFormsSharedModule_3;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_6__angular_forms_src_form_providers__["a" /* FormsModule */])) {
            return this._FormsModule_4;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http_module__["a" /* HttpModule */])) {
            return this._HttpModule_5;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */])) {
            return this._AppModule_6;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_30__angular_core_src_i18n_tokens__["a" /* LOCALE_ID */])) {
            return this._LOCALE_ID_7;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_8__angular_common_src_localization__["b" /* NgLocalization */])) {
            return this._NgLocalization_8;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_37__angular_core_src_error_handler__["a" /* ErrorHandler */])) {
            return this._ErrorHandler_9;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_9__angular_core_src_application_init__["a" /* ApplicationInitStatus */])) {
            return this._ApplicationInitStatus_10;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_core_src_testability_testability__["a" /* Testability */])) {
            return this._Testability_11;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_11__angular_core_src_application_ref__["d" /* ApplicationRef_ */])) {
            return this._ApplicationRef__12;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_11__angular_core_src_application_ref__["e" /* ApplicationRef */])) {
            return this._ApplicationRef_13;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_compiler__["b" /* Compiler */])) {
            return this._Compiler_14;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_31__angular_core_src_application_tokens__["d" /* APP_ID */])) {
            return this._APP_ID_15;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_38__angular_platform_browser_src_dom_dom_tokens__["a" /* DOCUMENT */])) {
            return this._DOCUMENT_16;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_src_dom_events_hammer_gestures__["b" /* HAMMER_GESTURE_CONFIG */])) {
            return this._HAMMER_GESTURE_CONFIG_17;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_src_dom_events_event_manager__["c" /* EVENT_MANAGER_PLUGINS */])) {
            return this._EVENT_MANAGER_PLUGINS_18;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_src_dom_events_event_manager__["a" /* EventManager */])) {
            return this._EventManager_19;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_src_dom_shared_styles_host__["a" /* DomSharedStylesHost */])) {
            return this._DomSharedStylesHost_20;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_39__angular_platform_browser_src_dom_animation_driver__["a" /* AnimationDriver */])) {
            return this._AnimationDriver_21;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_src_dom_dom_renderer__["a" /* DomRootRenderer */])) {
            return this._DomRootRenderer_22;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_40__angular_core_src_render_api__["a" /* RootRenderer */])) {
            return this._RootRenderer_23;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_src_security_dom_sanitization_service__["a" /* DomSanitizer */])) {
            return this._DomSanitizer_24;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_41__angular_core_src_security__["a" /* Sanitizer */])) {
            return this._Sanitizer_25;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_18__angular_core_src_animation_animation_queue__["a" /* AnimationQueue */])) {
            return this._AnimationQueue_26;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_view_utils__["ViewUtils"])) {
            return this._ViewUtils_27;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_42__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */])) {
            return this._IterableDiffers_28;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_43__angular_core_src_change_detection_differs_keyvalue_differs__["a" /* KeyValueDiffers */])) {
            return this._KeyValueDiffers_29;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_src_dom_shared_styles_host__["b" /* SharedStylesHost */])) {
            return this._SharedStylesHost_30;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_src_browser_title__["a" /* Title */])) {
            return this._Title_31;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_radio_control_value_accessor__["b" /* RadioControlRegistry */])) {
            return this._RadioControlRegistry_32;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_22__angular_http_src_backends_browser_xhr__["a" /* BrowserXhr */])) {
            return this._BrowserXhr_33;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_23__angular_http_src_base_response_options__["a" /* ResponseOptions */])) {
            return this._ResponseOptions_34;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_44__angular_http_src_interfaces__["b" /* XSRFStrategy */])) {
            return this._XSRFStrategy_35;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_24__angular_http_src_backends_xhr_backend__["b" /* XHRBackend */])) {
            return this._XHRBackend_36;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_25__angular_http_src_base_request_options__["a" /* RequestOptions */])) {
            return this._RequestOptions_37;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_45__angular_http_src_http__["a" /* Http */])) {
            return this._Http_38;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_26__app_shared_services_github_api_api_service__["a" /* ApiService */])) {
            return this._ApiService_39;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_27__app_shared_services_user_config_resolver_service__["a" /* UserConfigResolverService */])) {
            return this._UserConfigResolverService_40;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_28__app_shared_services_config_service__["a" /* ConfigService */])) {
            return this._ConfigService_41;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__12.ngOnDestroy();
    };
    return AppModuleInjector;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["a" /* NgModuleInjector */]));
var AppModuleNgFactory = new __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["b" /* NgModuleFactory */](AppModuleInjector, __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/Repos/gh-aboutme/src/app.module.ngfactory.js.map

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_profile_profile_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_src_browser_title__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_shared_services_github_api_api_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_shared_services_config_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_shared_services_user_config_resolver_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_component_scss_shim_ngstyle__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_container__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_template_ref__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_core_src_security__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_core_src_change_detection_differs_iterable_differs__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_src_directives_ng_for__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_shared_pipes_social_icon_pipe__ = __webpack_require__(230);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Wrapper_ProfileComponent; });
/* unused harmony export ProfileComponentNgFactory */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return View_ProfileComponent0; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






















var Wrapper_ProfileComponent = (function () {
    function Wrapper_ProfileComponent(p0, p1, p2, p3) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_profile_profile_component__["a" /* ProfileComponent */](p0, p1, p2, p3);
    }
    Wrapper_ProfileComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_ProfileComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_ProfileComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_ProfileComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_ProfileComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_ProfileComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_ProfileComponent;
}());
var renderType_ProfileComponent_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_ProfileComponent_Host0 = (function (_super) {
    __extends(View_ProfileComponent_Host0, _super);
    function View_ProfileComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_ProfileComponent_Host0, renderType_ProfileComponent_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_ProfileComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'app-profile', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_ProfileComponent0(this.viewUtils, this, 0, this._el_0);
        this._ProfileComponent_0_3 = new Wrapper_ProfileComponent(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_src_browser_title__["a" /* Title */], this.parentIndex), this.injectorGet(__WEBPACK_IMPORTED_MODULE_8__app_shared_services_github_api_api_service__["a" /* ApiService */], this.parentIndex), this.injectorGet(__WEBPACK_IMPORTED_MODULE_9__app_shared_services_config_service__["a" /* ConfigService */], this.parentIndex), this.injectorGet(__WEBPACK_IMPORTED_MODULE_10__app_shared_services_user_config_resolver_service__["a" /* UserConfigResolverService */], this.parentIndex));
        this.compView_0.create(this._ProfileComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["b" /* ComponentRef_ */](0, this, this._el_0, this._ProfileComponent_0_3.context);
    };
    View_ProfileComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_profile_profile_component__["a" /* ProfileComponent */]) && (0 === requestNodeIndex))) {
            return this._ProfileComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_ProfileComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ProfileComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_ProfileComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_ProfileComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ProfileComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var ProfileComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["a" /* ComponentFactory */]('app-profile', View_ProfileComponent_Host0, __WEBPACK_IMPORTED_MODULE_0__app_profile_profile_component__["a" /* ProfileComponent */]);
var styles_ProfileComponent = [__WEBPACK_IMPORTED_MODULE_11__profile_component_scss_shim_ngstyle__["a" /* styles */]];
var View_ProfileComponent1 = (function (_super) {
    __extends(View_ProfileComponent1, _super);
    function View_ProfileComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_ProfileComponent1, renderType_ProfileComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_ProfileComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'username'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_ProfileComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '@', ((this.parentView.context.user == null) ? null : this.parentView.context.user.username), '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_ProfileComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ProfileComponent1;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_ProfileComponent2 = (function (_super) {
    __extends(View_ProfileComponent2, _super);
    function View_ProfileComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_ProfileComponent2, renderType_ProfileComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_5 = __WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_ProfileComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'section', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n      ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ]), null);
        return null;
    };
    View_ProfileComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_5 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', ((this.parentView.context.user == null) ? null : this.parentView.context.user.bio), '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setText(this._text_3, currVal_5);
            this._expr_5 = currVal_5;
        }
    };
    View_ProfileComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ProfileComponent2;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_ProfileComponent4 = (function (_super) {
    __extends(View_ProfileComponent4, _super);
    function View_ProfileComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_ProfileComponent4, renderType_ProfileComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_8 = __WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_ProfileComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'li', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'meta-section'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'meta-section__header'), null);
        this._text_3 = this.renderer.createText(this._el_2, 'Location', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_5 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'meta-section__text'), null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n          ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7
        ]), null);
        return null;
    };
    View_ProfileComponent4.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_8 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', ((this.parentView.parentView.context.user == null) ? null : this.parentView.parentView.context.user.location), '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setText(this._text_6, currVal_8);
            this._expr_8 = currVal_8;
        }
    };
    View_ProfileComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ProfileComponent4;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_ProfileComponent5 = (function (_super) {
    __extends(View_ProfileComponent5, _super);
    function View_ProfileComponent5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_ProfileComponent5, renderType_ProfileComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_8 = __WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_ProfileComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'li', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'meta-section'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'meta-section__header'), null);
        this._text_3 = this.renderer.createText(this._el_2, 'Company', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_5 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'meta-section__text'), null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n          ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7
        ]), null);
        return null;
    };
    View_ProfileComponent5.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_8 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', ((this.parentView.parentView.context.user == null) ? null : this.parentView.parentView.context.user.company), '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setText(this._text_6, currVal_8);
            this._expr_8 = currVal_8;
        }
    };
    View_ProfileComponent5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ProfileComponent5;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_ProfileComponent3 = (function (_super) {
    __extends(View_ProfileComponent3, _super);
    function View_ProfileComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_ProfileComponent3, renderType_ProfileComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_ProfileComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'section', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'ul', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'unstyled-list meta-sections'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n          ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._vc_4 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_container__["a" /* ViewContainer */](4, 2, this, this._anchor_4);
        this._TemplateRef_4_5 = new __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 4, this._anchor_4);
        this._NgIf_4_6 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_4.vcRef, this._TemplateRef_4_5);
        this._text_5 = this.renderer.createText(this._el_2, '\n          ', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._vc_6 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_container__["a" /* ViewContainer */](6, 2, this, this._anchor_6);
        this._TemplateRef_6_5 = new __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 6, this._anchor_6);
        this._NgIf_6_6 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_6.vcRef, this._TemplateRef_6_5);
        this._text_7 = this.renderer.createText(this._el_2, '\n        ', null);
        this._text_8 = this.renderer.createText(this._el_0, '\n      ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._anchor_6,
            this._text_7,
            this._text_8
        ]), null);
        return null;
    };
    View_ProfileComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (4 === requestNodeIndex))) {
            return this._NgIf_4_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (6 === requestNodeIndex))) {
            return this._NgIf_6_6.context;
        }
        return notFoundResult;
    };
    View_ProfileComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4_0_0 = ((this.parentView.context.user == null) ? null : this.parentView.context.user.location);
        this._NgIf_4_6.check_ngIf(currVal_4_0_0, throwOnChange, false);
        this._NgIf_4_6.ngDoCheck(this, this._anchor_4, throwOnChange);
        var currVal_6_0_0 = ((this.parentView.context.user == null) ? null : this.parentView.context.user.company);
        this._NgIf_6_6.check_ngIf(currVal_6_0_0, throwOnChange, false);
        this._NgIf_6_6.ngDoCheck(this, this._anchor_6, throwOnChange);
        this._vc_4.detectChangesInNestedViews(throwOnChange);
        this._vc_6.detectChangesInNestedViews(throwOnChange);
    };
    View_ProfileComponent3.prototype.destroyInternal = function () {
        this._vc_4.destroyNestedViews();
        this._vc_6.destroyNestedViews();
    };
    View_ProfileComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ProfileComponent3.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 4)) {
            return new View_ProfileComponent4(this.viewUtils, this, 4, this._anchor_4, this._vc_4);
        }
        if ((nodeIndex == 6)) {
            return new View_ProfileComponent5(this.viewUtils, this, 6, this._anchor_6, this._vc_6);
        }
        return null;
    };
    return View_ProfileComponent3;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_ProfileComponent8 = (function (_super) {
    __extends(View_ProfileComponent8, _super);
    function View_ProfileComponent8(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_ProfileComponent8, renderType_ProfileComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_ProfileComponent8.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'span', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'tooltip-content'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_ProfileComponent8.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.parentView.context.$implicit.text, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_ProfileComponent8.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ProfileComponent8;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_ProfileComponent7 = (function (_super) {
    __extends(View_ProfileComponent7, _super);
    function View_ProfileComponent7(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_ProfileComponent7, renderType_ProfileComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_12 = __WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_13 = __WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_ProfileComponent7.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'li', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'icon tooltip'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'a', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_3 = this.renderer.createText(this._el_2, '\n              ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, 'i', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'aria-hidden', 'true'), null);
        this._text_5 = this.renderer.createText(this._el_2, '\n            ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n            ', null);
        this._anchor_7 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_7 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_container__["a" /* ViewContainer */](7, 0, this, this._anchor_7);
        this._TemplateRef_7_5 = new __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 7, this._anchor_7);
        this._NgIf_7_6 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_7.vcRef, this._TemplateRef_7_5);
        this._text_8 = this.renderer.createText(this._el_0, '\n          ', null);
        this._pipe_socialIcon_0_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["pureProxy1"](this.parentView.parentView._pipe_socialIcon_0.transform.bind(this.parentView.parentView._pipe_socialIcon_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._anchor_7,
            this._text_8
        ]), null);
        return null;
    };
    View_ProfileComponent7.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (7 === requestNodeIndex))) {
            return this._TemplateRef_7_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (7 === requestNodeIndex))) {
            return this._NgIf_7_6.context;
        }
        return notFoundResult;
    };
    View_ProfileComponent7.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new __WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_change_detection_util__["c" /* ValueUnwrapper */]();
        var currVal_7_0_0 = this.context.$implicit.text;
        this._NgIf_7_6.check_ngIf(currVal_7_0_0, throwOnChange, false);
        this._NgIf_7_6.ngDoCheck(this, this._anchor_7, throwOnChange);
        this._vc_7.detectChangesInNestedViews(throwOnChange);
        var currVal_12 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', (this.context.$implicit.link || 'javascript:void(0);'), '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementProperty(this._el_2, 'href', this.viewUtils.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_17__angular_core_src_security__["b" /* SecurityContext */].URL, currVal_12));
            this._expr_12 = currVal_12;
        }
        valUnwrapper.reset();
        var currVal_13 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, 'fa fa-lg ', valUnwrapper.unwrap(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["castByValue"](this._pipe_socialIcon_0_0, this.parentView.parentView._pipe_socialIcon_0.transform)(this.context.$implicit.type)), '');
        if ((valUnwrapper.hasWrappedValue || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_13, currVal_13))) {
            this.renderer.setElementProperty(this._el_4, 'className', currVal_13);
            this._expr_13 = currVal_13;
        }
    };
    View_ProfileComponent7.prototype.destroyInternal = function () {
        this._vc_7.destroyNestedViews();
    };
    View_ProfileComponent7.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ProfileComponent7.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 7)) {
            return new View_ProfileComponent8(this.viewUtils, this, 7, this._anchor_7, this._vc_7);
        }
        return null;
    };
    return View_ProfileComponent7;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_ProfileComponent6 = (function (_super) {
    __extends(View_ProfileComponent6, _super);
    function View_ProfileComponent6(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_ProfileComponent6, renderType_ProfileComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_ProfileComponent6.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'section', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'ul', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'unstyled-list icons'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n          ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._vc_4 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_container__["a" /* ViewContainer */](4, 2, this, this._anchor_4);
        this._TemplateRef_4_5 = new __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 4, this._anchor_4);
        this._NgFor_4_6 = new __WEBPACK_IMPORTED_MODULE_18__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_4.vcRef, this._TemplateRef_4_5, this.parentView.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_19__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentView.parentIndex), this.parentView.ref);
        this._text_5 = this.renderer.createText(this._el_2, '\n        ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n      ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._text_6
        ]), null);
        return null;
    };
    View_ProfileComponent6.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_20__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (4 === requestNodeIndex))) {
            return this._NgFor_4_6.context;
        }
        return notFoundResult;
    };
    View_ProfileComponent6.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4_0_0 = this.parentView.context.user.socialIcons;
        this._NgFor_4_6.check_ngForOf(currVal_4_0_0, throwOnChange, false);
        this._NgFor_4_6.ngDoCheck(this, this._anchor_4, throwOnChange);
        this._vc_4.detectChangesInNestedViews(throwOnChange);
    };
    View_ProfileComponent6.prototype.destroyInternal = function () {
        this._vc_4.destroyNestedViews();
    };
    View_ProfileComponent6.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ProfileComponent6.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 4)) {
            return new View_ProfileComponent7(this.viewUtils, this, 4, this._anchor_4, this._vc_4);
        }
        return null;
    };
    return View_ProfileComponent6;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var renderType_ProfileComponent = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_ProfileComponent, {});
var View_ProfileComponent0 = (function (_super) {
    __extends(View_ProfileComponent0, _super);
    function View_ProfileComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_ProfileComponent0, renderType_ProfileComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
        this._expr_39 = __WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_40 = __WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_ProfileComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'profile'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'profile__header'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'image-container circle'), null);
        this._text_5 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_7 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'profile__content'), null);
        this._text_8 = this.renderer.createText(this._el_7, '\n    ', null);
        this._el_9 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_7, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'content'), null);
        this._text_10 = this.renderer.createText(this._el_9, '\n\n      ', null);
        this._el_11 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_9, 'section', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_12 = this.renderer.createText(this._el_11, '\n        ', null);
        this._el_13 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_11, 'h1', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'name'), null);
        this._text_14 = this.renderer.createText(this._el_13, '', null);
        this._text_15 = this.renderer.createText(this._el_11, '\n        ', null);
        this._anchor_16 = this.renderer.createTemplateAnchor(this._el_11, null);
        this._vc_16 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_container__["a" /* ViewContainer */](16, 11, this, this._anchor_16);
        this._TemplateRef_16_5 = new __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 16, this._anchor_16);
        this._NgIf_16_6 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_16.vcRef, this._TemplateRef_16_5);
        this._text_17 = this.renderer.createText(this._el_11, '\n      ', null);
        this._text_18 = this.renderer.createText(this._el_9, '\n\n      ', null);
        this._anchor_19 = this.renderer.createTemplateAnchor(this._el_9, null);
        this._vc_19 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_container__["a" /* ViewContainer */](19, 9, this, this._anchor_19);
        this._TemplateRef_19_5 = new __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 19, this._anchor_19);
        this._NgIf_19_6 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_19.vcRef, this._TemplateRef_19_5);
        this._text_20 = this.renderer.createText(this._el_9, '\n\n      ', null);
        this._anchor_21 = this.renderer.createTemplateAnchor(this._el_9, null);
        this._vc_21 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_container__["a" /* ViewContainer */](21, 9, this, this._anchor_21);
        this._TemplateRef_21_5 = new __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 21, this._anchor_21);
        this._NgIf_21_6 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_21.vcRef, this._TemplateRef_21_5);
        this._text_22 = this.renderer.createText(this._el_9, '\n\n      ', null);
        this._anchor_23 = this.renderer.createTemplateAnchor(this._el_9, null);
        this._vc_23 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_view_container__["a" /* ViewContainer */](23, 9, this, this._anchor_23);
        this._TemplateRef_23_5 = new __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 23, this._anchor_23);
        this._NgIf_23_6 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_23.vcRef, this._TemplateRef_23_5);
        this._text_24 = this.renderer.createText(this._el_9, '\n\n    ', null);
        this._text_25 = this.renderer.createText(this._el_7, '\n  ', null);
        this._text_26 = this.renderer.createText(this._el_0, '\n', null);
        this._pipe_socialIcon_0 = new __WEBPACK_IMPORTED_MODULE_21__app_shared_pipes_social_icon_pipe__["a" /* SocialIconPipe */]();
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._anchor_16,
            this._text_17,
            this._text_18,
            this._anchor_19,
            this._text_20,
            this._anchor_21,
            this._text_22,
            this._anchor_23,
            this._text_24,
            this._text_25,
            this._text_26
        ]), null);
        return null;
    };
    View_ProfileComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (16 === requestNodeIndex))) {
            return this._TemplateRef_16_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (16 === requestNodeIndex))) {
            return this._NgIf_16_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (19 === requestNodeIndex))) {
            return this._TemplateRef_19_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (19 === requestNodeIndex))) {
            return this._NgIf_19_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (21 === requestNodeIndex))) {
            return this._TemplateRef_21_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (21 === requestNodeIndex))) {
            return this._NgIf_21_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (23 === requestNodeIndex))) {
            return this._TemplateRef_23_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (23 === requestNodeIndex))) {
            return this._NgIf_23_6.context;
        }
        return notFoundResult;
    };
    View_ProfileComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_16_0_0 = ((this.context.user == null) ? null : this.context.user.username);
        this._NgIf_16_6.check_ngIf(currVal_16_0_0, throwOnChange, false);
        this._NgIf_16_6.ngDoCheck(this, this._anchor_16, throwOnChange);
        var currVal_19_0_0 = ((this.context.user == null) ? null : this.context.user.bio);
        this._NgIf_19_6.check_ngIf(currVal_19_0_0, throwOnChange, false);
        this._NgIf_19_6.ngDoCheck(this, this._anchor_19, throwOnChange);
        var currVal_21_0_0 = (((this.context.user == null) ? null : this.context.user.location) || ((this.context.user == null) ? null : this.context.user.company));
        this._NgIf_21_6.check_ngIf(currVal_21_0_0, throwOnChange, false);
        this._NgIf_21_6.ngDoCheck(this, this._anchor_21, throwOnChange);
        var currVal_23_0_0 = (((this.context.user == null) ? null : this.context.user.socialIcons.length) > 0);
        this._NgIf_23_6.check_ngIf(currVal_23_0_0, throwOnChange, false);
        this._NgIf_23_6.ngDoCheck(this, this._anchor_23, throwOnChange);
        this._vc_16.detectChangesInNestedViews(throwOnChange);
        this._vc_19.detectChangesInNestedViews(throwOnChange);
        this._vc_21.detectChangesInNestedViews(throwOnChange);
        this._vc_23.detectChangesInNestedViews(throwOnChange);
        var currVal_39 = (('url(' + ((this.context.user == null) ? null : this.context.user.avatarUrl)) + ')');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_39, currVal_39)) {
            this.renderer.setElementStyle(this._el_4, 'background-image', ((this.viewUtils.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_17__angular_core_src_security__["b" /* SecurityContext */].STYLE, currVal_39) == null) ? null : this.viewUtils.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_17__angular_core_src_security__["b" /* SecurityContext */].STYLE, currVal_39).toString()));
            this._expr_39 = currVal_39;
        }
        var currVal_40 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', ((this.context.user == null) ? null : this.context.user.name), '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_40, currVal_40)) {
            this.renderer.setText(this._text_14, currVal_40);
            this._expr_40 = currVal_40;
        }
    };
    View_ProfileComponent0.prototype.destroyInternal = function () {
        this._vc_16.destroyNestedViews();
        this._vc_19.destroyNestedViews();
        this._vc_21.destroyNestedViews();
        this._vc_23.destroyNestedViews();
    };
    View_ProfileComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 16)) {
            return new View_ProfileComponent1(this.viewUtils, this, 16, this._anchor_16, this._vc_16);
        }
        if ((nodeIndex == 19)) {
            return new View_ProfileComponent2(this.viewUtils, this, 19, this._anchor_19, this._vc_19);
        }
        if ((nodeIndex == 21)) {
            return new View_ProfileComponent3(this.viewUtils, this, 21, this._anchor_21, this._vc_21);
        }
        if ((nodeIndex == 23)) {
            return new View_ProfileComponent6(this.viewUtils, this, 23, this._anchor_23, this._vc_23);
        }
        return null;
    };
    return View_ProfileComponent0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=D:/Repos/gh-aboutme/src/profile.component.ngfactory.js.map

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['.image-container[_ngcontent-%COMP%] {\n  width: 100px;\n  padding-bottom: 100px;\n  background-size: contain; }\n  .image-container.circle[_ngcontent-%COMP%] {\n    border-radius: 50%; }\n\n.profile__header[_ngcontent-%COMP%] {\n  background: #e5e6e8;\n  padding: 50px;\n  box-shadow: inset 0 -4px 2px -2px rgba(0, 0, 0, 0.05);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .profile__header[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n    width: 200px;\n    padding-bottom: 200px;\n    -webkit-box-flex: 0; }\n\n.profile__content[_ngcontent-%COMP%] {\n  padding: 50px 50px;\n  background: #fff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .profile__content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    -webkit-box-flex: 0; }\n  .profile__content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    margin-bottom: 30px; }\n  .profile__content[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    font-size: 1.4em;\n    letter-spacing: -.028em;\n    font-weight: 700;\n    margin-bottom: 0; }\n\n.meta-sections[_ngcontent-%COMP%] {\n  margin: 0 -3%; }\n  .meta-sections[_ngcontent-%COMP%]:after {\n    content: "";\n    display: table;\n    clear: both; }\n  .meta-sections[_ngcontent-%COMP%]   .meta-section[_ngcontent-%COMP%] {\n    float: left;\n    max-width: 200px;\n    width: 44%;\n    margin: 0 3%;\n    font-size: 12px; }\n    .meta-sections[_ngcontent-%COMP%]   .meta-section__header[_ngcontent-%COMP%] {\n      font-weight: 700;\n      text-transform: uppercase; }\n\n.icons[_ngcontent-%COMP%]:after {\n  content: "";\n  display: table;\n  clear: both; }\n\n.icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  float: left;\n  margin: 0 10px 10px 0; }\n\n\n@media only screen and (min-width: 768px) {\n  .profile[_ngcontent-%COMP%] {\n    height: 100vh; }\n    .profile[_ngcontent-%COMP%]:after {\n      content: "";\n      display: table;\n      clear: both; }\n    .profile__header[_ngcontent-%COMP%] {\n      position: fixed;\n      float: left;\n      width: 60%;\n      height: 100%;\n      box-shadow: inset -4px 0 2px -2px rgba(0, 0, 0, 0.05); }\n    .profile__content[_ngcontent-%COMP%] {\n      float: right;\n      width: 40%;\n      height: 100%;\n      padding: 100px 50px; } }'];
//# sourceMappingURL=D:/Repos/gh-aboutme/src/profile.component.scss.shim.ngstyle.js.map

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_for__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_NgFor; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_NgFor = (function () {
    function Wrapper_NgFor(p0, p1, p2, p3) {
        this._changed = false;
        this._changes = {};
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_for__["a" /* NgFor */](p0, p1, p2, p3);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_NgFor.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NgFor.prototype.ngOnDestroy = function () {
    };
    Wrapper_NgFor.prototype.check_ngForOf = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.ngForOf = currValue;
            this._changes['ngForOf'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_NgFor.prototype.check_ngForTrackBy = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.ngForTrackBy = currValue;
            this._changes['ngForTrackBy'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_1, currValue);
            this._expr_1 = currValue;
        }
    };
    Wrapper_NgFor.prototype.check_ngForTemplate = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.ngForTemplate = currValue;
            this._changes['ngForTemplate'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_2, currValue);
            this._expr_2 = currValue;
        }
    };
    Wrapper_NgFor.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
            this.context.ngDoCheck();
        }
        return changed;
    };
    Wrapper_NgFor.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NgFor.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NgFor.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NgFor;
}());
//# sourceMappingURL=D:/Repos/gh-aboutme/src/ng_for.ngfactory.js.map

/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_if__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_NgIf; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_NgIf = (function () {
    function Wrapper_NgIf(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_if__["a" /* NgIf */](p0, p1);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_NgIf.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NgIf.prototype.ngOnDestroy = function () {
    };
    Wrapper_NgIf.prototype.check_ngIf = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.ngIf = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_NgIf.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_NgIf.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NgIf.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NgIf.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NgIf;
}());
//# sourceMappingURL=D:/Repos/gh-aboutme/src/ng_if.ngfactory.js.map

/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_github_api_api_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_config_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_user_config_resolver_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_pipes_social_icon_pipe__ = __webpack_require__(230);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_9__shared_pipes_social_icon_pipe__["a" /* SocialIconPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__shared_services_github_api_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_5__shared_services_config_service__["a" /* ConfigService */],
                __WEBPACK_IMPORTED_MODULE_6__shared_services_user_config_resolver_service__["a" /* UserConfigResolverService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/Repos/gh-aboutme/src/app.module.js.map

/***/ },

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SocialIconTypes; });
var SocialIconTypes;
(function (SocialIconTypes) {
    SocialIconTypes[SocialIconTypes["ANGELLIST"] = 'ANGELLIST'] = "ANGELLIST";
    SocialIconTypes[SocialIconTypes["EMAIL"] = 'EMAIL'] = "EMAIL";
    SocialIconTypes[SocialIconTypes["BEHANCE"] = 'BEHANCE'] = "BEHANCE";
    SocialIconTypes[SocialIconTypes["CODEPEN"] = 'CODEPEN'] = "CODEPEN";
    SocialIconTypes[SocialIconTypes["DRIBBBLE"] = 'DRIBBBLE'] = "DRIBBBLE";
    SocialIconTypes[SocialIconTypes["FACEBOOK"] = 'FACEBOOK'] = "FACEBOOK";
    SocialIconTypes[SocialIconTypes["GITHUB"] = 'GITHUB'] = "GITHUB";
    SocialIconTypes[SocialIconTypes["GOOGLE_PLUS"] = 'GOOGLE_PLUS'] = "GOOGLE_PLUS";
    SocialIconTypes[SocialIconTypes["INSTAGRAM"] = 'INSTAGRAM'] = "INSTAGRAM";
    SocialIconTypes[SocialIconTypes["LINKEDIN"] = 'LINKEDIN'] = "LINKEDIN";
    SocialIconTypes[SocialIconTypes["PINTEREST"] = 'PINTEREST'] = "PINTEREST";
    SocialIconTypes[SocialIconTypes["STACK_OVERFLOW"] = 'STACK_OVERFLOW'] = "STACK_OVERFLOW";
    SocialIconTypes[SocialIconTypes["SKYPE"] = 'SKYPE'] = "SKYPE";
    SocialIconTypes[SocialIconTypes["TWITTER"] = 'TWITTER'] = "TWITTER";
    SocialIconTypes[SocialIconTypes["YOUTUBE"] = 'YOUTUBE'] = "YOUTUBE";
    SocialIconTypes[SocialIconTypes["WEBSITE"] = 'WEBSITE'] = "WEBSITE";
})(SocialIconTypes || (SocialIconTypes = {}));
//# sourceMappingURL=D:/Repos/gh-aboutme/src/SocialIconTypes.js.map

/***/ },

/***/ 348:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SocialIcon; });
var SocialIcon = (function () {
    function SocialIcon() {
    }
    return SocialIcon;
}());
//# sourceMappingURL=D:/Repos/gh-aboutme/src/SocialIcon.js.map

/***/ },

/***/ 349:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());
//# sourceMappingURL=D:/Repos/gh-aboutme/src/User.js.map

/***/ },

/***/ 350:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SocialIcon__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__User__ = __webpack_require__(349);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__SocialIcon__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__User__["a"]; });


//# sourceMappingURL=D:/Repos/gh-aboutme/src/index.js.map

/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return User; });
var User = (function () {
    function User(input) {
        if (input) {
            this.setInput(input);
        }
    }
    User.prototype.setInput = function (input) {
        this.name = input.name;
        this.username = input.login;
        this.email = input.email;
        this.bio = input.bio;
        this.location = input.location;
        this.company = input.company;
        this.htmlUrl = input.html_url;
        this.avatarUrl = input.avatar_url;
        this.publicRepos = input.public_repos;
        this.publicGists = input.public_gists;
        this.followers = input.followers;
        this.following = input.following;
        this.createdAt = new Date(input.created_at);
        this.updatedAt = new Date(input.updated_at);
    };
    return User;
}());
//# sourceMappingURL=D:/Repos/gh-aboutme/src/User.js.map

/***/ },

/***/ 352:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Models__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(76);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "User", function() { return __WEBPACK_IMPORTED_MODULE_0__Models__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ApiService", function() { return __WEBPACK_IMPORTED_MODULE_1__api_service__["a"]; });


//# sourceMappingURL=D:/Repos/gh-aboutme/src/index.js.map

/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/Repos/gh-aboutme/src/environment.js.map

/***/ },

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=D:/Repos/gh-aboutme/src/polyfills.js.map

/***/ },

/***/ 526:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(274);


/***/ },

/***/ 55:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(350);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserConfigResolverService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserConfigResolverService = (function () {
    function UserConfigResolverService() {
    }
    UserConfigResolverService.prototype.resolve = function (githubUser, config) {
        var _this = this;
        var user = new __WEBPACK_IMPORTED_MODULE_1__models__["a" /* User */]();
        user.name = config.name ? config.name : githubUser.name;
        user.avatarUrl = config.avatarUrl ? config.avatarUrl : githubUser.avatarUrl;
        user.username = config.username === true ? githubUser.username : (config.username ? config.username : null);
        user.bio = config.bio === true ? githubUser.bio : (config.bio ? config.bio : null);
        user.location = config.location === true ? githubUser.location : (config.location ? config.location : null);
        user.company = config.company === true ? githubUser.company : (config.company ? config.company : null);
        user.socialIcons = config.socialIcons.map(function (p) { return _this.resolveSocialIcons(p); });
        return user;
    };
    UserConfigResolverService.prototype.resolveSocialIcons = function (p) {
        var profileModel = new __WEBPACK_IMPORTED_MODULE_1__models__["b" /* SocialIcon */]();
        profileModel.type = p.type;
        profileModel.link = p.link;
        profileModel.text = p.text;
        return profileModel;
    };
    UserConfigResolverService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], UserConfigResolverService);
    return UserConfigResolverService;
}());
//# sourceMappingURL=D:/Repos/gh-aboutme/src/user-config-resolver.service.js.map

/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_config_resolver_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ConfigService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfigService = (function () {
    function ConfigService(http, userConfigResolver) {
        this.http = http;
        this.userConfigResolver = userConfigResolver;
    }
    ConfigService.prototype.getConfiguration = function () {
        return this.http.get(ConfigService.configPath)
            .map(function (result) {
            return JSON.parse(result.text());
        });
    };
    ConfigService.configPath = 'config.json';
    ConfigService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_config_resolver_service__["a" /* UserConfigResolverService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__user_config_resolver_service__["a" /* UserConfigResolverService */]) === 'function' && _b) || Object])
    ], ConfigService);
    return ConfigService;
    var _a, _b;
}());
//# sourceMappingURL=D:/Repos/gh-aboutme/src/config.service.js.map

/***/ },

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models__ = __webpack_require__(231);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.host = 'https://api.github.com';
    }
    ApiService.prototype.getUser = function (username) {
        var requestUrl = this.host + "/users/" + username;
        return this.http.get(requestUrl)
            .map(function (res) { return new __WEBPACK_IMPORTED_MODULE_3__Models__["a" /* User */](res.json()); });
    };
    ApiService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], ApiService);
    return ApiService;
    var _a;
}());
//# sourceMappingURL=D:/Repos/gh-aboutme/src/api.service.js.map

/***/ }

},[526]);
//# sourceMappingURL=main.bundle.map