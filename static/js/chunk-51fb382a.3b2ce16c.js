(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51fb382a"],{"7c6b":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",[a("el-header",[a("el-button-group",[a("el-button",{attrs:{type:"primary",icon:"el-icon-box"},nativeOn:{click:function(t){return e.saveData(t)}}},[e._v("保存")]),a("el-button",{attrs:{type:"primary",icon:"el-icon-delete",disabled:0===this.selectedData.length},nativeOn:{click:function(t){return e.deleteData(t)}}},[e._v("删除")]),a("el-button",{attrs:{type:"primary",icon:"el-icon-menu"},nativeOn:{click:function(t){return e.toggleExpand(t)}}},[e._v("展开/折叠")])],1),a("el-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入模块或用例名..."},nativeOn:{keyup:function(t){return e.searchEvent(t)}},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1),a("el-main",[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[e._v(e._s(e.caseName))])]),a("el-tabs",{on:{"tab-click":e.tabsClick},model:{value:e.activeIndex,callback:function(t){e.activeIndex=t},expression:"activeIndex"}},e._l(e.moduleData,(function(t,i){return a("el-tab-pane",{key:t.id},[a("span",{attrs:{slot:"label"},slot:"label"},[e._v(e._s(t.moduleName+" ("+t.caseNum+")")+" ")]),a("vxe-table",{ref:"xTree"+i,refInFor:!0,attrs:{"show-overflow":"","tree-config":{children:"children",trigger:"cell"},"edit-config":{trigger:"dblclick",mode:"row"},"checkbox-config":{labelField:"id"},"max-height":"550",data:t.caseData},on:{"checkbox-change":e.selectChangeEvent,"checkbox-all":e.selectChangeEvent}},[a("vxe-table-column",{attrs:{type:"checkbox",title:"编号","min-width":"90px","tree-node":""}}),a("vxe-table-column",{attrs:{field:"title",title:"标题","min-width":"100px","edit-render":{name:"input"}}}),a("vxe-table-column",{attrs:{field:"level",title:"等级/关键字","min-width":"120px","edit-render":{name:"input"}}}),a("vxe-table-column",{attrs:{field:"description","min-width":"140px",title:"用例描述/步骤参数","edit-render":{name:"input"}}}),a("vxe-table-column",{attrs:{field:"author",title:"作者","min-width":"100px","edit-render":{name:"input"}}}),a("vxe-table-column",{attrs:{field:"status",title:"状态","min-width":"80px","edit-render":{enabled:!1}},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("el-tag",{attrs:{type:e._f("statusFilter")(i.status)}},[e._v(" "+e._s(e._f("statusTransferFilter")(i.status))+" ")])]}}],null,!0)}),a("vxe-table-column",{attrs:{title:"操作","min-width":"180px","edit-render":{enabled:!1}},scopedSlots:e._u([{key:"header",fn:function(){return[a("span",[e._v("操作")]),a("i",{staticClass:"el-icon-circle-plus",staticStyle:{"margin-left":"3px",cursor:"pointer"},attrs:{title:"新增用例"},on:{click:function(t){return e.addRow("case")}}})]},proxy:!0},{key:"default",fn:function(t){var i=t.row;return[a("el-button-group",["case"===i.type?a("el-button",{attrs:{title:"新增步骤",size:"small",icon:"el-icon-plus"},nativeOn:{click:function(t){return e.addRow("step")}}},[e._v("新增")]):e._e(),a("el-button",{attrs:{size:"small",icon:"el-icon-edit"},nativeOn:{click:function(t){return e.editRow(i)}}},[e._v("编辑")])],1)]}}],null,!0)})],1)],1)})),1)],1)],1),a("el-dialog",{attrs:{title:(e.caseItemModel.id?"编辑":"新增")+("case"===e.caseItemModel.type?"用例":"步骤"),visible:e.caseItemModalVisible},on:{"update:visible":function(t){e.caseItemModalVisible=t}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{model:e.caseItemModel,"label-position":"left","label-width":"150px"}},[a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{model:{value:e.caseItemModel.title,callback:function(t){e.$set(e.caseItemModel,"title",t)},expression:"caseItemModel.title"}})],1),a("el-form-item",{attrs:{label:"等级/关键字",prop:"level"}},[a("el-input",{model:{value:e.caseItemModel.level,callback:function(t){e.$set(e.caseItemModel,"level",t)},expression:"caseItemModel.level"}})],1),a("el-form-item",{attrs:{label:"用例描述/步骤参数",prop:"description"}},[a("el-input",{model:{value:e.caseItemModel.description,callback:function(t){e.$set(e.caseItemModel,"description",t)},expression:"caseItemModel.description"}})],1),a("el-form-item",{attrs:{label:"作者",prop:"author"}},[a("el-input",{model:{value:e.caseItemModel.author,callback:function(t){e.$set(e.caseItemModel,"author",t)},expression:"caseItemModel.author"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.caseItemModalVisible=!1}}},[e._v(" 取消 ")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.updateData()}}},[e._v(" 确定 ")])],1)],1)],1)},s=[],l=a("c695"),n=a.n(l),o=a("53fe"),c=a.n(o),r={name:"CaseDetail",components:{},filters:{statusFilter(e){const t={success:"success",notStart:"warning",failed:"danger"};return t[e]},statusTransferFilter(e){const t={success:"通过",notStart:"N/A",failed:"失败"};return t[e]}},props:["caseId"],data(){return{searchKey:"",activeIndex:"",caseName:"",moduleData:[],selectedData:[],listLoading:!1,caseItemModalVisible:!1,caseItemModel:{}}},created(){this.getCaseDetail()},methods:{initSortable(){this.$nextTick(()=>{const e=this.$refs["xTree"+this.activeIndex][0];this.setSort(e,this.moduleData[this.activeIndex].caseData)})},getCaseDetail(){this.listLoading=!0,setTimeout(()=>{console.log("详情ID: ",this.caseId),this.caseName="项目一",this.moduleData=[{id:1,moduleName:"模块一",caseNum:"23",caseData:[{id:1,title:"用例1",level:"1",description:"测试用例1",author:"Will",status:"notStart",type:"case",children:[{id:11,title:"步骤1",level:"click",description:"//*[@id='su']",author:"",status:"success",type:"step"},{id:12,title:"步骤2",level:"input",description:"//*[@id='kw'",author:"特斯汀学院",status:"failed",type:"step"}]},{id:2,title:"用例2",level:"2",description:"测试用例12",author:"Will",type:"case",status:"success"},{id:3,title:"用例名",level:"1",description:"测试用例1",author:"Roy",type:"case",status:"failed"},{id:4,title:"用例4",level:"3",description:"测试用例3",author:"Roy",type:"case",status:"notStart",children:[{id:31,title:"步骤3",level:"click",description:"//*[@id='su']",author:"",type:"step",status:"success"},{id:32,title:"步骤4",level:"input",type:"step",description:"//*[@id='kw'",author:"特斯汀学院",status:"failed"}]}]},{id:2,moduleName:"模块二",caseNum:"20",caseData:[{id:100,title:"用例100",level:"12",description:"测试用例100",author:"Will",status:"notStart",type:"case",children:[{id:1011,title:"步骤100",level:"click",description:"//*[@id='su']",type:"step",author:"",status:"success"},{id:1012,title:"步骤102",level:"input",description:"//*[@id='kw'",type:"step",author:"特斯汀学院",status:"failed"}]},{id:102,title:"用例2",level:"2",description:"测试用例12",author:"Will",type:"case",status:"success"},{id:103,title:"用例名",level:"1",description:"测试用例1",author:"Roy",status:"failed",type:"case",children:[{id:1031,title:"步骤300",level:"click",description:"//*[@id='su']",author:"",type:"step",status:"success"},{id:1032,title:"步骤400",level:"input",description:"//*[@id='kw'",author:"特斯汀学院",type:"step",status:"failed"}]},{id:104,title:"用例4",level:"3",description:"测试用例3",type:"case",author:"Roy",status:"notStart"}]}],this.moduleData.forEach(e=>{e.originData=[...e.caseData]}),this.listLoading=!1,this.initSortable()},1e3)},tabsClick(e){console.log("切换Tabs!",e);const t=this.$refs["xTree"+e.index][0];t.reloadData(this.moduleData[e.index].caseData),t.setAllTreeExpand(!0),this.selectedData=[],this.setSort(t,this.moduleData[e.index].caseData)},selectChangeEvent(e){console.log("选中的内容: ",e.records),this.selectedData=[...e.records]},handleSearch(){const e=this.moduleData[this.activeIndex];let t=n.a.toString(this.searchKey).trim();if(t){let a={children:"children"},i=["title"];e.caseData=[...n.a.searchTree(e.originData,e=>i.some(a=>n.a.toString(e[a]).indexOf(t)>-1),a)],this.$nextTick(()=>{this.$refs["xTree"+this.activeIndex][0].setAllTreeExpand(!0)})}else e.caseData=[...e.originData]},searchEvent:n.a.debounce((function(){this.handleSearch()}),500,{leading:!1,trailing:!0}),saveData(){const e=this.$loading({lock:!0,text:"保存中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});setTimeout(()=>{e.close()},2e3),console.log("保存的数据: ",this.moduleData[this.activeIndex])},deleteData(){console.log("删除的数据: ",this.selectedData)},toggleExpand(){const e=this.$refs["xTree"+this.activeIndex][0];e.getTreeExpandRecords().length?e.clearTreeExpand():e.setAllTreeExpand(!0)},setSort(e,t){const a=e.$el.querySelectorAll(".vxe-table--body-wrapper > table > tbody")[0];c.a.create(a,{ghostClass:"sortable-ghost",setData:function(e){e.setData("Text","")},onEnd:({item:a,oldIndex:i})=>{const s={children:"children"},l=a,o=l.parentNode,c=l.previousElementSibling,r=e.getRowNode(l).item,d=n.a.findTree(t,e=>e===r,s);if(c){const a=e.getRowNode(c).item,u=n.a.findTree(t,e=>e===a,s);if(n.a.findTree(r[s.children],e=>a===e,s)){const e=o.children[i];return o.insertBefore(l,e),this.$XModal.message({message:"不允许自己给自己拖动！",status:"error"})}const p=d.items.splice(d.index,1)[0];e.isTreeExpandByRow(a)?a[s.children].splice(0,0,p):u.items.splice(u.index+(d.index<u.index?0:1),0,p)}else{const e=d.items.splice(d.index,1)[0];t.unshift(e)}e.syncData()}})},addRow(e){const t={title:"",level:"",description:"",author:"",type:e};this.caseItemModel=t,this.caseItemModalVisible=!0},editRow(e){this.caseItemModel={...e},this.caseItemModalVisible=!0},updateData(){console.log("调用接口保存变化: ",this.caseItemModel),this.caseItemModalVisible=!1}}},d=r,u=(a("a894"),a("2877")),p=Object(u["a"])(d,i,s,!1,null,"0aea4912",null);t["default"]=p.exports},a894:function(e,t,a){"use strict";a("f211")},f211:function(e,t,a){}}]);