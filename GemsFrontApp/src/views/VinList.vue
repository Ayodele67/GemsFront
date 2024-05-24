<template>
  <div class="card" v-for="vin in vinAll" :key="vin.id">
    <h2>{{ vin.vin }}</h2>
    <p class="card sub" >
      {{ vin.model}}
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "VinList",
  data() {
    return {
      vinAll: {},
    };
  },
  methods: {
    async getVin() {
 
        let tokenUser =  localStorage.getItem('user');
        let token=tokenUser.token;
       alert(tokenUser);
       
const config = {
  headers: { 'Content-Type': 'application/json',
             Authorization: `Bearer ${tokenUser}` }
};
 const header = { 'Authorization': 'Bearer ${tokenUser}' };
      const { data } = await axios.get("http://localhost:5226/gems/api/v1/VehicleIdentificationNumber/all", { header});
      this.vinAll = data;

      Console.Log(data);
    },
  },
  beforeMount() {
    this.getVin();
  },
};
</script>