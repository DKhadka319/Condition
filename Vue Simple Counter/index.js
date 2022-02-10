<template>
  <div id="app">
    <section id="mainArea">
      button count: <span>{{ count }}</span>
      <button id="mainButton" @click="increment">Increase</button>
    </section>
  </div>
</template>

<script>
  export default {
    name: "App",
    emits: ['increment'],
    data() {
      return {
        count: 0
      };
    },
    methods: {
      increment() {
        console.log('clicked');
        this.count++;
      }
    }
  };
</script>
