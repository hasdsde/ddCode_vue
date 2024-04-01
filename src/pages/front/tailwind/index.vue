<!--@formatter:on-->
<template>
  <div class="q-pa-sm flex justify-around h-[95vh]">
    <q-card class="w-[25%] q-pa-md">
      <div>
        <q-btn icon="add" color="primary" flat class="float-right">
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section @click="variableDialog=true">变量</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section @click="functionDialog=true">函数</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section @click="importDialog=true">引入</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-btn-toggle
            v-model="leftTab"
            spread
            class="my-custom-toggle"
            no-caps
            unelevated
            toggle-color="primary"
            color="white"
            text-color="primary"
            :options="[
          {label: '模板', value: 'template'},
          {label: '变量', value: 'vars'},
          {label: '函数', value: 'fun'},
          {label: '引入', value: 'import'},
        ]"
        />
        <q-tab-panels v-model="leftTab" animated>
          <!--     模板     -->
          <q-tab-panel name="template" class="no-padding q-mt-md  ">
            <q-tree
                class="h-[86vh] overflow-y-auto"
                :nodes="codeTree"
                node-key="d_key"
                default-expand-all
                ref="tree"
            >
              <template v-slot:default-header="prop">
                <div class="row items-center ">
                  <q-icon :name="prop.node.icon || 'category'" color="orange" size="28px" class="q-mr-sm"/>
                  <div class="text-weight-bold text-primary">{{ prop.node.label.toString().toUpperCase() }}</div>
                </div>
                <q-space></q-space>
                <div class="float-right">
                  <q-btn flat color="grey" class="q-ml-sm" dense round icon="add"
                         @click.stop="handleNewDialog(prop.node)"/>
                  <q-btn flat color="grey" class="q-ml-sm" dense round icon="edit"
                         @click.stop="handleUpdateDialog(prop.node)"/>
                  <q-btn flat color="grey" class="q-ml-sm" dense round icon="more_horiz" @click.stop="test">
                    <q-menu>
                      <q-list style="min-width: 100px">
                        <q-item clickable v-close-popup>
                          <q-item-section @click="handleCopyDiv(prop.node.d_key)">复制</q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup>
                          <q-item-section @click="handlePasteDivTop(prop.node.d_key)">粘贴(顶)</q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup>
                          <q-item-section @click="handlePasteDivBottom(prop.node.d_key)">粘贴(底)</q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item clickable v-close-popup>
                          <q-item-section @click="handleDeleteDiv(prop.node.d_key)">删除</q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-btn>
                </div>
              </template>

              <template v-slot:default-body="prop">
                <span v-for="(value,key) in prop.node.attr">
                  <q-badge v-if="key=='id'" color="orange" class="q-mr-sm">
                    {{ key + " : " + value }}
                  </q-badge>
                  <q-badge v-else-if="key=='class'" color="primary" class="q-mr-sm">
                    {{ key + " : " + value }}
                  </q-badge>
                  <!--        忽略key          -->
                  <span v-else-if="key=='d_key'" class="q-mr-sm">
                  </span>
                  <q-badge v-else color="secondary" class="q-mr-sm">
                    {{ key + " : " + value }}
                  </q-badge>
                </span>
                <span v-if="prop.node.text!=''" class="text-weight-light text-black">文本：{{ prop.node.text }}</span>

              </template>
            </q-tree>
          </q-tab-panel>

          <!--    变量     -->
          <q-tab-panel name="vars" class="no-padding q-mt-md">
            <!--            radio_button_checked-->
            <q-expansion-item
                class="ellipsis"
                v-for="(item,index) in codeVariable"
                expand-separator
                :icon="item.ref?'motion_photos_on':'radio_button_checked'"
                :label="item.name +' = '+item.value"
                :caption="item.format"
                header-class="text-primary text-bold text-subtitle1"
            >
              <q-card class="no-padding">
                <q-card-section class="q-pa-sm">
                  <div class="flex justify-between">
                    <q-select filled v-model="item.modifier" dense :options="['const','let','var']"
                              class="w-1/4 q-pr-sm"
                              label="修饰符"/>
                    <q-input filled v-model="item.name" dense
                             class="w-1/3 q-pr-sm"
                             label="变量名"/>
                    <q-input filled v-model="item.format" dense :options="['const','let','var']"
                             class="w-1/4 q-pr-sm"
                             label="类型"/>
                    <q-btn icon="close" color="red" round flat class="float-right"
                           @click="handleRemoveVariable(index)"/>
                  </div>
                  <div class="q-mt-md">
                    <q-input filled v-model="item.value" dense class=" q-pr-sm" label="值" autogrow/>
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-tab-panel>

          <!--     函数     -->
          <q-tab-panel name="fun" class="no-padding q-mt-md">
            <q-expansion-item
                v-for="(item,index) in codeFunction"
                expand-separator
                icon="functions"
                :label="`${item.functionName} (${item.paramsStr})`"
                header-class="text-primary text-bold text-subtitle1"
            >
              <q-card>
                <q-card-section class="q-pa-sm">
                  <div>
                    <div class="flex justify-between">
                      <q-input filled v-model="item.functionName" dense
                               class="w-[80%] q-pr-sm"
                               label="名称"/>
                      <q-btn icon="add" color="grey" round flat class="float-right"
                             @click="item.params.push({name:'',type:'any'})"/>
                      <q-btn icon="close" color="red" round flat class="float-right"
                             @click="handleRemoveFunction(index)"/>
                    </div>
                    <div v-for="(param,index) in item.params" class="w-full flex justify-between q-pt-md">
                      <q-input filled v-model="param.name" dense
                               class="w-[45%] q-pr-sm"
                               :label="'形参'+(index+1)"/>
                      <q-select filled v-model="param.type" dense
                                use-input
                                use-chips
                                new-value-mode="add"
                                :options="DataType"
                                class="w-[45%] q-pr-sm"
                                :label="'类型'+(index+1)"/>
                      <q-btn icon="close" color="red" round flat class="float-right"
                             @click="item.params.splice(index)"/>
                    </div>
                  </div>
                  <div class="q-mt-md">
                    <q-input filled v-model="item.body" dense class=" q-pr-sm" label="函数体" autogrow/>
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>

          </q-tab-panel>

          <!--     引入     -->
          <q-tab-panel name="import" class="no-padding q-mt-md">
            <q-expansion-item
                v-for="(item,index) in codeImport"
                expand-separator
                :icon="item.icon"
                :label="`import ${item.icon=='account_tree'?'{':''}${item.items}${item.icon=='account_tree'?'}':''} from ${item.path}`"
                header-class="text-primary text-bold text-subtitle1 "
            >
              <q-card>
                <q-card-section class="q-pa-sm">
                  <div class="flex justify-between">

                    <q-input filled v-model="item.items" dense
                             class="w-[90%]"
                             label="Import"/>
                    <q-btn icon="close" color="red" round flat class="float-right"
                           @click="handleRemoveImport(index)"/>
                  </div>
                  <q-input filled v-model="item.path" dense
                           class="w-full q-pt-md"
                           label="Path"/>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </q-card>
    <q-card class="w-[58%] h-full">
      <q-card-section class="h-full">
        <iframe src="http://localhost:9000/#/template" frameborder="0" class="w-full h-full"/>
      </q-card-section>
    </q-card>
    <q-card class="w-[15%] h-full">
      <q-card-section class="">
        <div class="text-body1 q-pb-md">
          设置
        </div>
        <div class="flex justify-left">
          <q-btn class="q-ma-sm" color="primary" label="拉取" :loading="refresh" @click="getCode"
                 icon="cloud_download"/>
          <q-btn class="q-ma-sm" color="secondary" label="推送" :loading="refresh" @click="uploadCode(sourceCode)"
                 icon="backup"/>
          <q-btn class="q-ma-sm" color="purple" label="生成并推送" :loading="refresh" @click="generateCode"
                 icon="auto_fix_high"/>
        </div>
      </q-card-section>

      <q-card-section>
        <div class="text-body1 q-pb-md flex justify-between items-center">
          <span class="text-md">
            代码预览
          </span>
          <q-toggle
              class="text-sm vertical-top float-right"
              :label="codeEditable"
              color="primary"
              false-value="不可编辑"
              true-value="可编辑"
              v-model="codeEditable"
          />
        </div>
        <q-input
            v-model="sourceCode"
            debounce="1000"
            filled
            autogrow
            type="textarea"
            class="overflow-auto h-[1000px] text-red"
        />
      </q-card-section>
    </q-card>
  </div>
  <!-- 弹窗 -->
  <q-dialog v-model="saveDialog" full-width full-height @hide="handleDialogClose">
    <q-card>
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">{{ saveTitle }}</div>
        <q-space/>
        <q-btn icon="close" flat round dense v-close-popup/>
      </q-card-section>
      <q-card-section class=" justify-around flex ">
        <div class="flex w-1/6 content-center justify-between q-pr-md">
          <q-input filled v-model="currentDivName" readonly dense label="Filled" class="w-2/5 q-mr-sm"/>
          <q-btn color="primary" icon="autorenew" label="更换" class="" @click="divNamDialog = true"/>
          <q-btn color="primary" icon="add" label="属性" outline class="">
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable v-close-popup>
                  <q-item-section @click="variableDialog=true">变量</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section @click="functionDialog=true">函数</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section @click="importDialog=true">引入</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
        <div class="w-5/6">
          <q-select
              label="Css样式"
              filled
              dense
              v-model="currentDivClass"
              use-input
              use-chips
              multiple
              hide-dropdown-icon
              input-debounce="0"
              new-value-mode="add-unique"
          >
            <template v-slot:selected-item="prop">
              <q-chip removable dense
                      @remove="prop.removeAtIndex(prop.index)"
                      color="primary" text-color="white">
                {{ prop.opt }}
                <q-popup-proxy>
                  <q-card class="q-pa-md">
                    <q-input filled v-model="currentDivClass[prop.index]" dense label="修改"/>
                  </q-card>
                </q-popup-proxy>
              </q-chip>
            </template>
          </q-select>
        </div>
        <q-select
            class="w-full q-mt-md"
            label="属性"
            filled
            dense
            v-model="currentDivAttr"
            use-input
            use-chips
            multiple
            hide-dropdown-icon
            input-debounce="0"
            new-value-mode="add-unique"
            @new-value="handleAddDivAttr"
        >
          <template v-slot:selected-item="prop">
            <q-chip removable dense
                    @remove="prop.removeAtIndex(prop.index)"
                    color="primary" text-color="white">
              {{ prop.opt.key }} = {{ prop.opt.value }}
              <q-popup-proxy>
                <q-card class="q-pa-md">
                  <q-input filled v-model="prop.opt.key" dense/>
                  <q-input class="q-mt-sm" filled v-model="prop.opt.value" dense>
                    <template v-slot:append>
                      <q-btn icon="menu" flat class="cursor-pointer">
                        <q-popup-proxy>
                          <div>
                            <q-card class="w-[1000px] flex">
                              <div class="w-1/4 ">
                                <q-banner class="bg-primary text-white text-center text-2xl">
                                  变量
                                </q-banner>
                                <q-list bordered separator class="overflow-y-auto max-h-[400px]">
                                  <q-item clickable v-ripple v-for="vari in codeVariable"
                                          @click="prop.opt.value=vari.name">
                                    <q-item-section>
                                      {{ vari.name }} ({{ vari.format }})
                                    </q-item-section>
                                  </q-item>
                                </q-list>
                              </div>
                              <div class="w-1/4 ">
                                <q-banner class="bg-pink text-white text-center text-2xl">
                                  函数
                                </q-banner>
                                <q-list bordered separator class="overflow-y-auto max-h-[400px]">
                                  <q-item clickable v-ripple v-for="code in codeFunction"
                                          @click="prop.opt.value=code.functionName">
                                    <q-item-section>
                                      {{ code.functionName }}
                                    </q-item-section>
                                  </q-item>
                                </q-list>
                              </div>
                              <div class="w-1/4 ">
                                <q-banner class="bg-purple text-white text-center text-2xl">
                                  颜色
                                </q-banner>
                                <q-list bordered separator class="overflow-y-auto max-h-[400px]">
                                  <q-item clickable v-ripple v-for="code in QuasarColors" @click="prop.opt.value=code">
                                    <q-item-section>
                                      {{ code }}
                                    </q-item-section>
                                  </q-item>
                                </q-list>
                              </div>
                              <div class="w-1/4 ">
                                <q-banner class="bg-green text-white text-center text-2xl ">
                                  大小
                                </q-banner>
                                <q-list bordered separator class="overflow-y-auto max-h-[400px]">
                                  <q-item clickable v-ripple v-for="code in QuasarSize" @click="prop.opt.value=code">
                                    <q-item-section>
                                      {{ code }}
                                    </q-item-section>
                                  </q-item>
                                </q-list>
                              </div>
                            </q-card>
                          </div>
                        </q-popup-proxy>
                      </q-btn>
                    </template>
                  </q-input>
                </q-card>
              </q-popup-proxy>
            </q-chip>
          </template>
        </q-select>
      </q-card-section>
      <q-separator/>
      <q-card-section class="q-pa-md">
        <q-card class="border-2 no-shadow">
          <q-tabs
              v-model="tab"
              class="text-black text-base"
              active-color="primary"
              indicator-color="primary"
              align="justify"
          >
            <q-tab name="css" label="Css样式"/>
            <q-tab name="attribute" label="属性"/>
            <q-tab name="event" label="事件"/>
            <q-tab name="slot" label="插槽"/>
            <q-tab name="methods" label="方法"/>
          </q-tabs>
          <q-separator/>
          <q-tab-panels v-model="tab" animated class="h-[990px] overflow-y-auto ">
            <q-tab-panel name="css" class="q-pa-none h-fit">
              <q-splitter
                  v-model="splitterModel"
                  class="overflow-hidden h-full"
              >
                <template v-slot:before>
                  <q-tabs
                      v-model="cssTab"
                      vertical
                      class="text-primary h-fit"
                  >
                    <q-tab :name="css.name" :label="css.name" v-for="css in cssList"/>
                  </q-tabs>
                </template>

                <template v-slot:after>
                  <q-tab-panels
                      v-model="cssTab"
                      animated
                      transition-prev="slide-down"
                      transition-next="slide-up"
                      class=" min-h-[500px]  overflow-y-auto"
                  >
                    <q-tab-panel :name="css.name" class="flex " v-for="css in cssList">
                      <div v-for="child in css.children" class="w-full flex">
                        <div class="w-full q-mt-md">
                          <span class="text-lg">{{ child.name }}</span>
                          <q-separator/>
                        </div>
                        <q-item tag="label" v-ripple v-for="c in child.children" class="w-1/6 "
                                :style="{backgroundColor:c.desc.indexOf('#')=='0'?c.desc:''}">
                          <q-item-section avatar>
                            <q-checkbox v-model="currentDivClass" :val="c.value" color="orange"/>
                          </q-item-section>
                          <q-item-section>
                            <q-item-label>{{
                                c.value
                              }}
                            </q-item-label>
                            <q-item-label caption>{{ c.desc }}</q-item-label>
                          </q-item-section>
                        </q-item>
                      </div>
                    </q-tab-panel>
                  </q-tab-panels>
                </template>
              </q-splitter>
            </q-tab-panel>
            <q-tab-panel name="attribute">
              <div v-for="tags in tagLists">
                <div v-if="tags.name==currentDivName">
                  <q-item tag="label" v-ripple v-for="(prop,index) in tags.info.props" class="w-full"
                          @click="currentDivAttr.push({key:index,value:''})">
                    <q-item-section avatar>
                      <!--                      <q-checkbox v-model="currentDivAttr" :val="{key:index,value:''}" color="orange"/>-->
                      <q-icon name="add_circle" color="grey" size="sm"/>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>
                        <q-badge rounded color="primary" :label="prop.category" class="text-md q-mr-md float-right"/>
                        <q-badge rounded color="primary" :label="index" class="text-md q-mr-md"/>
                        <q-badge v-if="prop.type!=null" rounded color="orange" :label="prop.type" class="text-md"/>
                      </q-item-label>
                      <q-item-label caption>描述：{{ prop.desc }}</q-item-label>
                      <q-item-label caption v-if="prop.examples!=null">
                        举例：
                        <q-badge outline color="primary" class="q-mr-sm" :label="exp" v-for="exp in prop.examples"
                                 @click.stop="currentDivAttr.push({key:index,value:exp})"/>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
              </div>
            </q-tab-panel>
            <q-tab-panel name="event">
              <div v-for="tags in tagLists">
                <div v-if="tags.name==currentDivName">
                  <q-item tag="label" v-ripple v-for="(prop,index) in tags.info.events" class="w-full"
                          @click="currentDivAttr.push({key:'@'+index,value:''})">
                    <q-item-section avatar>
                      <q-icon name="add_circle" color="grey" size="sm"/>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>
                        <q-badge rounded color="primary" :label="'@'+index" class="text-md q-mr-md"/>
                        <q-badge v-if="prop.type!=null" rounded color="orange" :label="prop.type" class="text-md"/>
                      </q-item-label>
                      <q-item-label caption>描述：{{ prop.desc }}</q-item-label>
                      <q-item-label caption v-if="prop.examples!=null">
                        举例：
                        <q-badge outline color="primary" class="q-mr-sm" :label="exp" v-for="exp in prop.examples"/>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
              </div>
            </q-tab-panel>
            <q-tab-panel name="slot">
              <div v-for="tags in tagLists">
                <div v-if="tags.name==currentDivName">
                  <q-item tag="label" v-ripple v-for="(prop,index) in tags.info.slots" class="w-full "
                          @click="handleAddSlot(index)">
                    <q-item-section avatar>
                      <q-icon name="add" color="grey"/>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>
                        <q-badge rounded color="primary" :label="index" class="text-md q-mr-md"/>
                        <q-badge v-if="prop.type!=null" rounded color="orange" :label="prop.type" class="text-md"/>
                      </q-item-label>
                      <q-item-label caption>描述：{{ prop.desc }}</q-item-label>
                      <q-item-label caption v-if="prop.examples!=null">
                        举例：
                        <q-badge outline color="primary" class="q-mr-sm" :label="exp" v-for="exp in prop.examples"/>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
              </div>
            </q-tab-panel>
            <q-tab-panel name="methods">
              <div v-for="tags in tagLists">
                <div v-if="tags.name==currentDivName">
                  <q-item tag="label" v-ripple v-for="(prop,index) in tags.info.methods" class="w-full ">
                    <q-item-section>
                      <q-item-label>
                        <q-badge rounded color="primary" :label="index" class="text-md q-mr-md"/>
                        <q-badge v-if="prop.type!=null" rounded color="orange" :label="prop.type" class="text-md"/>
                      </q-item-label>
                      <q-item-label caption>描述：{{ prop.desc }}</q-item-label>
                      <q-item-label caption v-if="prop.examples!=null">
                        举例：
                        <q-badge outline color="primary" class="q-mr-sm" :label="exp" v-for="exp in prop.examples"/>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </q-card-section>
    </q-card>
  </q-dialog>
  <q-dialog v-model="divNamDialog">
    <q-card class="w-3/5 h-2/3 q-pa-sm">
      <q-card-section class="no-padding">
        <q-input outlined v-model="tagSearch" @update:model-value="handleFilter" label="搜索" class="q-my-md"
                 debounce="400"/>
        <q-list bordered separator class="overflow-y-scroll h-[730px]">
          <q-item clickable v-ripple v-for="item in tagList" @click="handleChangeDivName(item.name)">
            <q-item-section>{{ item.name }}
            </q-item-section>
            <q-item-label caption>{{ item.desc }}</q-item-label>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-dialog>
  <q-dialog v-model="variableDialog">
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">新增变量</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-select v-model="variableForm.modifier" :options="['const','let','var']" autofocus outlined
                  label="修饰符"/>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input v-model="variableForm.name" outlined label="变量名"/>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-select v-model="variableForm.format" use-chips :options="DataType" use-input
                  new-value-mode="add"
                  outlined label="类型"/>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input v-model="variableForm.value" outlined label="值"/>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="确定" v-close-popup @click="handleAddVariable"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
  <q-dialog v-model="functionDialog">
    <q-card class="min-w-[550px]">
      <q-card-section>
        <div class="text-h6">新增函数</div>
      </q-card-section>

      <q-card-section class="q-pa-sm">

        <div class="flex justify-between">
          <q-input outlined v-model="functionForm.functionName"
                   class="w-[90%] q-pr-sm"
                   label="名称"/>
          <q-btn icon="add" color="grey" round flat class="float-right"
                 @click="functionForm.params.push({name:'',type:'any'})"/>
        </div>
        <div v-for="(param,index) in functionForm.params" class="w-full flex justify-between q-pt-md">
          <q-input outlined v-model="param.name"
                   class="w-[45%] q-pr-sm"
                   :label="'形参'+(index+1)"/>
          <q-select outlined v-model="param.type"
                    use-input
                    use-chips
                    new-value-mode="add"
                    :options="DataType"
                    class="w-[45%] q-pr-sm"
                    :label="'类型'+(index+1)"/>
          <q-btn icon="close" color="red" round flat class="float-right"
                 @click="functionForm.params.splice(index)"/>
        </div>
        <div class="q-mt-md">
          <q-input outlined v-model="functionForm.body" class=" q-pr-sm" label="函数体" autogrow/>
        </div>
      </q-card-section>
      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="确定" v-close-popup @click="handleAddFunction"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
  <q-dialog v-model="importDialog">
    <q-card class="min-w-[550px]">
      <q-card-section>
        <div class="text-h6">新增引入</div>
      </q-card-section>

      <q-card-section class="q-pa-sm">

        <div class="flex justify-between">
          <q-input outlined v-model="importFrom.items"
                   class="w-full q-pr-sm"
                   label="引入"/>
        </div>
        <q-toggle
            label="部分引入 (是否带{})"
            color="primary"
            false-value="streetview"
            true-value="account_tree"
            v-model="importFrom.icon"
        />
        <div class="q-mt-md">
          <q-input outlined v-model="importFrom.path" class=" q-pr-sm" label="位置" autogrow/>
        </div>
      </q-card-section>
      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="确定" v-close-popup @click="handleAddImport"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script lang="ts" setup>
