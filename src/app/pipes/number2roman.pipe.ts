import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'number2roman'
})
export class Number2RomanPipe implements PipeTransform {

  private keys = [1, 4, 5, 9, 10, 40, 50, 90, 100]

  private mapping: {[x: number] : string} = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C"
  }

  transform(value: number): string {
    let output = 0;
    let romanOutput = ""
    let tmpValue = value;

    let count = 0;

    while(output != value){
      let smallestDifference = 999;
      let x = 0;
      for(let number of this.keys){
        if(number <= tmpValue) {
          if (Math.abs(number - tmpValue) < smallestDifference) {
            smallestDifference = Math.abs(number - tmpValue)
            x = number;
          }
        }
      }

        output += x;
        romanOutput += this.mapping[x]
        tmpValue = value - output;

      count++;
      if(count > 100){
        return "ERROR"
      }

    }

    return romanOutput + ".";
  }

}
