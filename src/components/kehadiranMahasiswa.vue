<template>
  <div>
    <div class="header">
      <p>
        <b>Daftar Kehadiran Siswa</b>
      </p>
    </div>
    <div class="table">
      <table>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Kehadiran</th>
          <th>Persentase</th>
        </tr>
        <tr v-for="(user, index) in daftarSiswa" :key="user.index">
          <td>{{ index + 1 }}</td>
          <td>{{ user.nama }}</td>
          <td>{{ user.hadir }}</td>
          <td>{{ Math.ceil((user.hadir / 17) * 100) }} %</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: [],
      hadir: [],
      username: JSON.parse(sessionStorage.getItem("USER_DATA")).nama,
      roles: JSON.parse(sessionStorage.getItem("USER_DATA")).role,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/users")
        .then((res) => {
          this.users = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getHadir() {
      axios
        .get("http://localhost:3000/absen")
        .then((res) => {
          this.hadir = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    daftarSiswa() {
      function compare(a, b) {
        if (a.nama < b.nama) return -1;
        if (a.nama > b.nama) return 1;
        return 0;
      }
      return this.users
        .filter((user) => {
          return user.role === "siswa";
        })
        .sort(compare);
    },
  },
};
</script>
<style scoped>
.header {
  height: 200px;
  padding-top: 50px;
  text-align: center;
  font-size: 50px;
}
.table {
  color: black;
}
table {
  margin: auto;
  margin-bottom: 50px;
}
</style>
