import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  @ViewChild('lineC', { static: true })
  lineC!: ElementRef<HTMLDivElement>;

  @ViewChild('pieC', { static: true })
  pieC!: ElementRef<HTMLDivElement>;

  @ViewChild('barC', { static: true })
  barC!: ElementRef<HTMLDivElement>;

  @ViewChild('lineTwoC', { static: true })
  lineTwoC!: ElementRef<HTMLDivElement>;

  constructor() {}

  ngOnInit() {
    this.lineChart();
    this.pieChart();
    this.barChart();
    this.lineTwoChart();
  }

  lineChart() {
    const options: Highcharts.Options = {
      title: {
        text: undefined,
      },

      legend: {
        enabled: true,
      },

      xAxis: {
        title: {
          text: undefined,
        },
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },

      yAxis: {
        title: {
          text: undefined,
        },
      },

      series: [
        {
          name: 'Tokyo',
          type: 'spline',
          data: [
            7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,
          ],
        },
        {
          name: 'London',
          type: 'spline',
          data: [
            3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8,
          ],
        },
      ],
    };

    Highcharts.chart(this.lineC.nativeElement, options);
  }

  pieChart() {
    const options: Highcharts.Options = {
      title: {
        text: undefined,
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
          },
          showInLegend: true,
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Brands',
          colorByPoint: true,
          data: [
            {
              name: 'Chrome',
              y: 61.41,
              sliced: true,
              selected: true,
            },
            {
              name: 'Internet Explorer',
              y: 11.84,
            },
            {
              name: 'Firefox',
              y: 10.85,
            },
            {
              name: 'Edge',
              y: 4.67,
            },
            {
              name: 'Safari',
              y: 4.18,
            },
            {
              name: 'Other',
              y: 7.05,
            },
          ],
        },
      ],
    };

    Highcharts.chart(this.pieC.nativeElement, options);
  }

  barChart() {
    const options: Highcharts.Options = {
      title: {
        text: undefined,
      },
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: undefined,
        },
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          type: 'column',
          name: 'Tokyo',
          data: [
            49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
            95.6, 54.4,
          ],
        },
        {
          type: 'column',
          name: 'New York',
          data: [
            83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5,
            106.6, 92.3,
          ],
        },
      ],
    };
    Highcharts.chart(this.barC.nativeElement, options);
  }

  lineTwoChart() {
    const options: Highcharts.Options = {
      title: {
        text: undefined,
      },

      legend: {
        enabled: true,
      },

      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },

      yAxis: {
        title: {
          text: undefined,
        },
      },

      series: [
        {
          name: 'London',
          type: 'spline',
          data: [
            3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8,
          ],
        },
      ],
    };

    Highcharts.chart(this.lineTwoC.nativeElement, options);
  }
}
