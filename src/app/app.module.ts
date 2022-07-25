import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { barChartComponent } from './barchart/barchart.component';
import { BarchartService } from './barchart/barchart.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, barChartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [BarchartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
