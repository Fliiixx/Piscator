import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'shortenBookName'
})
export class ShortenBookNamePipe implements PipeTransform {

  transform(bookName: string): string {
    //remove everything in ()-brackets
    bookName = bookName.replace(/\(.*?\)/g, '');
    bookName = bookName.replace("Buch", "")
    bookName = bookName.replace("erste", '1.');
    bookName = bookName.replace("andere", '2.');
    bookName = bookName.replace("dritte", '3.');
    bookName = bookName.replace("vierte", '4.');
    bookName = bookName.replace("fünfte", '5.');

    //Replace "der" "die" "das" am Anfang der String
    bookName = bookName.replace("der", "")
    bookName = bookName.replace(/^Der /, '').replace(/^Die /, '').replace(/^Das /, '')
    bookName = bookName.replace("Epistel St.", "")
    bookName = bookName.replace("Pauli an die ", "")
    bookName = bookName.replace("Pauli an", "")
    bookName = bookName.replace("Prophet", "")


    return bookName;
  }

}
