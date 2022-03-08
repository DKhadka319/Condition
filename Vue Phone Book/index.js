<template>
  <div id="app">
    <strong>Add a new contact:</strong>
    <div>
      <label>First Name: <input type="text" class="userFirstname" v-model="userFirstname"/></label> <br />
      <label>Last Name: <input type="text" class="userLastname" v-model="userLastname"/></label> <br />
      <label>Phone: <input type="number" class="userPhone" v-model="userPhone"/></label> <br />
      <button class="submitButton" @click="addToPhonebook">Add New Contact</button>
    </div>
    <table id="phoneBookItems" class="informationTable">
      <!-- items should go here -->
      <tr v-for="item in sortedPhoneBook" :key="item.phone">
        <td>{{item.userFirstname}}</td>
        <td>{{item.userLastname}}</td>
        <td>{{item.userPhone}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        userFirstname: 'Coder', 
        userLastname: 'Byte', 
        userPhone: 8885559999,
        phoneBook: []
      }
    },
    computed:{
      sortedPhoneBook(){
        return this.phoneBook.sort((a, b) => a.userLastname.toUpperCase() > b.userLastname.toUpperCase() ? -1 : 1 );
      }
    },
    methods:{
      addToPhonebook(){
        this.phoneBook.push({userFirstname: this.userFirstname, userLastname: this.userLastname, userPhone: this.userPhone})
      }
    }
  };
</script>
