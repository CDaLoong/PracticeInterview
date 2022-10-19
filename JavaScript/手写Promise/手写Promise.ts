/*
 * @Author: DaLoong
 * @Date: 2022-04-20 09:10:25
 * @LastEditors: DaLoong
 * @LastEditTime: 2022-04-20 09:56:26
 * @FilePath: /PracticeInterview/JavaScript/手写Promise/手写Promise.ts
 * @Description: 手写一个Promise
 */

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

/**
 * @Author: DaLoong
 * @description:
 * @param {*}
 * @return {*}
 */
class MyPromise {
  /**
   * @Author: DaLoong
   * @description:
   * @param {function} 任务执行器，立即执行
   * @return {*}
   */
  _state: string
  _value: any
  constructor(executor: (resolve: any, reject: any) => void) {
    this._state = PENDING
    this._value = undefined
    try {
      executor(this._resolve.bind(this), this._reject.bind(this))
    } catch (err) {
      this._reject(err)
    }
  }

  /**
   * @Author: DaLoong
   * @description: 标记成功
   * @param {any} data
   * @return {*}
   */
  _resolve(data: any) {
    this._changeState(FULFILLED, data)
  }

  /**
   * @Author: DaLoong
   * @description: 标记失败
   * @param {any} data
   * @return {*}
   */
  _reject(data: any) {
    this._changeState(REJECTED, data)
  }

  _changeState(newState: string, data: any) {
    if (this._state !== PENDING) return
    this._state = newState
    this._value = data
  }
}

const test = new MyPromise((resolve, reject) => {
  throw 123
})
console.log(test)
