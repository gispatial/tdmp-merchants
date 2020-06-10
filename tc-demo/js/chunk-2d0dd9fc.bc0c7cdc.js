(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dd9fc"],{"81d1":function(e,t,l){"use strict";l.r(t);var n=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:"form-element-select-demo"}},[l("select-single-selection"),l("select-color"),l("select-autocomplete"),l("select-multiple"),l("select-labels"),l("select-validators"),l("select-is-selected-item"),l("select-group-items")],1)},a=[],s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("vx-card",{attrs:{title:"Single selection","code-toggler":""}},[l("p",[e._v("To add a select to the application we have the component "),l("code",[e._v("vs-select")]),e._v(".")]),l("div",{staticClass:"demo-alignment"},[l("vs-select",{staticClass:"selectExample",model:{value:e.select1,callback:function(t){e.select1=t},expression:"select1"}},e._l(e.options1,(function(e,t){return l("vs-select-item",{key:t,attrs:{value:e.value,text:e.text}})})),1),l("vs-select",{staticClass:"selectExample",model:{value:e.select2,callback:function(t){e.select2=t},expression:"select2"}},e._l(e.options2,(function(e,t){return l("vs-select-item",{key:t,attrs:{value:e.value,text:e.text}})})),1),l("vs-select",{staticClass:"selectExample",attrs:{disabled:"true"},model:{value:e.select3,callback:function(t){e.select3=t},expression:"select3"}},e._l(e.options3,(function(e,t){return l("vs-select-item",{key:t,attrs:{disabled:2==t,value:e.value,text:e.text}})})),1)],1),l("template",{slot:"codeContainer"},[e._v('\n<template lang="html">\n  <div class="con-select-example">\n\n    <vs-select class="selectExample" v-model="select1">\n      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options1" />\n    </vs-select>\n\n    <vs-select class="selectExample" v-model="select2">\n      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options2" />\n    </vs-select>\n\n    <vs-select disabled="true" class="selectExample" v-model="select3">\n      <vs-select-item :key="index" :disabled="index==2" :value="item.value" :text="item.text" v-for="(item,index) in options3" />\n    </vs-select>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      select1:3,\n      select2:7,\n      select3:2,\n      options1:[\n        {text:\'IT\',value:0},\n        {text:\'Blade Runner\',value:2},\n        {text:\'Thor Ragnarok\',value:3},\n      ],\n      options2:[\n        {text: \'Square\', value: 1},\n        {text: \'Rectangle\', value: 2},\n        {text: \'Rombo\', value: 3},\n        {text: \'Romboid\', value: 4},\n        {text: \'Trapeze\', value: 5},\n        {text: \'Triangle\', value: 6},\n        {text: \'Polygon\', value: 7},\n        {text: \'Regular polygon\', value: 8},\n        {text: \'Circumference\', value: 9},\n        {text: \'Circle\', value: 10},\n        {text: \'Circular sector\', value: 11},\n        {text: \'Circular trapeze\', value: 12},\n      ],\n      options3:[\n        {text: \'Red\', value: 1},\n        {text: \'Green\', value: 2},\n        {text: \'Blue\', value: 3},\n        {text: \'Purple\', value: 4},\n      ],\n    }\n  },\n}\n<\/script>\n        ')])],2)},c=[],o={data:function(){return{select1:3,select2:7,select3:2,options1:[{text:"IT",value:0},{text:"Blade Runner",value:2},{text:"Thor Ragnarok",value:3}],options2:[{text:"Square",value:1},{text:"Rectangle",value:2},{text:"Rombo",value:3},{text:"Romboid",value:4},{text:"Trapeze",value:5},{text:"Triangle",value:6},{text:"Polygon",value:7},{text:"Regular polygon",value:8},{text:"Circumference",value:9},{text:"Circle",value:10},{text:"Circular sector",value:11},{text:"Circular trapeze",value:12}],options3:[{text:"Red",value:1},{text:"Green",value:2},{text:"Blue",value:3},{text:"Purple",value:4}]}}},i=o,u=l("2877"),r=Object(u["a"])(i,s,c,!1,null,null,null),v=r.exports,x=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("vx-card",{attrs:{title:"Color","code-toggler":""}},[l("p",[e._v("You can change the color of the select with the property "),l("code",[e._v("color")])]),l("vs-alert",{staticClass:"mt-5",attrs:{icon:"warning",active:"true",color:"warning"}},[l("span",[e._v("Only "),l("strong",[e._v("RGB")]),e._v(" and "),l("strong",[e._v("HEX")]),e._v(" colors are supported.")])]),l("div",{staticClass:"demo-alignment"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.colorx,expression:"colorx"}],attrs:{type:"color",value:""},domProps:{value:e.colorx},on:{input:function(t){t.target.composing||(e.colorx=t.target.value)}}}),l("vs-select",{staticClass:"selectExample",attrs:{color:e.colorx},model:{value:e.select1,callback:function(t){e.select1=t},expression:"select1"}},e._l(e.options1,(function(e,t){return l("vs-select-item",{key:t,attrs:{value:e.value,text:e.text}})})),1),l("vs-select",{staticClass:"selectExample",attrs:{color:e.select2},model:{value:e.select2,callback:function(t){e.select2=t},expression:"select2"}},e._l(e.options2,(function(e,t){return l("vs-select-item",{key:t,attrs:{value:e.value,text:e.text}})})),1)],1),l("template",{slot:"codeContainer"},[e._v("\n<template>\n  <div class=\"con-select-example\">\n\n    <input v-model=\"colorx\" type=\"color\" value=\"\">\n\n    <vs-select :color=\"colorx\" class=\"selectExample\" v-model=\"select1\">\n      <vs-select-item :key=\"index\" :value=\"item.value\" :text=\"item.text\" v-for=\"(item,index) in options1\" />\n    </vs-select>\n\n    <vs-select :color=\"select2\" class=\"selectExample\" v-model=\"select2\">\n      <vs-select-item :key=\"index\" :value=\"item.value\" :text=\"item.text\" v-for=\"(item,index) in options2\" />\n    </vs-select>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      colorx:'#103767',\n      select1:3,\n      select2:'primary',\n      options1:[\n        {text: 'Square', value: 1},\n        {text: 'Rectangle', value: 2},\n        {text: 'Rombo', value: 3},\n        {text: 'Romboid', value: 4},\n        {text: 'Trapeze', value: 5},\n        {text: 'Triangle', value: 6},\n        {text: 'Polygon', value: 7},\n        {text: 'Regular polygon', value: 8},\n        {text: 'Circumference', value: 9},\n        {text: 'Circle', value: 10},\n        {text: 'Circular sector', value: 11},\n        {text: 'Circular trapeze', value: 12},\n      ],\n      options2:[\n        {text: 'Primary', value: 'primary'},\n        {text: 'Success', value: 'success'},\n        {text: 'Danger', value: 'danger'},\n        {text: 'Warning', value: 'warning'},\n        {text: 'Dark', value: 'dark'},\n      ],\n    }\n  }\n}\n<\/script>\n        ")])],2)},p=[],m={data:function(){return{colorx:"#103767",select1:3,select2:"primary",options1:[{text:"Square",value:1},{text:"Rectangle",value:2},{text:"Rombo",value:3},{text:"Romboid",value:4},{text:"Trapeze",value:5},{text:"Triangle",value:6},{text:"Polygon",value:7},{text:"Regular polygon",value:8},{text:"Circumference",value:9},{text:"Circle",value:10},{text:"Circular sector",value:11},{text:"Circular trapeze",value:12}],options2:[{text:"Primary",value:"primary"},{text:"Success",value:"success"},{text:"Danger",value:"danger"},{text:"Warning",value:"warning"},{text:"Dark",value:"dark"}]}}},d=m,g=Object(u["a"])(d,x,p,!1,null,null,null),f=g.exports,b=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("vx-card",{attrs:{title:"Autocomplete","code-toggler":""}},[l("p",[e._v("You can add the autocomplete functionality in the desired selected with the property "),l("code",[e._v("autocomplete")])]),l("div",{staticClass:"demo-alignment"},[l("vs-select",{staticClass:"selectExample",attrs:{autocomplete:""},model:{value:e.select1,callback:function(t){e.select1=t},expression:"select1"}},e._l(e.options1,(function(e,t){return l("vs-select-item",{key:t,attrs:{value:e.value,text:e.text}})})),1),l("vs-select",{staticClass:"selectExample",attrs:{autocomplete:""},model:{value:e.select2,callback:function(t){e.select2=t},expression:"select2"}},e._l(e.options2,(function(e,t){return l("vs-select-item",{key:t,attrs:{value:e.value,text:e.text}})})),1),l("vs-select",{staticClass:"selectExample",attrs:{autocomplete:"",disabled:"true"},model:{value:e.select3,callback:function(t){e.select3=t},expression:"select3"}},e._l(e.options3,(function(e,t){return l("vs-select-item",{key:t,attrs:{value:e.value,text:e.text}})})),1)],1),l("template",{slot:"codeContainer"},[e._v('\n<template lang="html">\n  <div class="con-select-example">\n\n    <vs-select autocomplete @input-change="autoCompleteFunc" class="selectExample" v-model="select1">\n      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options1" />\n    </vs-select>\n\n    <vs-select autocomplete @input-change="autoCompleteFunc" class="selectExample" v-model="select2">\n      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options2" />\n    </vs-select>\n\n    <vs-select autocomplete @input-change="autoCompleteFunc" disabled="true" class="selectExample" v-model="select3">\n      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options3" />\n    </vs-select>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      select1:3,\n      select2:7,\n      select3:2,\n      options1:[\n        {text:\'IT\',value:0},\n        {text:\'Blade Runner\',value:2},\n        {text:\'Thor Ragnarok\',value:3},\n      ],\n      options2:[\n        {text: \'Square\', value: 1},\n        {text: \'Rectangle\', value: 2},\n        {text: \'Rombo\', value: 3},\n        {text: \'Romboid\', value: 4},\n        {text: \'Trapeze\', value: 5},\n        {text: \'Triangle\', value: 6},\n        {text: \'Polygon\', value: 7},\n        {text: \'Regular polygon\', value: 8},\n        {text: \'Circumference\', value: 9},\n        {text: \'Circle\', value: 10},\n        {text: \'Circular sector\', value: 11},\n        {text: \'Circular trapeze\', value: 12},\n      ],\n      options3:[\n        {text: \'Red\', value: 1},\n        {text: \'Green\', value: 2},\n        {text: \'Blue\', value: 3},\n        {text: \'Purple\', value: 4},\n      ],\n    }\n  }\n}\n<\/script>\n        ')])],2)},h=[],y={data:function(){return{select1:3,select2:7,select3:2,options1:[{text:"IT",value:0},{text:"Blade Runner",value:2},{text:"Thor Ragnarok",value:3}],options2:[{text:"Square",value:1},{text:"Rectangle",value:2},{text:"Rombo",value:3},{text:"Romboid",value:4},{text:"Trapeze",value:5},{text:"Triangle",value:6},{text:"Polygon",value:7},{text:"Regular polygon",value:8},{text:"Circumference",value:9},{text:"Circle",value:10},{text:"Circular sector",value:11},{text:"Circular trapeze",value:12}],options3:[{text:"Red",value:1},{text:"Green",value:2},{text:"Blue",value:3},{text:"Purple",value:4}]}}},C=y,k=Object(u["a"])(C,b,h,!1,null,null,null),_=k.exports,R=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("vx-card",{attrs:{title:"Multiple","code-toggler":""}},[l("p",[e._v("You can have a selection with multiple selections with the property "),l("code",[e._v("multiple")]),e._v(". If you need the user to select only a certain number of options you can use the property "),l("code",[e._v("max-selected")])]),l("div",{staticClass:"demo-alignment"},[l("vs-select",{staticClass:"selectExample",attrs:{placeholder:"Multiple",multiple:""},model:{value:e.select1,callback:function(t){e.select1=t},expression:"select1"}},e._l(e.options1,(function(e,t){return l("vs-select-item",{key:t,attrs:{value:e.value,text:e.text}})})),1),l("vs-select",{staticClass:"selectExample",attrs:{placeholder:"Multiple and autocomplete",multiple:"","vs-autocomplete":""},model:{value:e.select2,callback:function(t){e.select2=t},expression:"select2"}},e._l(e.options2,(function(e,t){return l("vs-select-item",{key:t,attrs:{value:e.value,text:e.text}})})),1),l("vs-select",{staticClass:"selectExample",attrs:{placeholder:"Max Selected","max-selected":"2",multiple:""},model:{value:e.select3,callback:function(t){e.select3=t},expression:"select3"}},e._l(e.options3,(function(e,t){return l("vs-select-item",{key:t,attrs:{value:e.value,text:e.text}})})),1)],1),l("template",{slot:"codeContainer"},[e._v('\n<template lang="html">\n  <div class="con-select-example">\n\n    <vs-select placeholder="Multiple" multiple class="selectExample" v-model="select1">\n      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options1" />\n    </vs-select>\n\n    <vs-select placeholder="Multiple and autocomplete" multiple vs-autocomplete class="selectExample" v-model="select2">\n      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options2" />\n    </vs-select>\n\n    <vs-select placeholder="Max Selected" max-selected="2" multiple class="selectExample" v-model="select3">\n      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options3" />\n    </vs-select>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      select1: [],\n      select2: [],\n      select3: [],\n      options1: [\n        { text: \'IT\', value: 0 },\n        { text: \'Blade Runner\', value: 2 },\n        { text: \'Thor Ragnarok\', value: 3 },\n      ],\n      options2: [\n        { text: \'Square\', value: 1 },\n        { text: \'Rectangle\', value: 2 },\n        { text: \'Rombo\', value: 3 },\n        { text: \'Romboid\', value: 4 },\n        { text: \'Trapeze\', value: 5 },\n        { text: \'Triangle\', value: 6 },\n        { text: \'Polygon\', value: 7 },\n        { text: \'Regular polygon\', value: 8 },\n        { text: \'Circumference\', value: 9 },\n        { text: \'Circle\', value: 10 },\n        { text: \'Circular sector\', value: 11 },\n        { text: \'Circular trapeze\', value: 12 },\n      ],\n      options3: [\n        { text: \'Red\', value: 1 },\n        { text: \'Green\', value: 2 },\n        { text: \'Blue\', value: 3 },\n        { text: \'Purple\', value: 4 },\n      ],\n    }\n  }\n}\n<\/script>\n        ')])],2)},T=[],S={data:function(){return{select1:[],select2:[],select3:[],options1:[{text:"IT",value:0},{text:"Blade Runner",value:2},{text:"Thor Ragnarok",value:3}],options2:[{text:"Square",value:1},{text:"Rectangle",value:2},{text:"Rombo",value:3},{text:"Romboid",value:4},{text:"Trapeze",value:5},{text:"Triangle",value:6},{text:"Polygon",value:7},{text:"Regular polygon",value:8},{text:"Circumference",value:9},{text:"Circle",value:10},{text:"Circular sector",value:11},{text:"Circular trapeze",value:12}],options3:[{text:"Red",value:1},{text:"Green",value:2},{text:"Blue",value:3},{text:"Purple",value:4}]}}},E=S,w=Object(u["a"])(E,R,T,!1,null,null,null),P=w.exports,z=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("vx-card",{attrs:{title:"Labels","code-toggler":""}},[l("p",[e._v("Add a label to the input with the property "),l("code",[e._v("label")])]),l("div",{staticClass:"demo-alignment"},[l("vs-select",{staticClass:"selectExample",attrs:{placeholder:"Select",label:"Multiple","label-placeholder":"vs-Multiple","vs-multiple":""},model:{value:e.select1,callback:function(t){e.select1=t},expression:"select1"}},e._l(e.options1,(function(e,t){return l("vs-select-item",{key:t,attrs:{value:e.value,text:e.text}})})),1),l("vs-select",{staticClass:"selectExample",attrs:{placeholder:"Search and select",label:"Autocomplete","label-placeholder":"Autocomplete","vs-multiple":"",autocomplete:""},model:{value:e.select2,callback:function(t){e.select2=t},expression:"select2"}},e._l(e.options2,(function(e,t){return l("vs-select-item",{key:t,attrs:{value:e.value,text:e.text}})})),1)],1),l("template",{slot:"codeContainer"},[e._v('\n<template lang="html">\n    <div class="con-select-example">\n\n    <vs-select\n      placeholder="Select"\n      class="selectExample"\n      label="Multiple"\n      label-placeholder="vs-Multiple"\n      vs-multiple\n      v-model="select1"\n      >\n\n      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options1" />\n    </vs-select>\n\n    <vs-select\n      placeholder="Search and select"\n      class="selectExample"\n      label="Autocomplete"\n      label-placeholder="Autocomplete"\n      vs-multiple\n      autocomplete\n      v-model="select2"\n      >\n\n      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options2" />\n    </vs-select>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      select1:[],\n      select2:[],\n      options1:[\n        {text:\'IT\',value:0},\n        {text:\'Blade Runner\',value:2},\n        {text:\'Thor Ragnarok\',value:3},\n      ],\n      options2:[\n        {text: \'Square\', value: 1},\n        {text: \'Rectangle\', value: 2},\n        {text: \'Rombo\', value: 3},\n        {text: \'Romboid\', value: 4},\n        {text: \'Trapeze\', value: 5},\n        {text: \'Triangle\', value: 6},\n        {text: \'Polygon\', value: 7},\n        {text: \'Regular polygon\', value: 8},\n        {text: \'Circumference\', value: 9},\n        {text: \'Circle\', value: 10},\n        {text: \'Circular sector\', value: 11},\n        {text: \'Circular trapeze\', value: 12},\n      ]\n    }\n  }\n}\n<\/script>\n\t\t')])],2)},B=[],O={data:function(){return{select1:[],select2:[],options1:[{text:"IT",value:0},{text:"Blade Runner",value:2},{text:"Thor Ragnarok",value:3}],options2:[{text:"Square",value:1},{text:"Rectangle",value:2},{text:"Rombo",value:3},{text:"Romboid",value:4},{text:"Trapeze",value:5},{text:"Triangle",value:6},{text:"Polygon",value:7},{text:"Regular polygon",value:8},{text:"Circumference",value:9},{text:"Circle",value:10},{text:"Circular sector",value:11},{text:"Circular trapeze",value:12}]}}},G=O,I=Object(u["a"])(G,z,B,!1,null,null,null),M=I.exports,q=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("vx-card",{attrs:{title:"Validators","code-toggler":""}},[l("p",[e._v("You can add a state for example of in affirmative response to a validation with "),l("code",[e._v("success")]),e._v(" and if it is necessary to add a description or help to the user you can do it with the property "),l("code",[e._v("description")])]),l("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[l("span",[e._v("Each of the states you can change the text, for example in the case of "),l("code",[e._v("vs-danger-text")]),e._v(" for the state of danger.")])]),l("br"),l("div",{staticClass:"demo-alignment"},[l("vs-select",{staticClass:"selectExample",attrs:{success:!0,"success-text":"This field is valid",placeholder:"Select",label:"Success",multiple:""},model:{value:e.select1,callback:function(t){e.select1=t},expression:"select1"}},e._l(e.exampleOptions,(function(e,t){return l("vs-select-item",{key:t,attrs:{value:e.value,text:e.text}})})),1),l("vs-select",{staticClass:"selectExample",attrs:{danger:!0,"danger-text":"This field is invalid",placeholder:"Select",label:"Danger",multiple:""},model:{value:e.select2,callback:function(t){e.select2=t},expression:"select2"}},e._l(e.exampleOptions,(function(e,t){return l("vs-select-item",{key:t,attrs:{value:e.value,text:e.text}})})),1),l("vs-select",{staticClass:"selectExample",attrs:{warning:!0,"warning-text":"This field is invalid",placeholder:"Select",label:"Warning",multiple:""},model:{value:e.select3,callback:function(t){e.select3=t},expression:"select3"}},e._l(e.exampleOptions,(function(e,t){return l("vs-select-item",{key:t,attrs:{value:e.value,text:e.text}})})),1),l("vs-select",{staticClass:"selectExample",attrs:{"description-text":"Simple info for multiple select",placeholder:"Select",label:"Description",multiple:""},model:{value:e.select4,callback:function(t){e.select4=t},expression:"select4"}},e._l(e.exampleOptions,(function(e,t){return l("vs-select-item",{key:t,attrs:{value:e.value,text:e.text}})})),1)],1),l("template",{slot:"codeContainer"},[e._v('\n<template lang="html">\n  <div class="con-select-example">\n\n    <vs-select\n     :success="true"\n      success-text="This field is valid"\n      placeholder="Select"\n      class="selectExample"\n      label="Success"\n      multiple\n      v-model="select1"\n      >\n      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in exampleOptions" />\n    </vs-select>\n\n    <vs-select\n      :danger="true"\n      danger-text="This field is invalid"\n      placeholder="Select"\n      class="selectExample"\n      label="Danger"\n      multiple\n      v-model="select2"\n      >\n      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in exampleOptions" />\n    </vs-select>\n\n    <vs-select\n      :warning="true"\n      warning-text="This field is invalid"\n      placeholder="Select"\n      class="selectExample"\n      label="Warning"\n      multiple\n      v-model="select3"\n      >\n      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in exampleOptions" />\n    </vs-select>\n\n    <vs-select\n      description-text="Simple info for multiple select"\n      placeholder="Select"\n      class="selectExample"\n      label="Description"\n      multiple\n      v-model="select4"\n      >\n      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in exampleOptions" />\n    </vs-select>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      select1:[],\n      select2:[],\n      select3:[],\n      select4:[],\n      exampleOptions:[\n        {text: \'Square\', value: 1},\n        {text: \'Rectangle\', value: 2},\n        {text: \'Rombo\', value: 3},\n        {text: \'Romboid\', value: 4},\n        {text: \'Trapeze\', value: 5},\n        {text: \'Triangle\', value: 6},\n        {text: \'Polygon\', value: 7},\n        {text: \'Regular polygon\', value: 8},\n        {text: \'Circumference\', value: 9},\n        {text: \'Circle\', value: 10},\n        {text: \'Circular sector\', value: 11},\n        {text: \'Circular trapeze\', value: 12},\n      ]\n    }\n  }\n}\n<\/script>\n        ')])],2)},$=[],j={data:function(){return{select1:[],select2:[],select3:[],select4:[],exampleOptions:[{text:"Square",value:1},{text:"Rectangle",value:2},{text:"Rombo",value:3},{text:"Romboid",value:4},{text:"Trapeze",value:5},{text:"Triangle",value:6},{text:"Polygon",value:7},{text:"Regular polygon",value:8},{text:"Circumference",value:9},{text:"Circle",value:10},{text:"Circular sector",value:11},{text:"Circular trapeze",value:12}]}}},D=j,F=Object(u["a"])(D,q,$,!1,null,null,null),A=F.exports,Y=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("vx-card",{attrs:{title:"Is Selected Item","code-toggler":""}},[l("p",[e._v("You can validate if an option is selected with the property "),l("code",[e._v("is-selected.sync")]),e._v(" and do with it multiple variants with changing the text of the selected options")]),l("div",{staticClass:"demo-alignment"},[l("vs-select",{staticClass:"selectExample",model:{value:e.select1,callback:function(t){e.select1=t},expression:"select1"}},e._l(e.options1,(function(t,n){return l("vs-select-item",{key:n,attrs:{"is-selected":t.isSelected,value:t.value,text:t.isSelected?t.selectedText:t.label},on:{"update:isSelected":function(l){return e.$set(t,"isSelected",l)},"update:is-selected":function(l){return e.$set(t,"isSelected",l)}}})})),1)],1),l("template",{slot:"codeContainer"},[e._v('\n<template lang="html">\n  <div class="con-select-example">\n\n    <vs-select class="selectExample" v-model="select1" >\n      <vs-select-item\n        :is-selected.sync="item.isSelected"\n        :key="index"\n        :value="item.value"\n        :text="item.isSelected?item.selectedText:item.label"\n        v-for="(item,index) in options1"\n        />\n    </vs-select>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      select1:3,\n      options1:[\n        {value: 1, label: \'label 1\', selectedText: \'show after select label 1\', isSelected: false },\n        {value: 2, label: \'label 2\', selectedText: \'show after select label 2\', isSelected: false },\n        {value: 3, label: \'label 3\', selectedText: \'show after select label 3\', isSelected: false },\n      ],\n    }\n  }\n}\n<\/script>\n\n<style>\n.selectExample {\n  margin: 10px;\n}\n.con-select-example {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.con-select .vs-select {\n  width: 100%\n}\n@media (max-width: 550px) {\n  .con-select {\n    flex-direction: column;\n  }\n  .con-select .vs-select {\n    width: 100%\n  }\n}\n</style>\n\t\t')])],2)},W=[],J={data:function(){return{select1:3,options1:[{value:1,label:"label 1",selectedText:"show after select label 1",isSelected:!1},{value:2,label:"label 2",selectedText:"show after select label 2",isSelected:!1},{value:3,label:"label 3",selectedText:"show after select label 3",isSelected:!1}]}}},L=J,V=Object(u["a"])(L,Y,W,!1,null,null,null),H=V.exports,N=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("vx-card",{attrs:{title:"Group items","code-toggler":""}},[l("p",[e._v("You can group elements with the sub component "),l("code",[e._v("vs-select-group")])]),l("div",{staticClass:"demo-alignment"},[l("vs-select",{staticClass:"selectExample",model:{value:e.select81,callback:function(t){e.select81=t},expression:"select81"}},e._l(e.options81,(function(t,n){return l("div",{key:n},[t.group?l("vs-select-group",{attrs:{title:t.title}},e._l(t.group,(function(e,t){return l("vs-select-item",{key:t,attrs:{value:e.value,text:e.text}})})),1):e._e()],1)})),0),l("vs-select",{staticClass:"selectExample",attrs:{"vs-multiple":""},model:{value:e.select82,callback:function(t){e.select82=t},expression:"select82"}},e._l(e.options82,(function(t,n){return l("div",{key:n},[t.group?l("vs-select-group",{attrs:{title:t.title}},e._l(t.group,(function(e,t){return l("vs-select-item",{key:t,attrs:{value:e.value,text:e.text}})})),1):e._e()],1)})),0),l("vs-select",{staticClass:"selectExample",attrs:{"vs-autocomplete":""},model:{value:e.select83,callback:function(t){e.select83=t},expression:"select83"}},e._l(e.options83,(function(t,n){return l("div",{key:n},[t.group?l("vs-select-group",{attrs:{title:t.title}},e._l(t.group,(function(e,t){return l("vs-select-item",{key:t,attrs:{value:e.value,text:e.text}})})),1):e._e()],1)})),0)],1),l("template",{slot:"codeContainer"},[e._v("\n<template lang=\"html\">\n  <div class=\"con-select-example\">\n\n    <vs-select class=\"selectExample\" vs-label=\"Defautl\" v-model=\"select1\">\n      <div :key=\"index\" v-for=\"(item,index) in options1\">\n\n        <vs-select-group :title=\"item.title\" v-if=\"item.group\">\n          <vs-select-item :key=\"index\" :value=\"item.value\" :text=\"item.text\" v-for=\"(item,index) in item.group\" />\n        </vs-select-group>\n\n      </div>\n    </vs-select>\n\n    <vs-select vs-multiple class=\"selectExample\" vs-label=\"Multiple\" v-model=\"select2\">\n      <div :key=\"index\" v-for=\"(item,index) in options2\">\n\n        <vs-select-group :title=\"item.title\" v-if=\"item.group\">\n          <vs-select-item :key=\"index\" :value=\"item.value\" :text=\"item.text\" v-for=\"(item,index) in item.group\" />\n        </vs-select-group>\n\n      </div>\n    </vs-select>\n\n    <vs-select vs-autocomplete class=\"selectExample\" vs-label=\"Autocomplete\" v-model=\"select3\">\n      <div :key=\"index\" v-for=\"(item,index) in options3\">\n\n        <vs-select-group :title=\"item.title\" v-if=\"item.group\">\n          <vs-select-item :key=\"index\" :value=\"item.value\" :text=\"item.text\" v-for=\"(item,index) in item.group\" />\n        </vs-select-group>\n\n      </div>\n    </vs-select>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      select1: 6,\n      select2: [6],\n      select3: ['red'],\n      options1: [{\n          title: 'Figures',\n          group: [\n            { text: 'Romboid', value: 4 },\n            { text: 'Trapeze', value: 5 },\n            { text: 'Triangle', value: 6 },\n            { text: 'Polygon', value: 7 },\n          ]\n        },\n        {\n          title: 'Colors',\n          group: [\n            { text: 'Red', value: 'red' },\n            { text: 'Green', value: 'green' },\n            { text: 'Blue', value: 'blue' },\n            { text: 'Purple', value: 'purple' },\n          ]\n        }\n      ],\n      options2: [{\n          title: 'Figures',\n          group: [\n            { text: 'Romboid', value: 4 },\n            { text: 'Trapeze', value: 5 },\n            { text: 'Triangle', value: 6 },\n            { text: 'Polygon', value: 7 },\n          ]\n        },\n        {\n          title: 'Colors',\n          group: [\n            { text: 'Red', value: 'red' },\n            { text: 'Green', value: 'green' },\n            { text: 'Blue', value: 'blue' },\n            { text: 'Purple', value: 'purple' },\n          ]\n        }\n      ],\n      options3: [{\n          title: 'Figures',\n          group: [\n            { text: 'Romboid', value: 4 },\n            { text: 'Trapeze', value: 5 },\n            { text: 'Triangle', value: 6 },\n            { text: 'Polygon', value: 7 },\n          ]\n        },\n        {\n          title: 'Colors',\n          group: [\n            { text: 'Red', value: 'red' },\n            { text: 'Green', value: 'green' },\n            { text: 'Blue', value: 'blue' },\n            { text: 'Purple', value: 'purple' },\n          ]\n        }\n      ],\n    }\n  },\n}\n<\/script>\n        ")])],2)},X=[],K={data:function(){return{select81:6,select82:[6],select83:["red"],options81:[{title:"Figures",group:[{text:"Romboid",value:4},{text:"Trapeze",value:5},{text:"Triangle",value:6},{text:"Polygon",value:7}]},{title:"Colors",group:[{text:"Red",value:"red"},{text:"Green",value:"green"},{text:"Blue",value:"blue"},{text:"Purple",value:"purple"}]}],options82:[{title:"Figures",group:[{text:"Romboid",value:4},{text:"Trapeze",value:5},{text:"Triangle",value:6},{text:"Polygon",value:7}]},{title:"Colors",group:[{text:"Red",value:"red"},{text:"Green",value:"green"},{text:"Blue",value:"blue"},{text:"Purple",value:"purple"}]}],options83:[{title:"Figures",group:[{text:"Romboid",value:4},{text:"Trapeze",value:5},{text:"Triangle",value:6},{text:"Polygon",value:7}]},{title:"Colors",group:[{text:"Red",value:"red"},{text:"Green",value:"green"},{text:"Blue",value:"blue"},{text:"Purple",value:"purple"}]}]}}},Q=K,U=Object(u["a"])(Q,N,X,!1,null,null,null),Z=U.exports,ee={components:{SelectSingleSelection:v,SelectColor:f,SelectAutocomplete:_,SelectMultiple:P,SelectLabels:M,SelectValidators:A,SelectIsSelectedItem:H,SelectGroupItems:Z}},te=ee,le=Object(u["a"])(te,n,a,!1,null,null,null);t["default"]=le.exports}}]);
//# sourceMappingURL=chunk-2d0dd9fc.bc0c7cdc.js.map