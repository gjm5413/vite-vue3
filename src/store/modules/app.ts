import cookie from 'js-cookie'

const useAppStore = defineStore(
  'app',
  // 写法 01
  // {
  //   state: () => ({ val: 0 }),
  //   getters: {
  //     doubleCount: (state) => state.val * 2,
  //   },
  //   actions: {
  //     changeVal(value) {
  //       this.val = value
  //     },
  //   },
  // },

  // 写法 02
  () => {
    const val = ref(cookie.get('values') ?? '0')
    function changeVal(value) {
      cookie.set('values', value)
      val.value = value
    }
    return {
      val,
      changeVal,
    }
  },
)

export default useAppStore
