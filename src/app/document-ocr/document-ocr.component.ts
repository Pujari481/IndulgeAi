import { Component } from '@angular/core';
import * as Tesseract from 'tesseract.js';
// import { TesseractService } from '../services/TesseractService'

@Component({
  selector: 'app-document-ocr',
  templateUrl: './document-ocr.component.html',
  styleUrls: ['./document-ocr.component.scss']
})
export class DocumentOCRComponent {
  selectedFile: File | null = null;
  ocrResult: string | null = null;
  ocrInProgress: boolean = false;

  

  handleFileInput(event: any): void {
    const files: FileList = event.target.files;
    this.selectedFile = files.item(0);
  }

  performOCR(): void {

    if (this.selectedFile) {
      Tesseract.recognize(this.selectedFile)
        .then(result => {
          this.ocrResult = result.data.text;
        })
        .catch(error => {
          console.error('OCR error:', error);
        });
    }
  }



  // ocrResult: string = '';
  // selectedFile: File | null = null;
  // processing: boolean = false; // Added processing property

  // constructor(private tesseractService: TesseractService) {}

  // onFileSelected(event: any) {
  //   this.selectedFile = event.target.files[0];
  // }

  // async performOCR() {
  //   if (!this.selectedFile) {
  //     console.log('No file selected');
  //     return;
  //   }

  //   const fileData = await this.readFileData(this.selectedFile);

  //   if (this.selectedFile.type === 'application/pdf') {
  //     this.performPDFOCR(fileData);
  //   } else if (this.selectedFile.type === 'image/jpeg' || this.selectedFile.type === 'image/png') {
  //     this.performImageOCR(fileData);
  //   } else {
  //     console.log('Unsupported file type');
  //   }
  // }

  // async performImageOCR(fileData: ArrayBuffer) {
  //   try {
  //     this.processing = true; // Start processing
  //     const result = await this.tesseractService.recognizeImage(Buffer.from(fileData));
  //     this.ocrResult = result;
  //   } catch (error) {
  //     console.log('OCR failed:', error);
  //   } finally {
  //     this.processing = false; // Stop processing
  //   }
  // }

  // async performPDFOCR(fileData: Uint8Array) {
  //   try {
  //     this.processing = true; // Start processing
  //     const result = await this.tesseractService.recognizePDF(Buffer.from(fileData));
  //     this.ocrResult = result;
  //   } catch (error) {
  //     console.log('OCR failed:', error);
  //   } finally {
  //     this.processing = false; // Stop processing
  //   }
  // }

  // async readFileData(file: File): Promise<Uint8Array> {
  //   return new Promise<Uint8Array>((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.onload = (event) => {
  //       const arrayBuffer = event.target?.result as ArrayBuffer;
  //       const fileData = new Uint8Array(arrayBuffer);
  //       resolve(fileData);
  //     };
  //     reader.onerror = (error) => {
  //       reject(error);
  //     };
  //     reader.readAsArrayBuffer(file);
  //   });
  // }


}
