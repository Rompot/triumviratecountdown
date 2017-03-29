import angular from 'angular';
import CountdownTimer from './countdown-timer';
import RandomQuote from './random-quote';

export default angular.module('components', [
  CountdownTimer,
  RandomQuote,
])
.name;
