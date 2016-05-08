/**
 * Created by shikokuyt on 2016/5/8 0008.
 */
(function (exports) {
    'use strict';
    var STORAGE_KEY = 'yutao_todo';
    exports.todoStorage = {
        fetch: function () {
            return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
        },
        save: function (todos) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
        }
    }
})(window);
