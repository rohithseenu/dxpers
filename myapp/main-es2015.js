(self["webpackChunkxavro"] = self["webpackChunkxavro"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

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
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _components_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home-one/home-one.component */ 2489);
/* harmony import */ var _components_home_two_home_two_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home-two/home-two.component */ 6519);
/* harmony import */ var _components_home_three_home_three_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home-three/home-three.component */ 3562);
/* harmony import */ var _components_home_four_home_four_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home-four/home-four.component */ 7496);
/* harmony import */ var _components_home_five_home_five_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home-five/home-five.component */ 3806);
/* harmony import */ var _components_home_six_home_six_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home-six/home-six.component */ 6174);
/* harmony import */ var _components_home_seven_home_seven_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home-seven/home-seven.component */ 4616);
/* harmony import */ var _components_home_eight_home_eight_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home-eight/home-eight.component */ 3860);
/* harmony import */ var _components_home_nine_home_nine_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home-nine/home-nine.component */ 7747);
/* harmony import */ var _components_home_ten_home_ten_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home-ten/home-ten.component */ 390);
/* harmony import */ var _components_home_eleven_home_eleven_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home-eleven/home-eleven.component */ 2505);
/* harmony import */ var _components_home_twelve_home_twelve_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home-twelve/home-twelve.component */ 7505);
/* harmony import */ var _components_home_thirteen_home_thirteen_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home-thirteen/home-thirteen.component */ 1011);
/* harmony import */ var _components_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/blog-details/blog-details.component */ 8794);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 7716);

















const routes = [
    { path: '', component: _components_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_0__.HomeOneComponent },
    { path: 'home-two', component: _components_home_two_home_two_component__WEBPACK_IMPORTED_MODULE_1__.HomeTwoComponent },
    { path: 'home-three', component: _components_home_three_home_three_component__WEBPACK_IMPORTED_MODULE_2__.HomeThreeComponent },
    { path: 'home-four', component: _components_home_four_home_four_component__WEBPACK_IMPORTED_MODULE_3__.HomeFourComponent },
    { path: 'home-five', component: _components_home_five_home_five_component__WEBPACK_IMPORTED_MODULE_4__.HomeFiveComponent },
    { path: 'home-six', component: _components_home_six_home_six_component__WEBPACK_IMPORTED_MODULE_5__.HomeSixComponent },
    { path: 'home-seven', component: _components_home_seven_home_seven_component__WEBPACK_IMPORTED_MODULE_6__.HomeSevenComponent },
    { path: 'home-eight', component: _components_home_eight_home_eight_component__WEBPACK_IMPORTED_MODULE_7__.HomeEightComponent },
    { path: 'home-nine', component: _components_home_nine_home_nine_component__WEBPACK_IMPORTED_MODULE_8__.HomeNineComponent },
    { path: 'home-ten', component: _components_home_ten_home_ten_component__WEBPACK_IMPORTED_MODULE_9__.HomeTenComponent },
    { path: 'home-eleven', component: _components_home_eleven_home_eleven_component__WEBPACK_IMPORTED_MODULE_10__.HomeElevenComponent },
    { path: 'home-twelve', component: _components_home_twelve_home_twelve_component__WEBPACK_IMPORTED_MODULE_11__.HomeTwelveComponent },
    { path: 'home-thirteen', component: _components_home_thirteen_home_thirteen_component__WEBPACK_IMPORTED_MODULE_12__.HomeThirteenComponent },
    { path: 'blog-details', component: _components_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_13__.BlogDetailsComponent },
    // Here add new pages component
    { path: '**', component: _components_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_0__.HomeOneComponent } // This line will remain down from the whole pages component list
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/common/navbar/navbar.component */ 4173);
/* harmony import */ var _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/common/footer/footer.component */ 1823);







class AppComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.recallJsFuntions();
    }
    recallJsFuntions() {
        this.routerSubscription = this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationCancel))
            .subscribe(event => {
            this.location = this.router.url;
            if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AppComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["????ProvidersFeature"]([
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location, {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__.LocationStrategy,
                useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__.PathLocationStrategy
            }
        ])], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](2, "app-footer");
    } }, directives: [_components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-sticky-nav */ 9217);
/* harmony import */ var ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-smart-modal */ 2259);
/* harmony import */ var ngx_scrolltop__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ngx-scrolltop */ 9528);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ngx-owl-carousel-o */ 5668);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ngx_countup__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ngx-countup */ 5046);
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ngx-typed-js */ 3192);
/* harmony import */ var ngx_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-accordion */ 8362);
/* harmony import */ var ngx_accordion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_accordion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_tabset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-tabset */ 293);
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ng2-tooltip-directive */ 1463);
/* harmony import */ var ngx_particle__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ngx-particle */ 5290);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_common_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/common/preloader/preloader.component */ 4425);
/* harmony import */ var _components_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home-one/home-one.component */ 2489);
/* harmony import */ var _components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/common/navbar/navbar.component */ 4173);
/* harmony import */ var _components_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/common/welcome/welcome.component */ 3416);
/* harmony import */ var _components_common_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/common/about/about.component */ 7042);
/* harmony import */ var _components_common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/common/strategy/strategy.component */ 8181);
/* harmony import */ var _components_common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/common/who-we-are/who-we-are.component */ 2096);
/* harmony import */ var _components_common_cta_cta_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/common/cta/cta.component */ 9769);
/* harmony import */ var _components_common_skill_skill_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/common/skill/skill.component */ 3649);
/* harmony import */ var _components_common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/common/funfacts/funfacts.component */ 5357);
/* harmony import */ var _components_common_team_team_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/common/team/team.component */ 6278);
/* harmony import */ var _components_common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/common/how-we-work/how-we-work.component */ 4679);
/* harmony import */ var _components_common_services_services_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/common/services/services.component */ 8211);
/* harmony import */ var _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/common/footer/footer.component */ 1823);
/* harmony import */ var _components_common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/common/subscribe/subscribe.component */ 9495);
/* harmony import */ var _components_common_partner_partner_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/common/partner/partner.component */ 6455);
/* harmony import */ var _components_common_blog_blog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/common/blog/blog.component */ 3635);
/* harmony import */ var _components_common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/common/feedback/feedback.component */ 6900);
/* harmony import */ var _components_common_faq_faq_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/common/faq/faq.component */ 2631);
/* harmony import */ var _components_common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/common/pricing/pricing.component */ 2019);
/* harmony import */ var _components_common_work_work_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/common/work/work.component */ 3815);
/* harmony import */ var _components_common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/common/why-we-different/why-we-different.component */ 2337);
/* harmony import */ var _components_common_contact_contact_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/common/contact/contact.component */ 7524);
/* harmony import */ var _components_home_two_home_two_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/home-two/home-two.component */ 6519);
/* harmony import */ var _components_home_three_home_three_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/home-three/home-three.component */ 3562);
/* harmony import */ var _components_home_four_home_four_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/home-four/home-four.component */ 7496);
/* harmony import */ var _components_home_five_home_five_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/home-five/home-five.component */ 3806);
/* harmony import */ var _components_common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/common/services-two/services-two.component */ 2784);
/* harmony import */ var _components_home_six_home_six_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/home-six/home-six.component */ 6174);
/* harmony import */ var _components_home_seven_home_seven_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/home-seven/home-seven.component */ 4616);
/* harmony import */ var _components_home_eight_home_eight_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/home-eight/home-eight.component */ 3860);
/* harmony import */ var _components_home_nine_home_nine_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/home-nine/home-nine.component */ 7747);
/* harmony import */ var _components_home_ten_home_ten_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/home-ten/home-ten.component */ 390);
/* harmony import */ var _components_home_eleven_home_eleven_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/home-eleven/home-eleven.component */ 2505);
/* harmony import */ var _components_home_twelve_home_twelve_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/home-twelve/home-twelve.component */ 7505);
/* harmony import */ var _components_home_thirteen_home_thirteen_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/home-thirteen/home-thirteen.component */ 1011);
/* harmony import */ var _components_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/blog-details/blog-details.component */ 8794);
/* harmony import */ var _components_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/common/demo-sidebar/demo-sidebar.component */ 1669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/core */ 7716);























































class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_44__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent] });
AppModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_44__["????defineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_45__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule,
            ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_0__.StickyNavModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_46__.BrowserAnimationsModule,
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_1__.NgxSmartModalModule.forRoot(),
            ngx_scrolltop__WEBPACK_IMPORTED_MODULE_47__.NgxScrollTopModule,
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_48__.CarouselModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_49__.FormsModule,
            ngx_accordion__WEBPACK_IMPORTED_MODULE_2__.AccordionModule,
            ngx_countup__WEBPACK_IMPORTED_MODULE_50__.CountUpModule,
            ngx_tabset__WEBPACK_IMPORTED_MODULE_3__.TabsModule,
            ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_51__.TooltipModule,
            ngx_typed_js__WEBPACK_IMPORTED_MODULE_52__.NgxTypedJsModule,
            ngx_particle__WEBPACK_IMPORTED_MODULE_53__.ParticlesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_44__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent,
        _components_common_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_6__.PreloaderComponent,
        _components_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_7__.HomeOneComponent,
        _components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__.NavbarComponent,
        _components_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__.WelcomeComponent,
        _components_common_about_about_component__WEBPACK_IMPORTED_MODULE_10__.AboutComponent,
        _components_common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_11__.StrategyComponent,
        _components_common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_12__.WhoWeAreComponent,
        _components_common_cta_cta_component__WEBPACK_IMPORTED_MODULE_13__.CtaComponent,
        _components_common_skill_skill_component__WEBPACK_IMPORTED_MODULE_14__.SkillComponent,
        _components_common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_15__.FunfactsComponent,
        _components_common_team_team_component__WEBPACK_IMPORTED_MODULE_16__.TeamComponent,
        _components_common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_17__.HowWeWorkComponent,
        _components_common_services_services_component__WEBPACK_IMPORTED_MODULE_18__.ServicesComponent,
        _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__.FooterComponent,
        _components_common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_20__.SubscribeComponent,
        _components_common_partner_partner_component__WEBPACK_IMPORTED_MODULE_21__.PartnerComponent,
        _components_common_blog_blog_component__WEBPACK_IMPORTED_MODULE_22__.BlogComponent,
        _components_common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_23__.FeedbackComponent,
        _components_common_faq_faq_component__WEBPACK_IMPORTED_MODULE_24__.FaqComponent,
        _components_common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_25__.PricingComponent,
        _components_common_work_work_component__WEBPACK_IMPORTED_MODULE_26__.WorkComponent,
        _components_common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_27__.WhyWeDifferentComponent,
        _components_common_contact_contact_component__WEBPACK_IMPORTED_MODULE_28__.ContactComponent,
        _components_home_two_home_two_component__WEBPACK_IMPORTED_MODULE_29__.HomeTwoComponent,
        _components_home_three_home_three_component__WEBPACK_IMPORTED_MODULE_30__.HomeThreeComponent,
        _components_home_four_home_four_component__WEBPACK_IMPORTED_MODULE_31__.HomeFourComponent,
        _components_home_five_home_five_component__WEBPACK_IMPORTED_MODULE_32__.HomeFiveComponent,
        _components_common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_33__.ServicesTwoComponent,
        _components_home_six_home_six_component__WEBPACK_IMPORTED_MODULE_34__.HomeSixComponent,
        _components_home_seven_home_seven_component__WEBPACK_IMPORTED_MODULE_35__.HomeSevenComponent,
        _components_home_eight_home_eight_component__WEBPACK_IMPORTED_MODULE_36__.HomeEightComponent,
        _components_home_nine_home_nine_component__WEBPACK_IMPORTED_MODULE_37__.HomeNineComponent,
        _components_home_ten_home_ten_component__WEBPACK_IMPORTED_MODULE_38__.HomeTenComponent,
        _components_home_eleven_home_eleven_component__WEBPACK_IMPORTED_MODULE_39__.HomeElevenComponent,
        _components_home_twelve_home_twelve_component__WEBPACK_IMPORTED_MODULE_40__.HomeTwelveComponent,
        _components_home_thirteen_home_thirteen_component__WEBPACK_IMPORTED_MODULE_41__.HomeThirteenComponent,
        _components_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_42__.BlogDetailsComponent,
        _components_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_43__.DemoSidebarComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_45__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule,
        ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_0__.StickyNavModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_46__.BrowserAnimationsModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_1__.NgxSmartModalModule, ngx_scrolltop__WEBPACK_IMPORTED_MODULE_47__.NgxScrollTopModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_48__.CarouselModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_49__.FormsModule,
        ngx_accordion__WEBPACK_IMPORTED_MODULE_2__.AccordionModule,
        ngx_countup__WEBPACK_IMPORTED_MODULE_50__.CountUpModule,
        ngx_tabset__WEBPACK_IMPORTED_MODULE_3__.TabsModule,
        ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_51__.TooltipModule,
        ngx_typed_js__WEBPACK_IMPORTED_MODULE_52__.NgxTypedJsModule,
        ngx_particle__WEBPACK_IMPORTED_MODULE_53__.ParticlesModule] }); })();


/***/ }),

/***/ 8794:
/*!*******************************************************************!*\
  !*** ./src/app/components/blog-details/blog-details.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogDetailsComponent": function() { return /* binding */ BlogDetailsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-tooltip-directive */ 1463);



class BlogDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlogDetailsComponent.??fac = function BlogDetailsComponent_Factory(t) { return new (t || BlogDetailsComponent)(); };
BlogDetailsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: BlogDetailsComponent, selectors: [["app-blog-details"]], decls: 160, vars: 0, consts: [[1, "page-title-area", "item-bg-two"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "page-title-content"], ["routerLink", "/"], [1, "fas", "fa-chevron-right"], [1, "active"], [1, "blog-details-area", "ptb-100"], [1, "row", "justify-content-center"], [1, "col-lg-8", "col-md-12"], [1, "blog-details"], [1, "article-img"], ["src", "assets/img/blog-details.jpg", "alt", "blog-details"], [1, "date"], [1, "article-text"], [1, "category"], [1, "title"], [1, "mb-0"], [1, "blockquote"], [1, "author-share"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-6"], [1, "article-author"], [1, "author-img"], ["src", "assets/img/client-avatar1.jpg", "alt", "client"], [1, "author-title"], [1, "social-share"], ["href", "#", "tooltip", "Share on Facebook"], [1, "fab", "fa-facebook-f"], ["href", "#", "target", "_blank", "tooltip", "Share on Twitter"], [1, "fab", "fa-twitter"], ["href", "#", "target", "_blank", "tooltip", "Share on Linkedin"], [1, "fab", "fa-linkedin-in"], ["href", "#", "target", "_blank", "tooltip", "Share on Instagram"], [1, "fab", "fa-instagram"], ["href", "#", "target", "_blank", "tooltip", "Share on Vimeo"], [1, "fab", "fa-vimeo-v"], [1, "post-controls-buttons"], [1, "controls-left"], ["routerLink", "/blog-details"], [1, "fas", "fa-chevron-left"], [1, "controls-right"], [1, "post-comments"], [1, "title", "mt-0"], [1, "single-comment"], [1, "comment-img"], ["src", "assets/img/client-avatar2.jpg", "alt", "client"], [1, "comment-content"], [1, "single-comment", "left-m"], ["src", "assets/img/client-avatar3.jpg", "alt", "client"], [1, "single-comment", "mb-0"], [1, "leave-a-reply"], [1, "row"], [1, "form-group"], ["type", "text", "name", "name", "placeholder", "Full Name", 1, "form-control"], ["type", "email", "name", "email", "placeholder", "E-Mail", 1, "form-control"], [1, "col-lg-12", "col-md-12"], ["name", "comment", "cols", "30", "rows", "5", "placeholder", "Your Comment", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]], template: function BlogDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Single Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "20 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Dec");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "IT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "How to Be a Work From Home Professional");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In necessitatibus provident facere, reiciendis voluptate dolorem iste consectetur veniam aperiam suscipit ad ipsum et labore a repellendus debitis explicabo quisquam obcaecati....");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eum alias debitis suscipit, sint dignissimos minus quisquam recusandae nostrum quas eligendi odit, fugiat eius rem. Cumque, labore placeat! Velit, vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus a labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus a labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "blockquote", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus a labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eum alias debitis suscipit, sint dignissimos minus quisquam recusandae nostrum quas eligendi odit, fugiat eius rem. Cumque, labore placeat! Velit, vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus a labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Back-End Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "ul", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, " Prev Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Next Post ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "h3", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](98, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "David Warner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Dec 19, 2018 - 9:10AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](110, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Eva Amith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Dec 19, 2018 - 9:10AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](122, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "James Andy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Dec 19, 2018 - 9:10AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](134, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "Audy Kanna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "Dec 19, 2018 - 9:10AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "h3", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "Leave a Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](153, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](156, "textarea", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__.TooltipDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7042:
/*!************************************************************!*\
  !*** ./src/app/components/common/about/about.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": function() { return /* binding */ AboutComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-smart-modal */ 2259);


class AboutComponent {
    constructor(ngxSmartModalService) {
        this.ngxSmartModalService = ngxSmartModalService;
    }
    ngOnInit() {
    }
}
AboutComponent.??fac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_0__.NgxSmartModalService)); };
AboutComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 50, vars: 1, consts: [["id", "about", 1, "about-area", "ptb-100"], [1, "container"], [1, "section-title"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-12"], [1, "about-content"], [1, "features-list"], [1, "fas", "fa-check"], [1, "about-video"], ["src", "assets/img/about.jpg", "alt", "about"], [1, "video-btn"], [1, "popup-youtube", 3, "click"], [1, "fas", "fa-play"], [1, "video-popup"], [3, "identifier"], ["popupOne", ""], ["src", "https://www.youtube.com/embed/WQ119jAN4Xo", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Xavro");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "We Are Digital ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Marketing & Branding");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](21, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](24, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Retina Ready");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](27, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "Responsive Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](30, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Modern Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](33, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "Awesome Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](36, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "Digital Marketing & Branding");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](42, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AboutComponent_Template_button_click_44_listener() { return ctx.ngxSmartModalService.getModal("popupOne").open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](45, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "ngx-smart-modal", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](49, "iframe", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("identifier", "popupOne");
    } }, directives: [ngx_smart_modal__WEBPACK_IMPORTED_MODULE_0__.NgxSmartModalComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3635:
/*!**********************************************************!*\
  !*** ./src/app/components/common/blog/blog.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogComponent": function() { return /* binding */ BlogComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel-o */ 5668);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);




function BlogComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Business");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "The best gear for starting a small business");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function BlogComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Tech");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Get your first business suit right with these tips");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function BlogComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Design");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "How to Make a Font - Font Design Full Process");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function BlogComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Marketing & Trend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "10 Hot Marketing Trends You Need to Implement");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function BlogComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Game");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "How to Be a Work From Home Professional");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class BlogComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
        this.blogSlides = {
            loop: true,
            nav: false,
            dots: true,
            autoplayHoverPause: true,
            autoplay: true,
            margin: 30,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 3,
                }
            }
        };
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
    }
}
BlogComponent.??fac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller)); };
BlogComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 18, vars: 1, consts: [["id", "blog", 1, "blog-area", "ptb-100"], [1, "container"], [1, "section-title"], [1, "blog-slides"], [3, "options"], ["carouselSlide", ""], [1, "single-blog-item", "bg1"], ["routerLink", "/blog-details"], ["routerLink", "/blog-details", "title", "Read More", 1, "link-btn"], [1, "fas", "fa-arrow-right"], [1, "single-blog-item", "bg2"], [1, "single-blog-item", "bg3"], [1, "single-blog-item", "bg4"], [1, "single-blog-item", "bg5"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Our News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Latest Blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "owl-carousel-o", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, BlogComponent_ng_template_13_Template, 10, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, BlogComponent_ng_template_14_Template, 10, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, BlogComponent_ng_template_15_Template, 10, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, BlogComponent_ng_template_16_Template, 10, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, BlogComponent_ng_template_17_Template, 10, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.blogSlides);
    } }, directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselSlideDirective, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7524:
/*!****************************************************************!*\
  !*** ./src/app/components/common/contact/contact.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": function() { return /* binding */ ContactComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);



function ContactComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ContactComponent_div_24_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Name is minimum ", _r1.errors.minlength.requiredLength, " character.");
} }
function ContactComponent_div_24_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Name is maximum 50 character.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ContactComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ContactComponent_div_24_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ContactComponent_div_24_div_2_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ContactComponent_div_24_div_3_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r1.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r1.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r1.errors.maxlength);
} }
function ContactComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Email Address is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ContactComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Phone subject is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ContactComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Phone number is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ContactComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Message is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class ContactComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
    }
    submit(form) {
        var name = form.name;
        console.log(name);
        var email = form.email;
        console.log(email);
        var number = form.number;
        console.log(number);
        var subject = form.subject;
        console.log(subject);
        var message = form.message;
        console.log(message);
    }
}
ContactComponent.??fac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller)); };
ContactComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 84, vars: 7, consts: [["id", "contact", 1, "contact-area", "ptb-100", "bg-F7F5F4"], [1, "container"], [1, "section-title"], [1, "row"], [1, "col-lg-7", "col-md-12"], [1, "contact-form"], [3, "ngSubmit"], ["contactForm", "ngForm"], [1, "col-lg-6", "col-md-6"], [1, "form-group", "mb-3"], ["required", "", "minlength", "3", "maxlength", "50", "ngModel", "", "name", "name", "type", "text", "id", "name", 1, "form-control"], ["name", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["required", "", "ngModel", "", "name", "email", "type", "text", "id", "email", 1, "form-control"], ["email", "ngModel"], ["required", "", "ngModel", "", "name", "subject", "type", "text", "id", "subject", 1, "form-control"], ["subject", "ngModel"], ["required", "", "ngModel", "", "name", "number", "type", "text", "id", "number", 1, "form-control"], ["number", "ngModel"], [1, "col-lg-12", "col-md-12"], ["required", "", "ngModel", "", "name", "message", "id", "message", "cols", "30", "rows", "4", 1, "form-control"], ["message", "ngModel"], ["type", "submit", 1, "btn", "btn-primary"], [1, "col-lg-5", "col-md-12"], [1, "contact-info"], [1, "d-table"], [1, "d-table-cell"], [1, "fas", "fa-map-marker-alt"], [1, "far", "fa-envelope"], ["href", "mailto:hello@xavro.com"], [1, "fas", "fa-phone-alt"], ["href", "tel:1244122445515"], [1, "fas", "fa-fax"], ["href", "tel:61724160055"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Get in Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Let's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r14); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](16); return ctx.submit(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, ContactComponent_div_24_Template, 4, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, ContactComponent_div_31_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, ContactComponent_div_38_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, ContactComponent_div_45_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "textarea", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](52, ContactComponent_div_52_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Location:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Exercisplan 4, 111 49 Stockholm, Sweden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "hello@xavro.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](73, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Call:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "(+124)412-2445515");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Fax:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "+617-241-60055");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](16);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](23);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](30);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](37);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](44);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r1.touched && !_r1.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r3.touched && !_r3.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r5.touched && !_r5.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r7.touched && !_r7.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r9.touched && !_r1.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("disabled", !_r0.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9769:
/*!********************************************************!*\
  !*** ./src/app/components/common/cta/cta.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CtaComponent": function() { return /* binding */ CtaComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);


class CtaComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
    }
}
CtaComponent.??fac = function CtaComponent_Factory(t) { return new (t || CtaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller)); };
CtaComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CtaComponent, selectors: [["app-cta"]], decls: 14, vars: 0, consts: [[1, "cta-area", "ptb-100"], [1, "container"], [1, "cta-content"], [1, "section-title", "mb-0"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "view-work", 3, "click"]], template: function CtaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Looking for exclusive services?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Get The Best For Your Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CtaComponent_Template_a_click_10_listener() { return ctx.onClick("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CtaComponent_Template_a_click_12_listener() { return ctx.onClick("work"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "View Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdGEuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1669:
/*!**************************************************************************!*\
  !*** ./src/app/components/common/demo-sidebar/demo-sidebar.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoSidebarComponent": function() { return /* binding */ DemoSidebarComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class DemoSidebarComponent {
    constructor() {
        this.classApplied = false;
    }
    ngOnInit() {
    }
    toggleClass() {
        this.classApplied = !this.classApplied;
    }
}
DemoSidebarComponent.??fac = function DemoSidebarComponent_Factory(t) { return new (t || DemoSidebarComponent)(); };
DemoSidebarComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DemoSidebarComponent, selectors: [["app-demo-sidebar"]], decls: 96, vars: 2, consts: [[1, "demo-modal-panel"], [1, "sidebar-demo-control", 3, "click"], [1, "example-demo-modal"], [1, "inner"], [1, "single-demo"], ["src", "assets/img/demo-img/home-1.jpg", "alt", "image"], ["href", "/", 1, "link-btn"], ["src", "assets/img/demo-img/home-2.jpg", "alt", "image"], ["href", "/home-two", 1, "link-btn"], ["src", "assets/img/demo-img/home-3.jpg", "alt", "image"], ["href", "/home-three", 1, "link-btn"], ["src", "assets/img/demo-img/home-4.jpg", "alt", "image"], ["href", "/home-four", 1, "link-btn"], ["src", "assets/img/demo-img/home-5.jpg", "alt", "image"], ["href", "/home-five", 1, "link-btn"], ["src", "assets/img/demo-img/home-6.jpg", "alt", "image"], ["href", "/home-six", 1, "link-btn"], ["src", "assets/img/demo-img/home-7.jpg", "alt", "image"], ["href", "/home-seven", 1, "link-btn"], ["src", "assets/img/demo-img/home-8.jpg", "alt", "image"], ["href", "/home-eight", 1, "link-btn"], ["src", "assets/img/demo-img/home-9.jpg", "alt", "image"], ["href", "/home-nine", 1, "link-btn"], ["src", "assets/img/demo-img/home-10.jpg", "alt", "image"], ["href", "/home-ten", 1, "link-btn"], ["src", "assets/img/demo-img/home-11.jpg", "alt", "image"], ["href", "/home-eleven", 1, "link-btn"], ["src", "assets/img/demo-img/home-12.jpg", "alt", "image"], ["href", "/home-twelve", 1, "link-btn"], ["src", "assets/img/demo-img/home-13.jpg", "alt", "image"], ["href", "/home-thirteen", 1, "link-btn"], ["src", "assets/img/demo-img/blog-details.jpg", "alt", "image"], ["href", "/blog-details", 1, "link-btn"], [1, "header-title"], [1, "example-demo-modal-control", 3, "click"], [1, "fas", "fa-times"], [1, "title"]], template: function DemoSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DemoSidebarComponent_Template_button_click_1_listener() { return ctx.toggleClass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Demos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Main Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Slider Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Video Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Ripple Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Creative Demo 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Creative Demo 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Creative Demo 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Animation Text Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Particles Demo 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Creative Demo 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Creative Demo 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Gradient Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Particles Demo 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Blog Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DemoSidebarComponent_Template_button_click_92_listener() { return ctx.toggleClass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](93, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "View Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("active", ctx.classApplied);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZW1vLXNpZGViYXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2631:
/*!********************************************************!*\
  !*** ./src/app/components/common/faq/faq.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqComponent": function() { return /* binding */ FaqComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var ngx_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-accordion */ 8362);
/* harmony import */ var ngx_accordion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ngx_accordion__WEBPACK_IMPORTED_MODULE_0__);



class FaqComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
    }
}
FaqComponent.??fac = function FaqComponent_Factory(t) { return new (t || FaqComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.ViewportScroller)); };
FaqComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: FaqComponent, selectors: [["app-faq"]], decls: 31, vars: 0, consts: [[1, "faq-area", "ptb-100"], [1, "container"], [1, "section-title"], [1, "row"], [1, "col-lg-7", "col-md-12"], [1, "faq-accordion"], ["heading", "What\u2019s the difference between a college and a university?"], ["heading", "What are the different types of undergraduate degrees?"], ["heading", "What are the different types of graduate degrees?"], ["heading", "Can you work while studying in the United States?"], ["heading", "What is distance education?"], [1, "col-lg-5", "col-md-12"], [1, "faq-image"], ["src", "assets/img/faq-img.jpg", "alt", "image"]], template: function FaqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Frequently Asked ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "accordion-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Colleges offer only undergraduate degrees while universities offer graduate degrees as well, but the terms are often used interchangeably.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "accordion-group", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Associate: a two-year program that either leads to a specific vocation or transitions to a bachelor program. Bachelor: a four or five-year program where students earn credits in a wide variety of courses.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "accordion-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "Masters: two-year degree providing additional specialization. Doctorate: five to eight-year program certifying the student as a trained research scholar and/or professor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "accordion-group", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "With permission of the International Student Office, international students may work on campus up to 20 hours/week their first year and can apply to work off-campus in subsequent years.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "accordion-group", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "Distance education occurs when a student and an instructor are in different places. Learning occurs by mail, telephone, internet, or by other means.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](30, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } }, directives: [ngx_accordion__WEBPACK_IMPORTED_MODULE_0__.Accordion, ngx_accordion__WEBPACK_IMPORTED_MODULE_0__.AccordionGroup], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXEuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6900:
/*!******************************************************************!*\
  !*** ./src/app/components/common/feedback/feedback.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackComponent": function() { return /* binding */ FeedbackComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel-o */ 5668);



function FeedbackComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "\u201CKeep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.\u201D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "James Andy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Switzerland");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function FeedbackComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "\u201CThe difference between school and life? In school, you're taught a lesson and then given a test. In life, you're given a test that teaches you a lesson.\u201D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Lina D'Souza");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Switzerland");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function FeedbackComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "\u201CIf a man empties his purse into his head, no man can take it away from him. An investment in knowledge always pays the best interest.\u201D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "David Warner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Switzerland");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class FeedbackComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
        this.feedbackSlides = {
            loop: true,
            nav: true,
            dots: false,
            animateOut: 'fadeOut',
            autoplayHoverPause: true,
            autoplay: true,
            mouseDrag: false,
            items: 1,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ]
        };
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
    }
}
FeedbackComponent.??fac = function FeedbackComponent_Factory(t) { return new (t || FeedbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller)); };
FeedbackComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FeedbackComponent, selectors: [["app-feedback"]], decls: 7, vars: 1, consts: [[1, "feedback-area", "ptb-100"], [1, "container"], [1, "feedback-slides"], [3, "options"], ["carouselSlide", ""], [1, "single-feedback-item"], [1, "info"], ["src", "assets/img/user1.jpg", "alt", "image", 1, "shadow", "rounded-circle"], ["src", "assets/img/user2.jpg", "alt", "image", 1, "shadow", "rounded-circle"], ["src", "assets/img/user3.jpg", "alt", "image", 1, "shadow", "rounded-circle"]], template: function FeedbackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "owl-carousel-o", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, FeedbackComponent_ng_template_4_Template, 9, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, FeedbackComponent_ng_template_5_Template, 9, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, FeedbackComponent_ng_template_6_Template, 9, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.feedbackSlides);
    } }, directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselSlideDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWVkYmFjay5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1823:
