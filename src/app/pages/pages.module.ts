import { NgModule } from '@angular/core';

import { PAGES_ROUTES } from './pages.routes';
import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';

// ng-2 charts
import { ChartsModule } from 'ng2-charts';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

// Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccountSettingsComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    GraficoDonaComponent
  ],
  imports: [SharedModule, PAGES_ROUTES, FormsModule, ChartsModule]
})
export class PagesModule {}