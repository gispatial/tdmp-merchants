(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8657599a"],{"0b18":function(e,n,a){"use strict";var t=a("0fdf"),i=a.n(t);i.a},"0fdf":function(e,n,a){},d779:function(e,n,a){"use strict";a.r(n);var t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{attrs:{id:"extra-component-drag-and-drop-demo"}},[a("p",{staticClass:"mb-4"},[e._v("Thank you for using Tripcarte")]),a("drag-and-drop-multiple-lists")],1)},i=[],s=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("vx-card",{attrs:{title:"Simple","code-toggler":""}},[a("p",[e._v("Scan your barcode.")]),a("div",{staticClass:"mt-5"},[a("vs-list",[a("draggable",{staticClass:"cursor-move",attrs:{list:e.list}},e._l(e.list,(function(e,n){return a("vs-list-item",{key:n,staticClass:"flex items-center p-1",attrs:{title:e}})})),1)],1)],1),a("prism",{staticClass:"rounded-lg",attrs:{language:"js"}},[e._v("\n"+e._s(e.list)+"\n        ")]),a("template",{slot:"codeContainer"},[e._v('\n<template>\n  <vs-list>\n    <draggable :list="list" class="cursor-move">\n      <vs-list-item class="flex items-center p-1" v-for="(item, index) in list" :key="index" :title="item">\n      </vs-list-item>\n    </draggable>\n  </vs-list>\n</template>\n\n<script>\nimport draggable from \'vuedraggable\'\n\nexport default {\n  data() {\n    return {\n      list: [\n        "Marzipan I love I love. Soufflé donut I love gummi bears powder. Candy danish biscuit.",\n        "Halvah bonbon bonbon brownie sugar plum. Halvah I love cupcake I love.",\n        "Cake muffin icing topping wafer topping gummi bears apple pie.",\n        "Cotton candy gummi bears bear claw cake brownie jelly-o lemon drops croissant sweet roll.",\n      ]\n    }\n  },\n  components: {\n    draggable,\n  }\n}\n<\/script>\n        ')])],2)},l=[],r=a("310e"),o=a.n(r),m=a("8d51"),u=a.n(m),c={data:function(){return{list:["Marzipan I love I love. Soufflé donut I love gummi bears powder. Candy danish biscuit.","Halvah bonbon bonbon brownie sugar plum. Halvah I love cupcake I love.","Cake muffin icing topping wafer topping gummi bears apple pie.","Cotton candy gummi bears bear claw cake brownie jelly-o lemon drops croissant sweet roll."]}},components:{draggable:o.a,Prism:u.a}},d=c,g=a("2877"),p=Object(g["a"])(d,s,l,!1,null,null,null),v=p.exports,b=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("vx-card",{attrs:{title:"BARCODE","code-toggler":""}},[a("vs-button",{staticClass:"ml-auto mt-2"},[e._v("Start Scanning")]),a("p"),a("p",[e._v("Or")]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full md:w-1/2"},[a("prism",{staticClass:"rounded-lg",attrs:{language:"js"}},[e._v("\nEnter Barcode:\n                ")])],1)]),a("template",{slot:"codeContainer"})],2)},f=[],h={data:function(){return{list1:[{name:"Paz Joya",email:"girliness@spotlike.co.uk"},{name:"Sunshine Cose",email:"executrixship@equisized.edu"},{name:"Alba Dobbin",email:"bidding@demibob.or"},{name:"Marlin Hinchee",email:"preholding@scuffly.co.uk"}],list2:[{name:"Leia Atienza",email:"unmeasurableness@interlamellar.co.uk"},{name:"Lashawna Vaudrainm",email:"soaking@khubber.com"},{name:"Liliana Henscheid",email:"lecideine@turndown.org"},{name:"Keven Kolter",email:"nontenure@anglicanum.co.uk"}]}},components:{draggable:o.a,Prism:u.a}},C=h,k=Object(g["a"])(C,b,f,!1,null,null,null),_=k.exports,w=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("vx-card",{attrs:{title:"Barcode Scanner","code-toggler":""}},[a("p",[e._v("Clone barcode from another existing list. ")]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full sm:w-1/2"},[a("h6",{staticClass:"mt-5 mb-3"},[e._v("Tag Source")]),a("draggable",{staticClass:"p-2 cursor-move",attrs:{list:e.list1,group:{name:"tags",pull:"clone",put:!1}}},e._l(e.list1,(function(n,t){return a("vs-chip",{key:t},[e._v(e._s(n))])})),1)],1),a("div",{staticClass:"vx-col w-full sm:w-1/2"},[a("h6",{staticClass:"mt-5 mb-3"},[e._v("Your Tags")]),a("draggable",{staticClass:"p-2 cursor-move",attrs:{list:e.list2,group:{name:"tags"}}},e._l(e.list2,(function(n,t){return a("vs-chip",{key:t},[e._v(e._s(n))])})),1)],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full sm:w-1/2"},[a("prism",{staticClass:"rounded-lg",attrs:{language:"js"}},[e._v("\nTag Source: "+e._s(e.list1)+"\n                ")])],1),a("div",{staticClass:"vx-col w-full sm:w-1/2"},[a("prism",{staticClass:"rounded-lg",attrs:{language:"js"}},[e._v("\nAdded tags: "+e._s(e.list2)+"\n                ")])],1)]),a("template",{slot:"codeContainer"})],2)},x=[],y={data:function(){return{list1:["youtube","google","facebook","twitter","instagram","pinterest","tinder","slack","discord","github","gitlab"],list2:["google","youtube"]}},components:{draggable:o.a,Prism:u.a}},A=y,I=Object(g["a"])(A,w,x,!1,null,null,null),S=I.exports,j=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("vx-card",{attrs:{title:"With Animation","code-toggler":""}},[a("p",[e._v("Add animation to changes using "),a("code",[e._v("transition-group")]),e._v(".")]),a("div",{staticClass:"mt-5"},[a("vs-list",[a("vs-list-header",{attrs:{title:"People Group",color:"primary"}}),a("draggable",{staticClass:"cursor-move",attrs:{list:e.list}},[a("transition-group",e._l(e.list,(function(e){return a("vs-list-item",{key:e.email,staticClass:"list-item",attrs:{title:e.name,subtitle:e.email}},[a("vs-avatar",{attrs:{slot:"avatar",text:e.name},slot:"avatar"})],1)})),1)],1)],1)],1),a("prism",{staticClass:"rounded-lg",attrs:{language:"js"}},[e._v("\n"+e._s(e.list)+"\n        ")]),a("template",{slot:"codeContainer"},[e._v('\n<template>\n  <vs-list>\n    <vs-list-header title="People Group" color="primary"></vs-list-header>\n\n    <draggable :list="list">\n      <transition-group>\n        <vs-list-item class="list-item" v-for="listItem in list" :key="listItem.email" :title="listItem.name" :subtitle="listItem.email">\n          <vs-avatar slot="avatar" :text="listItem.name" />\n        </vs-list-item>\n      </transition-group>\n    </draggable>\n\n  </vs-list>\n</template>\n<script>\nimport draggable from \'vuedraggable\'\n\nexport default {\n  data() {\n    return {\n      list: [{\n          name: "Paz Joya",\n          email: "girliness@spotlike.co.uk",\n        },\n        {\n          name: "Sunshine Cose",\n          email: "executrixship@equisized.edu",\n        },\n        {\n          name: "Alba Dobbin",\n          email: "bidding@demibob.or",\n        },\n        {\n          name: "Marlin Hinchee",\n          email: "preholding@scuffly.co.uk",\n        },\n        {\n          name: "Leia Atienza",\n          email: "unmeasurableness@interlamellar.co.uk"\n        },\n        {\n          name: "Lashawna Vaudrainm",\n          email: "soaking@khubber.com"\n        },\n        {\n          name: "Liliana Henscheid",\n          email: "lecideine@turndown.org"\n        },\n        {\n          name: "Keven Kolter",\n          email: "nontenure@anglicanum.co.uk"\n        }\n      ],\n    }\n  },\n  components: {\n    draggable\n  }\n}\n<\/script>\n<style>\n.list-item {\n  transition: all 1s\n}\n</style>\n        ')])],2)},D=[],z={data:function(){return{list:[{name:"Paz Joya",email:"girliness@spotlike.co.uk"},{name:"Sunshine Cose",email:"executrixship@equisized.edu"},{name:"Alba Dobbin",email:"bidding@demibob.or"},{name:"Marlin Hinchee",email:"preholding@scuffly.co.uk"},{name:"Leia Atienza",email:"unmeasurableness@interlamellar.co.uk"},{name:"Lashawna Vaudrainm",email:"soaking@khubber.com"},{name:"Liliana Henscheid",email:"lecideine@turndown.org"},{name:"Keven Kolter",email:"nontenure@anglicanum.co.uk"}]}},components:{draggable:o.a,Prism:u.a}},L=z,H=(a("0b18"),Object(g["a"])(L,j,D,!1,null,null,null)),P=H.exports,E={components:{DragAndDropSimple:v,DragAndDropMultipleLists:_,DragAndDropCloneList:S,DragAndDropAnimation:P}},O=E,K=Object(g["a"])(O,t,i,!1,null,null,null);n["default"]=K.exports}}]);
//# sourceMappingURL=chunk-8657599a.3b86b7fb.js.map