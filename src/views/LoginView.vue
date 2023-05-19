<script setup lang="ts" name="loginmmp">
// import { ref, onMounted, toRaw } from 'vue';
import { useUser } from '@/utlis/composables/useUser'
import HelloWorld from '@/components/HelloWorld.vue'

const { loginModel, user, loggedIn, login, logout } = useUser()
onMounted(() => {
  console.log(123123123)
})
</script>

<template>
  <div class="login">
    <h1>Login</h1>
    <p v-if="loggedIn">
      Welcome {{ user?.username }}
      <a href="javascript:;;" @click.prevent="logout">退出登录</a>
    </p>
    <el-form v-if="!loggedIn" :model="loginModel" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="loginModel.username" placeholder="username" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="loginModel.password" type="password" placeholder="password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">
          登录
        </el-button>
      </el-form-item>
    </el-form>
    <HelloWorld msg="123" />
  </div>
</template>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  .login {
    min-height: 100vh;
    display: flex;
    align-items: center;
    h1 {
      text-align: center;
    }
  }
}
</style>
