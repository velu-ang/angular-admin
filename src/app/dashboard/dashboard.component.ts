import { GeneralService } from './../general.service';
import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalSpace: any = 0;
  filledSpace: any = 0;
  totalIncome: any = 0;
  thisMonthIncome: any = 0;
  weeklyReport: any = 0;
  monthData: any = 0;
  dataDailySalesChart: any;
  constructor(public gnService: GeneralService) {
    this.gnService.getDashboardData().subscribe(res => {
      console.log("dashboard_date", res);
      this.totalSpace = res['data']['total_members']
      this.filledSpace = res['data']['filled_seats']
      this.totalIncome = res['data']['total_income']
      this.thisMonthIncome = res['data']['this_month_income']
      this.weeklyReport = res['data']['weekly_report']
      this.monthData = res['data']['month_data']
      let value = []
      this.weeklyReport.map(res => {
        if(res == undefined){
          value = [0,0,0,0,0,0,0,0,0,0,0,0]
        } else {
          value.push(res.count)
        }
      })
      this.dataDailySalesChart = {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        series: [value]
      };

      const optionsDailySalesChart: any = {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: 0,
        high: Math.max.apply(0, value) + 10, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
      }

      var dailySalesChart = new Chartist.Line('#dailySalesChart', this.dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(dailySalesChart);

      // Subscribers 
      let serCount = []
      let monthAmount = []
      this.monthData.map(res => {
        serCount.push(res.count)
        monthAmount.push(res.total_amount)
      })
      var datawebsiteViewsChart = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jly', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [serCount]
      };
      var optionswebsiteViewsChart = {
        axisX: {
          showGrid: false
        },
        low: 0,
        high:  Math.max.apply(0, serCount) + 10,
        chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
      };
      var responsiveOptions: any[] = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

      //start animation for the Emails Subscription Chart
      this.startAnimationForBarChart(websiteViewsChart);

      ///Income Chart



      const dataCompletedTasksChart: any = {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'A', 'N', 'D'],
        series: [ monthAmount ]
      };

      const optionsCompletedTasksChart: any = {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: 0,
        high:  Math.max.apply(0, monthAmount) + 100, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: { top: 0, right: 0, bottom: 0, left: 10 }
      }

      var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
      this.startAnimationForLineChart(completedTasksChart);




    })
  }
  startAnimationForLineChart(chart) {
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on('draw', function (data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === 'point') {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq = 0;
  };
  startAnimationForBarChart(chart) {
    let seq2: any, delays2: any, durations2: any;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on('draw', function (data) {
      if (data.type === 'bar') {
        seq2++;
        data.element.animate({
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq2 = 0;
  };
  ngOnInit() {
    /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */



    /* ----------==========     Completed Tasks Chart initialization    ==========---------- */


    /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

  }

}
