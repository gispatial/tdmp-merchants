(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f417c5e4"],{"4faa":function(a,e,t){"use strict";var s={users:[]},l=(t("20d6"),{SET_USERS:function(a,e){a.users=e},REMOVE_RECORD:function(a,e){var t=a.users.findIndex((function(a){return a.id==e}));a.users.splice(t,1)}}),r=t("bb36"),i={fetchUsers:function(a){var e=a.commit;return new Promise((function(a,t){r["a"].get("/api/user-management/users").then((function(t){e("SET_USERS",t.data),a(t)})).catch((function(a){t(a)}))}))},fetchUser:function(a,e){return new Promise((function(a,t){r["a"].get("/api/user-management/users/".concat(e)).then((function(e){a(e)})).catch((function(a){t(a)}))}))},removeRecord:function(a,e){var t=a.commit;return new Promise((function(a,s){r["a"].delete("/api/user-management/users/".concat(e)).then((function(s){t("REMOVE_RECORD",e),a(s)})).catch((function(a){s(a)}))}))}},o={};e["a"]={isRegistered:!1,namespaced:!0,state:s,mutations:l,actions:i,getters:o}},f762:function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"page-user-edit"}},[t("vs-alert",{attrs:{color:"danger",title:"User Not Found",active:a.user_not_found},on:{"update:active":function(e){a.user_not_found=e}}},[t("span",[a._v("User record with id: "+a._s(a.$route.params.userId)+" not found. ")]),t("span",[t("span",[a._v("Check ")]),t("router-link",{staticClass:"text-inherit underline",attrs:{to:{name:"page-user-list"}}},[a._v("All Users")])],1)]),a.user_data?t("vx-card",[t("div",{staticClass:"tabs-container px-6 pt-6",attrs:{slot:"no-body"},slot:"no-body"},[t("vs-tabs",{staticClass:"tab-action-btn-fill-conatiner",model:{value:a.activeTab,callback:function(e){a.activeTab=e},expression:"activeTab"}},[t("vs-tab",{attrs:{label:"Account","icon-pack":"feather",icon:"icon-user"}},[t("div",{staticClass:"tab-text"},[t("user-edit-tab-account",{staticClass:"mt-4",attrs:{data:a.user_data}})],1)]),t("vs-tab",{attrs:{label:"Information","icon-pack":"feather",icon:"icon-info"}},[t("div",{staticClass:"tab-text"},[t("user-edit-tab-information",{staticClass:"mt-4",attrs:{data:a.user_data}})],1)]),t("vs-tab",{attrs:{label:"Social","icon-pack":"feather",icon:"icon-share-2"}},[t("div",{staticClass:"tab-text"},[t("user-edit-tab-social",{staticClass:"mt-4",attrs:{data:a.user_data}})],1)])],1)],1)]):a._e()],1)},l=[],r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"user-edit-tab-info"}},[t("div",{staticClass:"vx-row"},[t("div",{staticClass:"vx-col w-full"},[t("div",{staticClass:"flex items-start flex-col sm:flex-row"},[t("img",{staticClass:"mr-8 rounded h-24 w-24",attrs:{src:a.data.avatar}}),t("div",[t("p",{staticClass:"text-lg font-medium mb-2 mt-4 sm:mt-0"},[a._v(a._s(a.data.name))]),t("input",{ref:"update_avatar_input",staticClass:"hidden",attrs:{type:"file",accept:"image/*"},on:{change:a.update_avatar}}),t("vs-button",{staticClass:"mr-4 mb-4"},[a._v("Change Avatar")]),t("vs-button",{attrs:{type:"border",color:"danger"}},[a._v("Remove Avatar")])],1)])])]),t("div",{staticClass:"vx-row"},[t("div",{staticClass:"vx-col md:w-1/2 w-full"},[t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha_num",expression:"'required|alpha_num'"}],staticClass:"w-full mt-4",attrs:{label:"Username",name:"username"},model:{value:a.data_local.username,callback:function(e){a.$set(a.data_local,"username",e)},expression:"data_local.username"}}),t("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("username"),expression:"errors.has('username')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("username")))]),t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha_spaces",expression:"'required|alpha_spaces'"}],staticClass:"w-full mt-4",attrs:{label:"Name",name:"name"},model:{value:a.data_local.name,callback:function(e){a.$set(a.data_local,"name",e)},expression:"data_local.name"}}),t("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("name"),expression:"errors.has('name')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("name")))]),t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"w-full mt-4",attrs:{label:"Email",type:"email",name:"email"},model:{value:a.data_local.email,callback:function(e){a.$set(a.data_local,"email",e)},expression:"data_local.email"}}),t("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("email"),expression:"errors.has('email')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("email")))])],1),t("div",{staticClass:"vx-col md:w-1/2 w-full"},[t("div",{staticClass:"mt-4"},[t("label",{staticClass:"vs-input--label"},[a._v("Status")]),t("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{clearable:!1,options:a.statusOptions,name:"status",dir:a.$vs.rtl?"rtl":"ltr"},model:{value:a.status_local,callback:function(e){a.status_local=e},expression:"status_local"}}),t("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("status"),expression:"errors.has('status')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("status")))])],1),t("div",{staticClass:"mt-4"},[t("label",{staticClass:"vs-input--label"},[a._v("Role")]),t("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{clearable:!1,options:a.roleOptions,name:"role",dir:a.$vs.rtl?"rtl":"ltr"},model:{value:a.role_local,callback:function(e){a.role_local=e},expression:"role_local"}}),t("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("role"),expression:"errors.has('role')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("role")))])],1),t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"alpha_spaces",expression:"'alpha_spaces'"}],staticClass:"w-full mt-4",attrs:{label:"Company",name:"company"},model:{value:a.data_local.company,callback:function(e){a.$set(a.data_local,"company",e)},expression:"data_local.company"}}),t("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("company"),expression:"errors.has('company')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("company")))])],1)]),t("vx-card",{staticClass:"mt-base",attrs:{"no-shadow":"","card-border":""}},[t("div",{staticClass:"vx-row"},[t("div",{staticClass:"vx-col w-full"},[t("div",{staticClass:"flex items-end px-3"},[t("feather-icon",{staticClass:"mr-2",attrs:{svgClasses:"w-6 h-6",icon:"LockIcon"}}),t("span",{staticClass:"font-medium text-lg leading-none"},[a._v("Permissions")])],1),t("vs-divider")],1)]),t("div",{staticClass:"block overflow-x-auto"},[t("table",{staticClass:"w-full"},[t("tr",a._l(["Module","Read","Write","Create","Delete"],(function(e){return t("th",{key:e,staticClass:"font-semibold text-base text-left px-3 py-2"},[a._v(a._s(e))])})),0),a._l(a.data_local.permissions,(function(e,s){return t("tr",{key:s},[t("td",{staticClass:"px-3 py-2"},[a._v(a._s(s))]),a._l(e,(function(s,l){return t("td",{key:l+s,staticClass:"px-3 py-2"},[t("vs-checkbox",{model:{value:e[l],callback:function(t){a.$set(e,l,t)},expression:"val[name]"}})],1)}))],2)}))],2)])]),t("div",{staticClass:"vx-row"},[t("div",{staticClass:"vx-col w-full"},[t("div",{staticClass:"mt-8 flex flex-wrap items-center justify-end"},[t("vs-button",{staticClass:"ml-auto mt-2",attrs:{disabled:!a.validateForm},on:{click:a.save_changes}},[a._v("Save Changes")]),t("vs-button",{staticClass:"ml-4 mt-2",attrs:{type:"border",color:"warning"},on:{click:a.reset_data}},[a._v("Reset")])],1)])])],1)},i=[],o=t("4a7a"),n=t.n(o),c={components:{vSelect:n.a},props:{data:{type:Object,required:!0}},data:function(){return{data_local:JSON.parse(JSON.stringify(this.data)),statusOptions:[{label:"Active",value:"active"},{label:"Blocked",value:"blocked"},{label:"Deactivated",value:"deactivated"}],roleOptions:[{label:"Admin",value:"admin"},{label:"User",value:"user"},{label:"Staff",value:"staff"}]}},computed:{status_local:{get:function(){return{label:this.capitalize(this.data_local.status),value:this.data_local.status}},set:function(a){this.data_local.status=a.value}},role_local:{get:function(){return{label:this.capitalize(this.data_local.role),value:this.data_local.role}},set:function(a){this.data_local.role=a.value}},validateForm:function(){return!this.errors.any()}},methods:{capitalize:function(a){return a.slice(0,1).toUpperCase()+a.slice(1,a.length)},save_changes:function(){this.validateForm},reset_data:function(){this.data_local=JSON.parse(JSON.stringify(this.data))},update_avatar:function(){}}},d=c,u=t("2877"),v=Object(u["a"])(d,r,i,!1,null,null,null),m=v.exports,_=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"user-edit-tab-info"}},[t("div",{staticClass:"vx-row"},[t("div",{staticClass:"vx-col w-full md:w-1/2"},[t("div",{staticClass:"flex items-end"},[t("feather-icon",{staticClass:"mr-2",attrs:{icon:"UserIcon",svgClasses:"w-5 h-5"}}),t("span",{staticClass:"leading-none font-medium"},[a._v("Personal Information")])],1),t("div",[t("div",{staticClass:"mt-4"},[t("label",{staticClass:"text-sm"},[a._v("Birth Date")]),t("flat-pickr",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{config:{dateFormat:"d F Y",maxDate:new Date},name:"dob"},model:{value:a.data_local.dob,callback:function(e){a.$set(a.data_local,"dob",e)},expression:"data_local.dob"}}),t("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("dob"),expression:"errors.has('dob')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("dob")))])],1),t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:{regex:"^\\+?([0-9]+)$"},expression:"{regex: '^\\\\+?([0-9]+)$' }"}],staticClass:"w-full mt-4",attrs:{label:"Mobile",name:"mobile"},model:{value:a.data_local.mobile,callback:function(e){a.$set(a.data_local,"mobile",e)},expression:"data_local.mobile"}}),t("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("mobile"),expression:"errors.has('mobile')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("mobile")))]),t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"url:require_protocol",expression:"'url:require_protocol'"}],staticClass:"w-full mt-4",attrs:{label:"Website",name:"website","data-vv-as":"field"},model:{value:a.data_local.website,callback:function(e){a.$set(a.data_local,"website",e)},expression:"data_local.website"}}),t("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("website"),expression:"errors.has('website')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("website")))]),t("div",{staticClass:"mt-4"},[t("label",{staticClass:"text-sm"},[a._v("Languages")]),t("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{multiple:"",closeOnSelect:!1,options:a.langOptions,name:"lang_known",dir:a.$vs.rtl?"rtl":"ltr"},model:{value:a.data_local.languages_known,callback:function(e){a.$set(a.data_local,"languages_known",e)},expression:"data_local.languages_known"}}),t("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("lang_known"),expression:"errors.has('lang_known')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("lang_known")))])],1),t("div",{staticClass:"mt-4"},[t("label",{staticClass:"text-sm"},[a._v("Gender")]),t("div",{staticClass:"mt-2"},[t("vs-radio",{staticClass:"mr-4",attrs:{"vs-value":"male"},model:{value:a.data_local.gender,callback:function(e){a.$set(a.data_local,"gender",e)},expression:"data_local.gender"}},[a._v("Male")]),t("vs-radio",{staticClass:"mr-4",attrs:{"vs-value":"female"},model:{value:a.data_local.gender,callback:function(e){a.$set(a.data_local,"gender",e)},expression:"data_local.gender"}},[a._v("Female")]),t("vs-radio",{attrs:{"vs-value":"other"},model:{value:a.data_local.gender,callback:function(e){a.$set(a.data_local,"gender",e)},expression:"data_local.gender"}},[a._v("Other")])],1)]),t("div",{staticClass:"mt-6"},[t("label",[a._v("Contact Options")]),t("div",{staticClass:"flex flex-wrap mt-1"},[t("vs-checkbox",{staticClass:"mr-4 mb-2",attrs:{"vs-value":"email"},model:{value:a.data_local.contact_options,callback:function(e){a.$set(a.data_local,"contact_options",e)},expression:"data_local.contact_options"}},[a._v("Email")]),t("vs-checkbox",{staticClass:"mr-4 mb-2",attrs:{"vs-value":"message"},model:{value:a.data_local.contact_options,callback:function(e){a.$set(a.data_local,"contact_options",e)},expression:"data_local.contact_options"}},[a._v("Message")]),t("vs-checkbox",{staticClass:" mb-2",attrs:{"vs-value":"Phone"},model:{value:a.data_local.contact_options,callback:function(e){a.$set(a.data_local,"contact_options",e)},expression:"data_local.contact_options"}},[a._v("Phone")])],1)])],1)]),t("div",{staticClass:"vx-col w-full md:w-1/2"},[t("div",{staticClass:"flex items-end md:mt-0 mt-base"},[t("feather-icon",{staticClass:"mr-2",attrs:{icon:"MapPinIcon",svgClasses:"w-5 h-5"}}),t("span",{staticClass:"leading-none font-medium"},[a._v("Address")])],1),t("div",[t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-4",attrs:{label:"Address Line 1",name:"addd_line_1"},model:{value:a.data_local.location.add_line_1,callback:function(e){a.$set(a.data_local.location,"add_line_1",e)},expression:"data_local.location.add_line_1"}}),t("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("addd_line_1"),expression:"errors.has('addd_line_1')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("addd_line_1")))]),t("vs-input",{staticClass:"w-full mt-4",attrs:{label:"Address Line 2"},model:{value:a.data_local.location.add_line_2,callback:function(e){a.$set(a.data_local.location,"add_line_2",e)},expression:"data_local.location.add_line_2"}}),t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"}],staticClass:"w-full mt-4",attrs:{label:"Post Code",name:"post_code"},model:{value:a.data_local.location.post_code,callback:function(e){a.$set(a.data_local.location,"post_code",e)},expression:"data_local.location.post_code"}}),t("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("post_code"),expression:"errors.has('post_code')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("post_code")))]),t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha",expression:"'required|alpha'"}],staticClass:"w-full mt-4",attrs:{label:"City",name:"city"},model:{value:a.data_local.location.city,callback:function(e){a.$set(a.data_local.location,"city",e)},expression:"data_local.location.city"}}),t("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("city"),expression:"errors.has('city')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("city")))]),t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha",expression:"'required|alpha'"}],staticClass:"w-full mt-4",attrs:{label:"State",name:"state"},model:{value:a.data_local.location.state,callback:function(e){a.$set(a.data_local.location,"state",e)},expression:"data_local.location.state"}}),t("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("state"),expression:"errors.has('state')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("state")))]),t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha",expression:"'required|alpha'"}],staticClass:"w-full mt-4",attrs:{label:"Country",name:"country"},model:{value:a.data_local.location.country,callback:function(e){a.$set(a.data_local.location,"country",e)},expression:"data_local.location.country"}}),t("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("country"),expression:"errors.has('country')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("country")))])],1)])]),t("div",{staticClass:"vx-row"},[t("div",{staticClass:"vx-col w-full"},[t("div",{staticClass:"mt-8 flex flex-wrap items-center justify-end"},[t("vs-button",{staticClass:"ml-auto mt-2",attrs:{disabled:!a.validateForm},on:{click:a.save_changes}},[a._v("Save Changes")]),t("vs-button",{staticClass:"ml-4 mt-2",attrs:{type:"border",color:"warning"},on:{click:a.reset_data}},[a._v("Reset")])],1)])])])},p=[],f=t("c38f"),h=t.n(f),b=(t("0952b"),{components:{vSelect:n.a,flatPickr:h.a},props:{data:{type:Object,required:!0}},data:function(){return{data_local:JSON.parse(JSON.stringify(this.data)),langOptions:[{label:"English",value:"english"},{label:"Spanish",value:"spanish"},{label:"Malay",value:"Malay"},{label:"Russian",value:"russian"},{label:"Chinese",value:"Chinese"},{label:"Arabic",value:"arabic"},{label:"Sanskrit",value:"sanskrit"}]}},computed:{validateForm:function(){return!this.errors.any()}},methods:{save_changes:function(){this.validateForm},reset_data:function(){this.data_local=Object.assign({},this.data)}}}),w=b,x=Object(u["a"])(w,_,p,!1,null,null,null),C=x.exports,g=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"user-edit-tab-info"}},[t("div",{staticClass:"vx-row"},[t("div",{staticClass:"vx-col w-full md:w-1/2"},[t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"url:require_protocol",expression:"'url:require_protocol'"}],staticClass:"w-full",attrs:{"icon-pack":"feather",icon:"icon-twitter",label:"Twitter","icon-no-border":"",name:"twitter"},model:{value:a.data_local.social_links.twitter,callback:function(e){a.$set(a.data_local.social_links,"twitter",e)},expression:"data_local.social_links.twitter"}}),t("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("twitter"),expression:"errors.has('twitter')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("twitter")))]),t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"url:require_protocol",expression:"'url:require_protocol'"}],staticClass:"w-full mt-4",attrs:{"icon-pack":"feather",icon:"icon-facebook",label:"Facebook","icon-no-border":"",name:"facebook"},model:{value:a.data_local.social_links.facebook,callback:function(e){a.$set(a.data_local.social_links,"facebook",e)},expression:"data_local.social_links.facebook"}}),t("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("facebook"),expression:"errors.has('facebook')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("facebook")))]),t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"url:require_protocol",expression:"'url:require_protocol'"}],staticClass:"w-full mt-4",attrs:{"icon-pack":"feather",icon:"icon-instagram",label:"Instagram","icon-no-border":"",name:"instagram"},model:{value:a.data_local.social_links.instagram,callback:function(e){a.$set(a.data_local.social_links,"instagram",e)},expression:"data_local.social_links.instagram"}}),t("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("instagram"),expression:"errors.has('instagram')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("instagram")))])],1),t("div",{staticClass:"vx-col w-full md:w-1/2"},[t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"url:require_protocol",expression:"'url:require_protocol'"}],staticClass:"w-full mt-4 md:mt-0",attrs:{"icon-pack":"feather",icon:"icon-github",label:"GitHub","icon-no-border":"",name:"github"},model:{value:a.data_local.social_links.github,callback:function(e){a.$set(a.data_local.social_links,"github",e)},expression:"data_local.social_links.github"}}),t("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("github"),expression:"errors.has('github')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("github")))]),t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"url:require_protocol",expression:"'url:require_protocol'"}],staticClass:"w-full mt-4",attrs:{"icon-pack":"feather",icon:"icon-codepen",label:"CodePen","icon-no-border":"",name:"codepen"},model:{value:a.data_local.social_links.codepen,callback:function(e){a.$set(a.data_local.social_links,"codepen",e)},expression:"data_local.social_links.codepen"}}),t("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("codepen"),expression:"errors.has('codepen')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("codepen")))]),t("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"url:require_protocol",expression:"'url:require_protocol'"}],staticClass:"w-full mt-4",attrs:{"icon-pack":"feather",icon:"icon-slack",label:"Slack","icon-no-border":"",name:"slack"},model:{value:a.data_local.social_links.slack,callback:function(e){a.$set(a.data_local.social_links,"slack",e)},expression:"data_local.social_links.slack"}}),t("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("slack"),expression:"errors.has('slack')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("slack")))])],1)]),t("div",{staticClass:"vx-row"},[t("div",{staticClass:"vx-col w-full"},[t("div",{staticClass:"mt-8 flex flex-wrap items-center justify-end"},[t("vs-button",{staticClass:"ml-auto mt-2",attrs:{disabled:!a.validateForm},on:{click:a.save_changes}},[a._v("Save Changes")]),t("vs-button",{staticClass:"ml-4 mt-2",attrs:{type:"border",color:"warning"},on:{click:a.reset_data}},[a._v("Reset")])],1)])])])},k=[],N={props:{data:{type:Object,required:!0}},data:function(){return{data_local:JSON.parse(JSON.stringify(this.data))}},computed:{validateForm:function(){return!this.errors.any()}},methods:{save_changes:function(){this.validateForm},reset_data:function(){this.data_local=Object.assign({},this.data)}}},y=N,q=Object(u["a"])(y,g,k,!1,null,null,null),$=q.exports,O=t("4faa"),S={components:{UserEditTabAccount:m,UserEditTabInformation:C,UserEditTabSocial:$},data:function(){return{user_data:null,user_not_found:!1,activeTab:0}},watch:{activeTab:function(){this.fetch_user_data(this.$route.params.userId)}},methods:{fetch_user_data:function(a){var e=this;this.$store.dispatch("userManagement/fetchUser",a).then((function(a){e.user_data=a.data})).catch((function(a){404!==a.response.status?console.error(a):e.user_not_found=!0}))}},created:function(){O["a"].isRegistered||(this.$store.registerModule("userManagement",O["a"]),O["a"].isRegistered=!0),this.fetch_user_data(this.$route.params.userId)}},E=S,R=Object(u["a"])(E,s,l,!1,null,null,null);e["default"]=R.exports}}]);
//# sourceMappingURL=chunk-f417c5e4.24108232.js.map