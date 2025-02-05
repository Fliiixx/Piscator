import { Number2RomanPipe } from './number2roman.pipe';

describe('Number2romanPipe', () => {
  it('create an instance', () => {
    const pipe = new Number2RomanPipe();
    expect(pipe).toBeTruthy();
    for(let i = 0; i <= 150; i++){
      console.log(i + ": " + pipe.transform(i))
    }
  });
});
