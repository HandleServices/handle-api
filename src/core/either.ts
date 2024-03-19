export class Fail<L, R> {
  readonly value: L

  constructor(value: L) {
    this.value = value
  }

  isSuccess(): this is Success<L, R> {
    return false
  }

  isFail(): this is Fail<L, R> {
    return true
  }
}

export class Success<L, R> {
  readonly value: R

  constructor(value: R) {
    this.value = value
  }

  isSuccess(): this is Success<L, R> {
    return true
  }

  isFail(): this is Fail<L, R> {
    return false
  }
}

export type Either<L, R> = Fail<L, R> | Success<L, R>

export const fail = <L, R>(value: L): Either<L, R> => {
  return new Fail(value)
}

export const success = <L, R>(value: R): Either<L, R> => {
  return new Success(value)
}
