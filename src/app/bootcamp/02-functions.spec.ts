import { compose } from './compose';
import { formatName } from './utils';
describe('functions', () => {
  describe('function literals', () => {
    it('has a few kinds', () => {

      // Named Functions
      function add(a: number, b: number) {
        return a + b;
      }

      // IIFE
      (function() {
        console.log('In the IIFE');
        const name = 'Pete!';
      })();

      const multiply = (function(a: number, b: number) { return a * b; });

      expect(multiply(3, 5)).toBe(15);

      const divide = (function(a: number, b: number) { return a / b; });

      expect(divide(10, 5)).toBe(2);

    });
  });
});

describe('higher order function', () => {
  it('an example', () => {
    expect(formatName('Han', 'Solo')).toBe('Solo, Han');

    const makeNameUpper = (s: string) => s.toUpperCase();

    expect(
      formatName('Han', 'Solo', makeNameUpper)).toBe('SOLO, HAN');

    const makeFlashy = (s: string) => `***${s}***`;

    const doBoth = compose(makeNameUpper, makeFlashy);

    expect(formatName('Han', 'Solo', makeFlashy)).toBe('***Solo, Han***');
  });
});

describe('arbitrary number of arguments', () => {
  it('arbitrary number of parameters', () => {
    // ... is a rest function. This means all the rest of the arguments are put in an array
    function add(a: number, b: number, ...rest: number[]): number {
      const firstTwo = a + b;
      // reduce function
      return rest.reduce((prev, next) => prev + next, firstTwo);
    }

    expect(add(2, 2)).toBe(4);
    expect(add(2, 2, 2)).toBe(6);
    expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
  });
});

describe('practical', () => {
  interface Payments {
    date: string;
    amount: number;
    customer: string;
  }
  const payments: Payments[] = [
    { date: '1/1/2018', amount: 300, customer: 'Bob' },
    { date: '1/8/2018', amount: 615.23, customer: 'Bob' },
    { date: '1/19/2018', amount: 10082, customer: 'Sue' },
    { date: '2/2/2018', amount: 12, customer: 'Bob' },
  ];

  it('Your practice', () => {

    const answer: { total: number } =
      payments.filter(a => a.customer === 'Bob')
        .reduce((prev, next) => ({ total: prev.total + next.amount }), { total: 0 });

    expect(answer.total).toBe(927.23);



  });
});
