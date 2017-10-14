"use strict";
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var menu_bar_component_1 = require("./menu-bar/menu-bar.component");
var project_view_component_1 = require("./project-view/project-view.component");
var profil_view_component_1 = require("./profil-view/profil-view.component");
var main_view_component_1 = require("./main-view/main-view.component");
var project_view_service_1 = require("./project-view/project-view.service");
var contact_service_1 = require("./contact/contact.service");
var contact_component_1 = require("./contact/contact.component");
var footer_component_1 = require("./footer-view/footer.component");
var impressum_component_1 = require("./impressum-view/impressum.component");
var profil_view_service_1 = require("./profil-view/profil-view.service");
var visit_cart_component_1 = require("./visit-card/visit-cart.component");
var visit_cart_resolver_1 = require("./visit-card/visit-cart.resolver");
var provil_view_resolver_1 = require("./profil-view/provil-view.resolver");
var slider_component_1 = require("./ui-components/slider/slider.component");
exports.routes = [
    { path: '', component: main_view_component_1.MainViewComponent },
    { path: 'projects', component: project_view_component_1.ProjectViewComponent },
    { path: 'profil', component: profil_view_component_1.ProfilViewComponent, resolve: { profilData: provil_view_resolver_1.ProfilViewResolver } },
    { path: 'contact', component: visit_cart_component_1.VisitCartComponent, resolve: { contactData: visit_cart_resolver_1.VisitCartResolver } },
    { path: 'impressum', component: impressum_component_1.ImpressumComponent }
];
exports.appRoutingProviders = [
    project_view_service_1.ProjectViewService,
    contact_service_1.ContactService,
    profil_view_service_1.ProfilViewService,
    visit_cart_resolver_1.VisitCartResolver,
    provil_view_resolver_1.ProfilViewResolver
];
exports.appDeklarations = [
    app_component_1.AppComponent, menu_bar_component_1.MenuBarComponent, project_view_component_1.ProjectViewComponent, main_view_component_1.MainViewComponent,
    profil_view_component_1.ProfilViewComponent, contact_component_1.ContactComponent, footer_component_1.FooterComponent, impressum_component_1.ImpressumComponent,
    visit_cart_component_1.VisitCartComponent,
    slider_component_1.SliderComponent
];
exports.routing = router_1.RouterModule.forRoot(exports.routes, { useHash: true });
//# sourceMappingURL=app.routes.js.map