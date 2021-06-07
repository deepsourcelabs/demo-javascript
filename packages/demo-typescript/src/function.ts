class defaultParamLast {
  constructor(public a = 10, private b: number) {
    this.a = a;
    this.b = b;
  }
  sum(a: number = 0, b: number) {
    return a + b;
  }

  getPercentage(c?: number, a: number, b = 0) {
    if (c) {
      return (a * b * 100) / c;
    } else {
      return;
    }
  }
}
