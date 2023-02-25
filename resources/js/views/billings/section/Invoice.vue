<template>
    <div>
      <transition name="slide-fade">
        <el-row :gutter="40" class="panel-group" v-if="!isPay">
            <el-col :xs="24" :sm="24" :lg="24" class="card-panel-col">
                <div class="card-panel dashboard-card">
                    <div class="dashboard-panel-description">
                        <div class="dashboard-panel-top-text">
                            <el-row :gutter="20" class="mb-10">
                                <el-col :xs="24" :sm="24" :lg="24" class="mb-10">
                                    <span class="font-weight-100">Total Due</span>
                                    <h2 class="text-primary"><b>{{ formatAmountCurrency("2100") }}</b></h2>
                                </el-col>
                                <el-col :xs="12" :sm="12" :lg="12" class="">
                                    <span class="font-weight-100">Latest Charges</span>
                                    <h4 class="text-primary"><b>{{ formatAmountCurrency(600) }}</b></h4>
                                </el-col>
                                <el-col :xs="12" :sm="12" :lg="12" class="">
                                    <span class="font-weight-100">Overdue Charges</span>
                                    <h4 class="text-primary"><b>{{ formatAmountCurrency(1600) }}</b></h4>
                                </el-col>
                            </el-row>

                        </div>
                        <div class="dashboard-panel-footer-text">
                            <el-row :gutter="20">
                                <el-col :xs="12" :sm="12" :lg="12" class="">
                                </el-col>
                                <el-col :xs="12" :sm="12" :lg="12" class="">
                                    <el-button type="primary" class="card-panel-call-button" size="large" @click="handlePay">
                                        Pay Now
                                    </el-button>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="40" v-else class="mb-2">
            <el-col :xs="24" :sm="24" :lg="24" class="mb-2">
              <el-button :icon="ArrowLeft" class="pan-back-btn" @click="back">{{ langTitle('back') }}</el-button>
            </el-col>
            <el-col :xs="24" :sm="24" :lg="24">
              <el-space :fill="true" :direction="'horizontal'" style="width:100%">
                <el-card class="box-card">
                      <span>What do you want to pay?</span>
                      <el-switch
                        v-model="payAll"
                        class="ml-2 float-right"
                        inline-prompt
                        size="large"
                        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949; height: 20px;"
                        active-text="Pay all"
                        inactive-text="Pay all"
                      />
                </el-card>
              </el-space>
            </el-col>
        </el-row>
      </transition>
      <el-row>
          <el-col :xs="24" :sm="24" :lg="24" class="mb-5">
              <h3>Detail charges</h3>
          </el-col>
          <el-col :xs="24" :sm="24" :lg="24" class="mb-5">
              <el-checkbox-group
                v-model="checkedItems"
                @change="handleCheckedItemsChange"
              >
              <el-collapse v-model="collapseActive" @change="handleChange" class="collaos">
                  <el-collapse-item v-for="(item, index) in dummyCharges" :key="index" :name="`parent-${index}`">
                      <template #title>
                          <el-col :xs="16" :sm="16" :lg="16">
                              <b class="text-primary">{{ item.categories }}</b>
                          </el-col>
                          <b class="text-primary">{{ formatAmountCurrency(item.total) }}</b>
                      </template>
                      <el-row>
                          <el-col :xs="24" :sm="24" :lg="24">
                              <el-collapse v-model="subCollapseActive" @change="handleChange" class="collaos">
                                  <el-collapse-item v-for="(subCollapse, subIndex) in item.children" :key="`sub-${index}-${subIndex}`" :name="`sub-${index}-${subIndex}`">
                                      <template #title>
                                          <el-col :xs="16" :sm="16" :lg="16">
                                          <b>{{ subCollapse.date }}</b>
                                          </el-col>
                                          <el-col :xs="8" :sm="8" :lg="8">
                                          {{ formatAmountCurrency(subCollapse.total) }}
                                          </el-col>
                                      </template>
                                      <el-row>
                                          <el-col :xs="14" :sm="14" :lg="14">
                                          <span class="text-secondary">{{ subCollapse.date }} (payment due)</span>
                                          </el-col>
                                          <el-col :xs="8" :sm="8" :lg="8">
                                          <span class="text-secondary">{{ subCollapse.invoice_no }}</span>
                                          </el-col>
                                          <el-col :xs="2" :sm="2" :lg="2" v-if="isPay">
                                            <el-checkbox class="text-none" :name="`sub-${item.id}-${subCollapse.id}`" :key="`sub-${item.id}-${subCollapse.id}`" :label="`sub-${item.id}-${subCollapse.id}`" />
                                          </el-col>
                                      </el-row>
                                      <el-row v-for="(subCollapseDetail, subDetailIndex) in subCollapse.details" :key="`sub-${index}-${subIndex}-${subDetailIndex}`" >
                                          <el-col :xs="16" :sm="16" :lg="16">
                                              - {{ subCollapseDetail.description }}
                                          </el-col>
                                          <el-col :xs="8" :sm="8" :lg="8">
                                                  {{ formatAmountCurrency(subCollapseDetail.amount) }}
                                          </el-col>
                                      </el-row>
                                  </el-collapse-item>
                              </el-collapse>
                          </el-col>
                      </el-row>
                  </el-collapse-item>
              </el-collapse>
              </el-checkbox-group>
          </el-col>
      </el-row>
      <el-row v-if="checkedItems.length">
          <el-col :xs="24" :sm="24" :lg="24">
            <el-space :fill="true" :direction="'horizontal'" style="width:100%">
              <el-card class="box-card">
                  <el-row>
                    <el-col :xs="16" :sm="16" :lg="16" class="mb-2">
                    <span>Subtotal</span>
                    </el-col>
                    <el-col :xs="8" :sm="8" :lg="8" class="text-right">
                    <span>{{ formatAmountCurrency(20) }}</span>
                    </el-col>
                    <el-col :xs="16" :sm="16" :lg="16" class="mb-2">
                    <span>Tax (6%)</span>
                    </el-col>
                    <el-col :xs="8" :sm="8" :lg="8" class="text-right">
                    <span>{{ formatAmountCurrency(20) }}</span>
                    </el-col>
                    <el-col :xs="16" :sm="16" :lg="16" class="mb-2">
                    <span><b>Total amount</b></span>
                    </el-col>
                    <el-col :xs="8" :sm="8" :lg="8" class="text-right">
                    <span><b>{{ formatAmountCurrency(20) }}</b></span>
                    </el-col>
                    <el-col :xs="24" :sm="24" :lg="24">
                      <el-button type="primary" class="w-100" @click="payNow">Pay</el-button>
                    </el-col>
                  </el-row>
              </el-card>
            </el-space>
          </el-col>
      </el-row>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { langTitle } from '@/hooks/use-common'
