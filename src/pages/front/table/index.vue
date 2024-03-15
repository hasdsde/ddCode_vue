<template>
  <div class="q-pa-md">
    <q-card class="q-mb-md q-pa-md">
      <q-select filled dense class="inline w-[200px] q-pr-md  align-middle" v-model="currentTable" :options="allTables"
        label="选择对象" option-label="title" @update:model-value="handleTablesUpdate" />
      <q-btn color="primary" class="col q-mr-md" label="重新获取" icon="refresh" @click="loadPage" />
    </q-card>

    <q-card class="q-pa-md q-mt-md">
      <q-expansion-item switch-toggle-side label="Table表格" :header-style="{ fontSize: 'large' }"
        class="rounded-borders">
        <q-card>
          <q-card-section class="q-pa-sm">
            <q-btn flat color="primary" class="q-mr-md" label="新增行" @click="handleNewTableLine" />
            <q-btn flat color="primary" class="q-mr-md" label="保存表单到剪切板" @click="handleTableForm" />
            <q-btn flat color="primary" class="q-mr-md" label="生成示例数据" @click="handleTableFormData" />
          </q-card-section>
          <q-separator />
          <q-card-section class="q-pb-none">
            <div class="row justify-center">
              <q-space class="w-[200px]" />
              <div class="col text-subtitle1" v-for="item in tableList">
                {{ item.label }}
                ({{ item.name }})
              </div>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="row justify-between" v-for="(table, tableKey) in tableForm" :key="tableKey">
              <div class="q-mt-md w-[200px] flex justify-around">
                <q-btn flat round color="grey" dense icon="vertical_align_top"
                  @click="handleTop(tableForm, tableKey)" />
                <q-btn flat round color="grey" dense icon="arrow_upward" @click="handleUp(tableForm, tableKey)" />
                <q-btn flat round color="grey" dense icon="arrow_downward" @click="handleDown(tableForm, tableKey)" />
                <q-btn flat round color="red" dense icon="close" @click="handleDelete(tableForm, tableKey)" />
              </div>
              <div class="col q-pr-sm " v-for="(item, itemKey) in tableList">
                <q-input filled v-if="item.type === 'string'" class="q-mt-md" dense v-model="table[item.name]" />
                <q-select filled v-if="item.type === 'select'" :options="item.options" class="q-mt-md" dense
                  v-model="table[item.name]" />
                <q-toggle class="q-mt-md bg-grey-3 w-full text-center" v-if="item.type === 'boolean'"
                  v-model="table[item.name]" />
                <q-select class="q-mt-md" v-if="item.type === 'option'" dense filled v-model="table[item.name]"
                  use-input use-chips multiple hide-dropdown-icon input-debounce="0" new-value-mode="add-unique" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-card>

    <q-card class="q-pa-md q-mt-md">
      <q-expansion-item switch-toggle-side label="查询表单" :header-style="{ fontSize: 'large' }" class="rounded-borders">
        <q-separator />
        <q-card>
          <q-card-section class="q-pa-sm">
            <q-btn flat color="primary" class="q-mr-md" label="新增行" @click="handleNewQueryLine" />
            <q-btn flat color="primary" class="q-mr-md" label="保存表单到剪切板" @click="handleQueryForm" />
            <q-btn flat color="primary" class="q-mr-md" label="复制分页变量Page" @click="handleCopyPage" />
          </q-card-section>
          <q-card-section class="q-pb-none">
            <div class="row justify-center">
              <q-space class="w-[200px]" />
              <div class="col text-subtitle1" v-for="item in queryList">
                {{ item.label }}
                ({{ item.name }})
              </div>
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <div class="row justify-between" v-for="(form, formKey) in queryForm" :key="formKey">
              <div class="q-mt-md w-[200px] flex justify-around">
                <q-btn flat round color="grey" dense icon="vertical_align_top" @click="handleTop(queryForm, formKey)" />
                <q-btn flat round color="grey" dense icon="arrow_upward" @click="handleUp(queryForm, formKey)" />
                <q-btn flat round color="grey" dense icon="arrow_downward" @click="handleDown(queryForm, formKey)" />
                <q-btn flat round color="red" dense icon="close" @click="handleDelete(queryForm, formKey)" />
              </div>
              <div class="col q-pr-sm " v-for="(item, itemKey) in queryList">
                <q-input filled class="q-mt-md" dense v-model="form[item.name]" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-card>

    <q-card class="q-pa-md q-mt-md">
      <q-expansion-item switch-toggle-side label="新增/保存表单" :header-style="{ fontSize: 'large' }"
        class="rounded-borders">
        <q-separator />
        <q-card>
          <q-card-section class="q-pa-sm">
            <q-btn flat color="primary" class="q-mr-md" label="新增行" @click="handleNewSaveLine" />
            <q-btn flat color="primary" class="q-mr-md" label="保存表单到剪切板" @click="handleSaveForm" />
            <q-btn flat color="primary" class="q-mr-md" label="保存表单dialog到剪切板" @click="handleSaveFormDialog" />
          </q-card-section>
          <q-card-section class="q-pb-none">
            <div class="row justify-center">
              <q-space class="w-[200px]" />
              <div class="col text-subtitle1" v-for="item in saveList">
                {{ item.label }}
                ({{ item.name }})
              </div>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="row justify-between" v-for="(form, tableKey) in saveForm" :key="tableKey">
              <div class="q-mt-md w-[200px] flex justify-around">
                <q-btn flat round color="grey" dense icon="vertical_align_top" @click="handleTop(saveForm, tableKey)" />
                <q-btn flat round color="grey" dense icon="arrow_upward" @click="handleUp(saveForm, tableKey)" />
                <q-btn flat round color="grey" dense icon="arrow_downward" @click="handleDown(saveForm, tableKey)" />
                <q-btn flat round color="red" dense icon="close" @click="handleDelete(saveForm, tableKey)" />
              </div>
              <div class="col q-pr-sm " v-for="(item, itemKey) in saveList">
                <q-input filled v-if="item.type === 'string'" class="q-mt-md" dense v-model="form[item.name]" />
                <q-select filled v-if="item.type === 'select'" :options="item.options" class="q-mt-md" dense
                  v-model="form[item.name]" />
                <q-toggle class="q-mt-md bg-grey-3 w-full text-center" v-if="item.type === 'boolean'"
                  v-model="form[item.name]" />
                <q-select class="q-mt-md" v-if="item.type === 'option'" dense filled v-model="form[item.name]" use-input
                  use-chips multiple hide-dropdown-icon input-debounce="0" new-value-mode="add-unique" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-card>
  </div>
