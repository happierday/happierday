webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_verify_verify_component__ = __webpack_require__("../../../../../src/app/components/verify/verify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_joke_detail_joke_detail_component__ = __webpack_require__("../../../../../src/app/components/joke-detail/joke-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_new_post_new_post_component__ = __webpack_require__("../../../../../src/app/components/new-post/new-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_nonauth_service__ = __webpack_require__("../../../../../src/app/services/auth/nonauth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'jokes/:title',
        component: __WEBPACK_IMPORTED_MODULE_7__components_joke_detail_joke_detail_component__["a" /* JokeDetailComponent */]
    },
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__["a" /* RegisterComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_auth_nonauth_service__["a" /* NonauthService */]]
    },
    {
        path: 'newpost',
        component: __WEBPACK_IMPORTED_MODULE_8__components_new_post_new_post_component__["a" /* NewPostComponent */]
    },
    {
        path: 'logout',
        redirectTo: ''
    },
    {
        path: 'verify/:id',
        component: __WEBPACK_IMPORTED_MODULE_6__components_verify_verify_component__["a" /* VerifyComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__["a" /* LoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_auth_nonauth_service__["a" /* NonauthService */]]
    },
    {
        path: 'profile/:username',
        component: __WEBPACK_IMPORTED_MODULE_5__components_profile_profile_component__["a" /* ProfileComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */],
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { useHash: true })
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_verify_verify_component__ = __webpack_require__("../../../../../src/app/components/verify/verify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_joke_detail_joke_detail_component__ = __webpack_require__("../../../../../src/app/components/joke-detail/joke-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_new_post_new_post_component__ = __webpack_require__("../../../../../src/app/components/new-post/new-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_signup_signup_service__ = __webpack_require__("../../../../../src/app/services/signup/signup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_login_login_service__ = __webpack_require__("../../../../../src/app/services/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_auth_nonauth_service__ = __webpack_require__("../../../../../src/app/services/auth/nonauth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_jokes_jokes_service__ = __webpack_require__("../../../../../src/app/services/jokes/jokes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_profile_profile_service__ = __webpack_require__("../../../../../src/app/services/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_newPost_new_post_service__ = __webpack_require__("../../../../../src/app/services/newPost/new-post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_verify_verify_component__["a" /* VerifyComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_joke_detail_joke_detail_component__["a" /* JokeDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_new_post_new_post_component__["a" /* NewPostComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__services_signup_signup_service__["a" /* SignUpService */],
            __WEBPACK_IMPORTED_MODULE_16__services_login_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_17__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_18__services_auth_auth_guard_service__["a" /* AuthGuardService */],
            __WEBPACK_IMPORTED_MODULE_19__services_auth_nonauth_service__["a" /* NonauthService */],
            __WEBPACK_IMPORTED_MODULE_20__services_jokes_jokes_service__["a" /* JokesService */],
            __WEBPACK_IMPORTED_MODULE_21__services_profile_profile_service__["a" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_22__services_newPost_new_post_service__["a" /* NewPostService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron {\r\n    text-align: center;\r\n}\r\n\r\n.card{\r\n    transition: 0.5s;\r\n    height: 15em;\r\n    margin-top: 1em;\r\n}\r\n\r\n.card:hover{\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.alert{\r\n    margin-top: 1em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    <h1>Happierday</h1>\r\n    <p class=\"lead\">A place where you can share your happiness with other</p>\r\n    <p *ngIf=\"!authService.loggedIn()\">\r\n        <a class=\"btn btn-lg btn-success\" routerLink=\"/signup\" role=\"button\">Get started today</a>\r\n    </p>\r\n    <p *ngIf=\"authService.loggedIn()\">\r\n        <a class=\"btn btn-lg btn-success\" routerLink=\"/newpost\" role=\"button\">New Post</a>\r\n    </p>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-6\" *ngFor=\"let joke of jokes\">\r\n        <div class=\"card text-center\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">{{ joke.title }}</h4>\r\n                <p class=\"card-text\">{{ joke.content.substring(0,joke.content.length/2)}}...</p>\r\n                <a routerLink=\"/jokes/{{joke.ref}}\" class=\"btn btn-primary\">View Detail</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_jokes_jokes_service__ = __webpack_require__("../../../../../src/app/services/jokes/jokes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(jokesService, authService) {
        this.jokesService = jokesService;
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jokesService.getJokes().subscribe(function (res) {
            _this.jokes = JSON.parse(JSON.stringify(res));
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_jokes_jokes_service__["a" /* JokesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_jokes_jokes_service__["a" /* JokesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/joke-detail/joke-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/joke-detail/joke-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 50rem;\">\r\n    <div class=\"card-header bg-transparent\">{{ jokeDetail.title }}</div>\r\n    <div class=\"card-body\">\r\n        <h4 class=\"card-title\">Success card title</h4>\r\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n    </div>\r\n    <div class=\"card-footer bg-transparent\">Footer</div>\r\n</div>\r\n\r\n<!-- <div class = \"container\">\r\n    <p>Title: {{jokeDetail?.title}}</p>\r\n    <p>content: {{jokeDetail?.content}}</p>\r\n    <p>createdAt: {{jokeDetail?.createdAt}}</p>\r\n    <div *ngIf=\"!authStatus\">\r\n        <p>username: {{jokeDetail?.username}}</p>\r\n        <p>likes: {{jokeDetail?.likes}}</p>\r\n        <p>dislikes: {{jokeDetail?.dislikes}}</p>\r\n        <button type=\"button\" class=\"btn btn-primary\">Like</button>\r\n        <button type=\"button\" class=\"btn btn-danger\">Dislike</button>\r\n        <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#newComment\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n                New Comment\r\n            </button>\r\n            <div class=\"collapse\" id=\"newComment\">\r\n                <div class = \"jumbotron\">\r\n                    <div *ngIf=\"loggedIn\">\r\n                        <form [formGroup] = \"commentForm\" (submit) = \"creteNewComment()\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"comment\">comment</label>\r\n                                <input type=\"text\" class=\"form-control\"  formControlName = \"comment\">\r\n                                <textarea class=\"form-control\"rows=\"5\" formControlName = \"content\"></textarea>\r\n                                <div *ngIf=\"commentForm.controls.comment.errors && commentForm.controls.comment.dirty\" class=\"alert alert-danger\">\r\n                                    <div *ngIf=\"commentForm.controls.comment.errors?.required\">\r\n                                        comment is required.\r\n                                    </div>\r\n                                    <div *ngIf=\"commentForm.controls.comment.errors?.minlength && !commentForm.controls.comment.errors?.required\">\r\n                                        comment should have at least 5 characters.\r\n                                    </div>\r\n                                    <div *ngIf=\"commentForm.controls.comment.errors?.maxlength && !commentForm.controls.comment.errors?.required\">\r\n                                        comment should not exceed 1000 characters long.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <p>Character Left: {{1000-postForm.get('comment').value.length}}</p>\r\n                            <button type=\"submit\" [disabled] = \"commentForm.controls.comment.errors || !commentForm.controls.comment.dirty\"class=\"btn btn-success\">Post</button>\r\n                        </form>\r\n                    </div>\r\n                    <div *ngIf=\"!loggedIn\">\r\n                        Oops. It seems like you didn't log in.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n    </div>\r\n    <div *ngIf=\"authStatus\">\r\n        <button type=\"button\" class=\"btn btn-primary\">Edit</button>\r\n        <button type=\"button\" class=\"btn btn-danger\">Delete</button>\r\n    </div>        \r\n</div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/joke-detail/joke-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JokeDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_jokes_jokes_service__ = __webpack_require__("../../../../../src/app/services/jokes/jokes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JokeDetailComponent = (function () {
    function JokeDetailComponent(router, jokeService, formBuilder) {
        this.router = router;
        this.jokeService = jokeService;
        this.formBuilder = formBuilder;
    }
    JokeDetailComponent.prototype.createForm = function () {
        this.commentForm = this.formBuilder.group({
            comment: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].maxLength(1000)
                ])]
        });
    };
    JokeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jokeService.getJokeDetail(this.router.url.split('/')[2]).subscribe(function (res) {
            _this.response = JSON.parse(JSON.stringify(res));
            _this.jokeDetail = _this.response.joke;
            _this.authStatus = _this.response.auth;
        });
        console.log(this.jokeDetail);
    };
    return JokeDetailComponent;
}());
JokeDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-joke-detail',
        template: __webpack_require__("../../../../../src/app/components/joke-detail/joke-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/joke-detail/joke-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_jokes_jokes_service__["a" /* JokesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_jokes_jokes_service__["a" /* JokesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
], JokeDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=joke-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"jumbotron\">\r\n        <h1 class= \"page-header\">Login</h1>\r\n\r\n        <div class = \"row  show-hide-message\">\r\n            <div [ngClass] =\"messageClass\">\r\n                {{ message }}\r\n            </div>\r\n        </div>\r\n\r\n        <form [formGroup] = \"userForm\" (submit) = \"onLoginSubmit()\">\r\n            <div class=\"form-group\" >\r\n                <label for=\"username\" >Username</label>\r\n                <input type=\"text\"  id=\"username\" class=\"form-control\"  placeholder=\"username\" formControlName=\"username\"\r\n                [ngClass]=\"{'is-invalid':userForm.controls.username.errors&&userForm.controls.username.dirty,'is-valid':!userForm.controls.username.errors}\">\r\n                <div *ngIf=\"(userForm.controls.username.errors && userForm.controls.username.dirty)\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"userForm.controls.username.errors?.required\">\r\n                        Userame is required.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" id=\"password\"   placeholder=\"password\" formControlName=\"password\"\r\n                [ngClass]=\"{'is-invalid':userForm.controls.password.errors&&userForm.controls.password.dirty,'is-valid':!userForm.controls.password.errors}\">\r\n                <div *ngIf=\"userForm.controls.password.errors && userForm.controls.password.dirty\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"userForm.controls.password.errors?.required\">\r\n                        Password is required.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <button [disabled] = \"!userForm.valid || logedIn\" type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_login_service__ = __webpack_require__("../../../../../src/app/services/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(formBuilder, router, loginService, authGuardService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.loginService = loginService;
        this.authGuardService = authGuardService;
        this.state = 3;
        this.logedIn = false;
        this.createForm();
    }
    LoginComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
        });
    };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.disableForm = function () {
        this.userForm.controls['username'].disable();
        this.userForm.controls['password'].disable();
    };
    LoginComponent.prototype.enableForm = function () {
        this.userForm.controls['username'].enable();
        this.userForm.controls['password'].enable();
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.logedIn = true;
        this.disableForm();
        var user = {
            username: this.userForm.get('username').value,
            password: this.userForm.get('password').value
        };
        this.loginService.Login(user).subscribe(function (res) {
            _this.response = JSON.parse(JSON.stringify(res));
            _this.message = _this.response.message;
            if (_this.response.success) {
                _this.messageClass = 'alert alert-success';
                _this.loginService.storeUser(_this.response.token, user.username);
                setTimeout(function () {
                    if (_this.url) {
                        _this.router.navigate([_this.url]);
                    }
                    else {
                        _this.router.navigate(['/']);
                    }
                }, 1000);
            }
            else {
                _this.logedIn = false;
                _this.messageClass = 'alert alert-danger';
                _this.enableForm();
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_login_login_service__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_guard_service__["a" /* AuthGuardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_guard_service__["a" /* AuthGuardService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul.nav li a, ul.nav li a:visited {\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default navbar-expand-lg navbar-dark navbar-static-top bg-success nav-tabs\">\r\n    <a class=\"navbar-brand\" routerLink = \"/\">Happierday</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\" aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo01\">\r\n        <ul class=\"nav justify-content-end mr-auto\">\r\n            <li class=\"nav-item \"  routerLinkActive = \"active\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                <a class=\"nav-link\"  routerLink = \"/\">Home</a>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"nav justify-content-end\">\r\n            <li class=\"nav-item \"  *ngIf= \"!authService.loggedIn()\" routerLinkActive = \"active\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                <a class=\"nav-link\" routerLink = \"/login\">Login</a>\r\n            </li>\r\n            <li class=\"nav-item \" *ngIf= \"!authService.loggedIn()\" routerLinkActive = \"active\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                <a class=\"nav-link\" routerLink = \"/signup\">Signup</a>\r\n            </li>\r\n            <li class=\"nav-item \"  *ngIf= \"authService.loggedIn()\" routerLinkActive = \"active\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                <a class=\"nav-link\" routerLink = \"/profile/{{authService.username}}\">{{authService.username}}</a>\r\n            </li>\r\n            <li class=\"nav-item \"  *ngIf= \"authService.loggedIn()\" routerLinkActive = \"active\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                <a class=\"nav-link\" routerLink = \"/logout\" (click)=\"onLogOut()\" >Logout</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogOut = function () {
        this.authService.logOut();
        this.router.navigate(['/']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/new-post/new-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#message{\r\n    text-align: center\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/new-post/new-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"newPost\">\n    <div class = \"jumbotron\">\n\n        <div class = \"row  show-hide-message\">\n            <div [ngClass] =\"messageClass\">\n                {{ message }}\n            </div>\n        </div>\n\n        <div *ngIf=\"authService.loggedIn()\">\n            <form [formGroup] = \"postForm\" (submit) = \"createNewPost()\">\n                <div class=\"form-group\">\n                    <label for=\"title\">Title</label>\n                    <input type=\"text\" class=\"form-control\"  formControlName = \"title\">\n                    <div *ngIf=\"postForm.controls.title.errors && postForm.controls.title.dirty\" class=\"alert alert-danger\">\n                        <div *ngIf=\"postForm.controls.title.errors?.required\">\n                            Title is required.\n                        </div>\n                        <div *ngIf=\"postForm.controls.title.errors?.minlength && !postForm.controls.title.errors?.required\">\n                            Title should have at least 5 characters.\n                        </div>\n                        <div *ngIf=\"postForm.controls.title.errors?.maxlength && !postForm.controls.title.errors?.required\">\n                            Title should not exceed 50 characters long.\n                        </div>\n                    </div>\n                    <label for=\"content\">What you want to post</label>\n                    <textarea class=\"form-control\"rows=\"5\" formControlName = \"content\"></textarea>\n                    <div *ngIf=\"postForm.controls.content.errors && postForm.controls.content.dirty\" class=\"alert alert-danger\">\n                        <div *ngIf=\"postForm.controls.content.errors?.required\">\n                            Content is required.\n                        </div>\n                        <div *ngIf=\"postForm.controls.content.errors?.minlength && !postForm.controls.content.errors?.required\">\n                            Post should have at least 50 characters.\n                        </div>\n                        <div *ngIf=\"postForm.controls.content.errors?.maxlength && !postForm.controls.content.errors?.required\">\n                            Post should not exceed 5000 characters long.\n                        </div>\n                    </div>\n                </div>\n                <p>Character Left: {{5000-postForm.get('content').value.length}}</p>\n                <button type=\"submit\" [disabled] = \"postForm.controls.content.errors || (!postForm.controls.content.dirty && !postForm.controls.title.dirty) \"class=\"btn btn-success\">Post</button>\n            </form>\n        </div>\n        <div *ngIf=\"!authService.loggedIn()\" id = \"message\">\n            Oops. It seems like you didn't log in.\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/new-post/new-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_newPost_new_post_service__ = __webpack_require__("../../../../../src/app/services/newPost/new-post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewPostComponent = (function () {
    function NewPostComponent(router, formBuilder, authService, newPostService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.newPostService = newPostService;
        this.createForm();
    }
    NewPostComponent.prototype.ngOnInit = function () { };
    NewPostComponent.prototype.createForm = function () {
        this.postForm = this.formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].maxLength(50)
                ])],
            content: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(50),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].maxLength(5000)
                ])]
        });
    };
    NewPostComponent.prototype.createNewPost = function () {
        var _this = this;
        var form = {
            title: this.postForm.get('title').value,
            content: this.postForm.get('content').value,
            username: localStorage.getItem('username')
        };
        this.newPostService.newPost(form).subscribe(function (res) {
            console.log(res);
            _this.response = JSON.parse(JSON.stringify(res));
            _this.message = _this.response.message;
            if (_this.response.success) {
                _this.messageClass = 'alert alert-success';
                setTimeout(function () {
                    _this.router.navigate(['/']);
                }, 1000);
            }
            else {
                _this.messageClass = 'alert alert-danger';
            }
        });
    };
    return NewPostComponent;
}());
NewPostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-post',
        template: __webpack_require__("../../../../../src/app/components/new-post/new-post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/new-post/new-post.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_newPost_new_post_service__["a" /* NewPostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_newPost_new_post_service__["a" /* NewPostService */]) === "function" && _d || Object])
], NewPostComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=new-post.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"jumbotron\">\r\n        <h1 class = \"page-header\">profile</h1>\r\n            <p>username: {{username}}</p>\r\n            <p>Email: {{email}}</p>\r\n        <div *ngIf=\"authStatus\">\r\n            <button type=\"button\" class=\"btn btn-primary\">Edit</button>\r\n            <button type=\"button\" class=\"btn btn-danger\">Delete Account</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_profile_profile_service__ = __webpack_require__("../../../../../src/app/services/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function ProfileComponent(profileService, router) {
        this.profileService = profileService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getProfile(this.router.url.split('/')[2]).subscribe(function (res) {
            _this.result = JSON.parse(JSON.stringify(res));
            _this.authStatus = _this.result.auth;
            _this.email = _this.result.email;
            _this.username = _this.result.username;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_profile_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_profile_profile_service__["a" /* ProfileService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"jumbotron\">\r\n        <h1 class= \"page-header\">Sign up</h1>\r\n\r\n        <div class = \"row  show-hide-message\">\r\n            <div [ngClass] =\"messageClass\">\r\n                {{ message }}\r\n            </div>\r\n        </div>\r\n\r\n        <form [formGroup] = \"userForm\" (submit) = \"onRegisterSubmit()\">\r\n            <div class=\"form-group\">\r\n                <label for=\"username\" >Username</label>\r\n                <input type=\"text\"  id=\"username\" class=\"form-control\"  placeholder=\"username\" formControlName=\"username\"\r\n                [ngClass]=\"{'is-invalid':userForm.controls.username.errors&&userForm.controls.username.dirty,'is-valid':!userForm.controls.username.errors}\">\r\n                <div *ngIf=\"(userForm.controls.username.errors && userForm.controls.username.dirty)\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"userForm.controls.username.errors?.required\">\r\n                        Userame is required.\r\n                    </div>\r\n                    <div *ngIf=\"userForm.controls.username.errors?.minlength && !userForm.controls.username.errors?.required\">\r\n                        Userame must have at least 5 characters.\r\n                    </div>\r\n                    <div *ngIf=\"userForm.controls.username.errors?.maxlength && !userForm.controls.username.errors?.required\">\r\n                        Userame must be no longer than 20 characters.\r\n                    </div>\r\n                    <div *ngIf=\"userForm.controls.username.errors?.validateUsername && !userForm.controls.username.errors?.required\">\r\n                        Username should not contain any special characters.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"email\">Email</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"email\"  placeholder=\"email\" formControlName=\"email\"\r\n                [ngClass]=\"{'is-invalid':userForm.controls.email.errors&&userForm.controls.email.dirty,'is-valid':!userForm.controls.email.errors}\">\r\n                <div *ngIf=\"userForm.controls.email.errors && userForm.controls.email.dirty\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"userForm.controls.email.errors?.required\">\r\n                        Email is required.\r\n                    </div>\r\n                    <div *ngIf=\"userForm.controls.email.errors?.minlength && !userForm.controls.email.errors?.required\">\r\n                        Email must have at least 10 characters.\r\n                    </div>\r\n                    <div *ngIf=\"userForm.controls.email.errors?.maxlength && !userForm.controls.email.errors?.required\" >\r\n                        Email is too long.\r\n                    </div>\r\n                    <div *ngIf=\"userForm.controls.email.errors?.validateEmail && !userForm.controls.email.errors?.required\">\r\n                        Must be a valid email.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" id=\"password\"   placeholder=\"password\" formControlName=\"password\"\r\n                [ngClass]=\"{'is-invalid':userForm.controls.password.errors&&userForm.controls.password.dirty,'is-valid':!userForm.controls.password.errors}\">\r\n                <div *ngIf=\"userForm.controls.password.errors && userForm.controls.password.dirty\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"userForm.controls.password.errors?.required\">\r\n                        Password is required.\r\n                    </div>\r\n                    <div *ngIf=\"userForm.controls.password.errors?.minlength && !userForm.controls.password.errors?.required\">\r\n                        Password must have at least 8 characters.\r\n                    </div>\r\n                    <div *ngIf=\"userForm.controls.password.errors?.validatePassword && !userForm.controls.password.errors?.required\">\r\n                        Password should contain at least one lower,upper case and number.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"confirmPassword\">Confirm Password</label>\r\n                <input type=\"password\" class=\"form-control\" id=\"confirmPassword\"  placeholder=\"confirmPassword\" formControlName=\"confirmPassword\"\r\n                [ngClass]=\"{'is-invalid':(userForm.controls.confirmPassword.errors || userForm.errors) &&userForm.controls.confirmPassword.dirty,'is-valid':!userForm.controls.confirmPassword.errors && !userForm.errors}\">\r\n                <div *ngIf=\"userForm.controls.confirmPassword.dirty && userForm.errors\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"userForm.controls.confirmPassword.errors?.required\">\r\n                        Confirm Password is required.\r\n                    </div>\r\n                    <div *ngIf=\"!userForm.controls.confirmPassword.errors?.required && userForm.errors?.matchPassword\">\r\n                        Password doesn't match.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <button [disabled] = \"!userForm.valid || signedUp\" type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n        </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_signup_signup_service__ = __webpack_require__("../../../../../src/app/services/signup/signup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(formBuilder, signUpService, router) {
        this.formBuilder = formBuilder;
        this.signUpService = signUpService;
        this.router = router;
        this.signedUp = false;
        this.createForm();
    }
    RegisterComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(20),
                    this.validateUsername
                ])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(10),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(50),
                    this.validateEmail
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(8),
                    this.validatePassword
                ])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required
            ]
        }, { validator: this.matchPassword('password', 'confirmPassword') });
    };
    //disable/enable forms
    RegisterComponent.prototype.disableForm = function () {
        this.userForm.controls['username'].disable();
        this.userForm.controls['email'].disable();
        this.userForm.controls['password'].disable();
        this.userForm.controls['confirmPassword'].disable();
    };
    RegisterComponent.prototype.enableForm = function () {
        this.userForm.controls['username'].enable();
        this.userForm.controls['email'].enable();
        this.userForm.controls['password'].enable();
        this.userForm.controls['confirmPassword'].enable();
    };
    //validate user inputs
    RegisterComponent.prototype.validateEmail = function (controls) {
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validateEmail': true };
        }
    };
    RegisterComponent.prototype.validatePassword = function (controls) {
        var regExp = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validatePassword': true };
        }
    };
    RegisterComponent.prototype.validateUsername = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validateUsername': true };
        }
    };
    RegisterComponent.prototype.matchPassword = function (password, confirmPassword) {
        return function (group) {
            if (group.controls[password].value && group.controls[password].value) {
                if (group.controls[password].value === group.controls[confirmPassword].value) {
                    return null;
                }
                else {
                    return { 'matchPassword': true };
                }
            }
            else {
                return { 'matchPassword': true };
            }
        };
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.signedUp = true;
        this.disableForm();
        var user = {
            username: this.userForm.get('username').value,
            email: this.userForm.get('email').value,
            password: this.userForm.get('password').value
        };
        this.signUpService.registerUser(user).subscribe(function (res) {
            _this.registerResponse = JSON.parse(JSON.stringify(res));
            if (_this.registerResponse.success) {
                _this.messageClass = 'alert alert-success';
                localStorage.setItem('hash', _this.registerResponse.hash);
            }
            else {
                _this.messageClass = 'alert alert-danger';
                _this.signedUp = false;
                _this.enableForm();
            }
            _this.message = _this.registerResponse.message;
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_signup_signup_service__["a" /* SignUpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_signup_signup_service__["a" /* SignUpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/verify/verify.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/verify/verify.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"jumbotron\">\r\n        <h1 class= \"page-header\">Verify</h1>\r\n        <div class = \"row  show-hide-message\">\r\n            <div [ngClass] =\"messageClass\">\r\n                {{ message }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/verify/verify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_signup_signup_service__ = __webpack_require__("../../../../../src/app/services/signup/signup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerifyComponent = (function () {
    function VerifyComponent(router, signUpService) {
        this.router = router;
        this.signUpService = signUpService;
        this.verify();
    }
    VerifyComponent.prototype.ngOnInit = function () {
    };
    VerifyComponent.prototype.verify = function () {
        var _this = this;
        this.signUpService.verifyUser(localStorage.getItem('hash')).subscribe(function (res) {
            _this.response = JSON.parse(JSON.stringify(res));
            _this.message = _this.response.message;
            if (_this.response.success) {
                _this.signUpService.storeUser(_this.response.username, _this.response.token);
                localStorage.removeItem('hash');
                _this.messageClass = 'alert alert-success';
                setTimeout(function () {
                    _this.router.navigate(['/profile/' + _this.response.username]);
                }, 2000);
            }
            else {
                _this.messageClass = 'alert alert-danger';
            }
        });
    };
    return VerifyComponent;
}());
VerifyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-verify',
        template: __webpack_require__("../../../../../src/app/components/verify/verify.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/verify/verify.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_signup_signup_service__["a" /* SignUpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_signup_signup_service__["a" /* SignUpService */]) === "function" && _b || Object])
], VerifyComponent);

