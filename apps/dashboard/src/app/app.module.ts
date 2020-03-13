import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthTokenInterceptorService } from '@ngrx-energy-drinks/core-data';

import { CoreDataModule } from '@ngrx-energy-drinks/core-data';
import { CoreStateModule } from '@ngrx-energy-drinks/core-state';
import { MaterialModule } from '@ngrx-energy-drinks/material';
import { UiLibrariesModule } from '@ngrx-energy-drinks/ui-libraries';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { EnergyDrinksComponent } from './energy-drinks/energy-drinks.component';
import { EnergyDrinksItemComponent } from './energy-drinks/energy-drinks-item/energy-drinks-item.component';
import { EnergyDrinksDetailsComponent } from './energy-drinks/energy-drinks-details/energy-drinks-details.component';
import { EnergyDrinksListComponent } from './energy-drinks/energy-drinks-list/energy-drinks-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
    EnergyDrinksComponent,
    EnergyDrinksItemComponent,
    EnergyDrinksDetailsComponent,
    EnergyDrinksListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UiLibrariesModule,
    RoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
