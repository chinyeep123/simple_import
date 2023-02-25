<template>
    <div>
      <div class="scroll-y mb-2" v-if="active">
          <div class="board-item mb-2" v-for="(statement,index) in dummyStatements" :key="index" @click="showDetail(statement.id)">
              <div class="row">
                  <div class="left-text"><b>{{ statement.title }}</b></div>
                  <div class="right-text"><b>{{ formatAmountCurrency(statement.amount) }}</b></div>
              </div>
              <div class="row">
                  <div class="left-text"><span class="text-secondary">{{ statement.invoice_no }}</span></div>
                  <div class="right-text">{{ statement.date }}</div>
              </div>
          </div>
      </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { langTitle } from '@/hooks/use-common'
import commonUtil from '@/utils/common-util'
import SvgIcon from '@/icons/SvgIcon.vue'
import fields from '../fields'

const emit = defineEmits(['showDetail'])
const { formatAmountCurrency } = commonUtil();
const { dummyStatements } = fields();
const active = ref(true)

const showDetail = (val: string) => {
  console.log(val)
  emit('showDetail');
}
const back = () => {
  active.value = true;
}
</script>
<style lang="scss" scoped>
.board-item {
    cursor: pointer;
    width: 100%;
    height: 100px;
    margin: 5px 0;
    background-color: #fff;
    text-align: left;
    line-height: 45px;
    padding: 5px 10px;
    box-sizing: border-box;
    box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>