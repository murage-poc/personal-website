import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
    {path: '#home', component: HomeComponent},
    {path: '**', component: HomeComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled',
    scrollOffset: [0, 48], onSameUrlNavigation: 'reload',
    relativeLinkResolution: 'legacy'
})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
