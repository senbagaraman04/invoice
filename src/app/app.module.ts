import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgwWowModule } from 'ngx-wow';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RouterModule, Routes } from '@angular/router';
import { NgVerticalTimelineModule } from 'ng-vertical-timeline';
import { DemoMaterialModule } from './material-module';
import { MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { MatTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSortModule, MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TermsComponent } from './terms/terms.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientService } from './service/http-client.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { OverviewDetailsComponent } from './admin-panel/overview-details/overview-details.component';
import { InvoiceTemplateComponent } from './admin-panel/invoice-template/invoice-template.component';
import { SettingComponent } from './admin-panel/setting/setting.component';
import { BillingHistoryComponent } from './admin-panel/billing-history/billing-history.component';
import { InventoryPanelComponent } from './admin-panel/inventory-panel/inventory-panel.component';
import { ViewInventoryComponent } from './admin-panel/view-inventory/view-inventory.component';


const appRoutes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'welcome', component: WelcomeComponent }
    ]
  },
  {
    path: 'admin', component: AdminPanelComponent,
    children: [
      { path: 'overview', component: OverviewDetailsComponent },
      { path: 'invoice', component: InvoiceTemplateComponent },
      { path: 'settings', component: SettingComponent },
      { path: 'history', component: BillingHistoryComponent },
      { path: 'inventory', component: InventoryPanelComponent },
      {path: 'viewstock', component: ViewInventoryComponent}
    ]
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    AdminPanelComponent,
    OverviewDetailsComponent,
    TermsComponent,
    WelcomeComponent,
    InvoiceTemplateComponent,
    SettingComponent,
    BillingHistoryComponent,
    InventoryPanelComponent,
    ViewInventoryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatTableModule,
    MatSortModule,
    NgwWowModule,
    RouterModule,
    MatCardModule,
    MatTableModule,
    NgVerticalTimelineModule,
    CdkTableModule,
    MatSortModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatDialogModule,
    HttpClientModule,
    HighchartsChartModule,
    DemoMaterialModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
