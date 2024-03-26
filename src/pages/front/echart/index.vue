<template>
  <div class="q-pa-sm flex justify-around h-[95vh]">
    <q-card class="w-[30%] q-pa-md overflow-y-scroll">
      <q-tree
          class="h-[86vh]  "
          :nodes="configTree"
          node-key="label"
          ref="tree"
      >
        <template v-slot:default-header="prop">
          <div class="row items-center">
            <q-icon v-if="prop.node.icon" name="settings" color="orange" size="20px" class="q-mr-sm"/>
            <div class="text-weight-bold text-primary">{{ prop.node.label }}</div>
            &nbsp;&nbsp;&nbsp;
            <q-badge outline align="middle" color="primary" v-if="prop.node.type">
              {{ prop.node.type }}
            </q-badge>
            <div class="text-weight-bold text-grey-8">&nbsp;&nbsp;&nbsp;{{ prop.node.desc }}</div>
          </div>
          <q-space></q-space>
          <div class="float-right">
            <div class="text-weight-bold text-grey-8">&nbsp;&nbsp;&nbsp;{{ prop.node.default }}</div>
          </div>
        </template>
        <template v-slot:default-body="prop">
          <div v-if="!prop.node.children">
            <!--     可选     -->
            <q-select v-if="prop.node.option" :options="prop.node.option" dense filled
                      v-model="prop.node.value" new-value-mode="add" use-input
                      @update:model-value="handleInputConfig(prop.node.value,prop.node)"
            />
            <!--     bool     -->
            <q-select v-else-if="prop.node.type=='boolean'" :options="['true','false']" dense filled
                      v-model="prop.node.value"
                      @update:model-value="handleInputConfig(prop.node.value,prop.node)"
            />
            <!--     字符串     -->
            <q-input v-else="prop.node.type" type="textarea" autogrow dense filled
                     v-model="prop.node.value"
                     @update:model-value="handleInputConfig(prop.node.value,prop.node)"/>
          </div>
        </template>
      </q-tree>
    </q-card>
    <q-card class="w-[38%] h-full flex justify-center q-pa-md ">
      <div ref="chart1" style="width: 100%;height:400px;"></div>
    </q-card>
    <q-card class="w-[30%] h-full">
      <q-card-section>
        <div class="text-body1 q-pb-md flex justify-between items-center">
          <span class="text-md">
            代码预览
          </span>
        </div>
        <!--    不知道为什么option直接用有错误    -->
        <q-input
            v-model="codeView"
            debounce="1000"
            filled
            autogrow
            type="textarea"
            class="overflow-auto  text-red"
        />
      </q-card-section>
      <q-card-section>
        <div class="text-body1 q-pb-md flex justify-between items-center">
          <span class="text-md">
            全部代码
          </span>
        </div>
        <!--    不知道为什么option直接用有错误    -->
        <q-input
            v-model="allCode"
            debounce="1000"
            filled
            autogrow
            type="textarea"
            class="overflow-auto text-red"
        />
      </q-card-section>
    </q-card>
  </div>
</template>
<script setup lang="ts">
import * as echarts from 'echarts';
import {onMounted, ref, watch} from "vue";
import {configList} from "pages/front/echart/configList";

let chart1 = ref()
let option = ref({})//echarts使用
//没办法不知道为什么v-model:option不显示
let codeView = ref("")//代码预览
let configTree: any = ref(configList)//所有配置
let propsList: { label: string, value: string }[] = []//解析获得的参数
let allCode = ref("")
option.value = {
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  legend: {
    data: ['销量']
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series:
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }

}

onMounted(() => {
  loadProps()
  loadChart1()
  codeView.value = JSON.stringify(option.value)
  genAllCode()
})

watch(codeView, () => {
  option.value = JSON.parse(codeView.value)
  genAllCode()
  loadChart1()
})


// json解析到tree
function loadProps() {
  propsList = []
  getValueByArray(option.value, '')
  propsList.forEach((prop: any) => {
    //将参数进行赋值
    getPropByArray(configTree.value, prop.label.replace('.', ''), prop.value)
  })
}


