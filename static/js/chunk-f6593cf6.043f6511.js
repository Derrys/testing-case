(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f6593cf6"],{"4e2e":function(t,e,a){},"7abe":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-editor-container"},[a("el-row",{attrs:{gutter:32}},[a("el-col",{staticClass:"title-col"},[a("div",{staticClass:"title-wrap"},[a("div",{staticClass:"title"},[t._v(" 今日, ")]),a("div",{staticClass:"date-content"},[t._v(" "+t._s(t.date+t.welcomeText)+" ")]),a("iframe",{attrs:{width:"400",height:"25",frameborder:"0",scrolling:"no",hspace:"0",src:"https://i.tianqi.com/?c=code&id=40"}})]),a("panel-group")],1)],1),a("el-row",[a("el-card",{staticClass:"message-wrap",attrs:{shadow:"never"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"message-header"},[t._v("消息管理")])]),a("el-collapse",{attrs:{accordion:""},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.messageList,(function(e,s){return a("el-collapse-item",{key:s,attrs:{name:e.id}},[a("template",{slot:"title"},[a("div",{staticClass:"message-title"},[a("span",[t._v(t._s(e.title))]),a("div",[t._v(t._s(e.time))])])]),t._v(" "+t._s(e.content)+" ")],2)})),1)],1)],1),a("el-row",{attrs:{gutter:32}},[a("el-col",{attrs:{xs:24,sm:24,lg:8}},[a("div",{staticClass:"chart-wrapper"},[a("div",{staticClass:"chart-text-wrap"},[a("div",{staticClass:"message-header"},[t._v("用例总数")]),a("p",[t._v("3000"),a("span",[t._v("件")])])]),a("bar-chart",{attrs:{width:"80%"}})],1)]),a("el-col",{attrs:{xs:24,sm:24,lg:8}},[a("div",{staticClass:"chart-wrapper"},[a("div",{staticClass:"chart-text-wrap"},[a("div",{staticClass:"message-header"},[t._v("最近执行")]),a("p",[t._v("8"),a("span",[t._v("个")])])]),a("pie-chart",{attrs:{width:"80%"}})],1)]),a("el-col",{attrs:{xs:24,sm:24,lg:8}},[a("div",{staticClass:"chart-wrapper"},[a("div",{staticClass:"chart-text-wrap"},[a("div",{staticClass:"message-header"},[t._v("执行统计")]),a("p",[t._v("2000"),a("span",[t._v("次")])])]),a("line-chart",{attrs:{width:"80%"}})],1)])],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"panel-group",attrs:{gutter:32}},[a("el-col",{staticClass:"card-panel-col",attrs:{xs:24,sm:8,md:8,lg:8}},[a("el-card",{staticClass:"card-wrap",attrs:{shadow:"hover"},nativeOn:{click:function(e){return t.routeTo("node")}}},[a("div",{staticClass:"icon-wrap"},[a("i",{staticClass:"el-icon-crop"})]),a("div",{staticClass:"text-wrap"},[a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":2,duration:2800}}),a("div",{staticClass:"text-item"},[t._v("节点")])],1)])],1),a("el-col",{staticClass:"card-panel-col",attrs:{xs:24,sm:8,md:8,lg:8}},[a("el-card",{staticClass:"card-wrap",attrs:{shadow:"hover"},nativeOn:{click:function(e){return t.routeTo("case")}}},[a("div",{staticClass:"icon-wrap"},[a("i",{staticClass:"el-icon-tickets"})]),a("div",{staticClass:"text-wrap"},[a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":22,duration:3e3}}),a("div",{staticClass:"text-item"},[t._v("用例")])],1)])],1),a("el-col",{staticClass:"card-panel-col",attrs:{xs:24,sm:8,md:8,lg:8}},[a("el-card",{staticClass:"card-wrap",attrs:{shadow:"hover"},nativeOn:{click:function(e){return t.routeTo("result")}}},[a("div",{staticClass:"icon-wrap"},[a("i",{staticClass:"el-icon-document"})]),a("div",{staticClass:"text-wrap"},[a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":54,duration:3200}}),a("div",{staticClass:"text-item"},[t._v("报告")])],1)])],1)],1)},n=[],l=a("ec1b"),c=a.n(l),o={components:{CountTo:c.a},methods:{routeTo(t){this.$router.push(`/${t}/index`)}}},d=o,h=(a("b3c0"),a("2877")),u=Object(h["a"])(d,r,n,!1,null,"c64439de",null),p=u.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},v=[],g=a("313e"),_=a.n(g),w=a("ed08"),C={data(){return{$_sidebarElm:null,$_resizeHandler:null}},mounted(){this.$_resizeHandler=Object(w["a"])(()=>{this.chart&&this.chart.resize()},100),this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},beforeDestroy(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},activated(){this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},deactivated(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},methods:{$_initResizeEvent(){window.addEventListener("resize",this.$_resizeHandler)},$_destroyResizeEvent(){window.removeEventListener("resize",this.$_resizeHandler)},$_sidebarResizeHandler(t){"width"===t.propertyName&&this.$_resizeHandler()},$_initSidebarResizeEvent(){this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},$_destroySidebarResizeEvent(){this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)}}};a("817d");var b={mixins:[C],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"},autoResize:{type:Boolean,default:!0}},data(){return{chart:null,actualData:[820,932,901,934,1290,1330,1320]}},mounted(){this.initChart()},beforeDestroy(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart(){this.chart=_.a.init(this.$el,"macarons"),this.setOptions()},setOptions(){this.chart.setOption({xAxis:{data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],type:"category"},grid:{left:10,right:10,bottom:20,top:30,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{axisTick:{show:!1}},series:[{name:"actual",smooth:!0,type:"line",itemStyle:{normal:{color:"#3888fa",lineStyle:{color:"#3888fa",width:2},areaStyle:{color:"#f3f8ff"}}},data:this.actualData,animationDuration:2800,animationEasing:"quadraticOut"}]})}}},f=b,y=Object(h["a"])(f,m,v,!1,null,null,null),x=y.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},E=[];a("817d");var z={mixins:[C],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},data(){return{chart:null}},mounted(){this.$nextTick(()=>{this.initChart()})},beforeDestroy(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart(){this.chart=_.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{top:"bottom",data:["已完成","待处理","已退回"]},series:[{name:"用例个数",type:"pie",roseType:"radius",radius:["40%","70%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},data:[{value:320,name:"已完成"},{value:240,name:"待处理"},{value:149,name:"已退回"}],animationEasing:"cubicInOut",animationDuration:2600}]})}}},S=z,O=Object(h["a"])(S,$,E,!1,null,null,null),R=O.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},k=[];a("817d");var D={mixins:[C],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},data(){return{chart:null,option:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[120,200,150,80,70,110,130],type:"bar",showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"},animationDuration:2600}]}}},mounted(){this.$nextTick(()=>{this.initChart()})},beforeDestroy(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart(){this.chart=_.a.init(this.$el,"macarons"),this.chart.setOption(this.option)}}},N=D,H=Object(h["a"])(N,T,k,!1,null,null,null),L=H.exports,j={name:"Home",components:{PanelGroup:p,LineChart:x,PieChart:R,BarChart:L},data(){return{date:this.getDate(),welcomeText:", 欢迎您使用档案控制台",activeName:1,messageList:[{id:"1",title:"关于5.1劳动节放假通知",time:"2020-04-25",content:"集团各部门(中心)，分公司：2020年五一劳动节即将来临，根据国家相关规定，现将放假事宜安排如下：一，放假时间安排2020年..."},{id:"2",title:"关于省领导即将来视察",time:"2020-05-25",content:"集团各部门(中心)，分公司：2020年五一劳动节即将来临，根据国家相关规定，现将放假事宜安排如下：一，放假时间安排2020年..."},{id:"3",title:"关于元旦节放假通知",time:"2020-12-25",content:"集团各部门(中心)，分公司：2020年五一劳动节即将来临，根据国家相关规定，现将放假事宜安排如下：一，放假时间安排2020年..."},{id:"4",title:"关于春节通知",time:"2021-01-25",content:"集团各部门(中心)，分公司：2020年五一劳动节即将来临，根据国家相关规定，现将放假事宜安排如下：一，放假时间安排2020年..."}]}},methods:{getDate(){const t=new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六"),e=new Date,a=e.getFullYear(),s=e.getMonth()+1,i=e.getDate(),r=a+"年"+s+"月"+i+"日"+t[e.getDay()];return r}}},A=j,B=(a("a09a"),Object(h["a"])(A,s,i,!1,null,"10d2e89f",null));e["default"]=B.exports},a09a:function(t,e,a){"use strict";a("dab2")},b3c0:function(t,e,a){"use strict";a("4e2e")},dab2:function(t,e,a){}}]);