</template>
<script setup lang="ts">
import { api } from 'src/boot/axios';
import { CommonWarn, DialogPrompt } from 'src/components/dialog';
import { ref, toRaw } from 'vue';
import { CopyToClickBoard } from "components/utils";
// TODO:可以导入数据然后做修改
// TODO:可以导出到WebSocket
// TODO:可以新增或删除行和列

// 来自Swagger的数据
const allTables = ref<any[]>([])
const currentTable = ref<any[]>([])
// 表格行
const tableForm: any = ref([])
const queryForm: any = ref([])
const saveForm: any = ref([])
loadPage()

function loadPage() {
  api.get('/v2/api-docs').then((res: any) => {
    for (const key in res.definitions) {
      allTables.value.push(res.definitions[key])
    }
    // 默认选择第一个
    if (currentTable.value.length == 0) {
      currentTable.value = allTables.value[0]
      handleTablesUpdate(allTables.value[0])
    }
  })
}

// 在选择的对象改变时，修改数据
function handleTablesUpdate(table: any) {
  // 传输表格数据
  tableForm.value = []
  queryForm.value = []
  saveForm.value = []
  for (const key in table.properties) {
    tableForm.value.push({
      name: key,
      align: 'center',
      required: false,
      sortable: false,
      label: table.properties[key].description == null ? key : table.properties[key].description,
      field: key,
    })
    saveForm.value.push({
      name: key,
      label: table.properties[key].description == null ? key : table.properties[key].description,
      type: "string",
      placeholder: table.properties[key].description == null ? key : table.properties[key].description,
      rules: "",
      readonly: false,
      disable: false,
      clearable: false,
      new: true,
      update: true,
      option: [],
      defaultValue: ""
    })
  }
  queryForm.value.push(
    { name: "id", default: "" },
    { name: "name", default: "" },
    { name: "currentPage", default: "1" },
    { name: "pageSize", default: "10" },
  )
}

function building() {
  CommonWarn("稍后开发")
}

function handleNewQueryLine() {
  queryForm.value.public({
    name: "",
    default: "",
  })
}

function handleNewSaveLine() {
  saveForm.value.push({
    name: "",
    label: "",
    type: "string",
    placeholder: "",
    rules: "",
    readonly: false,
    disable: false,
    clearable: false,
    new: true,
    update: true,
    option: [],
    defaultValue: ""
  })
}

//表格数据保存表单到剪切板
function handleTableForm() {
  const code = JSON.stringify(toRaw(tableForm.value))
  DialogPrompt("输入", "变量名称", "columns").onOk((val: string) => {
    CopyToClickBoard("const " + val + ":any = " + code + ";")
  })
}

// 生成示例数据
function handleTableFormData() {
  const data: any = []
  for (let i = 0; i < 2; i++) {
    const signalData: any = {}
    tableForm.value.forEach((item: any) => {
      signalData[item.name] = item.name + i
    })
    data.push(signalData)
  }
  DialogPrompt("输入", "变量名称", "rows").onOk((val: string) => {
    CopyToClickBoard(`const ${val} :any = ref(${JSON.stringify(data)});`)
  })
}

