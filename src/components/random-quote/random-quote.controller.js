export default class {
  constructor() {
    const quotes = [
      'What\'s the matter? CIA got you pushing too many pencils?',
      'I feel the need; the need for speed!',
      'Maaaaaaaaccccccc!!!!!',
      'Get to the chopper!',
      'You do that one more time I\'mma bleed you real quiet.',
      'You are next',
      'Brick not hit back',
    ];

    this.randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  }
}
