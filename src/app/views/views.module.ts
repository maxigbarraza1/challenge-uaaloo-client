import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../material.module';
import { ViewsRoutingModule } from './views-routing.module';

import { ClientsComponent } from './clients/clients.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    ClientsComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FlexLayoutModule,
    MaterialModule,
    ViewsRoutingModule,
  ],
})
export class ViewsModule { }
