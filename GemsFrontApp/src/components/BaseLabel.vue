<template>
    <label :for="for" class="block text-sm font-semibold leading-6 text-gray-900">
        <slot></slot>
    </label>
</template>

<script>
export default {
    name: 'BaseLabel'
}
</script>

<script setup>
const props = defineProps({
    for: {
        type: String,
        default: ''
    }
})
</script>