import cheerio, {AnyNode, Cheerio, CheerioAPI} from 'cheerio';
import {ref, toRaw, watch} from "vue";
import axios from "axios";
import {CommonFail, CommonGroupFastSuccess, CommonSuccess, DialogConfirm} from "components/dialog";
import {CssList, DataType, QuasarColors, QuasarSize, tagLists} from "pages/front/tailwind/struct";
import {QTreeNode} from "quasar/dist/types/api/qtree";
import {Ref, UnwrapRef} from "@vue/reactivity";

const leftTab = ref('template') //选项卡
const codeEditable = ref('可编辑')
const refresh = ref(false)//刷新
let d_key: number = 0 //代码树的唯一id
let $: CheerioAPI = cheerio.load('')
const tree: any = ref(null)

const sourceCode = ref<string>("")
const codeTree: Ref<UnwrapRef<QTreeNode>> = ref([]) //代码树
const codeVariable: any = ref([])
const codeFunction: any = ref([])
const codeImport: any = ref([])

watch(sourceCode, (n, o) => {
  if (o == null) {
    return
  }
  uploadCode(sourceCode.value)
}, {immediate: false})


getCode()

// 下载代码
function getCode() {
  refresh.value = true
  axios.get("/twc/get", {timeout: 2000}).then((res: any) => {
    sourceCode.value = res.data
    parseTemplateTree(res.data)
    getScript(res.data)
    refresh.value = false

    setTimeout(() => {
      tree.value.expandAll()
    }, 500)
  }).catch((e) => {
    CommonFail("错误：" + e.message)
  })
}

