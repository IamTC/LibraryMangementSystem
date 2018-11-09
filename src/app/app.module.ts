import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ApiService } from './api.service'

import { MaterialModuleModule } from './material-module/material-module.module'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddItemComponent } from './add-item/add-item.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RemoveItemComponent } from './remove-item/remove-item.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { LendItemComponent } from './lend-item/lend-item.component';
import { ReturnItemComponent } from './return-item/return-item.component';
import { ReportComponent } from './report/report.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddItemComponent,
    LoginComponent,
    HomeComponent,
    RemoveItemComponent,
    ViewAllComponent,
    LendItemComponent,
    ReturnItemComponent,
    ReportComponent,
    NavBarComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    HttpModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
