(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-27201626"],{3499:function(t,e,n){"use strict";n.d(e,"e",function(){return o}),n.d(e,"f",function(){return i}),n.d(e,"k",function(){return d}),n.d(e,"g",function(){return r}),n.d(e,"a",function(){return l}),n.d(e,"j",function(){return u}),n.d(e,"b",function(){return s}),n.d(e,"d",function(){return c}),n.d(e,"h",function(){return m}),n.d(e,"l",function(){return f}),n.d(e,"i",function(){return p}),n.d(e,"c",function(){return h});var a=n("9bd2");function o(){return Object(a.a)({url:"lab?s=1",method:"get"})}function i(t){return Object(a.a)({url:"lab/detail/"+t,method:"get"})}function d(t,e){return Object(a.a)({url:"admin/lab/detail/update/"+t,method:"post",data:e})}function r(){return Object(a.a)({url:"lab/gettype",method:"get"})}function l(t){return Object(a.a)({url:"admin/lab/add",method:"post",data:t})}function u(t,e){return Object(a.a)({url:"admin/lab/update/"+t,method:"post",data:e})}function s(t){return Object(a.a)({url:"admin/lab/delete/"+t,method:"post"})}function c(t,e,n){return Object(a.a)({url:"admin/reserve/list?status=".concat(t,"&page=").concat(e,"&limit=").concat(n),method:"get"})}function m(t){return Object(a.a)({url:"admin/reserve/detail/"+t,method:"get"})}function f(t,e){return Object(a.a)({url:"admin/reserve/update/"+t,method:"post",data:e})}function p(t,e){return Object(a.a)({url:"admin/reserve/review/"+t+"/"+e,method:"post"})}function h(t,e){return Object(a.a)({url:"admin/lab/detail/image/delete/"+t,method:"post",data:e})}},"74dd":function(t,e,n){"use strict";n.r(e);n("7f7f"),n("ac6a");var o=n("3499"),a={data:function(){return{columns:[{title:"实验室id",key:"lab_id",width:"180"},{title:"实验室名字",key:"lab_name",width:"180"},{title:"座位数",key:"seat_num",width:"120"},{title:"类型",key:"lab_type_id",width:"180",formatter:this.type2text},{title:"状态",key:"s",width:"120",formatter:this.s2text}],data:[],type:{},type_select:[],options:{stripe:!0},addTemplate:{lab_id:{title:"实验室id"},lab_name:{title:"实验室名字"},seat_num:{title:"座位数",value:20,component:{name:"el-input-number"}},device_number:{title:"门禁设备号"},s:{title:"状态",value:0,component:{name:"el-select",options:[{label:"开放",value:0},{label:"关闭",value:1}]}},lab_type_id:{title:"类型",component:{name:"el-select",options:[]}}},formOptions:{labelWidth:"100px",labelPosition:"left",saveLoading:!1},rowHandle:{columnHeader:"操作",edit:{icon:"el-icon-edit",text:"编辑",size:"small"},remove:{icon:"el-icon-delete",size:"small",fixed:"right",confirm:!0},custom:[{text:"详情",type:"warning",size:"small",emit:"custom-emit-1"}]}}},created:function(){},mounted:function(){var e=this;Object(o.g)().then(function(t){t.forEach(function(t){e.type[t.id]=t.name,e.addTemplate.lab_type_id.component.options.push({value:t.id,label:t.name})})}),Object(o.e)().then(function(t){e.data=t})},methods:{s2text:function(t,e,n,a){return 0==n?"开放":"不开放"},type2text:function(t,e,n,a){return this.type[n]},handleDialogOpen:function(t){t.mode},addRow:function(){this.$refs.d2Crud.showDialog({mode:"add"})},handleRowAdd:function(t,e){var n=this;this.formOptions.saveLoading=!0,setTimeout(function(){Object(o.a)(t).then(function(t){n.$message({message:"添加成功",type:"success"}),e(t)}),n.formOptions.saveLoading=!1},300)},handleRowEdit:function(t,e){var n=this,a=(t.index,t.row);this.formOptions.saveLoading=!0,setTimeout(function(){Object(o.j)(a.lab_id,a).then(function(t){n.$message({message:"更新成功",type:"success"}),e(t)}),n.formOptions.saveLoading=!1},300)},handleRowRemove:function(t,e){var n=this,a=(t.index,t.row);setTimeout(function(){Object(o.b)(a.lab_id).then(function(t){n.$message({message:"删除成功",type:"success"}),e()})},300)},handleDialogCancel:function(t){this.$message({message:"取消保存",type:"warning"}),t()},handleCustomEvent:function(t){t.index;var e=t.row;this.$router.push({name:"实验室介绍",params:{labid:e.lab_id}})}}},i=n("2877"),d=function(t){t.options.__source="src/views/lab/lab.vue"},r=Object(i.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("d2-container",[n("template",{slot:"header"},[t._v("实验室列表")]),n("div",[n("d2-crud",{ref:"d2Crud",attrs:{"add-template":t.addTemplate,columns:t.columns,data:t.data,"edit-template":t.addTemplate,"form-options":t.formOptions,rowHandle:t.rowHandle,"add-title":"新增实验室","edit-title":"修改实验室"},on:{"custom-emit-1":t.handleCustomEvent,"dialog-cancel":t.handleDialogCancel,"dialog-open":t.handleDialogOpen,"row-add":t.handleRowAdd,"row-edit":t.handleRowEdit,"row-remove":t.handleRowRemove}},[n("el-button",{staticStyle:{"margin-bottom":"5px"},attrs:{slot:"header"},on:{click:t.addRow},slot:"header"},[t._v("新增")])],1)],1),n("template",{slot:"footer"})],2)},[],!1,null,null,null);"function"==typeof d&&d(r);e.default=r.exports}}]);