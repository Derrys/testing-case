(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d0d7984"],{"022c":function(t,e,a){},"173d":function(t,e,a){"use strict";a("022c")},"48ee":function(t,e,a){"use strict";a("f62d")},"4a81":function(t,e,a){"use strict";a("76d5")},"76d5":function(t,e,a){},a6fe:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-wrap"},[t.showAdd?a("el-card",{staticClass:"box-card card-add",attrs:{shadow:"hover"},nativeOn:{click:function(e){return t.add()}}},[a("div",{staticClass:"card-add-content"},[a("i",{staticClass:"el-icon-circle-plus-outline"})])]):t._e(),t._l(t.cardList,(function(e){return a("el-card",{key:e.id,class:["box-card",{active:e.active}],attrs:{shadow:e.active?"always":"hover"},nativeOn:{click:function(a){return t.selectCard(a,e)}}},[a("div",{class:["card-status",e.status]}),a("div",{staticClass:"card-header"},[a("img",{attrs:{width:"100px",height:"60px",src:e.img}}),a("div",{staticClass:"header-text"},[a("div",{staticClass:"title",attrs:{title:e.name}},[t._v(t._s(e.name))]),a("span",{attrs:{title:e.description}},[t._v(t._s(e.description))])])]),a("div",{staticClass:"card-content"},[a("span",[t._v("模块数:")]),t._v(" "+t._s(e.moduleNum)+" ")]),a("div",{staticClass:"card-content"},[a("span",[t._v("用例数:")]),t._v(" "+t._s(e.caseNum)+" ")]),a("div",{class:["card-footer",{"card-result-footer":"result"===t.type}]},["result"===t.type?a("div",[a("icon-button",{staticStyle:{"margin-left":"15px"},attrs:{icon:"el-icon-view",tips:"查看详细结果"},nativeOn:{click:function(a){return t.operate("view",e)}}})],1):[a("icon-button",{attrs:{icon:"el-icon-edit",tips:"编辑"},nativeOn:{click:function(a){return t.operate("edit",e)}}}),a("icon-button",{attrs:{icon:"el-icon-delete",tips:"删除"},nativeOn:{click:function(a){return t.operate("delete",e)}}}),a("icon-button",{attrs:{icon:"el-icon-s-promotion",tips:"运行"},nativeOn:{click:function(a){return t.operate("run",e)}}}),a("icon-button",{attrs:{icon:"el-icon-edit-outline",tips:"编辑详细用例"},nativeOn:{click:function(a){return t.operate("editDetail",e)}}})]],2)])}))],2)},c=[],i=a("fbd1"),s={name:"ProjectCard",components:{IconButton:i["a"]},props:{showAdd:{type:Boolean,default:!0},type:{type:String,default:"case"}},data(){return{cardList:[{id:"1",name:"项目一",description:"这是项目一",img:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",moduleNum:7,caseNum:99,status:"success"},{id:"2",name:"项目二",description:"这是项目二",img:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",moduleNum:10,caseNum:26,status:"failed"},{id:"3",name:"项目三,我的名字很长很长...",description:"这是项目三",img:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",moduleNum:5,caseNum:33,status:"notStart"},{id:"4",name:"项目四",description:"这是项目四，我有很长很长很长的文本，阿哈哈哈哈，来换行吧！！！两行以后就缩略咯====---#332",img:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",moduleNum:9,caseNum:14,status:"success"}]}},created(){this.cardList[0].active=!0},methods:{add(){this.$emit("handlerAdd")},selectCard(t,e){-1==t.target.className.indexOf("icon-item")&&(this.cardList.forEach(t=>{t.active=!1}),e.active=!0,this.cardList=[...this.cardList],this.$emit("handlerSelect",e))},operate(t,e){this.$emit("handlerOperate",{type:t,item:e})}}},r=s,o=(a("48ee"),a("2877")),d=Object(o["a"])(r,n,c,!1,null,"3d054920",null);e["a"]=d.exports},f62d:function(t,e,a){},f89e:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-main",[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v("节点管理")])]),a("project-card",{attrs:{type:"node"},on:{handlerAdd:function(e){return t.addNode()},handlerSelect:t.selectProject,handlerOperate:t.operate}})],1)],1)},c=[],i=a("a6fe"),s={name:"NodeManagement",components:{ProjectCard:i["a"]},data(){return{}},methods:{addNode(){},selectProject(){},operate(){}}},r=s,o=(a("4a81"),a("2877")),d=Object(o["a"])(r,n,c,!1,null,"ceda1c48",null);e["default"]=d.exports},fbd1:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.tips?a("el-tooltip",{attrs:{content:t.tips,placement:"top-start"}},[a("i",{class:[t.icon,"icon","icon-"+t.size]})]):a("i",{class:[t.icon,"icon","icon-"+t.size]})},c=[],i={name:"IconButton",props:{icon:{type:String,required:!0},tips:{type:String,default:""},size:{type:String,default:"normal"}},data(){return{}}},s=i,r=(a("173d"),a("2877")),o=Object(r["a"])(s,n,c,!1,null,"08c89f62",null);e["a"]=o.exports}}]);