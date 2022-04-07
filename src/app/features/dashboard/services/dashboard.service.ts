import { ElementRef, Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor() {}

  pieChart(pieC: ElementRef<HTMLDivElement>, dataChart: any[]) {
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
          name: 'Profitto',
          colorByPoint: true,
          data: dataChart,
        },
      ],
    };

    Highcharts.chart(pieC.nativeElement, options);
  }

  barChart(barC: ElementRef<HTMLDivElement>, month: string[], data: number[]) {
    const options: Highcharts.Options = {
      title: {
        text: undefined,
      },
      xAxis: {
        categories: month,
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
          name: 'Entrata mensile',
          data: data,
        },
      ],
    };
    Highcharts.chart(barC.nativeElement, options);
  }

  lineChart(lineC: ElementRef<HTMLDivElement>) {
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

    Highcharts.chart(lineC.nativeElement, options);
  }

  lineTwoChart(lineTwoC: ElementRef<HTMLDivElement>) {
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

    Highcharts.chart(lineTwoC.nativeElement, options);
  }
}
