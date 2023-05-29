// import Cookies from 'js-cookie'

const useDemoStore = defineStore(
  'demo',
  () => {
    const demo = 'this demo.ts'
    const FUNdemo = async () => {
      return new Promise((resolve, reject) => {
        resolve({ success: true })
      })
    }
    return {
      demo,
      FUNdemo,
    }
  },
)

export default useDemoStore
