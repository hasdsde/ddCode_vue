<template><div class="q-pa-md" >
    <q-card class="q-pa-md" ><q-btn label="刷新" color="primary" icon="refresh" class=" q-mr-md" ></q-btn>
      
      <q-btn color="secondary" label="新增" icon="add" @click="handleNew" class="q-mr-md" ></q-btn>
      <q-btn color="purple" label="修改" icon="update" @click="handleUpdate" class="q-mr-md" ></q-btn>
      <q-btn color="purple" label="标记删除" icon="delete" @click="handleDeleteSign" class="q-mr-md" ></q-btn>
      <q-btn color="red" label="删除" icon="delete" @click="handleDelete" class="q-mr-md" ></q-btn>
    
</q-card>
    <q-card class="q-mt-md" >
      <q-table :rows="rows" :columns="columns" hide-pagination="" v-model:selected="selected" selection="multiple" row-key="id" :rows-per-page-options="&quot;[10, 20]&quot;" class="" >
        <template v-slot:top="prop" >
          <q-input filled="" dense="" label="搜索内容" class="q-mr-md" ></q-input>
          <q-btn flat="" icon="search" color="primary" class="" ></q-btn>
        </template>
        <template v-slot:bottom="" >
          <span v-if="selected.length > 0" >已选择{{ selected.length }}项</span>
          <q-space ></q-space>
          <span class="q-mr-md" >共{{ page.total }}条</span>
          <div >
            <span class="q-mr-md " >行数 {{ page.pageSize }}
              <q-btn-dropdown color="primary" flat="" label="" size="md" dense="" :ripple="false" >
                <q-list >
                  <q-item clickable="" v-close-popup="" @click="()=>{page.pageSize=10;}" >
                    <q-item-section >
                      <q-item-label >10</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable="" v-close-popup="" @click="()=>{page.pageSize=15;}" >
                    <q-item-section >
                      <q-item-label >15</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable="" v-close-popup="" @click="()=>{page.pageSize=20;}" >
                    <q-item-section >
                      <q-item-label >20</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </span>
          </div>
          <q-pagination v-model="page.currentPage" :max="Math.ceil(page.total/page.pageSize)" input="" @update:model-value="loadPage" >
          </q-pagination>

        </template>
      </q-table>

      <div class="" ></div>
    </q-card>

    <q-dialog v-model="saveDialog" position="right" full-height="" class="" >
      <q-card class="q-pa-sm min-w-[400px]" >
        <q-card-section class="row items-center" >
          <div class="text-h6" >{{ dialogTitle }}</div>
          <q-space class="" ></q-space>
          <q-btn icon="close" flat="" class="" ></q-btn>
        </q-card-section>

        <q-card-section class="q-pa-md" >
          <q-input v-model="saveForm.description" label="描述" placeholder="描述" >
          </q-input>
        </q-card-section>
        <q-card-section class="q-pa-md" >
          <q-input v-model="saveForm.name" label="名称" placeholder="名称" >
          </q-input>
        </q-card-section>
        <q-card-section class="q-pa-md" >
          <q-select :options="[{label:'前端',value:1},{label:'后端',value:2}]" v-model="saveForm.type" clearable="" label="类型" placeholder="类型" >

          </q-select>
        </q-card-section>

        <q-card-section class="text-primary" >
          <div class="row justify-between" >
            <div class="col" >
              <!-- <q-btn color="primary" class="text-left" label="取消" v-close-popup @click="handleCancel" /> -->
              <q-btn flat="" color="red" label="重置" @click="ResetForm(saveForm)" >
              </q-btn>
            </div>
            <div class="col text-right" >
              <q-btn color="primary" label="提交" v-close-popup="" @click="save" >
              </q-btn>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>

</template><script setup lang="ts">
import {ref} from "vue"
import {ResetForm} from "components/utils"

const rows :any = ref([{
  "authorityName": "authorityName0",
  "createdAt": "createdAt0",
  "id": "id0",
  "info": "info0",
  "methodName": "methodName0",
  "userId": "userId0",
  "userName": "userName0"
}, {
  "authorityName": "authorityName1",
  "createdAt": "createdAt1",
  "id": "id1",
  "info": "info1",
  "methodName": "methodName1",
  "userId": "userId1",
  "userName": "userName1"
}]);
const columns :any = [{
  "name": "authorityName",
  "align": "center",
  "required": true,
  "sortable": false,
  "label": "权限名",
  "field": "authorityName"
}, {
  "name": "createdAt",
  "align": "center",
  "required": true,
  "sortable": false,
  "label": "创建时间",
  "field": "createdAt"
}, {
  "name": "id",
  "align": "center",
  "required": true,
  "sortable": false,
  "label": "id",
  "field": "id"
}, {
  "name": "info",
  "align": "center",
  "required": true,
  "sortable": false,
  "label": "详细信息",
  "field": "info"
}, {
  "name": "methodName",
  "align": "center",
  "required": true,
  "sortable": false,
  "label": "方法名",
  "field": "methodName"
}, {
  "name": "userId",
  "align": "center",
  "required": true,
  "sortable": false,
  "label": "用户id",
  "field": "userId"
}, {
  "name": "userName",
  "align": "center",
  "required": true,
  "sortable": false,
  "label": "用户名",
  "field": "userName"
}];
const page :any = ref({
  "currentPage": 1,
  "pageSize": 15,
  "total": 1,
});
const saveDialog :any = ref(false);
const selected :any = ref([]);
const saveForm :any = ref({
  "description": "",
  "id": "",
  "name": "",
  "type": "",
});

function loadPage(){
  
}

function handleUpdate(){
  
}

function handleNew(){
  saveDialog.value = true
}

function handleReset(){
  
}

function save(){
  
}

function handleDeleteSign(){
  
}

function handleDelete(){
  
}

</script>