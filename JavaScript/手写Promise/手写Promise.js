"use strict";
/*
 * @Author: DaLoong
 * @Date: 2022-04-20 09:10:25
 * @LastEditors: DaLoong
 * @LastEditTime: 2022-04-20 10:02:28
 * @FilePath: /PracticeInterview/JavaScript/手写Promise/手写Promise.js
 * @Description: 手写一个Promise
 */
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
/**
 * @Author: DaLoong
 * @description:
 * @param {*}
 * @return {*}
 */
class MyPromise {
    constructor(executor) {
        this._state = PENDING;
        this._value = undefined;
        try {
            executor(this._resolve.bind(this), this._reject.bind(this));
        }
        catch (err) {
            this._reject(err);
        }
    }
    /**
     * @Author: DaLoong
     * @description: 标记成功
     * @param {any} data
     * @return {*}
     */
    _resolve(data) {
        this._changeState(FULFILLED, data);
    }
    /**
     * @Author: DaLoong
     * @description: 标记失败
     * @param {any} data
     * @return {*}
     */
    _reject(data) {
        this._changeState(REJECTED, data);
    }
    _changeState(newState, data) {
        if (this._state !== PENDING) return;
        this._state = newState;
        this._value = data;
    }
}
const test = new MyPromise((resolve, reject) => {
    throw 123;
});
console.log(test);
