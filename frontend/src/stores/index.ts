import { defineStore } from "pinia"

// 定义一个store并取名为useStore
// defineStore第一个参数是应用程序中store的唯一标识，也就是在定义其他store时该标识不能相同
// 此处可以类比为java中的实体类，useStore就是类名，state里的属性是成员属性，getters里的函数是getter方法，actions里的函数是setter方法
export const useStore = defineStore("useStore", {
    // 定义state
    // 推荐使用 完整类型推断的箭头函数
    state: () => {
        return {
            // 所有这些属性都将自动推断其类型
            count: 0,
            userid: 0,
            name: "test",
            isAdmin: true,
        };
    },

    // 定义getters,里面定义一些对state值的取值操作
    // 指向箭头函数定义的时候所处的对象，而不是其所使用的时候所处的对象，默认指向父级的this
    // 普通函数中的this指向它的调用者，如果没有调用者则默认指向window
    getters: {
        doubleCount: (state) => state.count * 2,
        doubleCountOne(state) {
            return state.count * 2;
        },
        doublePlusOne(): number {
            return this.count * 2 + 1;
        },
    },

    // 定义actions,里面定义一些对state的赋值操作
    actions: {
        setCounter(count: number) {
            this.count = count
        }
    }
})