// 上传代码
function uploadCode(htmlString: string) {
  let data = new FormData;
  data.set("file", toRaw(htmlString))
  axios.post("/twc/upload", data, {timeout: 2000}).then((res: any) => {
    if (res.status == 200) {
      CommonGroupFastSuccess("更新已完成")
      getCode()
    }
  }).catch((e) => {
    CommonFail("错误：" + e.message)
  })
}

// 解析模板树
function parseTemplateTree(sourceCode: string) {
  const regex = /(?<=<template>)([\s\S]*)(?=<\/template>)/g
  const match = sourceCode.match(regex) as RegExpMatchArray
  //解决template问题
  match[0] = match[0].replaceAll("<template", "<templates").replaceAll("<\/template>", "<\/templates>")
  $ = cheerio.load(match[0]);
  const template = $('body')
  codeTree.value = []
  cycleGetNode(template.children(), codeTree.value)
}

// 循环获取节点
function cycleGetNode(node: Cheerio<AnyNode>, codeTree: any) {
  $(node).attr("d_key", String(d_key += 1))
  codeTree.push({
        //@ts-ignore
        label: $(node).get(0).name,
        attr: $(node).attr(),
        children: [],
        d_key: d_key,
        //@ts-ignore
        icon: $(node).get(0).name == "div" ? 'folder' : 'category',
        text: $(node).children().length == 0 ? $(node).text().replaceAll("\n", "").replaceAll(" ", "") : ''
      }
  )
  $(node).children().map((i, el) => {
    cycleGetNode($(el), codeTree[codeTree.length - 1].children)
  })
}


