export function isObjectEmpty(object: NonNullable<unknown>) {
  return Object.keys(object).length === 0
}
