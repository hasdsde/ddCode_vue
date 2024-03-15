<template>
  <div class="q-pa-md">
    <q-card class="q-pa-md q-mt-md">
      <q-expansion-item switch-toggle-side label="发送HTTP请求" :header-style="{ fontSize: 'large' }"
        class="rounded-borders">
        <q-card>
          <q-banner class="bg-primary text-white">
            <span class=" leading-8">提示：代理服务器配置位于根目录下quasar.config.js的devServer中。</span>
          </q-banner>
          <q-card-section class="q-pa-none q-mt-md">
            <div class="flex justify-between">
              <div>
                请求方法：<q-select v-model="requestMethod" :options="requestMethods" filled dense
                  class="inline w-[150px] q-ml-sm" />
              </div>
              <div>
                URL:<q-input v-model="requestUrl" filled dense class="inline w-[20vw] min-w-[400px] q-ml-sm"
                  :prefix="baseUrl" placeholder="URL" />
              </div>
              <div>
                参数(Json):<q-input v-model="requestParam" filled dense class="inline w-[20vw] min-w-[200px] q-ml-sm"
                  placeholder="URL" />
              </div>
              <q-btn label="发送请求" color="primary" icon="send" @click="sendRequest"></q-btn>
            </div>
            <div>
              <q-input type="textarea" filled v-model="result" class="q-mt-md" placeholder="执行结果"></q-input>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-card>
    <q-card class="q-pa-md q-mt-md">
      <q-expansion-item switch-toggle-side label="弹窗消息" :header-style="{ fontSize: 'large' }" class="rounded-borders">
        <q-card>
          <q-banner class="bg-primary text-white">
            <span class=" leading-8">提示：封装函数位于/src/components/dialog.ts中</span>
          </q-banner>
          <q-card-section class="q-pa-none q-mt-md ">
            <div class="flex justify-between">
              <q-btn color="purple " no-caps label="加载：CommonLoading($q)" @click="loading" />
              <q-btn color="green" no-caps label="成功：CommonSuccess(msg)" @click="CommonSuccess('finish')" />
              <q-btn color="green" no-caps label="成功(组)：CommonGroupSuccess(msg)"
                @click="CommonGroupSuccess('finish')" />
              <q-btn color="green" no-caps label="成功(组)(快)CommonGroupFastSuccess(msg)"
                @click="CommonGroupFastSuccess('finish')" />
              <q-btn color="green" no-caps label="成功：Success()" @click="Success()" />
              <q-btn color="orange" no-caps label="警告：CommonWarn(msg)" @click="CommonWarn('warn')" />
              <q-btn color="red" no-caps label="失败：CommonFail(msg)" @click="CommonFail('fail')" />
              <q-btn color="primary" no-caps label="信息：CommonInfo(msg)" @click="CommonInfo('info')" />
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-card>

    <q-card class="q-pa-md q-mt-md">
      <q-expansion-item switch-toggle-side label="弹窗表单" :header-style="{ fontSize: 'large' }" class="rounded-borders">
        <q-card>
          <q-banner class="bg-primary text-white">
            <span class=" leading-8">提示：封装函数位于/src/components/dialog.ts中</span>
          </q-banner>
          <q-card-section class="q-pa-none q-mt-md ">
            <div class="flex justify-between">
              <q-btn color="purple " no-caps label="DialogAlert()" @click="DialogAlert('input')" />
              <q-btn color="green" no-caps label="DialogConfirm('input')" @click="DialogConfirm('input')" />
              <q-btn color="green" no-caps label="DialogRadio([{ label: 'label', value: 'value', color: 'primary' }])"
                @click="DialogRadio([{ label: 'label', value: 'value', color: 'primary' }])" />
              <q-btn color="green" no-caps label="DialogPrompt('title', 'msg', 'default')"
                @click="DialogPrompt('title', 'msg', 'default')" />
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-card>
  </div>
</template>
<script lang="ts" setup>
import { log } from 'console';
import { useQuasar } from 'quasar';
import { api, base } from 'src/boot/axios';
import { CommonFail, CommonLoading, CommonSuccess, DialogAlert, DialogPrompt, DialogConfirm, DialogRadio, CommonWarn, LoadingFinish, CommonGroupSuccess, CommonGroupFastSuccess, Success, CommonInfo } from 'src/components/dialog';
import { BaseApi } from 'src/components/models';
import { ref } from 'vue';

const requestMethods = ['GET', 'POST', 'PUT', 'DELETE']
const requestMethod = ref('GET')
const requestUrl = ref('role/all')
const requestParam = ref('{"userName":"123"}')
const baseUrl = base.defaults.baseURL
const result = ref('')
const $q = useQuasar()

function loading() {
  CommonLoading($q)
  setTimeout(() => {
    LoadingFinish($q)
  }, 1000)
}

function sendRequest() {
  switch (requestMethod.value) {
    case 'GET':
      api.get(requestUrl.value).then((res: BaseApi) => {
        result.value = `code:${res.code}\ndata:${JSON.stringify(res.data)}\nmsg:${res.msg}`
        CommonSuccess(null)
      }).catch((err: Error) => {
        CommonFail(err.message)
      })
      break;
    case 'POST':
      api.post(requestUrl.value, JSON.parse(requestParam.value)).then((res: BaseApi) => {
        result.value = `code:${res.code}\ndata:${JSON.stringify(res.data)}\nmsg:${res.msg}`
        CommonSuccess(null)
      }).catch((err: Error) => {
        CommonFail(err.message)
      })
      break;
    case 'PUT':
      api.put(requestUrl.value, JSON.parse(requestParam.value)).then((res: BaseApi) => {
        result.value = `code:${res.code}\ndata:${JSON.stringify(res.data)}\nmsg:${res.msg}`
        CommonSuccess(null)
      }).catch((err: Error) => {
        CommonFail(err.message)
      })
      break;
    case 'DELETE':
      api.delete(requestUrl.value, JSON.parse(requestParam.value)).then((res: BaseApi) => {
        result.value = `code:${res.code}\ndata:${JSON.stringify(res.data)}\nmsg:${res.msg}`
        CommonSuccess(null)
      }).catch((err: Error) => {
        CommonFail(err.message)
      })
      break;
  }
}


function building() {
  CommonWarn("稍后开发")
}
</script>