// tree修改同步到json
function handleInputConfig(value: any, node: any) {
  let path = node.label.split('.')
  setPropByArray(path, option.value, value)

  //更新图标
  loadChart1()
  //更新源码
  codeView.value = JSON.stringify(option.value)
  genAllCode()
}

//递归获取值
function getValueByArray(json: any, node: string) {
  for (const key in json) {
    if (typeof json[key] == "string") {
      propsList.push({label: node + '.' + key, value: json[key]})
    } else if (typeof json[key] == "object") {
      getValueByArray(json[key], node + '.' + key)
    }
  }
}

//递归赋值
function getPropByArray(tree: any, label: string, value: string) {
  for (const config in tree) {
    if (tree[config]["label"] == label) {
      tree[config]["value"] = value
      return
    }
    if (tree[config]["children"]) {
      getPropByArray(tree[config]["children"], label, value)
    }
  }
}

// 递归不如手写
function setPropByArray(path: string[], target: any, value: any) {
  switch (path.length) {
    case 1:
      target[path[0]] = value
      break;
    case 2:
      if (target[path[0]] == undefined) {
        target[path[0]] = {}
      }
      target[path[0]][path[1]] = value;
      break;
    case 3:
      if (target[path[0]] == undefined) {
        target[path[0]] = {}
      }
      if (target[path[0]][path[1]] == undefined) {
        target[path[0]][path[1]] = {}
      }
      target[path[0]][path[1]][path[2]] = value
      break;
    case 4:
      if (target[path[0]] == undefined) {
        target[path[0]] = {}
      }
      if (target[path[0]][path[1]] == undefined) {
        target[path[0]][path[1]] = {}
      }
      if (target[path[0]][path[1]][path[2]] == undefined) {
        target[path[0]][path[1]][path[2]] = {}
      }
      target[path[0]][path[1]][path[2]][path[3]] = value
      break;
    case 5:
      if (target[path[0]] == undefined) {
        target[path[0]] = {}
      }
      if (target[path[0]][path[1]] == undefined) {
        target[path[0]][path[1]] = {}
      }
      if (target[path[0]][path[1]][path[2]] == undefined) {
        target[path[0]][path[1]][path[2]] = {}
      }
      if (target[path[0]][path[1]][path[2]][path[3]] == undefined) {
        target[path[0]][path[1]][path[2]][path[3]] = {}
      }
      target[path[0]][path[1]][path[2]][path[3]] = value
      break;
    case 6:
      if (target[path[0]] == undefined) {
        target[path[0]] = {}
      }
      if (target[path[0]][path[1]] == undefined) {
        target[path[0]][path[1]] = {}
      }
      if (target[path[0]][path[1]][path[2]] == undefined) {
        target[path[0]][path[1]][path[2]] = {}
      }
      if (target[path[0]][path[1]][path[2]][path[3]] == undefined) {
        target[path[0]][path[1]][path[2]][path[3]] = {}
      }
      if (target[path[0]][path[1]][path[2]][path[3]][path[4]] == undefined) {
        target[path[0]][path[1]][path[2]][path[3]][path[4]] = {}
      }
      target[path[0]][path[1]][path[2]][path[3]][path[4]][path[5]] = value
      break;
  }
}

function loadChart1() {
  let myChart = echarts.init(chart1.value);
  myChart.setOption(option.value);
  window.onresize = function () {
    myChart.resize()
  };
}

//生成全部代码
function genAllCode() {
  let code = `<template>
  <div>
    <q-card class="w-[38%] h-full flex justify-center q-pa-md ">
      <div ref="chart1" style="width: 100%;height:400px;"></div>
    </q-card>
  </div>
</template>
<script setup lang="ts">
import * as echarts from 'echarts';
import {onMounted, ref} from "vue";

let chart1 = ref()`
  let code2 = `\nlet option = ref(${codeView.value})\n`
  let code3 = `
onMounted(() => {
  loadChart1()
})

function loadChart1() {
  let myChart = echarts.init(chart1.value);
  myChart.setOption(option.value);
  window.onresize = function () {
    myChart.resize()
  };
}
<\/script>
`
  allCode.value = code + code2 + code3
}
</script>
