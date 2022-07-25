import { TemplateLiteral } from '@angular/compiler';
import { Component } from '@angular/core';

import { BarchartService } from './barchart/barchart.service';
import { data } from './seed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentItem = 'barChart';
  colors = [
    '#145DA0',
    '#0C2D48',
    '#2E8BC0',
    '#B1D4E0',
    '#ADB3BC',
    '#050A30',
    '#000C66',
    '#75E6DA',
    '#21B6A8',
    '#04ECF0',
    '#21B6A8',
    '#90ADC6',
    '#007575',
  ];
  public barChartData: any[] = [
    {
      data: [],
      label: 'Präsenzzeit',
      id: -1,
      stack: '2',
      backgroundColor: '#36a2eb',
    },
    {
      data: [],
      label: 'unnamed',
      id: null,
      stack: '1',
      backgroundColor: '#454143 ',
    },
  ];

  public barChartLabels: string[] = [];
  public barChartLabelsDays: string[] = [];

  constructor(private barchartService: BarchartService) {
    this.getHours();
    this.getBarChartlabels();
    this.getBarChartData();
  }

  getHours() {
    const seconds = 3600;
  }
  getBarChartlabels() {
    console.log(data);
    data.timeSheets[0].workDays.forEach((day) => {
      this.barChartLabels.push(day.date);
    });
    data.timeSheets[0].workDays.forEach((day) => {
      this.barChartLabelsDays.push(
        `${
          ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'][
            new Date(day.date).getDay()
          ]
        } ${new Date(day.date).getDate()}`
      );
    });

    console.log(this.barChartLabelsDays);
  }
  getBarChartData() {
    console.log(data);
    this.barChartData.forEach((value) => {
      value.data = this.barChartLabels.map(() => {
        return 0;
      });
    });
    data.timeSheets[0].workDays.forEach((day) => {
      day.projectTime.forEach((time) => {
        let index = this.barChartData.findIndex((value, index) => {
          return value.id === time.projectId;
        });
        let colorindex = Math.floor(Math.random() * this.colors.length);
        if (index == -1) {
          index = this.barChartData.length;
          this.barChartData.push({
            data: [],
            label: 'unnamed',
            id: time.projectId,
            stack: '1',
            backgroundColor: this.colors[colorindex],
          });
          this.colors = this.colors.filter(
            (elemnt, index) => index !== colorindex
          );
        }
        this.barChartData[index].data[this.barChartLabels.indexOf(day.date)] =
          time.time / 3600;
        // console.log(index);
      });
      this.barChartData[0].data[this.barChartLabels.indexOf(day.date)] =
        day.loggedTime / 3600;
    });
    console.log(this.barChartData);
  }
}
