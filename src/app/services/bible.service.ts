import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BibleService {
  bible: Book[] = []


  constructor(private http: HttpClient) {
    //read assets/bible.json
    http.get<Book[]>('assets/bible.json').subscribe(data => {this.bible = data});
  }
}



export interface Book {
  chapters: string[][];
  bookName: string;

}
