<template>
  <div class="all">
    <div class="header">
      <p><b>Halaman Absensi</b></p>
    </div>

    <div class="form-box shadow p-3 mb-5 bg-white rounded">
      <form>
        <label>Tanggal:</label><br />
        <input type="date" v-model="tanggal" required />
        <hr />
        <label>Kehadiran:</label><br />
        <input
          type="radio"
          name="hadir"
          value="Hadir"
          v-model="hadir"
          required
        />
        <hr />
        <input
          type="file"
          accept="image/*"
          @change="previewImage"
          id="img"
          class="stay"
        /><br />
        <label for="img">
          <img :src="preview" />
        </label>
        <button @click="submit()" class="btn btn-success btn-block">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tanggal: "",
      hadir: false,
      username: JSON.parse(sessionStorage.getItem("USER_DATA")).nama,
      roles: JSON.parse(sessionStorage.getItem("USER_DATA")).role,
      preview: null,
      kehadiran: JSON.parse(sessionStorage.getItem("USER_DATA")).hadir,
    };
  },
  methods: {
    previewImage: function (event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        };
        this.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
    submit() {
      const payload = {
        nama: this.username,
        tanggal: this.tanggal,
        presensi: this.hadir,
      };
      axios.put("http://localhost:3000/users", { hadir: this.kehadiran + 1 });
      axios.post("http://localhost:3000/absen", payload);
      this.$router.push("/stats");
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
.form-box {
  width: 400px;
  margin: 0 auto 30px;
  background-color: #f1f1f1;
  border-radius: 20px;
  height: auto;
  padding: 10px 30px;
}
.stay {
  top: 0;
  left: 0;
}
img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
}
</style>