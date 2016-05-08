/**
 * Created by shikokuyt on 2016/5/8 0008.
 */
(function (exports) {
    'use strict';
    exports.app = new Vue({
        el: '.todoapp',
        data: {
            todos: todoStorage.fetch(),
            newTodo: '',
            newTime: 1,
            showMove: false,
            showTodo: '',
            showTime: 1
        },
        watch: {
            todos: {
                handler: function (todos) {
                    todoStorage.save(todos);
                },
                deep: true
            }
        },
        methods: {
            addTodo: function () {
                var value = this.newTodo && this.newTodo.trim();
                var time = this.newTime;
                if (!value) {
                    return ;
                }
                this.todos.push({ title: value, time: time });
                this.newTodo = '';
            },
            removeTodo: function (todo) {
                this.todos.$remove(todo);
            },
            start: function (todo) {
                this.showMove =  true;
                this.showTodo = todo.title;
                this.showTime = todo.time;
            },
            back: function () {
                this.showMove = false;
            }
        }
    })
})(window);