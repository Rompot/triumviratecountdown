import angular from 'angular';
import RandomQuote from './random-quote.component';

export default angular.module('component.random-quote', [])
  .component('randomQuote', RandomQuote)
  .name;
