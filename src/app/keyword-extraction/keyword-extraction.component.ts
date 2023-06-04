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
  src: string = 'assets/50_Awesome_Chat_GPT_Prompts.pdf'

}