function handleQueryForm() {
  let code: any = {}
  queryForm.value.forEach((item: any) => {
    code[item.name] = item.default
  })
  code = JSON.stringify(toRaw(code))
  DialogPrompt("输入", "变量名称", "queryForm").onOk((val: string) => {
    CopyToClickBoard("const " + val + ":any = ref(" + code + ");")
  })
}

function handleSaveForm() {
  let code: any = {}
  saveForm.value.forEach((item: any) => {
    code[item.name] = item.defaultValue
  })
  code = JSON.stringify(toRaw(code))
  DialogPrompt("输入", "变量名称", "saveForm").onOk((val: string) => {
    CopyToClickBoard("const " + val + ":any = ref(" + code + ");")
  })
}

function handleNewTableLine() {
  tableForm.value.push({
    name: "",
    align: 'center',
    required: true,
    sortable: false,
    label: "",
    field: "",
  })
}

function handleTop(form: any, tableKey: any) {
  const temp = form[tableKey]
  form.splice(tableKey, 1)
  form.unshift(temp)
}

function handleUp(form: any, tableKey: any) {
  if (tableKey == 0) {
    return
  }
  const temp = form[tableKey - 1]
  form[tableKey - 1] = form[tableKey]
  form[tableKey] = temp
}

function handleDown(form: any, tableKey: any) {
  if (tableKey == form.length - 1) {
    return
  }
  const temp = form[tableKey + 1]
  form[tableKey + 1] = form[tableKey]
  form[tableKey] = temp
}

function handleDelete(form: any, tableKey: any) {
  form.splice(tableKey, 1)
}

function handleCopyPage() {
  CopyToClickBoard(
    `const page = ref({
  currentPage: 1,
  pageSize: 15,
  total: 1
});`)
}

function handleSaveFormDialog() {
  DialogPrompt("输入", "变量名称", "saveForm").onOk((val: string) => {
    let AllCode = ``
    saveForm.value.forEach((item: any, index: any) => {
      let currentItem = `  <q-card-section class="q-pa-md"`
      if (item.new && !item.update) {
        currentItem += ` v-if="title=='新增'"`
      }
      if (!item.new && item.update) {
        currentItem += ` v-if="title=='修改'"`
      }
      if (!item.new && !item.update) {
        return
      }
      currentItem += `>\n`
      if (item.option != 0) {
        currentItem += `    <q-select :options="[${item.option}]"`
      } else {
        currentItem += `    <q-input `
      }
      currentItem += ` v-model="${val}.${item.name}" `

      if (item.clearable) {
        currentItem += ' clearable '
      }
      if (item.rules != "") {
        currentItem += `<q-select :rules="${item.option}"`
      }
      if (item.disable) {
        currentItem += ' disable '
      }
      if (item.label) {
        currentItem += ` label="${item.label}" `
      }
      if (item.readonly) {
        currentItem += ` readonly="${item.readonly}" `
      }
      if (item.placeholder) {
        currentItem += ` placeholder="${item.placeholder}" `
      }
      currentItem += ` />\n`
      currentItem += `  </q-card-section>\n`
      AllCode += currentItem
    })
    CopyToClickBoard(AllCode)
  })
}

// 表格列
const tableList: any = ref([
  { label: '唯一标识', name: 'name', type: 'string' },
  { label: '显示名称', name: 'label', type: 'string' },
  { label: '数据名称', name: 'field', type: 'string' },
  { label: '对齐', name: 'align', type: 'select', options: ['left', 'right', 'center'] },
  { label: '列可见性', name: 'required', type: 'boolean' },
  { label: '排序开关', name: 'sortable', type: 'boolean' },

])
const queryList: any = ref([
  { label: '名称', name: "name" },
  { label: '默认值', name: "default" }
])
const saveList: any = ref([
  { label: '唯一标识', name: 'name', type: 'string' },
  { label: '名称', name: 'label', type: 'string' },
  { label: '表单类型', name: 'type', type: 'select', option: ['string', 'number', 'boolean', 'time', 'select'] },
  { label: '提示', name: 'placeholder', type: 'string' },
  { label: '规则', name: 'rules', type: 'string' },
  { label: '只读', name: 'readonly', type: 'boolean' },
  { label: '不可用', name: 'disable', type: 'boolean' },
  { label: '新增表单Form', name: 'new', type: 'boolean' },
  { label: '更新表单Form', name: 'update', type: 'boolean' },
  { label: '带删除按钮', name: 'clearable', type: 'boolean' },
  { label: '选项内容', name: 'option', type: 'option' },
  { label: '默认值', name: 'defaultValue', type: 'string' },
])

</script>
