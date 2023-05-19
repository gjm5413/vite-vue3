import { computed, ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { StorageSerializers, useStorage } from '@vueuse/core'
import { useCookies } from '@vueuse/integrations/useCookies'
import { ElMessage } from 'element-plus'

const cookie = useCookies()

// vueuse 中的一个api功能，将数据写入缓存中的方法
const user = useStorage('user', null, undefined, {
  serializer: StorageSerializers.object,
})

export function useUser() {
  // onMounted(() => {
  // 	console.log('执行了user模块');
  // });
  const token = ref(cookie.get('token') ?? '')
  // const expires_time = ref();
  const loginModel = ref({
    username: '',
    password: '',
  })

  const loggedIn = computed(() => user.value?.id)

  // 是否登录
  const isLogin = computed(() => {
    let is = false
    if (token.value)
      is = true

    return is
  })
  interface loginForm {
    username: string | number
    password: string | number
    rememberMe: boolean
    code?: number | string
  }
  const login = async (loginForm: loginForm) => {
    console.log(toRaw(loginForm))
    user.value = { id: 1, username: loginModel.value.username }
    // cookie.set('username', loginModel.value.username);
    // cookie.set('password', loginModel.value.password);
    return new Promise((resolve, reject) => {
      const tokenKey = uuidv4()
      token.value = tokenKey
      cookie.set('token', tokenKey)
      resolve({ success: true })
    })
  }

  // 登出
  const logout = async () => {
    user.value = null
    cookie.remove('username')
    cookie.remove('password')
    cookie.remove('token')
    ElMessage.success('退出成功')
  }
  return {
    loginModel,
    user,
    login,
    loggedIn,
    logout,
    token,
    isLogin,
  }
}
