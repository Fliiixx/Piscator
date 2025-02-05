import {Component, inject} from '@angular/core';
import {BibleService, Book} from './services/bible.service';
import {NgbDropdownModule, NgbSlideEvent} from '@ng-bootstrap/ng-bootstrap';
import {NgIf} from '@angular/common';
import {Number2RomanPipe} from './pipes/number2roman.pipe';
import {ShortenBookNamePipe} from './pipes/shorten-book-name.pipe';

@Component({
  selector: 'app-root',
  imports: [
    NgbDropdownModule,
    NgIf,
    Number2RomanPipe,
    ShortenBookNamePipe
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'piscatorbible';
  bibleService : BibleService = inject(BibleService)

  currentBook : Book = {bookName: "", chapters: []};
  currentChapter : number | undefined = undefined

  resetPage(){
    this.currentBook = {bookName: "", chapters: []}
    this.currentChapter = undefined
  }

  protected readonly NaN = NaN;

  onSlide(slideEvent: NgbSlideEvent) {

  }

  protected readonly window = window;
}
