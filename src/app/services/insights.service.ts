import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsightsService {
  generateInsights(data: string): string[] {
    // Process the data and generate insights
    // Replace this with your actual logic to process the data and generate insights
    const insights: string[] = [];

    // Example insights
    insights.push('Insight 1');
    insights.push('Insight 2');
    insights.push('Insight 3');

    return insights;
  }
}
