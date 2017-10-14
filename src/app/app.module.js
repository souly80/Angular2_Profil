"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
var menu_bar_component_1 = require("./menu-bar/menu-bar.component");
var project_view_component_1 = require("./project-view/project-view.component");
var profil_view_component_1 = require("./profil-view/profil-view.component");
var main_view_component_1 = require("./main-view/main-view.component");
var footer_component_1 = require("./footer-view/footer.component");
var impressum_component_1 = require("./impressum-view/impressum.component");
var ng2_charts_1 = require("ng2-charts/ng2-charts");
var visit_cart_component_1 = require("./visit-card/visit-cart.component");
var slider_component_1 = require("./ui-components/slider/slider.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routes_1.routing, ng2_charts_1.ChartsModule],
        declarations: [app_routes_1.appDeklarations],
        providers: [app_routes_1.appRoutingProviders],
        entryComponents: [
            app_component_1.AppComponent,
            main_view_component_1.MainViewComponent,
            project_view_component_1.ProjectViewComponent,
            profil_view_component_1.ProfilViewComponent,
            menu_bar_component_1.MenuBarComponent,
            footer_component_1.FooterComponent,
            impressum_component_1.ImpressumComponent,
            visit_cart_component_1.VisitCartComponent,
            slider_component_1.SliderComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map