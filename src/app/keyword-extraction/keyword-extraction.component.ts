import { Component } from '@angular/core';
// import { KeywordsExtractionService } from '../services/keywords-extraction.service';
// import { FileDropModule } from 'ngx-file-drop';
// import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-keyword-extraction',
  templateUrl: './keyword-extraction.component.html',
  styleUrls: ['./keyword-extraction.component.scss']
})
export class KeywordExtractionComponent {
  // pdfSrc: string | ArrayBuffer | null = null;
  // selectedFile: File | null = null;

  // onFileSelected(event: any): void {
  //   this.selectedFile = event.target.files[0];
  // }

  // viewPdf(): void {
  //   if (this.selectedFile) {
  //     const reader: FileReader = new FileReader();

  //     reader.onload = (e: any) => {
  //       this.pdfSrc = e.target.result;
  //     };

  //     reader.readAsArrayBuffer(this.selectedFile);
  //   }
  // }
  title: string = 'ng2-pdf-viewer';
  src: string = 'assets/SA.pdf'

}
