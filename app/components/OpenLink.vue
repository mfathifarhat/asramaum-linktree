<template>
    <UModal :title="props.data.nama">
        <button type="button"
            class="p-3 text-left border border-gray-300 rounded-xl flex items-center space-x-5 ring-violet-300 hover:border-violet-300 hover:ring-2 hover:shadow-md duration-200">
            <div class="p-3 bg-violet-200 flex items-center justify-center rounded-lg">
                <Icon :name="props.data.icon" class=" text-violet-600" size="18px" />
            </div>
            <div class="min-w-0 flex-1">
                <h4 class="font-semibold text-gray-900">{{ props.data.nama }}</h4>
                <p class="overflow-hidden text-ellipsis text-nowrap underline text-gray-600">{{ props.data.link }}</p>
            </div>
        </button>

        <template #body>
            <div class="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
                <p class="truncate text-sm text-gray-600">{{ props.data.link }}</p>
            </div>
            <div class="mt-5 grid grid-cols-2 gap-3">
                <Button type="button" @click="copyLink" class="flex items-center justify-center gap-2 rounded-lg text-sm border border-gray-200 px-4 py-2.5
                     font-medium text-gray-700 transition hover:border-purple-300 hover:bg-purple-50
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500">
                    <Icon :name="copied ? 'lucide:check' : 'lucide:copy'" :class="copied ? 'text-green-600' : ''"
                        size="18px" />
                    {{ copied ? 'Tersalin' : 'Salin Link' }}
                </Button>

                <NuxtLink :to="props.data.link"
                    class="flex items-center justify-center gap-2 rounded-lg text-sm bg-purple-600 px-4 py-2.5
                     font-medium text-white transition hover:bg-purple-700
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2">
                    <Icon name="lucide:external-link" size="18px" />
                    Kunjungi
                </NuxtLink>
            </div>
        </template>
    </UModal>
</template>

<script setup>
const toast = useToast()

const props = defineProps({
    data: {
        link: String,
        nama: String,
        icon: String
    }
})

const copied = ref(false)

async function copyLink() {
    try {
        await navigator.clipboard.writeText(props.data.link);

        toast.add({
            title: 'Tautan berhasil disalin!',
            color: 'success'
        })
    } catch (err) {
        toast.add({
            title: 'Gagal menyalin tautan!',
            color: 'error'
        })
    }
}
</script>

<style lang="scss" scoped></style>