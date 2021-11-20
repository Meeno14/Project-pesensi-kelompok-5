<template>
  <div>
    <div class="header">
      <p>
        <b>Selamat Datang {{ username }}</b>
      </p>
    </div>

    <!--Halaman Login Mahasiswa-->
    <div v-if="roles === 'siswa'" class="row">
      <div class="col presensi background">
        <div class="mask">
          <h1><b>Presensi</b></h1>
          <a href="/absen"><b>Presensi Sekarang</b></a>
        </div>
      </div>
      <div class="col statistik background">
        <div class="mask">
          <h1><b>Statistik</b></h1>
          <a href="/stats"><b>Lihat Statistik</b></a>
        </div>
      </div>
    </div>

    <!--Halaman Login Dosen-->
    <div v-else-if="roles === 'dosen'" class="row">
      <div class="col presensi background">
        <div class="mask">
          <h1><b>Presensi</b></h1>
          <a href="/absenDsn"><b>Presensi Sekarang</b></a>
        </div>
      </div>
      <div class="col hadir background">
        <div class="mask">
          <h1><b>Kehadiran Mahasiswa</b></h1>
          <a href="/siswaHadir"><b>Daftar Kehadiran</b></a>
        </div>
      </div>
      <div class="col rekap background">
        <div class="mask">
          <h1><b>Rekap</b></h1>
          <a href="/stats"><b>Lihat Rekap</b></a>
        </div>
      </div>
    </div>

    <!--Halaman Login Admin-->
    <div v-else class="row">
      <div class="col table">
        <h1>Daftar Kehadiran Siswa</h1>
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
      <div class="col table">
        <h1>Daftar Kehadiran Dosen</h1>
        <table>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Kehadiran</th>
            <th>Persentase</th>
          </tr>
          <tr v-for="(user, index) in daftarDosen" :key="user.index">
            <td>{{ index + 1 }}</td>
            <td>{{ user.nama }}</td>
            <td>{{ user.hadir }}</td>
            <td>{{ Math.ceil((user.hadir / 17) * 100) }} %</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: [],
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
        .get("http://localhost:3000/users")
        .then((res) => {
          this.users = res.data;
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
    daftarDosen() {
      function compare(a, b) {
        if (a.nama < b.nama) return -1;
        if (a.nama > b.nama) return 1;
        return 0;
      }
      return this.users
        .filter((user) => {
          return user.role === "dosen";
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
* {
  box-sizing: border-box;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.col {
  text-align: center;
  height: auto;
  color: white;
  padding: 0;
}
.col a {
  background-color: rgba(0, 0, 0, 0);
  color: white;
  border: 5px solid white;
  border-radius: 10px;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}
a:hover {
  background-color: #272727;
  color: white;
  border: 5px solid black;
}
.background {
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
}
.presensi {
  background-image: url("https://ak.picdn.net/shutterstock/videos/3661649/thumb/10.jpg");
}
.statistik {
  background-image: url("https://thepsychologist.bps.org.uk/sites/thepsychologist.bps.org.uk/files/statistics.jpg");
}
.hadir {
  background-image: url("https://assets.tvo.org/prod/s3fs-public/styles/full_width_1280/public/article-thumbnails/kids%20in%20classroom.JPG?KgEyQTBORydSiHj.xIj8ROjMdJvgPW4r");
}
.rekap {
  background-image: url("https://www.hayimoshkyblog.com/wp-content/uploads/2016/06/Hand-Written-Book-980x677.jpg");
}
.mask {
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  margin-top: -10px;
}
.mask:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
.table {
  color: black;
}
table {
  margin: auto;
  margin-bottom: 50px;
}
</style>