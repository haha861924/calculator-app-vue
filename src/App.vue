<template>
    <div
        class="w-full h-screen"
        id="main"
        :class="{
            'bg-theme1': theme1,
            'bg-theme2': theme2,
            'bg-theme3': theme3,
        }"
    >
        <!-- title-->
        <div class="grid grid-cols-12 pt-16">
            <h1
                class="col-start-4 text-2xl ml-20"
                :class="{
                    'text-white': theme1,
                    'text-text2': theme2,
                    'text-text3': theme3,
                }"
            >
                <span>calc</span>
            </h1>
            <toggle-switch
                class="col-end-9 ml-10"
                @theme="theme = $event"
            ></toggle-switch>
        </div>
        <div class="grid justify-items-center">
            <!-- screen -->
            <div
                class="rounded-xl p-8 w-5/12 h-32 m-6 overflow-hidden text-right grid items-center"
                :class="{
                    'bg-screen1': theme1,
                    'bg-screen2': theme2,
                    'bg-screen3': theme3,
                }"
            >
                <h1
                    class="text-5xl"
                    :class="{
                        'text-white': theme1,
                        'text-text2': theme2,
                        'text-text3': theme3,
                    }"
                >
                    {{
                        new Intl.NumberFormat("en-US", {
                            style: "decimal",
                        }).format(counter)
                    }}
                </h1>
            </div>
            <!-- keypad -->
            <div
                class="rounded-xl p-8 w-5/12 grid justify-items-stretch"
                :class="{
                    'bg-keypad1': theme1,
                    'bg-keypad2': theme2,
                    'bg-screen3': theme3,
                }"
            >
                <div class="flex items-center">
                    <key
                        v-for="key in 3"
                        :key="key"
                        :label="key + 6"
                        :theme1="theme1"
                        :theme2="theme2"
                        :theme3="theme3"
                        @keycap="calculation"
                    ></key>
                    <key
                        :label="'del'"
                        :theme1="theme1"
                        :theme2="theme2"
                        :theme3="theme3"
                        @counter="calculation"
                        @click="del()"
                    ></key>
                </div>
                <div class="flex items-center">
                    <key
                        v-for="key in 3"
                        :key="key"
                        :label="key + 3"
                        :theme1="theme1"
                        :theme2="theme2"
                        :theme3="theme3"
                        @keycap="calculation"
                    ></key>
                    <key
                        :label="'+'"
                        :theme1="theme1"
                        :theme2="theme2"
                        :theme3="theme3"
                        @keycap="calculation"
                    ></key>
                </div>
                <div class="flex items-center">
                    <key
                        v-for="key in 3"
                        :key="key"
                        :label="key"
                        :theme1="theme1"
                        :theme2="theme2"
                        :theme3="theme3"
                        @keycap="calculation"
                    ></key>
                    <key
                        :label="'-'"
                        :theme1="theme1"
                        :theme2="theme2"
                        :theme3="theme3"
                        @keycap="calculation"
                    ></key>
                </div>
                <div class="flex items-center">
                    <key
                        :label="'.'"
                        :theme1="theme1"
                        :theme2="theme2"
                        :theme3="theme3"
                        @keycap="calculation"
                    ></key>
                    <key
                        :label="0"
                        :theme1="theme1"
                        :theme2="theme2"
                        :theme3="theme3"
                        @keycap="calculation"
                    ></key>
                    <key
                        :label="'/'"
                        :theme1="theme1"
                        :theme2="theme2"
                        :theme3="theme3"
                        @keycap="calculation"
                    ></key>
                    <key
                        :label="'X'"
                        :theme1="theme1"
                        :theme2="theme2"
                        :theme3="theme3"
                        @keycap="calculation"
                    ></key>
                </div>
                <div class="flex items-center">
                    <key
                        :label="'reset'"
                        :theme1="theme1"
                        :theme2="theme2"
                        :theme3="theme3"
                        @keycap="calculation"
                    ></key>
                    <key
                        :label="'='"
                        :theme1="theme1"
                        :theme2="theme2"
                        :theme3="theme3"
                        @keycap="calculation"
                        @click="equal('again')"
                    ></key>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import key from "./components/keypad";
import toggleSwitch from "./components/ToggleSwitch";
export default {
    name: "App",
    components: { key, toggleSwitch },
    data() {
        return {
            theme: 1,
            keybord: 0,
            operator: "+",
            counter: "0",
            previous: 0,
        };
    },
    computed: {
        theme1() {
            return this.theme === 1 ? true : false;
        },
        theme2() {
            return this.theme === 2 ? true : false;
        },
        theme3() {
            return this.theme === 3 ? true : false;
        },
    },
    methods: {
        calculation(operator) {
            if (typeof operator === "number") {
                if (this.counter[0] === "0") {
                    this.counter = this.counter.slice(1);
                }
                this.counter =
                    this.counter === 0
                        ? `${operator}`
                        : `${this.counter}${operator}`;
            } else {
                if (operator === "reset") this.counter = "0";
                if (operator === ".")
                    this.counter = `${this.counter}${operator}`;
                if (operator !== "=" && operator !== ".") {
                    this.previous = this.counter;
                    this.counter = "0";
                    this.operator = operator;
                }
            }
        },
        del() {
            this.counter = this.counter.toString();
            this.counter = this.setCharAt(
                this.counter,
                this.counter.length - 1,
                ""
            );
        },
        setCharAt(str, index, chr) {
            //replace string special index
            if (str.length === 1) return "0";
            if (index > str.length - 1) return str;
            return str.substring(0, index) + chr + str.substring(index + 1);
        },
        equal() {
            let tenCount = 0;
            if (this.counter.indexOf(".") !== -1) {
                this.counter = this.counter * 10;
                tenCount += 1;
            }
            if (this.previous.indexOf(".") !== -1) {
                this.previous = this.previous * 10;
                tenCount += 1;
            }
            switch (this.operator) {
                case "+":
                    this.counter =
                        parseFloat(this.previous) + parseFloat(this.counter);
                    break;
                case "-":
                    this.counter =
                        parseFloat(this.previous) - parseFloat(this.counter);
                    break;
                case "X":
                    this.counter =
                        parseFloat(this.previous) * parseFloat(this.counter);
                    if (tenCount === 1) this.counter = this.counter / 10;
                    if (tenCount === 2) this.counter = this.counter / 100;
                    break;
                case "/":
                    this.counter =
                        parseFloat(this.previous) / parseFloat(this.counter);
                    if (tenCount === 1) this.counter = this.counter / 10;
                    if (tenCount === 2) this.counter = this.counter / 100;
                    break;
                default:
                    console.log("other=", this.operator);
                    break;
            }
        },
    },
};
</script>
