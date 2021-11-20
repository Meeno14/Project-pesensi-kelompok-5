<template>
  <div>
    <h2 style="text-align: center"></h2>
    <div class="r">
      <div v-for="user in daftarAbsen" :key="user" class="card">
        <img :src="user.foto" style="width: 100%" />
        <h4>{{ user.name }}</h4>
        <p class="title">{{ user.jeniskelamin }}</p>
        <p>{{ user.perguruantinggi }}</p>
        <div style="margin: 24px 0">
          <a href="#"><i class="fa fa-dribbble"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-linkedin"></i></a>
          <a href="#"><i class="fa fa-facebook"></i></a>
        </div>
      </div>
    </div>
  </div>
</template> 
 
<script>
/* eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
      edit: [],
      listCv: [],
      roles: JSON.parse(sessionStorage.getItem("USER_DATA")).role,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/edit")
        .then((res) => {
          this.edit = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    daftarAbsen() {
      return this.edit.filter((user) => {
        return user.role === this.roles;
      });
    },
  },
};
</script> 
<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 290px;
  background-color: silver;
  text-align: center;
  font-family: arial;
  margin: 0 25px;
}
.title {
  color: grey;
  font-size: 18px;
}

img {
  width: 200px;
  height: 350px;
  object-fit: cover;
}
button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover,
a:hover {
  opacity: 0.7;
}
.r {
  display: flex;
}
.bungkus {
  margin: auto;
  display: flex;
}
</style>