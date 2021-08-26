<template
    ><div>
        <div v-if="label === 'del' || label === 'reset'">
            <button
                @click="calculation(label)"
                class="rounded-lg w-24 h-12 mr-6 mb-6 mx-7 text-white"
                :class="{
                    'w-24': label === 'del',
                    'w-56': label === 'reset',
                    'bg-blute shadow-shaddow-blute focus:bg-click-blue': theme1,
                    'bg-green shadow-shaddow-green focus:bg-click-green': theme2,
                    'bg-purple shadow-shaddow-purple focus:bg-click-purplest': theme3,
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
                    'bg-red shadow-shaddow-red focus:bg-equal-red': theme1,
                    'bg-orange shadow-shaddow-orange focus:bg-equal-orange': theme2,
                    'bg-light-blue shadow-shaddow-light-blue focus:bg-equal-blue': theme3,
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
                    'bg-key1 shadow-shaddow1 focus:bg-white': theme1,
                    'bg-key2 shadow-shaddow2 focus:bg-white': theme2,
                    'bg-key3 shadow-shaddow3 focus:bg-click-purple': theme3,
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
