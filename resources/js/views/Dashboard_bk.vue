<template>
  <div>
    <div style="margin-bottom:15px;">
      <h3>{{ langTitle('hi') }} User 1,</h3>
    </div>
    <span>{{ langTitle('my_balance') }} RM0.00 ></span>

    <el-tabs v-model="activeName" style="margin-top:15px;">
      <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
        <keep-alive>
          <Home v-if="item.key == 'home'"/>
          <div v-else> {{ langTitle('coming_soon') }} </div>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Home from './dashboard/section/Home.vue'
import { langTitle } from '@/hooks/use-common'
const route = useRoute()

const tabMapOptions = [
    { label: 'Dashboard', key: 'dashboard' },
    { label: 'Parking', key: 'parking' },
    { label: 'My Home', key: 'home' },
    { label: 'My Places', key: 'places' }
  ];
const activeName = ref('home');
</script>