//解析代码
function getScript(sourceCode: string) {
  const regex = /<script([\s\S]*?)<\/script>/
  const match = sourceCode.match(regex) as RegExpMatchArray
  parseVariables(match[0])
  parseFunction(match[0])
  parseImports(match[0])
}

// 解析变量
function parseVariables(sourceCode: string) {
  codeVariable.value = []
  const regex = /(const|let|var)\s+(\w+)\s*:\s*(\w+)\s*=\s*([^;]+);/g
  let match = sourceCode.match(regex);
  while ((match = regex.exec(sourceCode)) !== null) {
    const modifier = match[1];
    const variableName = match[2];
    const format = match[3];
    const value = match[4];

    codeVariable.value.push({
      name: variableName,
      modifier: modifier,
      format: format,
      value: value,
      ref: value.includes("ref")
    });
  }
}

// 解析函数
function parseFunction(sourceCode: string) {
  codeFunction.value = []
  const regex = /function\s+(\w+)\s*\(([^)]*)\)\s*{([\s\S]*?)}/g;
  let match;
  while ((match = regex.exec(sourceCode)) !== null) {
    const functionName = match[1];
    let params: any = []
    let paramsStr = ""
    if (match[2] != "") {
      params = match[2].split(',').map(param => {
        const split = param.split(":");
        paramsStr += `${split[0]}:${split[1]},`
        return {name: split[0], type: split[1]}
      });
    }
    const body = match[3].trim()
    //去掉结尾逗号
    const i = paramsStr.lastIndexOf(",")
    if (i) {
      paramsStr = paramsStr.slice(0, i)
    }
    codeFunction.value.push({functionName, params, paramsStr, body});
  }
}

