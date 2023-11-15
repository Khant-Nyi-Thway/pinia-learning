import { defineStore } from "pinia";
import { computed, ref } from "vue";

// Option Store 
// export const useCounterStore = defineStore('counterStore', {
//     state: () => {
//         return {
//             count: 0,
//             counterName: 'Pinia Counter'
//         }
//     },
//     getters: {
//         doubleCount: (state) => state.count * 2
//     },
//     actions: {
//         increment() {
//             this.count ++
//         },
//         decrement() {
//             if(this.count > 0) {
//                 this.count --
//             }
//         }
//     }
// })
// Setup Store 
export const useCounterStore = defineStore('counterStore', () => {
    // state
    const count = ref(0)
    const counterName = ref('Pinia Counter')

    // getters
    const doubleCount = computed(() => count.value * 2)

    // actions
    function increment() {
        count.value ++
    }
    function decrement() {
        if(count.value > 0) {
            count.value --
        }
    }

    return {count, counterName, doubleCount, increment, decrement}
})