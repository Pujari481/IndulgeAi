// import { Injectable } from '@angular/core';
// import { createWorker, ImageLike, Worker } from 'tesseract.js';
// // import { Buffer } from 'buffer';

// @Injectable({
//   providedIn: 'root'
// })
// export class TesseractService {
// //   private worker: Tesseract.Worker | null = null;

// //   constructor() {
// //     this.initializeWorker();
// //   }

// //   private async initializeWorker() {
// //     this.worker = await createWorker();
// //     await this.worker.load();
// //     await this.worker.loadLanguage('eng');
// //     await this.worker.initialize('eng');
// //   }

// //   async recognizeImage(fileData: ImageLike): Promise<string> {
// //     if (this.worker) {
// //     const { data: { text } } = await this.worker.recognize(fileData);
// //     return text;
// //   }
// //   return '';
// // }

// //   async recognizePDF(fileData: ImageLike): Promise<string> {
// //     if (this.worker) {
// //     const { data: { text } } = await this.worker.recognize(fileData);
// //     return text;
// //   }
// //   return '';
// // }

// private worker: Tesseract.Worker | null = null;

// constructor() {
//   this.initializeWorker();
// }

// private async initializeWorker(): Promise<void> {
//   this.worker = await createWorker();
//   await this.worker.load();
//   await this.worker.loadLanguage('eng');
//   await this.worker.initialize('eng');
// }

// async recognize(file: File): Promise<string> {
//     if (this.worker) {
//   const { data: { text } } = await this.worker.recognize(file);
//   return text;
//     }
//   return '';
// }

// }
