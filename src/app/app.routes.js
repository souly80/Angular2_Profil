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
exports.routes = [
    { path: '', component: main_view_component_1.MainViewComponent },
    { path: 'projects', component: project_view_component_1.ProjectViewComponent },
    { path: 'profil', component: profil_view_component_1.ProfilViewComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'impressum', component: impressum_component_1.ImpressumComponent },
];
exports.appRoutingProviders = [
    project_view_service_1.ProjectViewService, contact_service_1.ContactService, profil_view_service_1.ProfilViewService
];
exports.appDeklarations = [
    app_component_1.AppComponent, menu_bar_component_1.MenuBarComponent, project_view_component_1.ProjectViewComponent, main_view_component_1.MainViewComponent,
    profil_view_component_1.ProfilViewComponent, contact_component_1.ContactComponent, footer_component_1.FooterComponent, impressum_component_1.ImpressumComponent
];
exports.routing = router_1.RouterModule.forRoot(exports.routes, { useHash: true });
//# sourceMappingURL=app.routes.js.map