<script setup>
import TodoList from './components/TodoList.vue'
</script>

<template>
  <header>

    <div class="container">
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
      <TodoList></TodoList>
    </div>

  </header>
</template>

<style >

* {
  box-sizing: border-box;
}

/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 6.0rem;
  font-size: 24px;
} */

.container {
  width: 50vw;
  margin: 0 auto;
}


.logo {
  display: block;
  margin: 2rem auto;
  height: 7.5rem;
}

</style>
