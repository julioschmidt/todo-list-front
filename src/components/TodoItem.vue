<template>
<div class="todo-item">
    <div class="todo-item-left">
        <input type="checkbox" v-model="completed"
        @change="doneEdit">

        <div v-if="!editing" 
        @dblclick="editTodo" 
        class="todo-item-label"
        :class="{ completed : completed }">
        {{ title }}</div>

        <input v-else 
        class="todo-item-edit" 
        type="text" 
        v-model="title"
        @blur="doneEdit"
        @keyup.enter="doneEdit"
        @keyup.esc ="cancelEdit"
        v-focus>
    </div>
    <div>
        <button @click="pluralize">Plural</button>
        <span class="remove-item" @click="removeTodo(todo.id)">
            &times;
        </span>
    </div>
    
</div>
</template>

<script>

const focus = {
  mounted: (el) => el.focus()
}

export default {
    name: 'todo-item',
    props: {
        todo: {
            type: Object,
            required: true,
        },
        checkAll: {
            type: Boolean,
            required: true,
        }
    },

    data() {
        return {
            'id': this.todo.id,
            'title': this.todo.title,
            'completed': this.todo.completed,
            'editing': this.todo.editing,
            'beforeEditCache': '',
        }
    },

    mounted() {
        this.emitter.on('pluralize', this.handlePluralize)
    },

    beforeUnmount() {
        this.emitter.off('pluralize', this.handlePluralize)
    },

    watch: {
        checkAll() {
            /*if (this.checkAll) {
                this.completed = true
            }
            else {
                this.completed = this.todo.completed
            }*/
            this.completed = this.todo.completed
        }
    },

    directives: {
        focus
    },

    methods: {
        removeTodo(id) {
            this.$store.dispatch('deleteTodo', id)
        },

        editTodo() {
            this.beforeEditCache = this.title
            this.editing = true
        },

        doneEdit() {
            if(this.title.trim().length == '') {
                this.title = this.beforeEditCache
            }

            this.editing = false
            this.$store.dispatch('updateTodo', {
                'id': this.id,
                'title': this.title,
                'completed': this.completed,
                'editing': this.editing
            })
        },

        cancelEdit() {
            this.title = this.beforeEditCache
            this.editing = false
        },

        pluralize() {
            this.emitter.emit('pluralize')
        },

        handlePluralize() {
            this.title = this.title + 's'
            this.$store.dispatch('updateTodo', {
                'id': this.id,
                'title': this.title,
                'completed': this.completed,
                'editing': this.editing
            })
        }
    },
}
</script>