import { ShortenBookNamePipe } from './shorten-book-name.pipe';

describe('ShortenBookNamePipe', () => {
  it('create an instance', () => {
    const pipe = new ShortenBookNamePipe();
    expect(pipe).toBeTruthy();
  });
});
