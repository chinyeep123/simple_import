<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="24" :sm="24" :lg="24" class="card-panel-col">
      <div class="card-panel dashboard-card">
        <div class="dashboard-main-panel-icon-wrapper">
          <img src="../../../assets/images/bg-2.jpg">
        </div>
        <div class="dashboard-panel-description">
          <div class="dashboard-panel-top-text">
            A Residence
            A-01-01 Petaling Jaya
          </div>
          <div class="dashboard-panel-footer-text">
            <el-row :gutter="20">
              <el-col :xs="12" :sm="12" :lg="12" class="">
                  <!-- <svg-icon icon-class="element-building" class-name="card-panel-icon" >
                  </svg-icon>
                  <span>Switch property</span> -->
                <el-button text link class="card-panel-left-icon" @click="action('switch')">
                  <span>{{ langTitle('switch_property') }}</span>
                  <template #icon>
                    <svg-icon icon-class="element-building" class-name="card-panel-icon" />
                  </template>
                </el-button>
              </el-col>
              <el-col :xs="12" :sm="12" :lg="12" class="">
                <el-button type="danger" class="card-panel-call-button" size="large" @click="action('call')">
                  <template #icon>
                    <svg-icon icon-class="element-phone" class-name="card-panel-icon" />
                  </template>
                </el-button>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleNavigate('visitors')">
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon icon-class="peoples" class-name="card-panel-icon" />
          <span>{{ langTitle('visitors') }}</span>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            {{ langTitle('visitors') }}
          </div>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleNavigate('bookings')">
        <div class="card-panel-icon-wrapper icon-message">
          <svg-icon icon-class="table" class-name="card-panel-icon" />
          <span>{{ langTitle('bookings') }}</span>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            {{ langTitle('bookings') }}
          </div>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleNavigate('forms')">
        <div class="card-panel-icon-wrapper icon-money">
          <svg-icon icon-class="form" class-name="card-panel-icon" />
          <span>{{ langTitle('forms') }}</span>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            {{ langTitle('forms') }}
          </div>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleNavigate('billings')">
        <div class="card-panel-icon-wrapper icon-shopping">
          <svg-icon icon-class="documentation" class-name="card-panel-icon" />
          <span>{{ langTitle('billings') }}</span>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            {{ langTitle('billings') }}
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { langTitle } from '@/hooks/use-common'

const router = useRouter();
const handleNavigate = (type) => {
  if(type == 'billings') {
    router.push('/billings');
  } else {
    router.push('/coming-soon');
  }
}
const action = (action) => {
  console.log(action)
  router.push('/coming-soon');
}
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
      height: 265px;
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
      padding: 25px 0 0 10px;
      color: #fff;
      position: absolute;
      width: 100%;
      .dashboard-panel-top-text{ 
        font-size: 18px;
        margin-bottom: 180px
      }
      .dashboard-panel-footer-text {
        .card-panel-left-icon {
          color: #fff;
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