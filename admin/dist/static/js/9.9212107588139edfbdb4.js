webpackJsonp([9],{"2/rd":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Xxa5"),a=n.n(r),i=n("exGp"),s=n.n(i),o=n("Dd8w"),c=n.n(o),u=n("NYxO"),d={name:"list",data:function(){return{list:[],page:null,columns:[{title:"ID",key:"id",width:80,align:"center"},{title:"广告名称",key:"title"},{title:"广告链接",render:function(t,e){return t("a",{attrs:{href:e.row.link,target:"_blank"},style:{color:"#2d8cf0"}},e.row.link)}},{title:"操作",slot:"action",width:150,align:"center"}]}},created:function(){this.fetchData()},methods:c()({},Object(u.b)({getAdvertiseList:"advertise/getAdvertiseList",destroyAdvertise:"advertise/destroyAdvertise"}),{fetchData:function(){var t=this;return s()(a.a.mark(function e(){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getAdvertiseList();case 2:n=e.sent,t.list=n.data.data.data;case 4:case"end":return e.stop()}},e,t)}))()},toPathLink:function(t){this.$router.push(t)},update:function(t){this.$router.push("/advertise/update/"+t)},destroy:function(t){var e,n=this;this.$Modal.confirm({title:"提示",content:"<p>确定删除此广告吗？</p>",loading:!0,onOk:(e=s()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.destroyAdvertise(t);case 3:n.$Message.success("删除成功"),n.fetchData(),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),n.$Message.error(e.t0),console.log(e.t0);case 11:return e.prev=11,n.$Modal.remove(),e.finish(11);case 14:case"end":return e.stop()}},e,n,[[0,7,11,14]])})),function(){return e.apply(this,arguments)}),onCancel:function(){n.$Message.warning("取消！")}})}})},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("Button",{staticStyle:{"margin-bottom":"16px"},attrs:{type:"primary",icon:"md-add"},on:{click:function(e){return t.toPathLink("/advertise/create")}}},[t._v("新增广告\n  ")]),t._v(" "),t.list.length>0?n("section",[n("Table",{attrs:{border:"",columns:t.columns,data:t.list},scopedSlots:t._u([{key:"name",fn:function(e){var r=e.row;return[n("strong",[t._v(t._s(r.name))])]}},{key:"action",fn:function(e){var r=e.row;return e.index,[n("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary",size:"small"},on:{click:function(e){return t.update(r.id)}}},[t._v("编辑")]),t._v(" "),n("Button",{attrs:{type:"error",size:"small"},on:{click:function(e){return t.destroy(r.id)}}},[t._v("删除")])]}}],null,!1,1888473351)})],1):t._e()],1)},staticRenderFns:[]};var f=n("VU/8")(d,l,!1,function(t){n("4KPp")},"data-v-48adf303",null);e.default=f.exports},"4KPp":function(t,e){}});
//# sourceMappingURL=9.9212107588139edfbdb4.js.map