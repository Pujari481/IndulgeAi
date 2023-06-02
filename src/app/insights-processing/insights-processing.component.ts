import { Component } from '@angular/core';
// import { InsightsService } from '../services/insights.service';

@Component({
  selector: 'app-insights-processing',
  templateUrl: './insights-processing.component.html',
  styleUrls: ['./insights-processing.component.scss']
})
export class InsightsProcessingComponent {
  data: string = '';
  insights: string[] = [];

  // constructor(private insightsService: InsightsService) {}

  processData(): void {
    if (!this.data) {
      console.log('No data entered');
      return;
    }

    // this.insights = this.insightsService.generateInsights(this.data);
  }
}