var _a, _b;
//# sourceMappingURL=verify.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (router, state) {
        if (localStorage.getItem('token')) {
            return true;
        }
        else {
            if (localStorage.getItem('username')) {
                this.redirectUrl = undefined;
            }
            else {
                this.redirectUrl = state.url;
                this.router.navigate(['/login']);
            }
            return false;
        }
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthGuardService);

var _a;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.serverDomain = "https://happierday.herokuapp.com";
    }
    AuthService.prototype.authUser = function () {
        this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'content-Type': 'application/json',
            'authtoken': localStorage.getItem('token')
        });
    };
    AuthService.prototype.storeUser = function (token, username) {
        localStorage.setItem('username', username);
        localStorage.setItem('token', token);
    };
    AuthService.prototype.loggedIn = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])()) {
            this.username = localStorage.getItem('username');
            return true;
        }
        else {
            this.username = undefined;
            return false;
        }
    };
    AuthService.prototype.logOut = function () {
        this.username = undefined;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth/nonauth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NonauthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NonauthService = (function () {
    function NonauthService(router) {
        this.router = router;
    }
    NonauthService.prototype.canActivate = function () {
        if (localStorage.getItem('token')) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    };
    return NonauthService;
}());
NonauthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], NonauthService);

var _a;
//# sourceMappingURL=nonauth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/jokes/jokes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JokesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JokesService = (function () {
    function JokesService(authService, http) {
        this.authService = authService;
        this.http = http;
    }
    JokesService.prototype.getJokes = function () {
        return this.http.get(this.authService.serverDomain);
    };
    JokesService.prototype.getJokeDetail = function (title) {
        if (this.authService.loggedIn()) {
            this.authService.authUser();
            return this.http.get(this.authService.serverDomain + '/jokes/' + title, { headers: this.authService.header });
        }
        else {
            return this.http.get(this.authService.serverDomain + '/jokes/' + title);
        }
    };
    return JokesService;
}());
JokesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
], JokesService);

var _a, _b;
//# sourceMappingURL=jokes.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = (function () {
    function LoginService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    LoginService.prototype.Login = function (user) {
        return this.http.post(this.authService.serverDomain + '/login', user);
    };
    LoginService.prototype.storeUser = function (token, username) {
        this.authService.storeUser(token, username);
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], LoginService);

var _a, _b;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/newPost/new-post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewPostService = (function () {
    function NewPostService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    NewPostService.prototype.newPost = function (form) {
        this.authService.authUser();
        return this.http.post(this.authService.serverDomain + '/newpost', form, { headers: this.authService.header });
    };
    return NewPostService;
}());
NewPostService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], NewPostService);

var _a, _b;
//# sourceMappingURL=new-post.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/profile/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = (function () {
    function ProfileService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    ProfileService.prototype.getProfile = function (username) {
        if (this.authService.loggedIn()) {
            this.authService.authUser();
            return this.http.get(this.authService.serverDomain + '/profile/' + username, { headers: this.authService.header });
        }
        else {
            return this.http.get(this.authService.serverDomain + '/profile/' + username);
        }
    };
    return ProfileService;
}());
ProfileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], ProfileService);

var _a, _b;
//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/signup/signup.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpService = (function () {
    function SignUpService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    SignUpService.prototype.registerUser = function (user) {
        return this.http.post(this.authService.serverDomain + '/signup', user);
    };
    SignUpService.prototype.verifyUser = function (id) {
        this.url = this.authService.serverDomain + '/verify/' + id;
        return this.http.get(this.url);
    };
    SignUpService.prototype.storeUser = function (token, username) {
        this.authService.storeUser(token, username);
    };
    return SignUpService;
}());
SignUpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], SignUpService);

var _a, _b;
//# sourceMappingURL=signup.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map