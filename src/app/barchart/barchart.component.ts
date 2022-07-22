import { TemplateLiteral } from '@angular/compiler';
import { Component } from '@angular/core';

import { Input } from '@angular/core';

import {
  Chart,
  ChartConfiguration,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from 'chart.js';

@Component({
  selector: 'app-barChart',
  templateUrl: './barChart.component.html',
  styleUrls: ['./barchart.component.scss'],
})
export class barChartComponent {
  @Input() barChartData!: any[];
  @Input() barChartLabelsDays!: string[];
  public week = 0;

  public slicedData() {
    let dataCopy = JSON.parse(JSON.stringify(this.barChartData));
    return dataCopy.map((value: any) => {
      let d = value;
      d.data = d.data.slice(this.week * 7, (this.week + 1) * 7);
      return d;
    });
  }

  public slicedLabels() {
    return this.barChartLabelsDays.slice(this.week * 7, (this.week + 1) * 7);
  }

  public barChartOptions: any = {
    animation: true,
    responsive: true,
    tooltips: { enabled: false },
    hover: { mode: null },
    plugins: {
      title: {
        display: true,
        text: 'Arbeitszeiten',
        font: {
          size: 40,
        },
      },
    },

    scales: {
      x: {
        title: {
          display: true,
          text: 'Datum',
        },
      },

      y: {
        title: {
          display: true,
          text: 'Stunden',
        },
      },
      // xAxes: [{
      //     scaleLabel: {
      //       display: true,
      //       labelString: 'probability'
      //     },
      //     stacked: true,
      //   },
      // ],
      // yAxes: [{
      //   display: false,
      //   scaleLabel: {
      //     display: true,
      //     labelString: 'probability'
      //   },
      //   stacked: true,
      // }
      // ],
    },
  };
  public barChartType: string = 'bar';

  constructor() {}

  incrementWeek() {
    this.week++;
  }
  decrementWeek() {
    this.week--;
  }
}
