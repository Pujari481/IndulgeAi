
// import { Component } from '@angular/core';
// import * as XLSX from 'xlsx';

// @Component({
//   selector: 'app-insights-processing',
//   templateUrl: './insights-processing.component.html',
//   styleUrls: ['./insights-processing.component.scss']
// })
// export class InsightsProcessingComponent {
//   excelData: any;
//   showDashboard: boolean = false;

//   handleFileInput(event: any) {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onload = (e: any) => {
//       const data = new Uint8Array(e.target.result);
//       const workbook = XLSX.read(data, { type: 'array' });
//       const worksheet = workbook.Sheets[workbook.SheetNames[0]];
//       const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
//       const header = jsonData[0];
//       const rows = jsonData.slice(1);
//       this.excelData = { header, rows };
//     };
//     reader.readAsArrayBuffer(file);
//   }

//   processInsights() {
//     // Code to process insights and show the dashboard
//     this.showDashboard = true;
//   }
// }


import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as XLSX from 'xlsx';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-insights-processing',
  templateUrl: './insights-processing.component.html',
  styleUrls: ['./insights-processing.component.scss']
})
export class InsightsProcessingComponent {
  excelData: any;
  showDashboard: boolean = false;

  @ViewChild('salaryChart', { static: true}) salaryChartRef!: ElementRef;

  handleFileInput(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      const header = jsonData[0];
      const rows = jsonData.slice(1);
      this.excelData = { header, rows };
    };
    reader.readAsArrayBuffer(file);
  }

  ngAfterViewInit() {
    this.createSalaryChart([], [])
  }

  processInsights() {
    setTimeout(() => {
    const canvas = this.salaryChartRef.nativeElement;
    const salaryData = this.extractColumnData('Basic Salary');
    const labels = this.extractColumnData('Name');
    this.createSalaryChart(labels, salaryData);
    this.showDashboard = true;
  });
  }

  extractColumnData(columnName: string): any[] {
    const columnIndex = this.excelData.header.indexOf(columnName);
    return this.excelData.rows.map((row: { [x: string]: any; }) => row[columnIndex])
    // return this.excelData.rows.map((row: { [x: string]: any; }) => row[columnIndex]);
  }

  createSalaryChart(labels: string[], data: any[]) {
    const canvas: any = this.salaryChartRef.nativeElement;
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Salary',
          data: data,
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
