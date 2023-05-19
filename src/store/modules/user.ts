// import { useUser } from '@/composables/useUser';

// const { token } = useUser();

// import { useCookies } from '@vueuse/integrations/useCookies'
import Cookies from 'js-cookie'
import { v4 as uuidv4 } from 'uuid'

// const cookie = useCookies()

const useUserStore = defineStore(
  'user',
  () => {
    const token = ref((Cookies as any).get('token') ?? '')
    const isLogin = computed(() => {
      let is = false
      if (token.value)
        is = true

      return is
    })
    const login = async () => {
      return new Promise((resolve, reject) => {
        const tokenKey = uuidv4()
        token.value = tokenKey
        Cookies.set('token', tokenKey)
        resolve({ success: true })
      })
    }
    return {
      login,
      token,
      isLogin,
    }
  },
)

export default useUserStore
