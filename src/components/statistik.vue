<template>
  <div>
    <div class="header">
      <p>
        <b>Daftar Kehadiran {{ roles }}</b>
      </p>
    </div>

    <table>
      <tr>
        <th>No</th>
        <th v-if="roles === 'siswa'">Nama</th>
        <th>Tanggal</th>
        <th>Kehadiran</th>
        <th v-if="roles === 'dosen'">Materi</th>
      </tr>
      <tr v-for="(user, index) in daftarAbsen" :key="user.index">
        <td>{{ index + 1 }}</td>
        <td v-if="roles === 'siswa'">{{ user.nama }}</td>
        <td>{{ user.tanggal }}</td>
        <td>{{ user.presensi }}</td>
        <td v-if="roles === 'dosen'">{{ user.materi }}</td>
      </tr>
    </table>
    <p>
      Persentase Kehadiran: {{ Math.ceil((daftarAbsen.length / 30) * 100) }} %
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      absen: [],
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
        .get("http://localhost:3000/absen")
        .then((res) => {
          this.absen = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    daftarAbsen() {
      return this.absen.filter((user) => {
        return user.nama === this.username;
      });
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
table {
  margin: auto;
  text-align: center;
  font-size: 20px;
  border-collapse: collapse;
  margin-bottom: 50px;
  border: 1px solid;
}
th {
  background-color: rgb(49, 49, 49);
  color: white;
  border: white 1px solid;
  border-left: none;
  border-right: none;
  padding: 3px 20px;
}
td {
  background-color: #f1f1f1;
  color: rgb(49, 49, 49);
  border: 1px solid;
  border-left: none;
  border-right: none;
  padding: 3px 20px;
}
p {
  text-align: center;
}
</style>