// 解析引入
function parseImports(sourceCode: string) {
  codeImport.value = []
  let regex = /import\s+{([^}]*)}\s+from\s+"([^"]+)"/g;
  let match;
  while ((match = regex.exec(sourceCode)) !== null) {
    const items = match[1].split(',').map(item => item.trim());
    const path = match[2];
    codeImport.value.push({origin: match[0], items: items, path: path, icon: 'account_tree'});
  }
  regex = /import\s+(\w+)\s+from\s+"([^"]+)"/g;
  while ((match = regex.exec(sourceCode)) !== null) {
    const items = match[1];
    const path = match[2];
    codeImport.value.push({origin: match[0], items: items, path: path, icon: 'streetview'});
  }
}


// 添加弹窗
const saveDialog = ref(false)
const saveTitle = ref('新增')
const variableDialog = ref(false)
const functionDialog = ref(false)
const importDialog = ref(false)
// 弹窗Form
const variableForm = ref({
  name: "",
  modifier: "const",
  format: "any",
  value: ""
})
const functionForm = ref({
  functionName: "",
  params: [],
  paramsStr: [],
  body: ""
})
const importFrom = ref({
  origin: "",
  items: "",
  path: "",
  icon: "streetview"
})
const cssList = CssList
const currentNode: Ref<UnwrapRef<QTreeNode>> = ref({})
const currentDivClass: any = ref([])
const currentDivAttr: any = ref([])
const currentDivName = ref<string>("")
//选卡
const tab = ref('css')
const cssTab = ref(cssList[0].name)
const splitterModel = ref(15)
const divNamDialog = ref(false)

