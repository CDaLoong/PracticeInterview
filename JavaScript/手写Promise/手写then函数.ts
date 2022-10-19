/*
 * @Author: DaLoong
 * @Date: 2022-04-20 09:56:00
 * @LastEditors: DaLoong
 * @LastEditTime: 2022-04-20 10:07:05
 * @FilePath: /PracticeInterview/JavaScript/手写Promise/手写then函数.ts
 * @Description:
 */

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

/**
 * @Author: DaLoong
 * @description: 把一个函数放入微队列中执行
 * @param {*} callback
 * @return {*}
 */
function runMicroTask(callback) {
  // 判断 node 环境
  if (process && process.nextTick) {
    
}
  setTimeout(callback, 0)
}

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

  /**
   * @Author: DaLoong
   * @description:
   * @param {string} newState
   * @param {any} data
   * @return {*}
   */
  _changeState(newState: string, data: any) {
    if (this._state !== PENDING) return
    this._state = newState
    this._value = data
  }

  /**
   * @Author: DaLoong
   * @description: than 函数会放在微队列里执行
   * @param {*} onFulfilled
   * @param {*} onRejected
   * @return {*}
   */
  then(onFulfilled, onRejected) {
    return new MyPromise((onFulfilled, onRejected) => {})
  }
}

const test = new MyPromise((resolve, reject) => {
  throw 123
})
console.log(test)
