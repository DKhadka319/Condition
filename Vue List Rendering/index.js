<template>
  <div id="app">
    Your list should render here.
    

        
<span>{{ item.name }}</span> <span>{{ item.age }}</span>

    

  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        items: [{
          name: "Daniel",
          age: 25
        }, {
          name: "John",
          age: 24
        },
        {
          name: "Jen",
          age: 31
        }]
      };
    }
  };
</script>
