<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-secondary">
      <a class="navbar-brand" href="/beranda">
        <img
          src="https://1.bp.blogspot.com/-ubZ9dGTHkeo/YJEZqDJbLII/AAAAAAAAE5s/KnA48vbj4ykbbdNVIHBbLbLWxf2NIrn_QCLcBGAsYHQ/s1600/Logo%2BBinus%2BUniversity.png"
          alt="logo"
          style="width: 80px"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/beranda"
              >Home<span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/tentang"
              >Tentang<span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/kontak">Kontak</a>
          </li>
          <li class="nav-item active dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              v-if="logout"
            >
              Profil
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a v-if="roles === 'siswa'" class="dropdown-item" href="/profil"
                >Mahasiswa</a
              >
              <a
                v-else-if="roles === 'dosen'"
                class="dropdown-item"
                href="/profil"
                >Dosen</a
              >
              <a
                v-else-if="roles === 'admin'"
                class="dropdown-item"
                href="/profil"
                >Admin</a
              >
            </div>
          </li>
          <li class="nav-item active dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              v-if="logout"
            >
              Informasi Perkuliahan
            </a>
            <div
              v-if="roles"
              class="dropdown-menu"
              aria-labelledby="navbarDropdown"
            >
              <a v-if="roles === 'siswa'" class="dropdown-item" href="/info"
                >Mahasiswa</a
              >
              <a
                v-else-if="roles === 'dosen'"
                class="dropdown-item"
                href="/info"
                >Dosen</a
              >
              <a
                v-else-if="roles === 'admin'"
                class="dropdown-item"
                href="/info"
                >Admin</a
              >
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <a
            class="btn btn-success my-2 my-sm-0"
            style="margin-left: 650px"
            type="submit"
            v-if="!logout"
            href="/login"
            >Login</a
          >
          <a
            class="btn btn-success my-2 my-sm-0"
            style="margin-left: 650px"
            type="submit"
            v-else-if="logout"
            @click="out"
            href="/"
            >Logout</a
          >
        </form>
      </div>
    </nav>
    <router-view></router-view>
    <footer class="page-footer font-small bg-secondary text-white pt-4">
      <div class="text-center text-md-left">
        <div class="row">
          <div class="col-md-4 mx-auto">
            <a href="/beranda"
              ><img
                src="https://1.bp.blogspot.com/-ubZ9dGTHkeo/YJEZqDJbLII/AAAAAAAAE5s/KnA48vbj4ykbbdNVIHBbLbLWxf2NIrn_QCLcBGAsYHQ/s1600/Logo%2BBinus%2BUniversity.png"
                width="300px"
            /></a>
          </div>
          <hr class="clearfix w-100 d-md-none" />
          <div class="col-md-2 mx-auto">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Menu</h5>

            <ul class="list-unstyled">
              <li class="nav-item active">
                <a class="text-white" href="/beranda">Home</a>
              </li>
              <li class="nav-item active">
                <a class="text-white" href="/tentang">Tentang</a>
              </li>
              <li class="nav-item active">
                <a class="text-white" href="/kontak">Kontak</a>
              </li>
              <li class="nav-item active dropdown">
                <a
                  class="dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  v-if="logout !== null"
                >
                  Profil
                </a>
                <div
                  class="dropdown-menu text-white"
                  aria-labelledby="navbarDropdown"
                >
                  <a class="dropdown-item" href="#">Mahasiswa</a>
                  <a class="dropdown-item" href="#">Dosen</a>
                  <a class="dropdown-item" href="#">Admin</a>
                </div>
              </li>
              <li class="nav-item active dropdown">
                <a
                  class="dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  v-if="logout !== null"
                >
                  Informasi Perkuliahan
                </a>
                <div
                  class="dropdown-menu text-white"
                  aria-labelledby="navbarDropdown"
                >
                  <a class="dropdown-item" href="#">Mahasiswa</a>
                  <a class="dropdown-item" href="#">Dosen</a>
                  <a class="dropdown-item" href="#">Admin</a>
                </div>
              </li>
            </ul>
          </div>
          <hr class="clearfix w-100 d-md-none" />
          <div class="col-md-2 mx-auto">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Kontak</h5>

            <ul class="list-unstyled">
              <li><i class="fab fa-facebook-square"></i> BINUS UNIVERSITY</li>
              <li><i class="fab fa-twitter-square"></i> @binus_univ</li>
              <li>
                <i class="fab fa-instagram-square"></i> @binusuniversityofficial
              </li>
              <li><i class="fab fa-youtube-square"></i> gabung BINUS</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright bg-dark text-center py-2">
        Copyright © BINUS Higher Education. All rights reserved
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      roles: JSON.parse(sessionStorage.getItem("USER_DATA")).role,
      logout: {},
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      let user = JSON.parse(sessionStorage.getItem("USER_DATA"));
      this.roles = user === null ? "" : user.role;
      this.logout = user;
    },
    out() {
      sessionStorage.clear();
    },
  },
};
</script>

<style>
body {
  padding-top: 80px;
}
.kotak_login {
  text-align: center;
  margin: 30px auto;
  width: 350px;
  font-size: 20px;
}
.form_login {
  width: 100%;
  margin-bottom: 20px;
}
</style>