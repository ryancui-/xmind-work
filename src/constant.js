class BillType {
  constructor(value, label) {
    this.value = value
    this.label = label
  }

  static fromValue(value) {
    switch (value) {
      case BillType.INCOME.value: return BillType.INCOME
      case BillType.OUTLAY.value: return BillType.OUTLAY
    }
  }

  static isOutlay(value) {
    return value === BillType.OUTLAY.value
  }

  static isIncome(value) {
    return value === BillType.INCOME.value
  }

  static OUTLAY = new BillType(0, '支出')
  static INCOME = new BillType(1, '收入')
}
Object.freeze(BillType)

export { BillType }
