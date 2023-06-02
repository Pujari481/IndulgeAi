import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocumentOCRComponent } from './document-ocr/document-ocr.component';
import { KeywordExtractionComponent } from './keyword-extraction/keyword-extraction.component';
import { InsightsProcessingComponent } from './insights-processing/insights-processing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'document-ocr', component: DocumentOCRComponent },
  { path: 'keyword-extraction', component: KeywordExtractionComponent },
  { path: 'insights-processing', component: InsightsProcessingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }