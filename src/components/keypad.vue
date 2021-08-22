<template
    ><div>
        <div v-if="label === 'del' || label === 'reset'">
            <button
                @click="calculation(label)"
                class="rounded-lg w-24 h-12 mr-6 mb-6 mx-7 text-white"
                :class="{
                    'w-24': label === 'del',
                    'w-56': label === 'reset',
                    'bg-blute shadow-shaddow-blute': theme1,
                    'bg-green shadow-shaddow-green': theme2,
                    'bg-purple shadow-shaddow-purple': theme3,
                }"
            >
                {{ label.toUpperCase() }}
            </button>
        </div>
        <div v-else-if="label === '='">
            <button
                @click="calculation(label)"
                class="rounded-lg w-56 h-12 mr-6 mb-6 mx-7"
                :class="{
                    'bg-red shadow-shaddow-red': theme1,
                    'bg-orange shadow-shaddow-orange': theme2,
                    'bg-light-blue shadow-shaddow-light-blue': theme3,
                }"
            >
                {{ label }}
            </button>
        </div>
        <div v-else-if="typeof label === 'number' || label">
            <button
                @click="calculation(label)"
                class="rounded-lg w-24 h-12 mr-6 mb-6 mx-7"
                :class="{
                    'bg-key1 shadow-shaddow1': theme1,
                    'bg-key2 shadow-shaddow2': theme2,
                    'bg-key3 shadow-shaddow3': theme3,
                }"
            >
                {{ label }}
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: "keypad",
    props: ["label", "theme1", "theme2", "theme3"],
    data() {
        return {
            counter: 0,
        };
    },
    methods: {
        calculation(operator) {
            this.$emit("keycap", operator);
        },
    },
};
</script>
