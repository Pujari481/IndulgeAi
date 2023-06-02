// import { Injectable } from '@angular/core';
// import { Nlp } from '@nlpjs/nlp';
// import { LangEn } from '@nlpjs/lang-en-min';

// @Injectable({
//   providedIn: 'root'
// })
// export class NlpService {
//   private nlp: Nlp;

//   constructor() {
//     this.initializeNlp();
//   }

//   private initializeNlp(): void {
//     this.nlp = new Nlp();
//     this.nlp.use(LangEn);
//   }

//   async extractKeywords(text: string): Promise<string[]> {
//     const response = await this.nlp.process('en', text);
//     const keywords = response.domain[0]?.intent?.keywords || [];
//     return keywords;
//   }
// }
