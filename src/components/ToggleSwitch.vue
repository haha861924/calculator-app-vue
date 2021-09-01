<template>
    <div class="flex items-end text-xs">
        <span
            class="mr-6"
            :class="{
                'text-white': picked === 1,
                'text-text2': picked === 2,
                'text-text3': picked === 3,
            }"
            >THEME</span
        >
        <div>
            <div class="w-16 gap-3 flex justify-center">
                <label
                    v-for="item in 3"
                    :key="item"
                    :for="`theme${item}`"
                    :class="{
                        'text-white': picked === 1,
                        'text-text2': picked === 2,
                        'text-text3': picked === 3,
                    }"
                    >{{ item }}</label
                >
            </div>
            <div
                class="rounded-xl relative gap-1 p-1 flex item-center"
                :class="{
                    'bg-toggle1': picked === 1,
                    'bg-toggle2': picked === 2,
                    'bg-toggle3': picked === 3,
                }"
            >
                <input
                    class="relative w-4 opacity-0"
                    v-for="item in 3"
                    :key="item"
                    type="radio"
                    :id="`theme${item}`"
                    name="drone"
                    :value="item"
                    v-model="picked"
                />
                <div
                    class="bg-red w-4 h-4 rounded-full absolute transition duration-200"
                    :class="{
                        'bg-red': picked === 1,
                        'bg-orange': picked === 2,
                        'bg-light-blue': picked === 3,
                    }"
                    :style="{
                        transform: `translateX(${(picked - 1) * 100}%)`,
                        paddingRight: `${(picked - 1) * 0.25}rem`,
                    }"
                ></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "toggle-switch",
    data() {
        return {
            picked: 1,
        };
    },
    watch: {
        picked(val) {
            this.$emit("theme", val);
        },
    },
};
</script>