let tagList = ref(tagLists)
const tagSearch = ref("")

// 更换标签名称
function handleChangeDivName(name: string) {
  const selector = $(`[d_key = ${currentNode.value.d_key}]`)
  const clone = selector.clone().wrap('<div>').parent()
  clone.children()[0].name = name.toString()
  selector.replaceWith(clone.html() as string);
  currentDivName.value = name
  divNamDialog.value = false
}

//重写方法
function handleAddDivAttr(inputValue: string, doneFn: Function) {
  const value = inputValue.split("=")
  currentDivAttr.value.push({key: value[0], value: value[1]})
  doneFn()
}

function handleFilter() {
  tagList.value = tagLists.filter((item: any) => {
    return item.name.includes(tagSearch.value.toLowerCase()) || item.desc.includes(tagSearch.value.toLowerCase())
  })
}

function handleNewDialog(node: QTreeNode) {
  saveTitle.value = "新增"
  d_key = d_key + 1
  const element = `\n<div d_key="${d_key}"></div>`
  $(`[d_key = ${node.d_key}]`).append(element)
  saveDialog.value = true
  currentDivName.value = "div"
  currentDivAttr.value = []
  currentDivClass.value = []
  divNamDialog.value = true
  currentNode.value = {
    attr: [],
    children: [],
    d_key: d_key,
    icon: "category",
    label: "div",
    text: ""
  }
}

