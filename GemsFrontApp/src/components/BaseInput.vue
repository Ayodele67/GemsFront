<template>
    <div>
        <BaseLabel :for="state.uniqueId" v-if="label">{{label}}</BaseLabel>
        <div class="mt-2.5">
            <input
                :id="state.uniqueId"
                v-bind="$attrs"
                :placeholder="placeholder || label"
                class="block w-full rounded-md border-3 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                :class="{
                    'border-2 border-red-600': error,
                    'border-2 border-green-600': success,
                    'border-2 border-blue-600': info,
                    'border-2 border-yellow-400': warning,
                }"
                :value="modelValue"
                @input="updateInput"
            />
        </div>
        <FormError>{{error}}</FormError>
    </div>
</template>

<script>

export default {
    name: 'BaseInput',
    inheritAttrs: false
}
</script>

<script setup>
import BaseLabel from './BaseLabel.vue'
import FormError from './FormError.vue'
import { onMounted, reactive } from 'vue'

const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    },
    modelValue: {
        type: [String, Number],
        default: ''
    },
    error: {
        type: String,
        default: ''
    },
    success: Boolean,
    info: Boolean,
    warning: Boolean,
})

const emit = defineEmits(['update:modelValue'])

const state = reactive({
    uniqueId: ''
})

const updateInput = ($event) => {
    emit('update:modelValue', $event.target.value)
}

onMounted(() => {
    state.uniqueId = props.id || Math.random()
        .toString(16)
        .slice(2)
})
</script>