<template>
  <div>
    <transition name="slide-fade">
      <el-tabs v-model="activeName" style="margin-top:15px;" v-if="active">
        <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
          <keep-alive>
            <Invoice v-if="item.key == 'invoice'"/>
            <Statement v-else-if="item.key == 'statement'"/>
            <PaymentHistory v-else-if="item.key == 'payment_history'" @showDetail="showDetail"/>
            <div v-else> {{ langTitle('coming_soon') }} </div>
          </keep-alive>
        </el-tab-pane>
      </el-tabs>
      <div v-else>
        <el-button :icon="ArrowLeft" class="pan-back-btn" @click="back">{{ langTitle('back') }}</el-button>
        <el-card class="mt-2 pb-30">
            <el-row>
                <el-col :xs="24" :sm="24" :lg="24" class="text-secondary mb-2">
                    Receipt number
                </el-col>
                <el-col :xs="24" :sm="24" :lg="24" class="font-weight-600 mb-2">
                    PREk234892849
                </el-col>
                <el-col :xs="24" :sm="24" :lg="24" class="text-secondary mb-2">
                    Receipt amount
                </el-col>
                <el-col :xs="24" :sm="24" :lg="24" class="font-weight-600 mb-2">
                    {{ formatAmountCurrency("89") }}
                </el-col>
                <el-col :xs="24" :sm="24" :lg="24" class="text-secondary mb-2">
                    Payment date
                </el-col>
                <el-col :xs="24" :sm="24" :lg="24" class="font-weight-600 mb-2">
                    10 Apr 2021, 05:30 PM
                </el-col>
                <el-col :xs="24" :sm="24" :lg="24" class="text-secondary mb-2">
                    Paid invoice number
                </el-col>
                <el-col :xs="24" :sm="24" :lg="24" class="font-weight-600 mb-2">
                    PREk234892849
                </el-col>
                <el-col :xs="24" :sm="24" :lg="24" class="text-secondary mb-2">
                    Merchant order ref number
                </el-col>
                <el-col :xs="24" :sm="24" :lg="24" class="font-weight-600 mb-2">
                    PREk234892849-awsfwsfe32-dsfdsvv3
                </el-col>
                <el-col :xs="24" :sm="24" :lg="24" class="text-secondary mb-2">
                    Payment Type
                </el-col>
                <el-col :xs="24" :sm="24" :lg="24" class="font-weight-600">
                    Boost
                </el-col>
            </el-row>
        </el-card>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { langTitle } from '@/hooks/use-common'
import commonUtil from '@/utils/common-util'
import { ArrowLeft } from '@element-plus/icons-vue'
import Invoice from './section/Invoice.vue'
import Statement from './section/Statement.vue'
import PaymentHistory from './section/PaymentHistory.vue'
import fields from './fields';

const { formatAmountCurrency } = commonUtil();
const { tabMapOptions, activeName } = fields();
const route = useRoute()
const active = ref(true)

const showDetail = (val: string) => {
  console.log('is me')
  active.value = false;
}

const back = () => {
  active.value = true;
}

</script>