function handleUpdateDialog(node: QTreeNode) {
  currentNode.value = node
  resolveForm(node)
  saveTitle.value = "修改"
  saveDialog.value = true
}

// 添加插槽
function handleAddSlot(name: any) {
  const element = `\n<template v-slot:${name}="prop"></template>`
  $(`[d_key = ${currentNode.value.d_key}]`).prepend(element)
  saveDialog.value = false
}

// 解析到dialog
function resolveForm(node: QTreeNode) {
  currentDivName.value = node.label?.toString() as string
  currentDivClass.value = node.attr.class != null ? node.attr.class.split(" ") : []
  currentDivAttr.value = []
  for (const a in node.attr) {
    if (a != 'class' && a != 'd_key') {
      currentDivAttr.value.push({key: a, value: node.attr[a]})
    }
  }
}

// 关闭时传输给消息
function handleDialogClose() {
  const current = $(`[d_key = ${currentNode.value.d_key}]`)
  // 清除旧的attr
  for (const attr in current.attr()) {
    current.removeAttr(attr)
  }
  // 增加新的
  const newAttrs = currentDivAttr.value
  for (const attr in newAttrs) {
    current.attr(newAttrs[attr].key, newAttrs[attr].value)
  }
  current.attr('class', currentDivClass.value.toString().replaceAll(',', ' '))
  generateCode()
}

