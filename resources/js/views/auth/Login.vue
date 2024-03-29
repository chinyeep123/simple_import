<!--suppress ALL -->
<template>
  <div class="login-container">
    <el-form ref="refLoginForm" class="login-form" :model="subForm" :rules="formRules">
      <div class="title-container">
        <h3 class="title text-center">{{ settings.title }}</h3>
      </div>
        <el-form-item prop="keyword" :rules="formRules.isNotNull(langTitle('username_validate'))">
                <span class="svg-container">
                    <svg-icon icon-class="user" />
                </span>
            <el-input v-model="subForm.keyword" placeholder="username(admin)" />
            <!--占位-->
            <div class="show-pwd" />
        </el-form-item>
      <!--<el-form-item prop="password" :rules="formRules.passwordValid">-->
      <el-form-item prop="password" :rules="formRules.isNotNull(langTitle('username_validate'))">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="refPassword"
            v-model="subForm.password"
            :type="passwordType"
            name="password"
            placeholder="password(123456)"
            @keyup.enter="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
      </el-form-item>
      <div class="tip-message">{{ tipMessage }}</div>
      <el-button :loading="subLoading" type="primary" class="login-btn" size="default" @click.prevent="handleLogin">
        Login
      </el-button>
      <Install />
      <vue-qr text="https://simple-import.comecodetogether.com" :callback="openQR" qid="testid"></vue-qr>
    </el-form>
  </div>
</template>

<script setup>
import { nextTick, reactive, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBasicStore } from '@/store/auth'
import { elMessage, useElement } from '@/hooks/use-element'
import { langTitle } from '@/hooks/use-common'
import vueQr from 'vue-qr/src/packages/vue-qr.vue'
import Install from './Install.vue'

    /* listen router change and set the query  */
    const { settings } = useBasicStore()
    const route = useRoute()
    //element valid
    const formRules = useElement().formRules
    //form
    const subForm = reactive({
        keyword: 'admin',
        password: '123456'
    })
    const state = reactive({
        otherQuery: {},
        redirect: undefined
    })
    const openQR = (dataUrl,id) => {
      console.log('can')
    }
    const getOtherQuery = (query) => {
        return Object.keys(query).reduce((acc, cur) => {
            if (cur !== 'redirect') {
            acc[cur] = query[cur]
            }
            return acc
        }, {})
    }

    watch( () => route.query, (query) => {
        if (query) {
            state.redirect = query.redirect
            state.otherQuery = getOtherQuery(query)
        }
    },
    { immediate: true }
    )

    /*
    *  login relative
    * */
    let subLoading = ref(false)
    //tip message
    let tipMessage = ref('')
    //sub form
    const refLoginForm = ref(null)
    const handleLogin = () => {
    refLoginForm.value.validate((valid) => {
        subLoading = true
        if (valid) loginFunc()
    })
    }
    const router = useRouter()
    const basicStore = useBasicStore()

    const loginFunc = () => {
        basicStore.setLogin(true)
        router.push('/')
    }

    /*
    *  password show or hidden
    * */
    const passwordType = ref('password')
    const refPassword = ref(null)
    const showPwd = () => {
    if (passwordType.value === 'password') {
        passwordType.value = ''
    } else {
        passwordType.value = 'password'
    }
    nextTick(() => {
        refPassword.value.focus()
    })
    }
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;
.login-container {
  height: 100vh;
  width: 100%;
  background-color: #2d3a4b;
    overflow: hidden;
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
  .title-container {
    .title {
      font-size: 26px;
      color: #eee;
      margin: 0px auto 25px auto;
      text-align: center;
      font-weight: bold;
    }
  }
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}

.svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    text-align: center;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
}

//错误提示信息
.tip-message {
  color: #e4393c;
  height: 30px;
  margin-top: -12px;
  font-size: 12px;
}

//登录按钮
.login-btn {
  width: 100%;
  margin-bottom: 30px;
}
.show-pwd {
    position: absolute;
    right: 10px;
    top: 18px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>

<style lang="scss">
//css 样式重置 增加个前缀避免全局污染
.login-container {
  .el-input__wrapper {
    background-color: transparent;
    box-shadow: none;
    width: 100%;
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
  .el-input input {
    background: transparent;
    border: 0px;
    -webkit-appearance: none;
    border-radius: 0px;
    padding: 10px 5px 10px 15px;
    color: #fff;
    height: 42px; //此处调整item的高度
    caret-color: #fff;
  }
  //hiden the input border
  .el-input__inner {
    box-shadow: none !important;
  }
}
</style>
