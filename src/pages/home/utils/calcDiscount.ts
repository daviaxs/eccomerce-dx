/* eslint-disable camelcase */
export function CalcDiscout(original_price: number, price: number): number {
  return ((original_price - price) / original_price) * 100
}
