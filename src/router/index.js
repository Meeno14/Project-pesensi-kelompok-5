import vue from "vue"
import Router from "vue-router"
import home from "@/components/beranda.vue";
import awal from "@/components/awal.vue";
import kontak from "@/components/kontak.vue";
import tentang from "@/components/tentang.vue";
import Login from "@/components/login.vue"
import Registrasi from "@/components/register.vue"
import Info from "@/components/informasi.vue"
import Presensi from "@/components/absensiSiswa.vue"
import Absensi from "@/components/absensiDosen.vue"
import Kehadiran from "@/components/kehadiranMahasiswa.vue"
import Statistik from "@/components/statistik.vue"
import Profil from "@/components/profil.vue"


vue.use(Router)

function configRoutes() {
    return [
        {
            path: "/beranda",
            name: "home",
            component: home,
        },
        {
            path: "/",
            name: "awal",
            component: awal,
        },
        {
            path: "/kontak",
            name: "kontak",
            component: kontak,
        },
        {
            path: "/tentang",
            name: "tentang",
            component: tentang,
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Registrasi',
            component: Registrasi
        },
        {
            path: '/info',
            name: 'Info',
            component: Info
        },
        {
            path: '/absenDsn',
            name: 'Absensi',
            component: Absensi
        },
        {
            path: '/absen',
            name: 'Presensi',
            component: Presensi
        },
        {
            path: '/siswaHadir',
            name: 'Kehadiran',
            component: Kehadiran
        },
        {
            path: '/stats',
            name: 'Stats',
            component: Statistik
        },
        {
            path: '/profil',
            name: 'Kontak',
            component: Profil
        }
    ]
}
const link = new Router({
    mode: "history",
    routes: configRoutes(),
})
export default link