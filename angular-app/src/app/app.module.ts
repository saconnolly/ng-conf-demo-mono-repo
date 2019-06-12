import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';

import { DeviceDetectorModule } from 'ngx-device-detector';
import { ContainerHttpComponent } from './container-http/container-http.component';
import { PresenterComponent } from './presenter/presenter.component';
import { ContainerWsComponent } from './container-ws/container-ws.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PresentationDetailsDialogComponent } from './presentation-details-dialog/presentation-details-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerHttpComponent,
    PresenterComponent,
    ContainerWsComponent,
    MainMenuComponent,
    PresentationDetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DeviceDetectorModule.forRoot()
  ],
  entryComponents: [PresentationDetailsDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
