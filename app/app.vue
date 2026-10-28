<template>
  
  <Head>
    <Title>Asrama Mahasiswa UM | Informasi & Layanan</Title>
  </Head>

  <div>
    <NuxtRouteAnnouncer />
    <UApp :toaster="toaster">
      <div class="max-w-xl mx-auto flex flex-col pt-6 pb-6 px-8">
        <NuxtPage />
      </div>
    </UApp>
  </div>
</template>

<script setup>
const toaster = { max: 1 }
</script>