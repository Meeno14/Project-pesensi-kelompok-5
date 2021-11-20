<template>
  <div class="all">
    <div class="header">
      <p><b>Halaman Absensi</b></p>
    </div>

    <div class="form-box">
      <form>
        <div class="row">
          <div class="column">
            <label>Tanggal:</label><br />
            <input type="date" v-model="tanggal" />
            <hr />
            <label>Kehadiran:</label><br />
            <input type="radio" name="hadir" value="Hadir" v-model="hadir" />
            <label>Hadir</label><br />
            <hr />
            <input
              type="file"
              accept="image/*"
              @change="previewImage"
              id="img"
              class=""
            /><label for="img">
              <img :src="preview" />
            </label>
          </div>
          <div class="column">
            <label>Materi Kuliah</label>
            <textarea
              style="width: 100%; height: 385px"
              v-model="materi"
            ></textarea>
          </div>
        </div>
        <button @click="submit" class="btn btn-success btn-block">
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
      materi: ``,
      username: JSON.parse(sessionStorage.getItem("USER_DATA")).nama,
      roles: JSON.parse(sessionStorage.getItem("USER_DATA")).role,
      preview: null,
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
        materi: this.materi,
      };
      axios.post("http://localhost:3000/absen", payload);
      this.$router.push("/stats");
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.column {
  float: left;
  width: 50%;
  padding: 10px;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.header {
  height: 200px;
  padding-top: 50px;
  text-align: center;
  font-size: 50px;
}
.form-box {
  width: 600px;
  margin: 0 auto 30px;
  border: solid 1px black;
  border-radius: 20px;
  height: auto;
  padding: 10px 30px;
}
.block {
  border-radius: 15px;
  padding: 10px;
  margin: 3px;
}
.block p,
label {
  margin: 0;
}
img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>