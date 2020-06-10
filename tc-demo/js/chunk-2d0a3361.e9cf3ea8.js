(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3361"],{"00e0":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"upload-demo"}},[s("upload-default"),s("upload-multiple"),s("upload-automatic")],1)},c=[],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vx-card",{attrs:{title:"Default","code-toggler":""}},[s("p",[t._v("You can upload files to the server with the "),s("code",[t._v("vs-upload")]),t._v(" component, the requested parameter is "),s("code",[t._v("action")]),t._v(" which is the URL of the server")]),s("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[s("p",[t._v("For the title of each tab the "),s("code",[t._v("vs-label")]),t._v(" property is implemented in the "),s("code",[t._v("vs-tab")]),t._v(" component")])]),s("div",{staticClass:"mt-5"},[s("vs-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/"},on:{"on-success":t.successUpload}})],1),s("template",{slot:"codeContainer"},[t._v("\n<template>\n  <vs-upload action=\"https://jsonplaceholder.typicode.com/posts/\" @on-success=\"successUpload\" />\n</template>\n\n<script>\nexport default {\n  methods:{\n    successUpload(){\n      this.$vs.notify({color:'success',title:'Upload Success',text:'Lorem ipsum dolor sit amet, consectetur'})\n    }\n  }\n}\n<\/script>\n        ")])],2)},n=[],a={methods:{successUpload:function(){this.$vs.notify({color:"success",title:"Upload Success",text:"Lorem ipsum dolor sit amet, consectetur"})}}},p=a,i=s("2877"),u=Object(i["a"])(p,l,n,!1,null,null,null),r=u.exports,d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vx-card",{attrs:{title:"Multiple","code-toggler":""}},[s("p",[t._v("You can upload multiple files by adding the "),s("code",[t._v("multiple")]),t._v(" property within the component")]),s("div",{staticClass:"mt-5"},[s("vs-upload",{attrs:{multiple:"",text:"Upload Multiple",action:"https://jsonplaceholder.typicode.com/posts/"},on:{"on-success":t.successUpload}})],1),s("template",{slot:"codeContainer"},[t._v("\n<template>\n  <vs-upload multiple text=\"Upload Multiple\" action=\"https://jsonplaceholder.typicode.com/posts/\" @on-success=\"successUpload\" />\n</template>\n\n<script>\nexport default {\n  methods:{\n    successUpload(){\n      this.$vs.notify({color:'success',title:'Upload Success',text:'Lorem ipsum dolor sit amet, consectetur'})\n    }\n  }\n}\n<\/script>\n        ")])],2)},m=[],h={methods:{successUpload:function(){this.$vs.notify({color:"success",title:"Upload Success",text:"Lorem ipsum dolor sit amet, consectetur"})}}},v=h,f=Object(i["a"])(v,d,m,!1,null,null,null),_=f.exports,U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vx-card",{attrs:{title:"Automatic","code-toggler":""}},[s("p",[t._v("You can enable automatic submission with the "),s("code",[t._v("Automatic")]),t._v(" property that executes the shipment by changing the value of the "),s("code",[t._v("input")])]),s("div",{staticClass:"mt-5"},[s("vs-upload",{attrs:{automatic:"",action:"https://jsonplaceholder.typicode.com/posts/"},on:{"on-success":t.successUpload}})],1),s("template",{slot:"codeContainer"},[t._v("\n<template>\n  <vs-upload automatic action=\"https://jsonplaceholder.typicode.com/posts/\" @on-success=\"successUpload\" />\n</template>\n\n<script>\nexport default {\n  methods:{\n    successUpload(){\n      this.$vs.notify({color:'success',title:'Upload Success',text:'Lorem ipsum dolor sit amet, consectetur'})\n    }\n  }\n}\n<\/script>\n        ")])],2)},x=[],y={methods:{successUpload:function(){this.$vs.notify({color:"success",title:"Upload Success",text:"Lorem ipsum dolor sit amet, consectetur"})}}},b=y,w=Object(i["a"])(b,U,x,!1,null,null,null),j=w.exports,$={components:{UploadDefault:r,UploadMultiple:_,UploadAutomatic:j}},g=$,C=Object(i["a"])(g,o,c,!1,null,null,null);e["default"]=C.exports}}]);
//# sourceMappingURL=chunk-2d0a3361.e9cf3ea8.js.map