<template>
  <div>
    <div class="kotak_login shadow p-3 mb-5 bg-white rounded">
      <p>SILAHKAN REGISTER</p>
      <br />
      <form @submit.prevent="add">
        <label>Nama Lengkap</label>
        <input
          v-model="nama"
          type="text"
          class="form_login"
          placeholder="Name.."
          required
        />
        <label>Email</label>
        <input
          v-model="email"
          type="email"
          class="form_login"
          placeholder="Email.."
          required
        />
        <label>NISN</label>
        <input
          v-model="nisn"
          type="text"
          class="form_login"
          placeholder="Name.."
          required
        />
        <br />
        <label>Password</label>
        <input
          v-model="password"
          type="password"
          class="form_login"
          placeholder="Password.."
          required
        /><br />
        <input
          type="button"
          @click="login()"
          class="btn btn-success btn-lg btn-block"
          value="Register"
          required
        />
        <a href="/login" style="font-size: 16px">Sudah Memiliki Akun</a>
        <br />
        <br />
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      nama: "",
      email: "",
      nisn: "",
      password: "",
    };
  },
  methods: {
    async getUsers() {
      const user = await axios.get("http://localhost:3000/users");
      this.useres = user.data;
    },
    async login() {
      const payload = {
        nama: this.nama,
        email: this.email,
        nisn: this.nisn,
        password: this.password,
        role: "siswa",
      };
      const register = await axios.post("http://localhost:3000/users", payload);
      var convertToString = JSON.stringify(register.data);
      sessionStorage.setItem("USER_DATA", convertToString);
      this.$router.push("/");
    },
  },

  mounted() {
    this.getUsers();
  },
};
</script>