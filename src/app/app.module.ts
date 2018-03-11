import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {PublicLayoutComponent} from './public-layout/public-layout.component';
import {RestrictedLayoutComponent} from './restricted-layout/restricted-layout.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthGuard} from './core/services/authguard.service';
import {Auth} from './core/services/auth.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { TrimPipe } from './core/pipes/trim.pipe';
import {RecipeService} from './core/services/recipe.service';
import {JwtHttpClientInterceptor} from './core/interceptors/jwt-httpclient.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    PublicLayoutComponent,
    RestrictedLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    Auth,
    RecipeService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtHttpClientInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
