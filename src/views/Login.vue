<route lang="yaml">
# name: '123456'
meta:
  title: 登录
  layout: false
  constant: true
</route>

<script lang="ts" setup name="Login">
import type { FormInstance, FormRules } from 'element-plus'

// import { Login } from '@/api/login';
import { useUser } from '@/utlis/composables/useUser'

const { login } = useUser()
const router = useRouter()
const loading = ref(false)
const formSize = ref('default')

const loginForm = ref({
  username: 'admin',
  password: '',
  rememberMe: false,
  code: '',
})
const loginFormRef = ref<FormInstance>()
const loginRules = ref<FormRules>({
  username: [
    { required: true, trigger: 'blur', message: '请输入用户名' },
  ],
  password: [
    { required: true, trigger: 'blur', message: '请输入密码' },
    { min: 6, max: 35, trigger: 'blur', message: '密码长度为6到35位' },
  ],
})
interface Login {
  code: number
  success: boolean
  data: any
}
async function handleLogin() {
  loginFormRef.value
    && loginFormRef.value.validate(async (valid, err) => {
      if (valid) {
        const res = await login(loginForm.value) as Login
        if (res.success)
          router.push('/')
      }
      else {
        console.log(err)
      }
    })
}
</script>

<template>
  <div class="login">
    <el-form
      ref="loginFormRef"
      :model="loginForm"
      :rules="loginRules"
      :size="formSize"
      status-icon
    >
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" placeholder="用户名">
          <template #prefix>
            <el-icon><User /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type="password" show-password placeholder="密码">
          <template #prefix>
            <el-icon><Lock /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <div style="margin-bottom: 20px;">
        <el-checkbox v-model="loginForm.rememberMe" size="small">
          记住密码
        </el-checkbox>
      </div>
      <el-button type="primary" size="large" style="width: 100%;" @click="handleLogin">
        登录
      </el-button>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.login {
  width: 300px;
}
</style>
