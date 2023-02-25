<template>
    <div>
        <el-card class="font-weight-600 mb-2">
            <el-row>
                <el-col :xs="18" :sm="18" :lg="18">
                    Balance amount
                </el-col>
                <el-col :xs="6" :sm="6" :lg="6">
                    {{ formatAmountCurrency("-89") }}
                </el-col>
            </el-row>
        </el-card>
        <el-row :gutter="20" class="mb-5">
            <el-col :xs="24" :sm="24" :lg="24">
                <el-space wrap :size="10" class="text-secondary pl-1">
                    <svg-icon icon-class="icon" />
                    <span>Only last 90 days of bills are viewable in app</span>
                </el-space>
            </el-col>
        </el-row>
        <div class="scroll-y mb-2">
            <div class="board-item mb-2" v-for="(statement,index) in dummyStatements" :key="index">
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
        <el-row>
            <el-col :xs="24" :sm="24" :lg="24">
                <el-button type="primary" size="large" class="w-100">
                    Export Statement
                </el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { langTitle } from '@/hooks/use-common'
import commonUtil from '@/utils/common-util'
import SvgIcon from '@/icons/SvgIcon.vue'
import fields from '../fields'

const { formatAmountCurrency } = commonUtil();
const { dummyStatements } = fields();
const collapseActive = ref(['parent-0'])
const subCollapseActive = ref(['sub-1'])

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