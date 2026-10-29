<script setup>
import OpenLInk from '~/components/OpenLink.vue';


const links = [
    {
        link: "https://bit.ly/PeminjamanAlatOlahragaAsramaMahasiswaUM",
        nama: "Peminjaman Alat Olahraga",
        icon: "lucide:volleyball"
    },
    {
        link: "https://bit.ly/FormLayananFasilitasAsramaUM",
        nama: "Layanan Fasilitas Asrama",
        icon: "lucide:clipboard-list"
    },
    {
        link: "https://bit.ly/JadwalPemakaianFasilitasTempat",
        nama: "Jadwal Pemakaian Aula Lili",
        icon: "lucide:calendar-days"
    },
    {
        link: "https://wa.me/6285748224158",
        nama: "Media Partner #1",
        icon: "mdi:whatsapp"
    },
    {
        link: "https://wa.me/62895800934477",
        nama: "Media Partner #2",
        icon: "mdi:whatsapp"
    },
]

</script>

<template>
    <div class="text-sm">
        <section id="header" class=" border border-gray-300 rounded-xl overflow-hidden">
            <div
                class="flex items-center space-x-5 border-b border-gray-300  p-5 rounded-t-xl justify-center bg-[#643A65] text-white">
                <NuxtImg src="/img/logo.png" class="size-12 bg-white rounded-full" alt="" />
                <div>
                    <h4 class="font-semibold">Asrama Mahasiswa</h4> 
                    <p>Universitas Negeri Malang</p>
                </div>
            </div>
            <div class="p-5 text-center text-gray-900 border-t-0 rounded-b-xl">
                Pusat informasi dan layanan Asrama Mahasiswa Universitas Negeri Malang
            </div>
        </section>

        <section id="links" class="grid grid-cols-1 gap-y-5 mt-5">
            <OpenLink v-for="link in links" :data="link"/>
        </section>
    </div>
</template>
