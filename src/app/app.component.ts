import { TemplateLiteral } from '@angular/compiler';
import { Component } from '@angular/core';

import {ChartDataset,ChartOptions,ChartConfiguration} from "chart.js";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
  
})
export class AppComponent {
  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', stack: '1' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', stack: '1' },
    { data: [42, 24, 71, 14, 31, 49, 30], label: 'Series C', stack: '2' },
  ];
  

  public barChartLabels: string[] = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
  ];

  public barChartOptions: any = {
    responsive: true,
  
    scales: { 
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  };
  public barChartType: string = 'bar';
 
  
  constructor() {
  }

}