import commonUtil from '@/utils/common-util'
import { ArrowLeft } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import fields from '../fields'

const { formatAmountCurrency } = commonUtil();
const { dummyCharges } = fields();
const collapseActive = ref(['parent-0'])
const subCollapseActive = ref(['sub-1'])
const checkedItems = ref([])
const isPay = ref(false);
const payAll = ref(false)
const items = ref([]);
onMounted(() => {
  dummyCharges.forEach(function(item, key) {
    item.children.forEach(function(children, childKey) {
      console.log(item)
        items.value.push(`sub-${item.id}-${children.id}`)
    })
  })
})
const handleChange = (val: string[]) => {
  // console.log(val)
}
const handlePay = () => {
  isPay.value = true;
}
const back = () => {
  isPay.value = false;
  payAll.value = false;
  items.value = [];
  checkedItems.value = [];
}
const handleCheckedItemsChange = (value: string[]) => {
  const checkedCount = value.length
  payAll.value = checkedCount === items.value.length
}
const payNow = () => {
  ElMessageBox.confirm(
    '<span class="text-secondary">Date</span><br/><strong>28 Apr 2021</strong><br/><span class="text-secondary">Payment Method</span><br/><strong>Kiple</strong><br/><span class="text-secondary">Total amount</span><br/><strong>RM 2100</strong>',
    'Payment Success',
    {
      dangerouslyUseHTMLString: true,
      confirmButtonText: 'OK',
      showCancelButton: false,
      showClose: false,
      type: 'success',
      center: true,
    }
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message: 'Payment successful!',
      })
    })
    .catch(() => {
    })
}
watch((payAll), (value) => {
  value == true ? checkedItems.value = items.value : items.value.length != checkedItems.value.length ? checkedItems.value : checkedItems.value = [] 
})

</script>
<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    
    &.dashboard-card {
      height: 230px;
      border-radius: 10px;
      img {
        width: 100%;
        height: 100%;
        transition: all 0.2s linear;
        &:hover {
          transform: scale(1.1, 1.1);
          filter: contrast(130%);
        }
      }
    }
    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3
    }

    .dashboard-main-panel-icon-wrapper {
      float: left;
      transition: all 0.38s ease-out;
      border-radius: 6px;
      position: absolute;
    }
    .dashboard-panel-description {
      font-weight: bold;
      padding: 25px 0 0 15px;
      position: absolute;
      width: 100%;
      .dashboard-panel-top-text{ 
        font-size: 18px;
        // margin-bottom: 180px
      }
      .dashboard-panel-footer-text {
        .card-panel-left-icon {
          padding: 0;
          font-size: 30px;
          span {
            font-size: 20px
          }
        }
        .card-panel-right-icon {
          font-size: 30px;
        }
        .card-panel-call-button {
          font-size: 25px;
          padding: 0 20px;
          float: right;
        }
      }
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
      span {
        display: none;
      }
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 45px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 30px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .dashboard-main-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      font-size: 35px !important;
      margin: 5px auto !important;
      float: none !important;
    }
    span {
      display: block !important;
      width: 100%; 
      text-align: center;
      margin-top: 5px;
      font-size: 20px;
    }
  }
}
</style>