/*!**************************************************************!*\
  !*** ./src/app/components/common/footer/footer.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* binding */ FooterComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-sidebar/demo-sidebar.component */ 1669);
/* harmony import */ var ngx_scrolltop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-scrolltop */ 9528);





class FooterComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
    }
}
FooterComponent.??fac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.ViewportScroller)); };
FooterComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 24, vars: 0, consts: [[1, "footer-area"], [1, "container"], ["routerLink", "/"], ["href", "#", "target", "_blank", 1, "fab", "fa-facebook-f"], ["href", "#", "target", "_blank", 1, "fab", "fa-twitter"], ["href", "#", "target", "_blank", 1, "fab", "fa-linkedin-in"], ["href", "#", "target", "_blank", 1, "fab", "fa-instagram"], ["href", "#", "target", "_blank", 1, "fab", "fa-skype"], [1, "far", "fa-copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "avro");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Copyright ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](20, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "2021 All Rights Reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](22, "app-demo-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](23, "ngx-scrolltop");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent, ngx_scrolltop__WEBPACK_IMPORTED_MODULE_4__.NgxScrollTopComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5357:
/*!******************************************************************!*\
  !*** ./src/app/components/common/funfacts/funfacts.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunfactsComponent": function() { return /* binding */ FunfactsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var ngx_countup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-countup */ 5046);



class FunfactsComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
    }
}
FunfactsComponent.??fac = function FunfactsComponent_Factory(t) { return new (t || FunfactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller)); };
FunfactsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FunfactsComponent, selectors: [["app-funfacts"]], decls: 35, vars: 4, consts: [[1, "funfacts-area", "pt-100", "pb-70"], [1, "container"], [1, "row"], [1, "col-lg-3", "col-md-3", "col-6", "col-sm-3"], [1, "funfact"], [1, "far", "fa-smile"], [3, "countUp"], [1, "fas", "fa-shield-alt"], [1, "fas", "fa-award"], [1, "fas", "fa-user"]], template: function FunfactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Happy Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Completed Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Winning Awards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Team Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("countUp", 540);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("countUp", 980);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("countUp", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("countUp", 50);
    } }, directives: [ngx_countup__WEBPACK_IMPORTED_MODULE_2__.CountUpDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdW5mYWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4679:
/*!************************************************************************!*\
  !*** ./src/app/components/common/how-we-work/how-we-work.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HowWeWorkComponent": function() { return /* binding */ HowWeWorkComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);


class HowWeWorkComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
    }
}
HowWeWorkComponent.??fac = function HowWeWorkComponent_Factory(t) { return new (t || HowWeWorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller)); };
HowWeWorkComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HowWeWorkComponent, selectors: [["app-how-we-work"]], decls: 36, vars: 0, consts: [[1, "how-work-area", "pt-100", "pb-70"], [1, "container"], [1, "section-title"], [1, "row", "justify-content-center"], [1, "col-lg-4", "col-md-6", "col-sm-6"], [1, "single-how-work"], [1, "icon"], [1, "fas", "fa-info-circle"], [1, "fas", "fa-drafting-compass"], [1, "far", "fa-paper-plane"], [1, "shape1"], ["src", "assets/img/shape1.png", "alt", "image"]], template: function HowWeWorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "How We ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Planing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Designing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Product Launch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3ctd2Utd29yay5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4173:
/*!**************************************************************!*\
  !*** ./src/app/components/common/navbar/navbar.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": function() { return /* binding */ NavbarComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-sticky-nav */ 9217);
/* harmony import */ var ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);




class NavbarComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
        this.classApplied = false;
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
    }
    toggleClass() {
        this.classApplied = !this.classApplied;
    }
}
NavbarComponent.??fac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.ViewportScroller)); };
NavbarComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 62, vars: 2, consts: [["ngStickyNav", "", "stickyClass", "sticky-box-shadow", "ngStickyNav", "", 1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container"], ["routerLink", "/", 1, "navbar-brand"], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "burger-menu"], [1, "top-bar"], [1, "middle-bar"], [1, "bottom-bar"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "navbar-nav", "ml-auto", "for-responsive"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "avro");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function NavbarComponent_Template_button_click_6_listener() { return ctx.toggleClass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function NavbarComponent_Template_span_click_14_listener() { return ctx.onClick("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function NavbarComponent_Template_span_click_17_listener() { return ctx.onClick("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function NavbarComponent_Template_span_click_20_listener() { return ctx.onClick("team"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function NavbarComponent_Template_span_click_23_listener() { return ctx.onClick("services"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function NavbarComponent_Template_span_click_26_listener() { return ctx.onClick("work"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function NavbarComponent_Template_span_click_29_listener() { return ctx.onClick("pricing"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function NavbarComponent_Template_span_click_32_listener() { return ctx.onClick("blog"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function NavbarComponent_Template_span_click_35_listener() { return ctx.onClick("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function NavbarComponent_Template_span_click_39_listener() { ctx.toggleClass(); return ctx.onClick("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function NavbarComponent_Template_span_click_42_listener() { ctx.toggleClass(); return ctx.onClick("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function NavbarComponent_Template_span_click_45_listener() { ctx.toggleClass(); return ctx.onClick("team"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](46, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function NavbarComponent_Template_span_click_48_listener() { ctx.toggleClass(); return ctx.onClick("services"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](49, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function NavbarComponent_Template_span_click_51_listener() { ctx.toggleClass(); return ctx.onClick("work"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function NavbarComponent_Template_span_click_54_listener() { ctx.toggleClass(); return ctx.onClick("pricing"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function NavbarComponent_Template_span_click_57_listener() { ctx.toggleClass(); return ctx.onClick("blog"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function NavbarComponent_Template_span_click_60_listener() { ctx.toggleClass(); return ctx.onClick("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](61, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("active", ctx.classApplied);
    } }, directives: [ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_0__.StickyNavDirective, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6455:
/*!****************************************************************!*\
  !*** ./src/app/components/common/partner/partner.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartnerComponent": function() { return /* binding */ PartnerComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel-o */ 5668);



function PartnerComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartnerComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartnerComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartnerComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartnerComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartnerComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartnerComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartnerComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartnerComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartnerComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartnerComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartnerComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class PartnerComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
        this.partnerSlides = {
            loop: true,
            nav: false,
            dots: true,
            autoplayHoverPause: true,
            autoplay: true,
            margin: 30,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            responsive: {
                0: {
                    items: 2,
                },
                576: {
                    items: 3,
                },
                768: {
                    items: 4,
                },
                1200: {
                    items: 6,
                }
            }
        };
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
    }
}
PartnerComponent.??fac = function PartnerComponent_Factory(t) { return new (t || PartnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller)); };
PartnerComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PartnerComponent, selectors: [["app-partner"]], decls: 16, vars: 1, consts: [[1, "partner-area", "ptb-70", "bg-fffdfd"], [1, "container"], [1, "partner-slides"], [3, "options"], ["carouselSlide", ""], [1, "partner-item"], ["href", "#", "target", "_blank"], ["src", "assets/img/partner-1.png", "alt", "partner"], ["src", "assets/img/partner-2.png", "alt", "partner"], ["src", "assets/img/partner-3.png", "alt", "partner"], ["src", "assets/img/partner-4.png", "alt", "partner"], ["src", "assets/img/partner-5.png", "alt", "partner"], ["src", "assets/img/partner-6.png", "alt", "partner"]], template: function PartnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "owl-carousel-o", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, PartnerComponent_ng_template_4_Template, 3, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, PartnerComponent_ng_template_5_Template, 3, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, PartnerComponent_ng_template_6_Template, 3, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, PartnerComponent_ng_template_7_Template, 3, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, PartnerComponent_ng_template_8_Template, 3, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, PartnerComponent_ng_template_9_Template, 3, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, PartnerComponent_ng_template_10_Template, 3, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, PartnerComponent_ng_template_11_Template, 3, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, PartnerComponent_ng_template_12_Template, 3, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, PartnerComponent_ng_template_13_Template, 3, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, PartnerComponent_ng_template_14_Template, 3, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, PartnerComponent_ng_template_15_Template, 3, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.partnerSlides);
    } }, directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselSlideDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJ0bmVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4425:
/*!********************************************************************!*\
  !*** ./src/app/components/common/preloader/preloader.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreloaderComponent": function() { return /* binding */ PreloaderComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class PreloaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
PreloaderComponent.??fac = function PreloaderComponent_Factory(t) { return new (t || PreloaderComponent)(); };
PreloaderComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PreloaderComponent, selectors: [["app-preloader"]], decls: 6, vars: 0, consts: [[1, "preloader"], [1, "folding-cube"], [1, "cube1", "cube"], [1, "cube2", "cube"], [1, "cube4", "cube"], [1, "cube3", "cube"]], template: function PreloaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVsb2FkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2019:
/*!****************************************************************!*\
  !*** ./src/app/components/common/pricing/pricing.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PricingComponent": function() { return /* binding */ PricingComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



class PricingComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
    }
}
PricingComponent.??fac = function PricingComponent_Factory(t) { return new (t || PricingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller)); };
PricingComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PricingComponent, selectors: [["app-pricing"]], decls: 108, vars: 0, consts: [["id", "pricing", 1, "pricing-area", "pt-100", "pb-70", "bg-F7F5F4"], [1, "container"], [1, "section-title"], [1, "row", "justify-content-center"], [1, "col-lg-4", "col-md-6", "col-sm-6"], [1, "pricingTable"], [1, "title"], [1, "price-value"], [1, "currency"], [1, "amount"], [1, "month"], [1, "pricing-content"], [1, "fas", "fa-check"], ["routerLink", "/", 1, "btn", "btn-primary"], [1, "shape1"], ["src", "assets/img/shape1.png", "alt", "image"]], template: function PricingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Our Products ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "39.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "/Per month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " Any Ware Access");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " 10 GB Hosting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " 2 Unique Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " 12 GB Capacity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " Weekly Backups");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " Support 24 / hour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "49.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "/Per month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " Any Ware Access");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " 15 GB Hosting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " 5 Unique Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, " 17 GB Capacity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, " Weekly Backups");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, " Support 24 / hour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Premium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "59.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "/Per month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, " Any Ware Access");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, " 20 GB Hosting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](93, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, " 10 Unique Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, " 21 GB Capacity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, " Weekly Backups");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](102, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, " Support 24 / hour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](107, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmljaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2784:
/*!**************************************************************************!*\
  !*** ./src/app/components/common/services-two/services-two.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesTwoComponent": function() { return /* binding */ ServicesTwoComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);


class ServicesTwoComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
    }
}
ServicesTwoComponent.??fac = function ServicesTwoComponent_Factory(t) { return new (t || ServicesTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller)); };
ServicesTwoComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ServicesTwoComponent, selectors: [["app-services-two"]], decls: 82, vars: 0, consts: [["id", "services", 1, "services-area", "pt-100", "pb-70"], [1, "container"], [1, "section-title"], [1, "row", "justify-content-center"], [1, "col-lg-4", "col-md-6", "col-sm-6"], [1, "single-box"], [1, "icon"], [1, "fas", "fa-pencil-alt"], [1, "fab", "fa-linode"], [1, "fas", "fa-desktop"], [1, "fas", "fa-chart-line"], [1, "fas", "fa-anchor"], [1, "fas", "fa-headphones"], [1, "fas", "fa-mobile-alt"], [1, "fas", "fa-camera"], [1, "fas", "fa-heartbeat"]], template: function ServicesTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Web Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Branding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Ui & Ux Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Responsive Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Photography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Custom Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy10d28uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8211:
/*!******************************************************************!*\
  !*** ./src/app/components/common/services/services.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesComponent": function() { return /* binding */ ServicesComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);


class ServicesComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
    }
}
ServicesComponent.??fac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller)); };
ServicesComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 109, vars: 0, consts: [["id", "services", 1, "services-area", "pt-100", "pb-70"], [1, "container"], [1, "section-title"], [1, "row", "justify-content-center"], [1, "col-lg-4", "col-md-6"], [1, "single-services"], [1, "services-img"], ["src", "assets/img/services-img1.jpg", "alt", "services-img"], [1, "icon"], [1, "fas", "fa-pencil-alt"], [1, "services-content"], ["src", "assets/img/services-img2.jpg", "alt", "services-img"], [1, "fab", "fa-linode"], ["src", "assets/img/services-img3.jpg", "alt", "services-img"], [1, "fas", "fa-desktop"], ["src", "assets/img/services-img4.jpg", "alt", "services-img"], [1, "fas", "fa-chart-line"], ["src", "assets/img/services-img5.jpg", "alt", "services-img"], [1, "fas", "fa-anchor"], ["src", "assets/img/services-img6.jpg", "alt", "services-img"], [1, "fas", "fa-headphones-alt"], ["src", "assets/img/services-img7.jpg", "alt", "services-img"], [1, "fas", "fa-mobile-alt"], ["src", "assets/img/services-img8.jpg", "alt", "services-img"], [1, "fas", "fa-camera-retro"], ["src", "assets/img/services-img9.jpg", "alt", "services-img"], [1, "far", "fa-life-ring"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Web Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Branding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Ui & Ux Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Responsive Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Photography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](101, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](103, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Custom Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "Lorem ipsum dolor sit amet consecte, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3649:
/*!************************************************************!*\
  !*** ./src/app/components/common/skill/skill.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillComponent": function() { return /* binding */ SkillComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-smart-modal */ 2259);


class SkillComponent {
    constructor(ngxSmartModalService) {
        this.ngxSmartModalService = ngxSmartModalService;
    }
    ngOnInit() {
    }
}
SkillComponent.??fac = function SkillComponent_Factory(t) { return new (t || SkillComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_0__.NgxSmartModalService)); };
SkillComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: SkillComponent, selectors: [["app-skill"]], decls: 71, vars: 1, consts: [[1, "skill-area", "ptb-100", "bg-fffdfd"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-12"], [1, "skill-content"], [1, "section-title"], [1, "skills-list"], [1, "skill-item"], [1, "skill-header"], [1, "skill-title"], [1, "skill-percentage"], [1, "count-box"], [1, "count-text"], [1, "skill-bar"], [1, "bar-inner"], ["data-width", "92", 1, "bar", "progress-line"], ["data-width", "97", 1, "bar", "progress-line"], ["data-width", "90", 1, "bar", "progress-line"], ["data-width", "95", 1, "bar", "progress-line"], [1, "skill-video"], ["src", "assets/img/video-img.jpg", "alt", "video-img"], [1, "video-btn"], [1, "popup-youtube", 3, "click"], [1, "fas", "fa-play"], [1, "video-popup"], [3, "identifier"], ["popupTwo", ""], ["src", "https://www.youtube.com/embed/WQ119jAN4Xo", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""]], template: function SkillComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Some of Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Branding");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "92");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "97");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44, "90");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](56, "95");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](57, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](60, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](63, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function SkillComponent_Template_button_click_65_listener() { return ctx.ngxSmartModalService.getModal("popupTwo").open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](66, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "ngx-smart-modal", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](70, "iframe", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("identifier", "popupTwo");
    } }, directives: [ngx_smart_modal__WEBPACK_IMPORTED_MODULE_0__.NgxSmartModalComponent], styles: ["[data-width=\"1\"][_ngcontent-%COMP%] {\n  width: 1%;\n}\n\n[data-width=\"2\"][_ngcontent-%COMP%] {\n  width: 2%;\n}\n\n[data-width=\"3\"][_ngcontent-%COMP%] {\n  width: 3%;\n}\n\n[data-width=\"4\"][_ngcontent-%COMP%] {\n  width: 4%;\n}\n\n[data-width=\"5\"][_ngcontent-%COMP%] {\n  width: 5%;\n}\n\n[data-width=\"6\"][_ngcontent-%COMP%] {\n  width: 6%;\n}\n\n[data-width=\"7\"][_ngcontent-%COMP%] {\n  width: 7%;\n}\n\n[data-width=\"8\"][_ngcontent-%COMP%] {\n  width: 8%;\n}\n\n[data-width=\"9\"][_ngcontent-%COMP%] {\n  width: 9%;\n}\n\n[data-width=\"10\"][_ngcontent-%COMP%] {\n  width: 10%;\n}\n\n[data-width=\"11\"][_ngcontent-%COMP%] {\n  width: 11%;\n}\n\n[data-width=\"12\"][_ngcontent-%COMP%] {\n  width: 12%;\n}\n\n[data-width=\"13\"][_ngcontent-%COMP%] {\n  width: 13%;\n}\n\n[data-width=\"14\"][_ngcontent-%COMP%] {\n  width: 14%;\n}\n\n[data-width=\"15\"][_ngcontent-%COMP%] {\n  width: 15%;\n}\n\n[data-width=\"16\"][_ngcontent-%COMP%] {\n  width: 16%;\n}\n\n[data-width=\"17\"][_ngcontent-%COMP%] {\n  width: 17%;\n}\n\n[data-width=\"18\"][_ngcontent-%COMP%] {\n  width: 18%;\n}\n\n[data-width=\"19\"][_ngcontent-%COMP%] {\n  width: 19%;\n}\n\n[data-width=\"20\"][_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n[data-width=\"21\"][_ngcontent-%COMP%] {\n  width: 21%;\n}\n\n[data-width=\"22\"][_ngcontent-%COMP%] {\n  width: 22%;\n}\n\n[data-width=\"23\"][_ngcontent-%COMP%] {\n  width: 23%;\n}\n\n[data-width=\"24\"][_ngcontent-%COMP%] {\n  width: 24%;\n}\n\n[data-width=\"25\"][_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n[data-width=\"26\"][_ngcontent-%COMP%] {\n  width: 26%;\n}\n\n[data-width=\"27\"][_ngcontent-%COMP%] {\n  width: 27%;\n}\n\n[data-width=\"28\"][_ngcontent-%COMP%] {\n  width: 28%;\n}\n\n[data-width=\"29\"][_ngcontent-%COMP%] {\n  width: 29%;\n}\n\n[data-width=\"30\"][_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n[data-width=\"31\"][_ngcontent-%COMP%] {\n  width: 31%;\n}\n\n[data-width=\"32\"][_ngcontent-%COMP%] {\n  width: 32%;\n}\n\n[data-width=\"33\"][_ngcontent-%COMP%] {\n  width: 33%;\n}\n\n[data-width=\"34\"][_ngcontent-%COMP%] {\n  width: 34%;\n}\n\n[data-width=\"35\"][_ngcontent-%COMP%] {\n  width: 35%;\n}\n\n[data-width=\"36\"][_ngcontent-%COMP%] {\n  width: 36%;\n}\n\n[data-width=\"37\"][_ngcontent-%COMP%] {\n  width: 37%;\n}\n\n[data-width=\"38\"][_ngcontent-%COMP%] {\n  width: 38%;\n}\n\n[data-width=\"39\"][_ngcontent-%COMP%] {\n  width: 39%;\n}\n\n[data-width=\"40\"][_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n[data-width=\"41\"][_ngcontent-%COMP%] {\n  width: 41%;\n}\n\n[data-width=\"42\"][_ngcontent-%COMP%] {\n  width: 42%;\n}\n\n[data-width=\"43\"][_ngcontent-%COMP%] {\n  width: 43%;\n}\n\n[data-width=\"44\"][_ngcontent-%COMP%] {\n  width: 44%;\n}\n\n[data-width=\"45\"][_ngcontent-%COMP%] {\n  width: 45%;\n}\n\n[data-width=\"46\"][_ngcontent-%COMP%] {\n  width: 46%;\n}\n\n[data-width=\"47\"][_ngcontent-%COMP%] {\n  width: 47%;\n}\n\n[data-width=\"48\"][_ngcontent-%COMP%] {\n  width: 48%;\n}\n\n[data-width=\"49\"][_ngcontent-%COMP%] {\n  width: 49%;\n}\n\n[data-width=\"50\"][_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n[data-width=\"51\"][_ngcontent-%COMP%] {\n  width: 51%;\n}\n\n[data-width=\"52\"][_ngcontent-%COMP%] {\n  width: 52%;\n}\n\n[data-width=\"53\"][_ngcontent-%COMP%] {\n  width: 53%;\n}\n\n[data-width=\"54\"][_ngcontent-%COMP%] {\n  width: 54%;\n}\n\n[data-width=\"55\"][_ngcontent-%COMP%] {\n  width: 55%;\n}\n\n[data-width=\"56\"][_ngcontent-%COMP%] {\n  width: 56%;\n}\n\n[data-width=\"57\"][_ngcontent-%COMP%] {\n  width: 57%;\n}\n\n[data-width=\"58\"][_ngcontent-%COMP%] {\n  width: 58%;\n}\n\n[data-width=\"59\"][_ngcontent-%COMP%] {\n  width: 59%;\n}\n\n[data-width=\"60\"][_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n[data-width=\"61\"][_ngcontent-%COMP%] {\n  width: 61%;\n}\n\n[data-width=\"62\"][_ngcontent-%COMP%] {\n  width: 62%;\n}\n\n[data-width=\"63\"][_ngcontent-%COMP%] {\n  width: 63%;\n}\n\n[data-width=\"64\"][_ngcontent-%COMP%] {\n  width: 64%;\n}\n\n[data-width=\"65\"][_ngcontent-%COMP%] {\n  width: 65%;\n}\n\n[data-width=\"66\"][_ngcontent-%COMP%] {\n  width: 66%;\n}\n\n[data-width=\"67\"][_ngcontent-%COMP%] {\n  width: 67%;\n}\n\n[data-width=\"68\"][_ngcontent-%COMP%] {\n  width: 68%;\n}\n\n[data-width=\"69\"][_ngcontent-%COMP%] {\n  width: 69%;\n}\n\n[data-width=\"70\"][_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n[data-width=\"71\"][_ngcontent-%COMP%] {\n  width: 71%;\n}\n\n[data-width=\"72\"][_ngcontent-%COMP%] {\n  width: 72%;\n}\n\n[data-width=\"73\"][_ngcontent-%COMP%] {\n  width: 73%;\n}\n\n[data-width=\"74\"][_ngcontent-%COMP%] {\n  width: 74%;\n}\n\n[data-width=\"75\"][_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n[data-width=\"76\"][_ngcontent-%COMP%] {\n  width: 76%;\n}\n\n[data-width=\"77\"][_ngcontent-%COMP%] {\n  width: 77%;\n}\n\n[data-width=\"78\"][_ngcontent-%COMP%] {\n  width: 78%;\n}\n\n[data-width=\"79\"][_ngcontent-%COMP%] {\n  width: 79%;\n}\n\n[data-width=\"80\"][_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n[data-width=\"81\"][_ngcontent-%COMP%] {\n  width: 81%;\n}\n\n[data-width=\"82\"][_ngcontent-%COMP%] {\n  width: 82%;\n}\n\n[data-width=\"83\"][_ngcontent-%COMP%] {\n  width: 83%;\n}\n\n[data-width=\"84\"][_ngcontent-%COMP%] {\n  width: 84%;\n}\n\n[data-width=\"85\"][_ngcontent-%COMP%] {\n  width: 85%;\n}\n\n[data-width=\"86\"][_ngcontent-%COMP%] {\n  width: 86%;\n}\n\n[data-width=\"87\"][_ngcontent-%COMP%] {\n  width: 87%;\n}\n\n[data-width=\"88\"][_ngcontent-%COMP%] {\n  width: 88%;\n}\n\n[data-width=\"89\"][_ngcontent-%COMP%] {\n  width: 89%;\n}\n\n[data-width=\"90\"][_ngcontent-%COMP%] {\n  width: 90%;\n}\n\n[data-width=\"91\"][_ngcontent-%COMP%] {\n  width: 91%;\n}\n\n[data-width=\"92\"][_ngcontent-%COMP%] {\n  width: 92%;\n}\n\n[data-width=\"93\"][_ngcontent-%COMP%] {\n  width: 93%;\n}\n\n[data-width=\"94\"][_ngcontent-%COMP%] {\n  width: 94%;\n}\n\n[data-width=\"95\"][_ngcontent-%COMP%] {\n  width: 95%;\n}\n\n[data-width=\"96\"][_ngcontent-%COMP%] {\n  width: 96%;\n}\n\n[data-width=\"97\"][_ngcontent-%COMP%] {\n  width: 97%;\n}\n\n[data-width=\"98\"][_ngcontent-%COMP%] {\n  width: 98%;\n}\n\n[data-width=\"99\"][_ngcontent-%COMP%] {\n  width: 99%;\n}\n\n[data-width=\"100\"][_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtBQUNKOztBQUNBO0VBQ0ksU0FBQTtBQUVKOztBQUFBO0VBQ0ksU0FBQTtBQUdKOztBQURBO0VBQ0ksU0FBQTtBQUlKOztBQUZBO0VBQ0ksU0FBQTtBQUtKOztBQUhBO0VBQ0ksU0FBQTtBQU1KOztBQUpBO0VBQ0ksU0FBQTtBQU9KOztBQUxBO0VBQ0ksU0FBQTtBQVFKOztBQU5BO0VBQ0ksU0FBQTtBQVNKOztBQVBBO0VBQ0ksVUFBQTtBQVVKOztBQVJBO0VBQ0ksVUFBQTtBQVdKOztBQVRBO0VBQ0ksVUFBQTtBQVlKOztBQVZBO0VBQ0ksVUFBQTtBQWFKOztBQVhBO0VBQ0ksVUFBQTtBQWNKOztBQVpBO0VBQ0ksVUFBQTtBQWVKOztBQWJBO0VBQ0ksVUFBQTtBQWdCSjs7QUFkQTtFQUNJLFVBQUE7QUFpQko7O0FBZkE7RUFDSSxVQUFBO0FBa0JKOztBQWhCQTtFQUNJLFVBQUE7QUFtQko7O0FBakJBO0VBQ0ksVUFBQTtBQW9CSjs7QUFsQkE7RUFDSSxVQUFBO0FBcUJKOztBQW5CQTtFQUNJLFVBQUE7QUFzQko7O0FBcEJBO0VBQ0ksVUFBQTtBQXVCSjs7QUFyQkE7RUFDSSxVQUFBO0FBd0JKOztBQXRCQTtFQUNJLFVBQUE7QUF5Qko7O0FBdkJBO0VBQ0ksVUFBQTtBQTBCSjs7QUF4QkE7RUFDSSxVQUFBO0FBMkJKOztBQXpCQTtFQUNJLFVBQUE7QUE0Qko7O0FBMUJBO0VBQ0ksVUFBQTtBQTZCSjs7QUEzQkE7RUFDSSxVQUFBO0FBOEJKOztBQTVCQTtFQUNJLFVBQUE7QUErQko7O0FBN0JBO0VBQ0ksVUFBQTtBQWdDSjs7QUE5QkE7RUFDSSxVQUFBO0FBaUNKOztBQS9CQTtFQUNJLFVBQUE7QUFrQ0o7O0FBaENBO0VBQ0ksVUFBQTtBQW1DSjs7QUFqQ0E7RUFDSSxVQUFBO0FBb0NKOztBQWxDQTtFQUNJLFVBQUE7QUFxQ0o7O0FBbkNBO0VBQ0ksVUFBQTtBQXNDSjs7QUFwQ0E7RUFDSSxVQUFBO0FBdUNKOztBQXJDQTtFQUNJLFVBQUE7QUF3Q0o7O0FBdENBO0VBQ0ksVUFBQTtBQXlDSjs7QUF2Q0E7RUFDSSxVQUFBO0FBMENKOztBQXhDQTtFQUNJLFVBQUE7QUEyQ0o7O0FBekNBO0VBQ0ksVUFBQTtBQTRDSjs7QUExQ0E7RUFDSSxVQUFBO0FBNkNKOztBQTNDQTtFQUNJLFVBQUE7QUE4Q0o7O0FBNUNBO0VBQ0ksVUFBQTtBQStDSjs7QUE3Q0E7RUFDSSxVQUFBO0FBZ0RKOztBQTlDQTtFQUNJLFVBQUE7QUFpREo7O0FBL0NBO0VBQ0ksVUFBQTtBQWtESjs7QUFoREE7RUFDSSxVQUFBO0FBbURKOztBQWpEQTtFQUNJLFVBQUE7QUFvREo7O0FBbERBO0VBQ0ksVUFBQTtBQXFESjs7QUFuREE7RUFDSSxVQUFBO0FBc0RKOztBQXBEQTtFQUNJLFVBQUE7QUF1REo7O0FBckRBO0VBQ0ksVUFBQTtBQXdESjs7QUF0REE7RUFDSSxVQUFBO0FBeURKOztBQXZEQTtFQUNJLFVBQUE7QUEwREo7O0FBeERBO0VBQ0ksVUFBQTtBQTJESjs7QUF6REE7RUFDSSxVQUFBO0FBNERKOztBQTFEQTtFQUNJLFVBQUE7QUE2REo7O0FBM0RBO0VBQ0ksVUFBQTtBQThESjs7QUE1REE7RUFDSSxVQUFBO0FBK0RKOztBQTdEQTtFQUNJLFVBQUE7QUFnRUo7O0FBOURBO0VBQ0ksVUFBQTtBQWlFSjs7QUEvREE7RUFDSSxVQUFBO0FBa0VKOztBQWhFQTtFQUNJLFVBQUE7QUFtRUo7O0FBakVBO0VBQ0ksVUFBQTtBQW9FSjs7QUFsRUE7RUFDSSxVQUFBO0FBcUVKOztBQW5FQTtFQUNJLFVBQUE7QUFzRUo7O0FBcEVBO0VBQ0ksVUFBQTtBQXVFSjs7QUFyRUE7RUFDSSxVQUFBO0FBd0VKOztBQXRFQTtFQUNJLFVBQUE7QUF5RUo7O0FBdkVBO0VBQ0ksVUFBQTtBQTBFSjs7QUF4RUE7RUFDSSxVQUFBO0FBMkVKOztBQXpFQTtFQUNJLFVBQUE7QUE0RUo7O0FBMUVBO0VBQ0ksVUFBQTtBQTZFSjs7QUEzRUE7RUFDSSxVQUFBO0FBOEVKOztBQTVFQTtFQUNJLFVBQUE7QUErRUo7O0FBN0VBO0VBQ0ksVUFBQTtBQWdGSjs7QUE5RUE7RUFDSSxVQUFBO0FBaUZKOztBQS9FQTtFQUNJLFVBQUE7QUFrRko7O0FBaEZBO0VBQ0ksVUFBQTtBQW1GSjs7QUFqRkE7RUFDSSxVQUFBO0FBb0ZKOztBQWxGQTtFQUNJLFVBQUE7QUFxRko7O0FBbkZBO0VBQ0ksVUFBQTtBQXNGSjs7QUFwRkE7RUFDSSxVQUFBO0FBdUZKOztBQXJGQTtFQUNJLFVBQUE7QUF3Rko7O0FBdEZBO0VBQ0ksVUFBQTtBQXlGSjs7QUF2RkE7RUFDSSxVQUFBO0FBMEZKOztBQXhGQTtFQUNJLFVBQUE7QUEyRko7O0FBekZBO0VBQ0ksVUFBQTtBQTRGSjs7QUExRkE7RUFDSSxVQUFBO0FBNkZKOztBQTNGQTtFQUNJLFVBQUE7QUE4Rko7O0FBNUZBO0VBQ0ksVUFBQTtBQStGSjs7QUE3RkE7RUFDSSxVQUFBO0FBZ0dKOztBQTlGQTtFQUNJLFVBQUE7QUFpR0o7O0FBL0ZBO0VBQ0ksVUFBQTtBQWtHSjs7QUFoR0E7RUFDSSxVQUFBO0FBbUdKOztBQWpHQTtFQUNJLFdBQUE7QUFvR0oiLCJmaWxlIjoic2tpbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJbZGF0YS13aWR0aD1cIjFcIl0ge1xyXG4gICAgd2lkdGg6IDElO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiMlwiXSB7XHJcbiAgICB3aWR0aDogMiU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCIzXCJdIHtcclxuICAgIHdpZHRoOiAzJTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjRcIl0ge1xyXG4gICAgd2lkdGg6IDQlO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiNVwiXSB7XHJcbiAgICB3aWR0aDogNSU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCI2XCJdIHtcclxuICAgIHdpZHRoOiA2JTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjdcIl0ge1xyXG4gICAgd2lkdGg6IDclO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiOFwiXSB7XHJcbiAgICB3aWR0aDogOCU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCI5XCJdIHtcclxuICAgIHdpZHRoOiA5JTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjEwXCJdIHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCIxMVwiXSB7XHJcbiAgICB3aWR0aDogMTElO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiMTJcIl0ge1xyXG4gICAgd2lkdGg6IDEyJTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjEzXCJdIHtcclxuICAgIHdpZHRoOiAxMyU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCIxNFwiXSB7XHJcbiAgICB3aWR0aDogMTQlO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiMTVcIl0ge1xyXG4gICAgd2lkdGg6IDE1JTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjE2XCJdIHtcclxuICAgIHdpZHRoOiAxNiU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCIxN1wiXSB7XHJcbiAgICB3aWR0aDogMTclO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiMThcIl0ge1xyXG4gICAgd2lkdGg6IDE4JTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjE5XCJdIHtcclxuICAgIHdpZHRoOiAxOSU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCIyMFwiXSB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiMjFcIl0ge1xyXG4gICAgd2lkdGg6IDIxJTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjIyXCJdIHtcclxuICAgIHdpZHRoOiAyMiU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCIyM1wiXSB7XHJcbiAgICB3aWR0aDogMjMlO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiMjRcIl0ge1xyXG4gICAgd2lkdGg6IDI0JTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjI1XCJdIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCIyNlwiXSB7XHJcbiAgICB3aWR0aDogMjYlO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiMjdcIl0ge1xyXG4gICAgd2lkdGg6IDI3JTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjI4XCJdIHtcclxuICAgIHdpZHRoOiAyOCU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCIyOVwiXSB7XHJcbiAgICB3aWR0aDogMjklO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiMzBcIl0ge1xyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjMxXCJdIHtcclxuICAgIHdpZHRoOiAzMSU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCIzMlwiXSB7XHJcbiAgICB3aWR0aDogMzIlO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiMzNcIl0ge1xyXG4gICAgd2lkdGg6IDMzJTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjM0XCJdIHtcclxuICAgIHdpZHRoOiAzNCU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCIzNVwiXSB7XHJcbiAgICB3aWR0aDogMzUlO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiMzZcIl0ge1xyXG4gICAgd2lkdGg6IDM2JTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjM3XCJdIHtcclxuICAgIHdpZHRoOiAzNyU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCIzOFwiXSB7XHJcbiAgICB3aWR0aDogMzglO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiMzlcIl0ge1xyXG4gICAgd2lkdGg6IDM5JTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjQwXCJdIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCI0MVwiXSB7XHJcbiAgICB3aWR0aDogNDElO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiNDJcIl0ge1xyXG4gICAgd2lkdGg6IDQyJTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjQzXCJdIHtcclxuICAgIHdpZHRoOiA0MyU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCI0NFwiXSB7XHJcbiAgICB3aWR0aDogNDQlO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiNDVcIl0ge1xyXG4gICAgd2lkdGg6IDQ1JTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjQ2XCJdIHtcclxuICAgIHdpZHRoOiA0NiU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCI0N1wiXSB7XHJcbiAgICB3aWR0aDogNDclO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiNDhcIl0ge1xyXG4gICAgd2lkdGg6IDQ4JTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjQ5XCJdIHtcclxuICAgIHdpZHRoOiA0OSU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCI1MFwiXSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiNTFcIl0ge1xyXG4gICAgd2lkdGg6IDUxJTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjUyXCJdIHtcclxuICAgIHdpZHRoOiA1MiU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCI1M1wiXSB7XHJcbiAgICB3aWR0aDogNTMlO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiNTRcIl0ge1xyXG4gICAgd2lkdGg6IDU0JTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjU1XCJdIHtcclxuICAgIHdpZHRoOiA1NSU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCI1NlwiXSB7XHJcbiAgICB3aWR0aDogNTYlO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiNTdcIl0ge1xyXG4gICAgd2lkdGg6IDU3JTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjU4XCJdIHtcclxuICAgIHdpZHRoOiA1OCU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCI1OVwiXSB7XHJcbiAgICB3aWR0aDogNTklO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiNjBcIl0ge1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjYxXCJdIHtcclxuICAgIHdpZHRoOiA2MSU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCI2MlwiXSB7XHJcbiAgICB3aWR0aDogNjIlO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiNjNcIl0ge1xyXG4gICAgd2lkdGg6IDYzJTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjY0XCJdIHtcclxuICAgIHdpZHRoOiA2NCU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCI2NVwiXSB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiNjZcIl0ge1xyXG4gICAgd2lkdGg6IDY2JTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjY3XCJdIHtcclxuICAgIHdpZHRoOiA2NyU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCI2OFwiXSB7XHJcbiAgICB3aWR0aDogNjglO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiNjlcIl0ge1xyXG4gICAgd2lkdGg6IDY5JTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjcwXCJdIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCI3MVwiXSB7XHJcbiAgICB3aWR0aDogNzElO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiNzJcIl0ge1xyXG4gICAgd2lkdGg6IDcyJTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjczXCJdIHtcclxuICAgIHdpZHRoOiA3MyU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCI3NFwiXSB7XHJcbiAgICB3aWR0aDogNzQlO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiNzVcIl0ge1xyXG4gICAgd2lkdGg6IDc1JTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjc2XCJdIHtcclxuICAgIHdpZHRoOiA3NiU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCI3N1wiXSB7XHJcbiAgICB3aWR0aDogNzclO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiNzhcIl0ge1xyXG4gICAgd2lkdGg6IDc4JTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjc5XCJdIHtcclxuICAgIHdpZHRoOiA3OSU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCI4MFwiXSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiODFcIl0ge1xyXG4gICAgd2lkdGg6IDgxJTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjgyXCJdIHtcclxuICAgIHdpZHRoOiA4MiU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCI4M1wiXSB7XHJcbiAgICB3aWR0aDogODMlO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiODRcIl0ge1xyXG4gICAgd2lkdGg6IDg0JTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjg1XCJdIHtcclxuICAgIHdpZHRoOiA4NSU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCI4NlwiXSB7XHJcbiAgICB3aWR0aDogODYlO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiODdcIl0ge1xyXG4gICAgd2lkdGg6IDg3JTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjg4XCJdIHtcclxuICAgIHdpZHRoOiA4OCU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCI4OVwiXSB7XHJcbiAgICB3aWR0aDogODklO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiOTBcIl0ge1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjkxXCJdIHtcclxuICAgIHdpZHRoOiA5MSU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCI5MlwiXSB7XHJcbiAgICB3aWR0aDogOTIlO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiOTNcIl0ge1xyXG4gICAgd2lkdGg6IDkzJTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjk0XCJdIHtcclxuICAgIHdpZHRoOiA5NCU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCI5NVwiXSB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiOTZcIl0ge1xyXG4gICAgd2lkdGg6IDk2JTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjk3XCJdIHtcclxuICAgIHdpZHRoOiA5NyU7XHJcbn1cclxuW2RhdGEtd2lkdGg9XCI5OFwiXSB7XHJcbiAgICB3aWR0aDogOTglO1xyXG59XHJcbltkYXRhLXdpZHRoPVwiOTlcIl0ge1xyXG4gICAgd2lkdGg6IDk5JTtcclxufVxyXG5bZGF0YS13aWR0aD1cIjEwMFwiXSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 8181:
/*!******************************************************************!*\
  !*** ./src/app/components/common/strategy/strategy.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrategyComponent": function() { return /* binding */ StrategyComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);


class StrategyComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
    }
}
StrategyComponent.??fac = function StrategyComponent_Factory(t) { return new (t || StrategyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller)); };
StrategyComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: StrategyComponent, selectors: [["app-strategy"]], decls: 40, vars: 0, consts: [[1, "strategy-area"], [1, "container-fluid"], [1, "row"], [1, "col-lg-6", "col-md-12"], [1, "strategy-image"], ["src", "assets/img/about-strategy.jpg", "alt", "image"], [1, "strategy-content", "ptb-70"], [1, "section-title"], [1, "features-list"], [1, "fa", "fa-check"], [1, "shape1"], ["src", "assets/img/shape1.png", "alt", "image"]], template: function StrategyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Highly Creative Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Retina Ready");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Responsive Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Modern Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Awesome Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Digital Marketing & Branding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHJhdGVneS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 9495:
/*!********************************************************************!*\
  !*** ./src/app/components/common/subscribe/subscribe.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscribeComponent": function() { return /* binding */ SubscribeComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);



class SubscribeComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
    }
}
SubscribeComponent.??fac = function SubscribeComponent_Factory(t) { return new (t || SubscribeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller)); };
SubscribeComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SubscribeComponent, selectors: [["app-subscribe"]], decls: 9, vars: 0, consts: [[1, "subscribe-area", "ptb-100"], [1, "container"], [1, "newsletter"], [1, "newsletter-form"], ["type", "email", "placeholder", "Your Email Address", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]], template: function SubscribeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Join Our Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJzY3JpYmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6278:
/*!**********************************************************!*\
  !*** ./src/app/components/common/team/team.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamComponent": function() { return /* binding */ TeamComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel-o */ 5668);



function TeamComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "John Smith");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "CEO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function TeamComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "David Warner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Web Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function TeamComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "James Andy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Back-End Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function TeamComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "David Smith");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Front-End Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function TeamComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "John Doe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Web Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function TeamComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Olivia Smith");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Photographer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class TeamComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
        this.teamSlides = {
            loop: true,
            nav: false,
            dots: true,
            autoplayHoverPause: true,
            autoplay: true,
            margin: 30,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 2,
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 3,
                }
            }
        };
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
    }
}
TeamComponent.??fac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller)); };
TeamComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 21, vars: 1, consts: [["id", "team", 1, "team-area", "ptb-100"], [1, "container"], [1, "section-title"], [1, "team-slides"], [3, "options"], ["carouselSlide", ""], [1, "shape1"], ["src", "assets/img/shape1.png", "alt", "image"], [1, "single-team-box"], [1, "image"], ["src", "assets/img/team-1.jpg", "alt", "team-img"], [1, "content"], [1, "title"], [1, "post"], [1, "social"], ["href", "#", "target", "_blank", 1, "fab", "fa-facebook-f"], ["href", "#", "target", "_blank", 1, "fab", "fa-twitter"], ["href", "#", "target", "_blank", 1, "fab", "fa-instagram"], ["href", "#", "target", "_blank", 1, "fab", "fa-linkedin-in"], ["src", "assets/img/team-2.jpg", "alt", "team-img"], ["src", "assets/img/team-3.jpg", "alt", "team-img"], ["src", "assets/img/team-4.jpg", "alt", "team-img"], ["src", "assets/img/team-5.jpg", "alt", "team-img"], ["src", "assets/img/team-6.jpg", "alt", "team-img"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Meet Addax");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Our Creative ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "owl-carousel-o", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, TeamComponent_ng_template_13_Template, 18, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, TeamComponent_ng_template_14_Template, 18, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, TeamComponent_ng_template_15_Template, 18, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, TeamComponent_ng_template_16_Template, 18, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, TeamComponent_ng_template_17_Template, 18, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, TeamComponent_ng_template_18_Template, 18, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.teamSlides);
    } }, directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselSlideDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3416:
/*!****************************************************************!*\
  !*** ./src/app/components/common/welcome/welcome.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeComponent": function() { return /* binding */ WelcomeComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);


class WelcomeComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
    }
}
WelcomeComponent.??fac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller)); };
WelcomeComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 44, vars: 0, consts: [["id", "welcome", 1, "welcome-area", "pt-100", "pb-70"], [1, "container"], [1, "section-title"], [1, "row", "justify-content-center"], [1, "col-lg-4", "col-md-6", "col-sm-6"], [1, "single-box"], [1, "icon"], [1, "far", "fa-edit"], ["title", "Read More", 1, "link-btn", 3, "click"], [1, "fa", "fa-arrow-right"], [1, "fas", "fa-laptop"], [1, "far", "fa-life-ring"], [1, "shape2"], ["src", "assets/img/shape1.png", "alt", "image"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "We are creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Welcome to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Xavro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Lorem ipsum dolor sit amet sit ipsum, consectet adipiscing elit consectetur, ipsum dolor sed do eiusmod tempor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WelcomeComponent_Template_a_click_20_listener() { return ctx.onClick("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Friendly Codes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Lorem ipsum dolor sit amet sit ipsum, consectet adipiscing elit consectetur, ipsum dolor sed do eiusmod tempor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WelcomeComponent_Template_a_click_30_listener() { return ctx.onClick("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Fast Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Lorem ipsum dolor sit amet sit ipsum, consectet adipiscing elit consectetur, ipsum dolor sed do eiusmod tempor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WelcomeComponent_Template_a_click_40_listener() { return ctx.onClick("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWxjb21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2096:
/*!**********************************************************************!*\
  !*** ./src/app/components/common/who-we-are/who-we-are.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WhoWeAreComponent": function() { return /* binding */ WhoWeAreComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);


class WhoWeAreComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
    }
}
WhoWeAreComponent.??fac = function WhoWeAreComponent_Factory(t) { return new (t || WhoWeAreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller)); };
WhoWeAreComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: WhoWeAreComponent, selectors: [["app-who-we-are"]], decls: 64, vars: 0, consts: [[1, "who-we-are-area", "pt-100", "pb-70"], [1, "container"], [1, "section-title"], [1, "row"], [1, "col-lg-4", "col-md-6", "col-sm-6"], [1, "single-who-we-are"], [1, "fas", "fa-users"], [1, "far", "fa-lightbulb"], [1, "fas", "fa-tag"], [1, "far", "fa-hand-scissors"], [1, "fab", "fa-linode"], [1, "far", "fa-life-ring"]], template: function WhoWeAreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Who We ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Are");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "We are professional");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Fringilla augue at maximus vest vestibulum. Nam pulvinar vitaessst neque et porttitor. Praesent sed nis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "We are passionate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Fringilla augue at maximus vest vestibulum. Nam pulvinar vitaessst neque et porttitor. Praesent sed nis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "We are creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Fringilla augue at maximus vest vestibulum. Nam pulvinar vitaessst neque et porttitor. Praesent sed nis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "We are designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Fringilla augue at maximus vest vestibulum. Nam pulvinar vitaessst neque et porttitor. Praesent sed nis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "We are unique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Fringilla augue at maximus vest vestibulum. Nam pulvinar vitaessst neque et porttitor. Praesent sed nis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "We are support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Fringilla augue at maximus vest vestibulum. Nam pulvinar vitaessst neque et porttitor. Praesent sed nis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aG8td2UtYXJlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2337:
/*!**********************************************************************************!*\
  !*** ./src/app/components/common/why-we-different/why-we-different.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WhyWeDifferentComponent": function() { return /* binding */ WhyWeDifferentComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);


class WhyWeDifferentComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
    }
}
WhyWeDifferentComponent.??fac = function WhyWeDifferentComponent_Factory(t) { return new (t || WhyWeDifferentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller)); };
WhyWeDifferentComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: WhyWeDifferentComponent, selectors: [["app-why-we-different"]], decls: 131, vars: 0, consts: [[1, "why-we-different", "ptb-100", "bg-F7F5F4"], [1, "container"], [1, "section-title"], [1, "tabset", "why-we-different-tabset"], ["type", "radio", "name", "tabset", "id", "tab1", "aria-controls", "speed-flexibility", "checked", ""], ["for", "tab1"], ["type", "radio", "name", "tabset", "id", "tab2", "aria-controls", "profeesional-work"], ["for", "tab2"], ["type", "radio", "name", "tabset", "id", "tab3", "aria-controls", "experienced-staff"], ["for", "tab3"], ["type", "radio", "name", "tabset", "id", "tab4", "aria-controls", "custom-support"], ["for", "tab4"], [1, "tab-panels"], ["id", "speed-flexibility", 1, "tab-panel"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-12"], [1, "why-we-different-img"], ["src", "assets/img/different-img2.jpg", "alt", "img"], [1, "why-we-different-content"], [1, "fas", "fa-check"], ["id", "profeesional-work", 1, "tab-panel"], ["src", "assets/img/different-img1.jpg", "alt", "img"], ["id", "experienced-staff", 1, "tab-panel"], ["src", "assets/img/different-img3.jpg", "alt", "img"], ["id", "custom-support", 1, "tab-panel"], ["src", "assets/img/different-img4.jpg", "alt", "img"]], template: function WhyWeDifferentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Why We ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Are Different");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Speed , flexibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Profeesional work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Experienced Staff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Custom Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Speed , flexibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " Retina Ready");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " Responsive Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " Modern Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, " Awesome Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Profeesional work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, " Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, " Retina Ready");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, " Responsive Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, " Modern Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, " Awesome Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Experienced staff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, " Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](93, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, " Retina Ready");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, " Responsive Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, " Modern Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](102, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, " Awesome Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](108, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "24/7 support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](117, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, " Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](120, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, " Retina Ready");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](123, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, " Responsive Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](126, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, " Modern Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](129, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, " Awesome Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aHktd2UtZGlmZmVyZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3815:
/*!**********************************************************!*\
  !*** ./src/app/components/common/work/work.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkComponent": function() { return /* binding */ WorkComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var ngx_tabset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-tabset */ 293);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);




class WorkComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
    }
}
WorkComponent.??fac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.ViewportScroller)); };
WorkComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: WorkComponent, selectors: [["app-work"]], decls: 264, vars: 0, consts: [["id", "work", 1, "work-area", "pt-100", "pb-70"], [1, "container"], [1, "section-title"], [1, "container-fluid"], [1, "work-tabs"], ["tabTitle", "All"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "single-work"], ["src", "assets/img/work-img1.jpg", "alt", "work-img"], [1, "work-content"], ["routerLink", "/"], ["src", "assets/img/work-img2.jpg", "alt", "work-img"], ["href", "#"], ["src", "assets/img/work-img3.jpg", "alt", "work-img"], ["src", "assets/img/work-img4.jpg", "alt", "work-img"], ["src", "assets/img/work-img5.jpg", "alt", "work-img"], ["src", "assets/img/work-img6.jpg", "alt", "work-img"], ["tabTitle", "Brand"], ["tabTitle", "Design"], ["tabTitle", "Graphic"], ["tabTitle", "Photoshop"], ["tabTitle", "Illustrator"]], template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "ngx-tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "ngx-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](16, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, " . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](31, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "Games Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "IT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, " . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](46, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](49, "Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](61, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](64, "Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](68, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](70, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](73, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](76, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](79, "Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](83, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](85, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](88, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](91, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](94, "Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](98, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](100, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](103, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](104, "ngx-tab", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](105, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](108, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](111, "Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](112, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](115, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](117, " . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](119, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](120, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](123, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](125, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](126, "Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](127, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](128, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](129, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](130, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](132, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](133, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](134, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](135, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](136, "ngx-tab", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](137, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](138, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](139, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](140, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](141, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](143, "Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](144, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](145, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](146, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](147, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](148, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](149, " . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](150, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](151, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](152, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](153, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](154, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](155, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](156, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](157, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](158, "Games Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](159, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](160, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](161, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](162, "IT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](163, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](164, " . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](165, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](166, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](167, "Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](168, "ngx-tab", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](169, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](170, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](171, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](172, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](173, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](174, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](175, "Games Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](176, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](177, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](178, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](179, "IT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](180, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](181, " . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](182, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](183, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](184, "Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](185, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](186, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](187, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](188, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](189, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](190, "Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](191, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](192, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](193, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](194, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](195, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](196, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](197, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](198, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](199, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](200, "ngx-tab", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](201, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](202, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](203, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](204, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](205, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](206, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](207, "Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](208, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](209, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](210, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](211, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](212, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](213, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](214, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](215, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](216, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](217, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](218, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](219, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](220, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](221, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](222, "Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](223, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](224, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](225, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](226, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](227, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](228, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](229, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](230, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](231, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](232, "ngx-tab", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](233, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](234, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](235, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](236, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](237, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](238, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](239, "Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](240, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](241, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](242, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](243, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](244, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](245, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](246, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](247, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](248, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](249, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](250, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](251, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](252, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](253, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](254, "Creative Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](255, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](256, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](257, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](258, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](259, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](260, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](261, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](262, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](263, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } }, directives: [ngx_tabset__WEBPACK_IMPORTED_MODULE_0__.TabsetComponent, ngx_tabset__WEBPACK_IMPORTED_MODULE_0__.TabComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3JrLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3860:
/*!***************************************************************!*\
  !*** ./src/app/components/home-eight/home-eight.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeEightComponent": function() { return /* binding */ HomeEightComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-typed-js */ 3192);
/* harmony import */ var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/welcome/welcome.component */ 3416);
/* harmony import */ var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/about/about.component */ 7042);
/* harmony import */ var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strategy/strategy.component */ 8181);
/* harmony import */ var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/who-we-are/who-we-are.component */ 2096);
/* harmony import */ var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/cta/cta.component */ 9769);
/* harmony import */ var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/skill/skill.component */ 3649);
/* harmony import */ var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/funfacts/funfacts.component */ 5357);
/* harmony import */ var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/team/team.component */ 6278);
/* harmony import */ var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/how-we-work/how-we-work.component */ 4679);
/* harmony import */ var _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/services-two/services-two.component */ 2784);
/* harmony import */ var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/why-we-different/why-we-different.component */ 2337);
/* harmony import */ var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/work/work.component */ 3815);
/* harmony import */ var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/pricing/pricing.component */ 2019);
/* harmony import */ var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/faq/faq.component */ 2631);
/* harmony import */ var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/feedback/feedback.component */ 6900);
/* harmony import */ var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/blog/blog.component */ 3635);
/* harmony import */ var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/partner/partner.component */ 6455);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/subscribe/subscribe.component */ 9495);
/* harmony import */ var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/contact/contact.component */ 7524);






















const _c0 = function () { return ["Professional", "Passionate", "Creative", "Designer", "Unique", "Best", "Support"]; };
class HomeEightComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
    }
}
HomeEightComponent.??fac = function HomeEightComponent_Factory(t) { return new (t || HomeEightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.ViewportScroller)); };
HomeEightComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineComponent"]({ type: HomeEightComponent, selectors: [["app-home-eight"]], decls: 36, vars: 6, consts: [[1, "main-banner", "item-bg-two"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], [3, "strings", "typeSpeed", "loop", "backSpeed", "showCursor"], [1, "typing"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "view-work", 3, "click"]], template: function HomeEightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](6, "We Are Creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](8, "We Are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](9, "ngx-typed-js", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](12, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????listener"]("click", function HomeEightComponent_Template_a_click_13_listener() { return ctx.onClick("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](14, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????listener"]("click", function HomeEightComponent_Template_a_click_15_listener() { return ctx.onClick("work"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](16, "View Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](17, "app-welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](18, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](19, "app-strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](20, "app-who-we-are");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](21, "app-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](22, "app-skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](23, "app-funfacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](24, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](25, "app-how-we-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](26, "app-services-two");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](27, "app-why-we-different");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](28, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](29, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](30, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](31, "app-feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](32, "app-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](33, "app-partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](34, "app-subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](35, "app-contact");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????property"]("strings", _angular_core__WEBPACK_IMPORTED_MODULE_19__["????pureFunction0"](5, _c0))("typeSpeed", 100)("loop", true)("backSpeed", 100)("showCursor", false);
    } }, directives: [ngx_typed_js__WEBPACK_IMPORTED_MODULE_21__.NgxTypedJsComponent, _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_9__.ServicesTwoComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWVpZ2h0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2505:
/*!*****************************************************************!*\
  !*** ./src/app/components/home-eleven/home-eleven.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeElevenComponent": function() { return /* binding */ HomeElevenComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var ngx_particle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-particle */ 5290);
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-typed-js */ 3192);
/* harmony import */ var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/welcome/welcome.component */ 3416);
/* harmony import */ var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/about/about.component */ 7042);
/* harmony import */ var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strategy/strategy.component */ 8181);
/* harmony import */ var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/who-we-are/who-we-are.component */ 2096);
/* harmony import */ var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/cta/cta.component */ 9769);
/* harmony import */ var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/skill/skill.component */ 3649);
/* harmony import */ var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/funfacts/funfacts.component */ 5357);
/* harmony import */ var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/team/team.component */ 6278);
/* harmony import */ var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/how-we-work/how-we-work.component */ 4679);
/* harmony import */ var _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/services/services.component */ 8211);
/* harmony import */ var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/why-we-different/why-we-different.component */ 2337);
/* harmony import */ var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/work/work.component */ 3815);
/* harmony import */ var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/pricing/pricing.component */ 2019);
/* harmony import */ var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/faq/faq.component */ 2631);
/* harmony import */ var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/feedback/feedback.component */ 6900);
/* harmony import */ var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/blog/blog.component */ 3635);
/* harmony import */ var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/partner/partner.component */ 6455);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/subscribe/subscribe.component */ 9495);
/* harmony import */ var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/contact/contact.component */ 7524);























const _c0 = function () { return ["Professional", "Passionate", "Creative", "Designer", "Unique", "Best", "Support"]; };
class HomeElevenComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
        this.myStyle = {};
        this.myParams = {};
        this.width = 100;
        this.height = 100;
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
        this.myStyle = {
            'top': 0,
            'left': 0,
            'width': '100%',
            'height': '100%',
            'position': 'absolute'
        };
        this.myParams = {
            particles: {
                number: {
                    value: 80,
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'triangle',
                },
            }
        };
    }
}
HomeElevenComponent.??fac = function HomeElevenComponent_Factory(t) { return new (t || HomeElevenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.ViewportScroller)); };
HomeElevenComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineComponent"]({ type: HomeElevenComponent, selectors: [["app-home-eleven"]], decls: 38, vars: 11, consts: [[1, "main-banner", "item-bg-one"], [1, "creative-banner-three"], [3, "params", "width", "height"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], [3, "strings", "typeSpeed", "loop", "backSpeed", "showCursor"], [1, "typing"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "view-work", 3, "click"]], template: function HomeElevenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](2, "particles", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](8, "We Are Creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](10, "We Are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](11, "ngx-typed-js", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](14, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????listener"]("click", function HomeElevenComponent_Template_a_click_15_listener() { return ctx.onClick("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](16, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????listener"]("click", function HomeElevenComponent_Template_a_click_17_listener() { return ctx.onClick("work"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](18, "View Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](19, "app-welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](20, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](21, "app-strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](22, "app-who-we-are");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](23, "app-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](24, "app-skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](25, "app-funfacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](26, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](27, "app-how-we-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](28, "app-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](29, "app-why-we-different");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](30, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](31, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](32, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](33, "app-feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](34, "app-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](35, "app-partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](36, "app-subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](37, "app-contact");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????styleMap"](ctx.myStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????property"]("params", ctx.myParams)("width", ctx.width)("height", ctx.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????property"]("strings", _angular_core__WEBPACK_IMPORTED_MODULE_19__["????pureFunction0"](10, _c0))("typeSpeed", 100)("loop", true)("backSpeed", 100)("showCursor", false);
    } }, directives: [ngx_particle__WEBPACK_IMPORTED_MODULE_21__.ParticlesComponent, ngx_typed_js__WEBPACK_IMPORTED_MODULE_22__.NgxTypedJsComponent, _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__.ServicesComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWVsZXZlbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3806:
/*!*************************************************************!*\
  !*** ./src/app/components/home-five/home-five.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeFiveComponent": function() { return /* binding */ HomeFiveComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/welcome/welcome.component */ 3416);
/* harmony import */ var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/about/about.component */ 7042);
/* harmony import */ var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strategy/strategy.component */ 8181);
/* harmony import */ var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/who-we-are/who-we-are.component */ 2096);
/* harmony import */ var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/cta/cta.component */ 9769);
/* harmony import */ var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/skill/skill.component */ 3649);
/* harmony import */ var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/funfacts/funfacts.component */ 5357);
/* harmony import */ var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/team/team.component */ 6278);
/* harmony import */ var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/how-we-work/how-we-work.component */ 4679);
/* harmony import */ var _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/services/services.component */ 8211);
/* harmony import */ var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/why-we-different/why-we-different.component */ 2337);
/* harmony import */ var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/work/work.component */ 3815);
/* harmony import */ var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/pricing/pricing.component */ 2019);
/* harmony import */ var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/faq/faq.component */ 2631);
/* harmony import */ var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/feedback/feedback.component */ 6900);
/* harmony import */ var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/blog/blog.component */ 3635);
/* harmony import */ var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/partner/partner.component */ 6455);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/subscribe/subscribe.component */ 9495);
/* harmony import */ var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/contact/contact.component */ 7524);





















class HomeFiveComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
    }
}
HomeFiveComponent.??fac = function HomeFiveComponent_Factory(t) { return new (t || HomeFiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.ViewportScroller)); };
HomeFiveComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineComponent"]({ type: HomeFiveComponent, selectors: [["app-home-five"]], decls: 40, vars: 0, consts: [[1, "main-banner", "item-bg-two"], [1, "creative-banner-one"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "view-work", 3, "click"], [1, "shape3"], ["src", "assets/img/shape2.png", "alt", "image"]], template: function HomeFiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](7, "We Are Creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](9, "The Best ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](11, "Digital");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](12, " Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](14, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????listener"]("click", function HomeFiveComponent_Template_a_click_15_listener() { return ctx.onClick("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](16, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????listener"]("click", function HomeFiveComponent_Template_a_click_17_listener() { return ctx.onClick("work"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](18, "View Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](20, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](21, "app-welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](22, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](23, "app-strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](24, "app-who-we-are");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](25, "app-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](26, "app-skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](27, "app-funfacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](28, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](29, "app-how-we-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](30, "app-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](31, "app-why-we-different");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](32, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](33, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](34, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](35, "app-feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](36, "app-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](37, "app-partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](38, "app-subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](39, "app-contact");
    } }, directives: [_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__.ServicesComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWZpdmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7496:
/*!*************************************************************!*\
  !*** ./src/app/components/home-four/home-four.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeFourComponent": function() { return /* binding */ HomeFourComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/welcome/welcome.component */ 3416);
/* harmony import */ var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/about/about.component */ 7042);
/* harmony import */ var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strategy/strategy.component */ 8181);
/* harmony import */ var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/who-we-are/who-we-are.component */ 2096);
/* harmony import */ var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/cta/cta.component */ 9769);
/* harmony import */ var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/skill/skill.component */ 3649);
/* harmony import */ var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/funfacts/funfacts.component */ 5357);
/* harmony import */ var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/team/team.component */ 6278);
/* harmony import */ var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/how-we-work/how-we-work.component */ 4679);
/* harmony import */ var _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/services-two/services-two.component */ 2784);
/* harmony import */ var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/why-we-different/why-we-different.component */ 2337);
/* harmony import */ var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/work/work.component */ 3815);
/* harmony import */ var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/pricing/pricing.component */ 2019);
/* harmony import */ var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/faq/faq.component */ 2631);
/* harmony import */ var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/feedback/feedback.component */ 6900);
/* harmony import */ var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/blog/blog.component */ 3635);
/* harmony import */ var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/partner/partner.component */ 6455);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/subscribe/subscribe.component */ 9495);
/* harmony import */ var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/contact/contact.component */ 7524);





















class HomeFourComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
    }
}
HomeFourComponent.??fac = function HomeFourComponent_Factory(t) { return new (t || HomeFourComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.ViewportScroller)); };
HomeFourComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineComponent"]({ type: HomeFourComponent, selectors: [["app-home-four"]], decls: 37, vars: 0, consts: [[1, "main-banner", "item-bg-three", "ripple-effect", "jquery-ripples"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text", "text-start"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "view-work", 3, "click"]], template: function HomeFourComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](6, "We Are Creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](8, "The Best ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](10, "Digital");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](11, " Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](13, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????listener"]("click", function HomeFourComponent_Template_a_click_14_listener() { return ctx.onClick("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](15, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????listener"]("click", function HomeFourComponent_Template_a_click_16_listener() { return ctx.onClick("work"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](17, "View Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](18, "app-welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](19, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](20, "app-strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](21, "app-who-we-are");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](22, "app-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](23, "app-skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](24, "app-funfacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](25, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](26, "app-how-we-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](27, "app-services-two");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](28, "app-why-we-different");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](29, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](30, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](31, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](32, "app-feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](33, "app-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](34, "app-partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](35, "app-subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](36, "app-contact");
    } }, directives: [_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_9__.ServicesTwoComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWZvdXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7747:
/*!*************************************************************!*\
  !*** ./src/app/components/home-nine/home-nine.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeNineComponent": function() { return /* binding */ HomeNineComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var ngx_particle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-particle */ 5290);
/* harmony import */ var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/welcome/welcome.component */ 3416);
/* harmony import */ var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/about/about.component */ 7042);
/* harmony import */ var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strategy/strategy.component */ 8181);
/* harmony import */ var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/who-we-are/who-we-are.component */ 2096);
/* harmony import */ var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/cta/cta.component */ 9769);
/* harmony import */ var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/skill/skill.component */ 3649);
/* harmony import */ var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/funfacts/funfacts.component */ 5357);
/* harmony import */ var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/team/team.component */ 6278);
/* harmony import */ var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/how-we-work/how-we-work.component */ 4679);
/* harmony import */ var _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/services/services.component */ 8211);
/* harmony import */ var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/why-we-different/why-we-different.component */ 2337);
/* harmony import */ var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/work/work.component */ 3815);
/* harmony import */ var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/pricing/pricing.component */ 2019);
/* harmony import */ var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/faq/faq.component */ 2631);
/* harmony import */ var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/feedback/feedback.component */ 6900);
/* harmony import */ var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/blog/blog.component */ 3635);
/* harmony import */ var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/partner/partner.component */ 6455);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/subscribe/subscribe.component */ 9495);
/* harmony import */ var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/contact/contact.component */ 7524);






















class HomeNineComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
        this.myStyle = {};
        this.myParams = {};
        this.width = 100;
        this.height = 100;
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
        this.myStyle = {
            'top': 0,
            'left': 0,
            'width': '100%',
            'height': '100%',
            'position': 'absolute'
        };
        this.myParams = {
            particles: {
                number: {
                    value: 80,
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'triangle',
                },
            }
        };
    }
}
HomeNineComponent.??fac = function HomeNineComponent_Factory(t) { return new (t || HomeNineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.ViewportScroller)); };
HomeNineComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineComponent"]({ type: HomeNineComponent, selectors: [["app-home-nine"]], decls: 38, vars: 5, consts: [[1, "main-banner", "item-bg-one"], [3, "params", "width", "height"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "view-work", 3, "click"]], template: function HomeNineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](1, "particles", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](7, "We Are Creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](9, "The Best ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](11, "Digital");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](12, " Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](14, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????listener"]("click", function HomeNineComponent_Template_a_click_15_listener() { return ctx.onClick("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](16, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????listener"]("click", function HomeNineComponent_Template_a_click_17_listener() { return ctx.onClick("work"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](18, "View Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](19, "app-welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](20, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](21, "app-strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](22, "app-who-we-are");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](23, "app-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](24, "app-skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](25, "app-funfacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](26, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](27, "app-how-we-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](28, "app-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](29, "app-why-we-different");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](30, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](31, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](32, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](33, "app-feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](34, "app-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](35, "app-partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](36, "app-subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](37, "app-contact");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????styleMap"](ctx.myStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????property"]("params", ctx.myParams)("width", ctx.width)("height", ctx.height);
    } }, directives: [ngx_particle__WEBPACK_IMPORTED_MODULE_21__.ParticlesComponent, _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__.ServicesComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLW5pbmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2489:
/*!***********************************************************!*\
  !*** ./src/app/components/home-one/home-one.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeOneComponent": function() { return /* binding */ HomeOneComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/welcome/welcome.component */ 3416);
/* harmony import */ var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/about/about.component */ 7042);
/* harmony import */ var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strategy/strategy.component */ 8181);
/* harmony import */ var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/who-we-are/who-we-are.component */ 2096);
/* harmony import */ var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/cta/cta.component */ 9769);
/* harmony import */ var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/skill/skill.component */ 3649);
/* harmony import */ var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/funfacts/funfacts.component */ 5357);
/* harmony import */ var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/team/team.component */ 6278);
/* harmony import */ var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/how-we-work/how-we-work.component */ 4679);
/* harmony import */ var _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/services/services.component */ 8211);
/* harmony import */ var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/why-we-different/why-we-different.component */ 2337);
/* harmony import */ var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/work/work.component */ 3815);
/* harmony import */ var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/pricing/pricing.component */ 2019);
/* harmony import */ var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/faq/faq.component */ 2631);
/* harmony import */ var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/feedback/feedback.component */ 6900);
/* harmony import */ var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/blog/blog.component */ 3635);
/* harmony import */ var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/partner/partner.component */ 6455);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/subscribe/subscribe.component */ 9495);
/* harmony import */ var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/contact/contact.component */ 7524);





















class HomeOneComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
    }
}
HomeOneComponent.??fac = function HomeOneComponent_Factory(t) { return new (t || HomeOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.ViewportScroller)); };
HomeOneComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineComponent"]({ type: HomeOneComponent, selectors: [["app-home-one"]], decls: 37, vars: 0, consts: [[1, "main-banner", "item-bg-one"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "view-work", 3, "click"]], template: function HomeOneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](6, "We Are Creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](8, "The Best ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](10, "Digital");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](11, " Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](13, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????listener"]("click", function HomeOneComponent_Template_a_click_14_listener() { return ctx.onClick("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](15, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????listener"]("click", function HomeOneComponent_Template_a_click_16_listener() { return ctx.onClick("work"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](17, "View Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](18, "app-welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](19, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](20, "app-strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](21, "app-who-we-are");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](22, "app-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](23, "app-skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](24, "app-funfacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](25, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](26, "app-how-we-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](27, "app-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](28, "app-why-we-different");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](29, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](30, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](31, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](32, "app-feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](33, "app-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](34, "app-partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](35, "app-subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](36, "app-contact");
    } }, directives: [_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__.ServicesComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLW9uZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4616:
/*!***************************************************************!*\
  !*** ./src/app/components/home-seven/home-seven.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeSevenComponent": function() { return /* binding */ HomeSevenComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/welcome/welcome.component */ 3416);
/* harmony import */ var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/about/about.component */ 7042);
/* harmony import */ var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strategy/strategy.component */ 8181);
/* harmony import */ var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/who-we-are/who-we-are.component */ 2096);
/* harmony import */ var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/cta/cta.component */ 9769);
/* harmony import */ var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/skill/skill.component */ 3649);
/* harmony import */ var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/funfacts/funfacts.component */ 5357);
/* harmony import */ var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/team/team.component */ 6278);
/* harmony import */ var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/how-we-work/how-we-work.component */ 4679);
/* harmony import */ var _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/services/services.component */ 8211);
/* harmony import */ var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/why-we-different/why-we-different.component */ 2337);
/* harmony import */ var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/work/work.component */ 3815);
/* harmony import */ var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/pricing/pricing.component */ 2019);
/* harmony import */ var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/faq/faq.component */ 2631);
/* harmony import */ var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/feedback/feedback.component */ 6900);
/* harmony import */ var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/blog/blog.component */ 3635);
/* harmony import */ var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/partner/partner.component */ 6455);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/subscribe/subscribe.component */ 9495);
/* harmony import */ var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/contact/contact.component */ 7524);





















class HomeSevenComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
    }
}
HomeSevenComponent.??fac = function HomeSevenComponent_Factory(t) { return new (t || HomeSevenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.ViewportScroller)); };
HomeSevenComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineComponent"]({ type: HomeSevenComponent, selectors: [["app-home-seven"]], decls: 38, vars: 0, consts: [[1, "main-banner", "item-bg-one"], [1, "creative-banner-three"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "view-work", 3, "click"]], template: function HomeSevenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](7, "We Are Creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](9, "The Best ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](11, "Digital");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](12, " Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](14, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????listener"]("click", function HomeSevenComponent_Template_a_click_15_listener() { return ctx.onClick("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](16, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????listener"]("click", function HomeSevenComponent_Template_a_click_17_listener() { return ctx.onClick("work"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](18, "View Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](19, "app-welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](20, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](21, "app-strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](22, "app-who-we-are");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](23, "app-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](24, "app-skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](25, "app-funfacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](26, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](27, "app-how-we-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](28, "app-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](29, "app-why-we-different");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](30, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](31, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](32, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](33, "app-feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](34, "app-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](35, "app-partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](36, "app-subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](37, "app-contact");
    } }, directives: [_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__.ServicesComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXNldmVuLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6174:
/*!***********************************************************!*\
  !*** ./src/app/components/home-six/home-six.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeSixComponent": function() { return /* binding */ HomeSixComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/welcome/welcome.component */ 3416);
/* harmony import */ var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/about/about.component */ 7042);
/* harmony import */ var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strategy/strategy.component */ 8181);
/* harmony import */ var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/who-we-are/who-we-are.component */ 2096);
/* harmony import */ var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/cta/cta.component */ 9769);
/* harmony import */ var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/skill/skill.component */ 3649);
/* harmony import */ var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/funfacts/funfacts.component */ 5357);
/* harmony import */ var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/team/team.component */ 6278);
/* harmony import */ var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/how-we-work/how-we-work.component */ 4679);
/* harmony import */ var _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/services-two/services-two.component */ 2784);
/* harmony import */ var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/why-we-different/why-we-different.component */ 2337);
/* harmony import */ var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/work/work.component */ 3815);
/* harmony import */ var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/pricing/pricing.component */ 2019);
/* harmony import */ var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/faq/faq.component */ 2631);
/* harmony import */ var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/feedback/feedback.component */ 6900);
/* harmony import */ var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/blog/blog.component */ 3635);
/* harmony import */ var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/partner/partner.component */ 6455);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/subscribe/subscribe.component */ 9495);
/* harmony import */ var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/contact/contact.component */ 7524);





















class HomeSixComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
    }
}
HomeSixComponent.??fac = function HomeSixComponent_Factory(t) { return new (t || HomeSixComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.ViewportScroller)); };
HomeSixComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineComponent"]({ type: HomeSixComponent, selectors: [["app-home-six"]], decls: 38, vars: 0, consts: [[1, "main-banner", "item-bg-three"], [1, "creative-banner-two"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "view-work", 3, "click"]], template: function HomeSixComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](7, "We Are Creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](9, "The Best ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](11, "Digital");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](12, " Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](14, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????listener"]("click", function HomeSixComponent_Template_a_click_15_listener() { return ctx.onClick("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](16, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????listener"]("click", function HomeSixComponent_Template_a_click_17_listener() { return ctx.onClick("work"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](18, "View Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](19, "app-welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](20, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](21, "app-strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](22, "app-who-we-are");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](23, "app-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](24, "app-skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](25, "app-funfacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](26, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](27, "app-how-we-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](28, "app-services-two");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](29, "app-why-we-different");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](30, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](31, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](32, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](33, "app-feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](34, "app-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](35, "app-partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](36, "app-subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](37, "app-contact");
    } }, directives: [_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_9__.ServicesTwoComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXNpeC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 390:
/*!***********************************************************!*\
  !*** ./src/app/components/home-ten/home-ten.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeTenComponent": function() { return /* binding */ HomeTenComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-typed-js */ 3192);
