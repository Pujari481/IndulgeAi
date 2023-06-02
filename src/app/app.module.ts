import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer'
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer/public_api';
// import * as pdfjsLib from 'pdfjs-dist'
// import { PdfViewerComponent } from 'ng2-pdf-viewer/public_api';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DocumentOCRComponent } from './document-ocr/document-ocr.component';
import { AppRoutingModule } from './app-routing.module';
import { AppShellComponent } from './app-shell/app-shell.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav'
import { RouterModule } from '@angular/router';
import { KeywordExtractionComponent } from './keyword-extraction/keyword-extraction.component';
import { InsightsProcessingComponent } from './insights-processing/insights-processing.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { TesseractService } from './services/TesseractService';
// import { NlpService } from './services/nlp.service';
// import { InsightsService } from './services/insights.service';
// import { KeywordExtractionService } from './services/keywords-extraction.service';

// pdfjsLib.GlobalWorkerOptions.workerSrc = 'pdf.worker.js'
// pdfDefaultOptions.assetsFolder = 'bleeding-edge';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppShellComponent,
    DocumentOCRComponent,
    InsightsProcessingComponent,
    KeywordExtractionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);