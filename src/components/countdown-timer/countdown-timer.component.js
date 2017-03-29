import controller from './countdown-timer.controller';

export default {
  controller,
  templateUrl: 'views/countdown-timer.html',
  bindings: {
    targetDate: '@',
  },
};