/* harmony import */ var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/welcome/welcome.component */ 3416);
/* harmony import */ var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/about/about.component */ 7042);
/* harmony import */ var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strategy/strategy.component */ 8181);
/* harmony import */ var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/who-we-are/who-we-are.component */ 2096);
/* harmony import */ var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/cta/cta.component */ 9769);
/* harmony import */ var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/skill/skill.component */ 3649);
/* harmony import */ var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/funfacts/funfacts.component */ 5357);
/* harmony import */ var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/team/team.component */ 6278);
/* harmony import */ var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/how-we-work/how-we-work.component */ 4679);
/* harmony import */ var _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/services-two/services-two.component */ 2784);
/* harmony import */ var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/why-we-different/why-we-different.component */ 2337);
/* harmony import */ var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/work/work.component */ 3815);
/* harmony import */ var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/pricing/pricing.component */ 2019);
/* harmony import */ var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/faq/faq.component */ 2631);
/* harmony import */ var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/feedback/feedback.component */ 6900);
/* harmony import */ var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/blog/blog.component */ 3635);
/* harmony import */ var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/partner/partner.component */ 6455);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/subscribe/subscribe.component */ 9495);
/* harmony import */ var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/contact/contact.component */ 7524);






















const _c0 = function () { return ["Professional", "Passionate", "Creative", "Designer", "Unique", "Best", "Support"]; };
class HomeTenComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
    }
}
HomeTenComponent.??fac = function HomeTenComponent_Factory(t) { return new (t || HomeTenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.ViewportScroller)); };
HomeTenComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineComponent"]({ type: HomeTenComponent, selectors: [["app-home-ten"]], decls: 37, vars: 6, consts: [[1, "main-banner", "item-bg-three"], [1, "creative-banner-two"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], [3, "strings", "typeSpeed", "loop", "backSpeed", "showCursor"], [1, "typing"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "view-work", 3, "click"]], template: function HomeTenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](7, "We Are Creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](9, "We Are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](10, "ngx-typed-js", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](13, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????listener"]("click", function HomeTenComponent_Template_a_click_14_listener() { return ctx.onClick("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](15, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????listener"]("click", function HomeTenComponent_Template_a_click_16_listener() { return ctx.onClick("work"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](17, "View Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](18, "app-welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](19, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](20, "app-strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](21, "app-who-we-are");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](22, "app-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](23, "app-skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](24, "app-funfacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](25, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](26, "app-how-we-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](27, "app-services-two");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](28, "app-why-we-different");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](29, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](30, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](31, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](32, "app-feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](33, "app-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](34, "app-partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](35, "app-subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](36, "app-contact");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????property"]("strings", _angular_core__WEBPACK_IMPORTED_MODULE_19__["????pureFunction0"](5, _c0))("typeSpeed", 100)("loop", true)("backSpeed", 100)("showCursor", false);
    } }, directives: [ngx_typed_js__WEBPACK_IMPORTED_MODULE_21__.NgxTypedJsComponent, _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_9__.ServicesTwoComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXRlbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1011:
/*!*********************************************************************!*\
  !*** ./src/app/components/home-thirteen/home-thirteen.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeThirteenComponent": function() { return /* binding */ HomeThirteenComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var ngx_particle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-particle */ 5290);
/* harmony import */ var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/welcome/welcome.component */ 3416);
/* harmony import */ var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/about/about.component */ 7042);
/* harmony import */ var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strategy/strategy.component */ 8181);
/* harmony import */ var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/who-we-are/who-we-are.component */ 2096);
/* harmony import */ var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/cta/cta.component */ 9769);
/* harmony import */ var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/skill/skill.component */ 3649);
/* harmony import */ var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/funfacts/funfacts.component */ 5357);
/* harmony import */ var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/team/team.component */ 6278);
/* harmony import */ var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/how-we-work/how-we-work.component */ 4679);
/* harmony import */ var _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/services/services.component */ 8211);
/* harmony import */ var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/why-we-different/why-we-different.component */ 2337);
/* harmony import */ var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/work/work.component */ 3815);
/* harmony import */ var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/pricing/pricing.component */ 2019);
/* harmony import */ var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/faq/faq.component */ 2631);
/* harmony import */ var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/feedback/feedback.component */ 6900);
/* harmony import */ var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/blog/blog.component */ 3635);
/* harmony import */ var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/partner/partner.component */ 6455);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/subscribe/subscribe.component */ 9495);
/* harmony import */ var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/contact/contact.component */ 7524);






















class HomeThirteenComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
        this.myStyle = {};
        this.myParams = {};
        this.width = 100;
        this.height = 100;
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
        this.myStyle = {
            'top': 0,
            'left': 0,
            'width': '100%',
            'height': '100%',
            'position': 'absolute'
        };
        this.myParams = {
            particles: {
                number: {
                    value: 80,
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'stroke',
                },
            }
        };
    }
}
HomeThirteenComponent.??fac = function HomeThirteenComponent_Factory(t) { return new (t || HomeThirteenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.ViewportScroller)); };
HomeThirteenComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineComponent"]({ type: HomeThirteenComponent, selectors: [["app-home-thirteen"]], decls: 38, vars: 5, consts: [[1, "main-banner", "item-bg-one"], [3, "params", "width", "height"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text", "text-end"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "view-work", 3, "click"]], template: function HomeThirteenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](1, "particles", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](7, "We Are Creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](9, "The Best ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](11, "Digital");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](12, " Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](14, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????listener"]("click", function HomeThirteenComponent_Template_a_click_15_listener() { return ctx.onClick("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](16, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????listener"]("click", function HomeThirteenComponent_Template_a_click_17_listener() { return ctx.onClick("work"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](18, "View Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](19, "app-welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](20, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](21, "app-strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](22, "app-who-we-are");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](23, "app-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](24, "app-skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](25, "app-funfacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](26, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](27, "app-how-we-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](28, "app-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](29, "app-why-we-different");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](30, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](31, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](32, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](33, "app-feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](34, "app-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](35, "app-partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](36, "app-subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](37, "app-contact");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????styleMap"](ctx.myStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????property"]("params", ctx.myParams)("width", ctx.width)("height", ctx.height);
    } }, directives: [ngx_particle__WEBPACK_IMPORTED_MODULE_21__.ParticlesComponent, _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__.ServicesComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXRoaXJ0ZWVuLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3562:
/*!***************************************************************!*\
  !*** ./src/app/components/home-three/home-three.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeThreeComponent": function() { return /* binding */ HomeThreeComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/welcome/welcome.component */ 3416);
/* harmony import */ var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/about/about.component */ 7042);
/* harmony import */ var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strategy/strategy.component */ 8181);
/* harmony import */ var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/who-we-are/who-we-are.component */ 2096);
/* harmony import */ var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/cta/cta.component */ 9769);
/* harmony import */ var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/skill/skill.component */ 3649);
/* harmony import */ var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/funfacts/funfacts.component */ 5357);
/* harmony import */ var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/team/team.component */ 6278);
/* harmony import */ var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/how-we-work/how-we-work.component */ 4679);
/* harmony import */ var _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/services/services.component */ 8211);
/* harmony import */ var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/why-we-different/why-we-different.component */ 2337);
/* harmony import */ var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/work/work.component */ 3815);
/* harmony import */ var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/pricing/pricing.component */ 2019);
/* harmony import */ var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/faq/faq.component */ 2631);
/* harmony import */ var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/feedback/feedback.component */ 6900);
/* harmony import */ var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/blog/blog.component */ 3635);
/* harmony import */ var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/partner/partner.component */ 6455);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/subscribe/subscribe.component */ 9495);
/* harmony import */ var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/contact/contact.component */ 7524);





















class HomeThreeComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
    }
}
HomeThreeComponent.??fac = function HomeThreeComponent_Factory(t) { return new (t || HomeThreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.ViewportScroller)); };
HomeThreeComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineComponent"]({ type: HomeThreeComponent, selectors: [["app-home-three"]], decls: 39, vars: 0, consts: [[1, "main-banner"], ["loop", "", "muted", "", "autoplay", "", "poster", "#", 1, "video-background"], ["src", "assets/video/promo-video.mp4", "type", "video/mp4"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "view-work", 3, "click"]], template: function HomeThreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](1, "video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](2, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](8, "We Are Creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](10, "The Best ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](12, "Digital");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](13, " Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](15, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????listener"]("click", function HomeThreeComponent_Template_a_click_16_listener() { return ctx.onClick("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](17, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????listener"]("click", function HomeThreeComponent_Template_a_click_18_listener() { return ctx.onClick("work"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](19, "View Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](20, "app-welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](21, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](22, "app-strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](23, "app-who-we-are");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](24, "app-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](25, "app-skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](26, "app-funfacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](27, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](28, "app-how-we-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](29, "app-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](30, "app-why-we-different");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](31, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](32, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](33, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](34, "app-feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](35, "app-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](36, "app-partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](37, "app-subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](38, "app-contact");
    } }, directives: [_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__.ServicesComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXRocmVlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7505:
/*!*****************************************************************!*\
  !*** ./src/app/components/home-twelve/home-twelve.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeTwelveComponent": function() { return /* binding */ HomeTwelveComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/welcome/welcome.component */ 3416);
/* harmony import */ var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/about/about.component */ 7042);
/* harmony import */ var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strategy/strategy.component */ 8181);
/* harmony import */ var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/who-we-are/who-we-are.component */ 2096);
/* harmony import */ var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/cta/cta.component */ 9769);
/* harmony import */ var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/skill/skill.component */ 3649);
/* harmony import */ var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/funfacts/funfacts.component */ 5357);
/* harmony import */ var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/team/team.component */ 6278);
/* harmony import */ var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/how-we-work/how-we-work.component */ 4679);
/* harmony import */ var _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/services-two/services-two.component */ 2784);
/* harmony import */ var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/why-we-different/why-we-different.component */ 2337);
/* harmony import */ var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/work/work.component */ 3815);
/* harmony import */ var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/pricing/pricing.component */ 2019);
/* harmony import */ var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/faq/faq.component */ 2631);
/* harmony import */ var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/feedback/feedback.component */ 6900);
/* harmony import */ var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/blog/blog.component */ 3635);
/* harmony import */ var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/partner/partner.component */ 6455);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/subscribe/subscribe.component */ 9495);
/* harmony import */ var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/contact/contact.component */ 7524);





















class HomeTwelveComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
    }
}
HomeTwelveComponent.??fac = function HomeTwelveComponent_Factory(t) { return new (t || HomeTwelveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.ViewportScroller)); };
HomeTwelveComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineComponent"]({ type: HomeTwelveComponent, selectors: [["app-home-twelve"]], decls: 37, vars: 0, consts: [[1, "main-banner", "item-bg-three", "gradient-bg", "ripple-effect", "jquery-ripples"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "view-work", 3, "click"]], template: function HomeTwelveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](6, "We Are Creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](8, "The Best ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](10, "Digital");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](11, " Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](13, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????listener"]("click", function HomeTwelveComponent_Template_a_click_14_listener() { return ctx.onClick("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](15, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????listener"]("click", function HomeTwelveComponent_Template_a_click_16_listener() { return ctx.onClick("work"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????text"](17, "View Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](18, "app-welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](19, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](20, "app-strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](21, "app-who-we-are");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](22, "app-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](23, "app-skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](24, "app-funfacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](25, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](26, "app-how-we-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](27, "app-services-two");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](28, "app-why-we-different");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](29, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](30, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](31, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](32, "app-feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](33, "app-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](34, "app-partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](35, "app-subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["????element"](36, "app-contact");
    } }, directives: [_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_9__.ServicesTwoComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXR3ZWx2ZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6519:
/*!***********************************************************!*\
  !*** ./src/app/components/home-two/home-two.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeTwoComponent": function() { return /* binding */ HomeTwoComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-owl-carousel-o */ 5668);
/* harmony import */ var _common_about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/about/about.component */ 7042);
/* harmony import */ var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/strategy/strategy.component */ 8181);
/* harmony import */ var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/who-we-are/who-we-are.component */ 2096);
/* harmony import */ var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/cta/cta.component */ 9769);
/* harmony import */ var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/skill/skill.component */ 3649);
/* harmony import */ var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/funfacts/funfacts.component */ 5357);
/* harmony import */ var _common_team_team_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/team/team.component */ 6278);
/* harmony import */ var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/how-we-work/how-we-work.component */ 4679);
/* harmony import */ var _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/services-two/services-two.component */ 2784);
/* harmony import */ var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/why-we-different/why-we-different.component */ 2337);
/* harmony import */ var _common_work_work_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/work/work.component */ 3815);
/* harmony import */ var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/pricing/pricing.component */ 2019);
/* harmony import */ var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/faq/faq.component */ 2631);
/* harmony import */ var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/feedback/feedback.component */ 6900);
/* harmony import */ var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/blog/blog.component */ 3635);
/* harmony import */ var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/partner/partner.component */ 6455);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/subscribe/subscribe.component */ 9495);
/* harmony import */ var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/contact/contact.component */ 7524);





















function HomeTwoComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](6, "We Are Creative");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](8, "Nice To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](10, "Meet");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](11, " You");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](13, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](14, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](15, "Get Started");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](16, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????listener"]("click", function HomeTwoComponent_ng_template_2_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["????restoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["????nextContext"](); return ctx_r3.onClick("work"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](17, "View Work");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
} }
function HomeTwoComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](6, "We Are Professional");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](8, "Best ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](10, "Digital");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](11, " Experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](13, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](14, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](15, "Get Started");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](16, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????listener"]("click", function HomeTwoComponent_ng_template_3_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["????restoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["????nextContext"](); return ctx_r5.onClick("work"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](17, "View Work");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
} }
function HomeTwoComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](6, "We Are Designer");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](8, "Creativity is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](10, "Intelligence");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](12, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](13, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](14, "Get Started");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](15, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????listener"]("click", function HomeTwoComponent_ng_template_4_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["????restoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["????nextContext"](); return ctx_r7.onClick("work"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????text"](16, "View Work");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
} }
class HomeTwoComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
        this.homeSlides = {
            loop: true,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            items: 1,
            autoHeight: true,
            smartSpeed: 750,
            autoplay: true,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ]
        };
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit() {
    }
}
HomeTwoComponent.??fac = function HomeTwoComponent_Factory(t) { return new (t || HomeTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_19__.ViewportScroller)); };
HomeTwoComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["????defineComponent"]({ type: HomeTwoComponent, selectors: [["app-home-two"]], decls: 23, vars: 1, consts: [[1, "home-slides"], [3, "options"], ["carouselSlide", ""], [1, "main-banner", "item-bg-two"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], ["href", "#about", 1, "btn", "btn-primary"], [1, "btn", "btn-primary", "view-work", 3, "click"], [1, "main-banner", "item-bg-one"], [1, "main-banner", "item-bg-three"]], template: function HomeTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementStart"](1, "owl-carousel-o", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????template"](2, HomeTwoComponent_ng_template_2_Template, 18, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????template"](3, HomeTwoComponent_ng_template_3_Template, 18, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????template"](4, HomeTwoComponent_ng_template_4_Template, 17, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](5, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](6, "app-strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](7, "app-who-we-are");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](8, "app-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](9, "app-skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](10, "app-funfacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](11, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](12, "app-how-we-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](13, "app-services-two");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](14, "app-why-we-different");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](15, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](16, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](17, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](18, "app-feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](19, "app-blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](20, "app-partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](21, "app-subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????element"](22, "app-contact");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["????property"]("options", ctx.homeSlides);
    } }, directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_20__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_20__.CarouselSlideDirective, _common_about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_1__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_2__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_3__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_4__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_5__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_6__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_7__.HowWeWorkComponent, _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_8__.ServicesTwoComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_9__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_10__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_11__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_12__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_13__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_14__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_15__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_16__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXR3by5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map