function generateCode() {
  let template = ""
  let variable = ""
  codeVariable.value.forEach((code: { format: string, modifier: string, name: string, ref: string, value: string }) => {
    let v = code.modifier + " " + code.name
    if (code.format == null) {
      // v += ":any"
    } else {
      v += " :" + code.format
    }
    v += " = " + code.value
    variable = variable + v + ";\n"
  })

  let imports = ""
  codeImport.value.forEach((im: { items: string | string[], path: string, icon: string }) => {
    let i = "import "
    if (im.icon == 'account_tree') {
      i += '{' + im.items.toString() + '}'
    } else {
      i += im.items.toString()
    }
    i += ' from "' + im.path + '"\n'
    imports += i
  })

  let functions = ""
  codeFunction.value.forEach((func: {
    body: string,
    functionName: string,
    params: { name: string, type: string }[]
  }) => {
    let fun: string = "function " + func.functionName
    if (func.params.length == 0) {
      fun += '()'
    } else {
      fun += '('
      func.params.forEach(item => {
        if (item.type == null) {
          fun += item.name
          fun += ": any" + ","
        } else {
          fun += item.name
          fun += ":" + item.type + ","
        }
      })
      fun = removeLastComma(fun)
      fun += ')'
    }
    fun += "{\n  " + func.body + "\n}\n\n"
    functions += fun
  })
  // 解决template不识别问题
  const htmlCode = $('body').html()?.toString().replaceAll('<templates', '<template').replaceAll('</templates>', '</template>')
  template += "<template>" + htmlCode + "</template>"
  template += `<script setup lang="ts">`
  template += "\n" + imports + "\n"
  template += variable + "\n"
  template += functions
  template += '<\/script>'
  template = template.replaceAll(/d_key="\d+"/g, '')
  uploadCode(template)
}

//删除最后一个逗号
function removeLastComma(str: string) {
  if (str.lastIndexOf(',') === -1) {
    return str;
  } else {
    return str.substring(0, str.lastIndexOf(',')) + str.substring(str.lastIndexOf(',') + 1);
  }
}

// 新增变量引入函数的增删改查
function handleAddVariable() {
  const form = {
    name: variableForm.value.name,
    value: variableForm.value.value,
    modifier: variableForm.value.modifier,
    format: variableForm.value.format
  }
  codeVariable.value.push(form)
  variableForm.value.name = ""
  variableForm.value.value = ""
}

function handleAddImport() {
  const form = {
    origin: importFrom.value.origin,
    items: importFrom.value.items,
    path: importFrom.value.path,
    icon: importFrom.value.icon
  }
  codeImport.value.push(form)
  importFrom.value.origin = ""
  importFrom.value.items = ""
  importFrom.value.path = ""
  importFrom.value.icon = "streetview"
}

// 新增函数
function handleAddFunction() {
  const form = {
    functionName: functionForm.value.functionName,
    params: functionForm.value.params,
    paramsStr: functionForm.value.paramsStr,
    body: functionForm.value.body
  }
  codeFunction.value.push(form)
  functionForm.value.functionName = ""
  functionForm.value.params = []
  functionForm.value.paramsStr = []
  functionForm.value.body = ""
}

function handleRemoveVariable(index: any) {
  DialogConfirm("确定要删除吗").onOk(() => {
    codeVariable.value.splice(index, 1)
  })
}

function handleRemoveImport(index: any) {
  DialogConfirm("确定要删除吗").onOk(() => {
    codeImport.value.splice(index, 1)
  })
}

function handleRemoveFunction(index: any) {
  DialogConfirm("确定要删除吗").onOk(() => {
    codeFunction.value.splice(index, 1)
  })
}

let copyBoard: any

// 复制粘贴删除
function handleCopyDiv(index: number) {
  copyBoard = $(`[d_key = ${index}]`).clone()
  CommonSuccess("已复制")
}

function handlePasteDivTop(index: number) {
  $(`[d_key = ${index}]`).prepend(copyBoard)
  CommonSuccess("已粘贴")
  generateCode()
}

function handlePasteDivBottom(index: number) {
  $(`[d_key = ${index}]`).append(copyBoard)
  CommonSuccess("已粘贴")
  generateCode()

}

function handleDeleteDiv(index: number) {
  DialogConfirm("确定要删除吗").onOk(() => {
    $(`[d_key = ${index}]`).remove()
    CommonSuccess("已删除")
    generateCode()
  })
}

function test() {

}
</script>
<style lang="sass" scoped>
.my-custom-toggle
  border: 1px solid #027be3
</style>
