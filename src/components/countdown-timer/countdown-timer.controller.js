export default class {
  constructor($interval) {
    Object.assign(this, { $interval });
  }

  $onInit() {
    const future = new Date(this.targetDate);

    this.$interval(() => {
      let t = Math.floor((future.getTime() - Date.now()) / 1000);

      const days = Math.floor(t / (60 * 60 * 24));
      t -= days * (60 * 60 * 24);
      const hours = Math.floor(t / (60 * 60)) % 24;
      t -= hours * (60 * 60);
      const minutes = Math.floor(t / 60) % 60;
      t -= minutes * 60;
      const seconds = t % 60;
      this.timeString = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
  }
}
