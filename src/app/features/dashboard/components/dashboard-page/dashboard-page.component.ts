import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { DashboardService } from '../../services/dashboard.service';

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

  constructor(
    private dataService: DataService,
    private dashboardService: DashboardService
  ) {}

  ngOnInit() {
    this.dashboardService.lineChart(this.lineC);
    this.dashboardService.lineTwoChart(this.lineTwoC);
    this.getMonthStats();
    this.getAreaStats();
  }

  getMonthStats() {
    this.dataService.getMonthStats({}).subscribe((res) => {
      const month: string[] = [];
      const data: number[] = [];

      res.data.map((_) => {
        month.push(_.month);
        data.push(_.value);
      });

      this.dashboardService.barChart(this.barC, month, data);
    });
  }

  getAreaStats() {
    this.dataService.getAreaStats({}).subscribe((res) => {
      let dataChart: any[] = [];

      res.data.map((_) => {
        dataChart.push({
          name: _.area,
          y: _.value,
        });
      });

      this.dashboardService.pieChart(this.pieC, dataChart);
    });
  }
}
