import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './autenticazione/interceptor/interceptor-error';
import { MaterialModalComponent } from './material-modal/material-modal.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule } from '@angular/router';
import { JwtInterceptor } from './autenticazione/interceptor/jwt-interceptor';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    MaterialModalComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true
  },
  {
    provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule {}
