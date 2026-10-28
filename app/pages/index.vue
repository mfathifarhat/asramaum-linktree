<script setup>

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
        <section id="header" class="border-gray-300 border rounded-xl overflow-hidden">
            <div
                class="flex items-center space-x-5  p-5 border-b border-gray-300 justify-center bg-radial from-white to-zinc-100">
                <NuxtImg src="/img/logo.png" class="size-18 rounded-xl" alt="" />
                <div>
                    <h4 class="font-semibold">Asrama Mahasiswa</h4>
                    <p>Universitas Negeri Malang</p>
                </div>
            </div>
            <div class="p-5">
                Pusat informasi dan layanan Asrama Mahasiswa Universitas Negeri Malang.
            </div>
        </section>

        <section id="links" class="grid grid-cols-1 gap-y-5 mt-5">
            <NuxtLink :to="link.link" v-for="link in links"
                class="p-4 border border-gray-300 rounded-xl flex items-center space-x-5 shadow">
                <div class="p-3 bg-gray-200 flex items-center justify-center rounded-xl">
                    <Icon :name="link.icon" class="bg-gray-400 text-gray-600" size="16px" />
                </div>
                <div class="min-w-0 flex-1">
                    <h4 class="font-semibold ">{{ link.nama }}</h4>
                    <p class="overflow-hidden text-ellipsis text-nowrap underline">{{ link.link }}</p>
                </div>
            </NuxtLink>
        </section>
    </div>
</template>
