(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-371bd831"],{"13c7":function(t,a,e){"use strict";var s=e("e169"),i=e.n(s);i.a},4017:function(t,a,e){"use strict";var s=e("bd21"),i=e.n(s);i.a},4489:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"vx-timeline"},t._l(t.data,(function(a){return e("li",{key:a.title},[e("div",{staticClass:"timeline-icon",class:"bg-"+a.color},[e("feather-icon",{attrs:{icon:a.icon,svgClasses:"text-white stroke-current w-5 h-5"}})],1),e("div",{staticClass:"timeline-info"},[e("p",{staticClass:"font-semibold"},[t._v(t._s(a.title))]),e("span",{staticClass:"activity-desc"},[t._v(t._s(a.desc))])]),e("small",{staticClass:"text-grey activity-e-time"},[t._v(t._s(a.time))])])})),0)},i=[],c={name:"vx-timeline",props:{data:{type:Array,required:!0}}},r=c,n=(e("13c7"),e("2877")),o=Object(n["a"])(r,s,i,!1,null,null,null);a["a"]=o.exports},bd21:function(t,a,e){},e169:function(t,a,e){},fad4:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"dashboard-analytics"}},[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full"},[e("div",{staticClass:"vx-col w-full lg:w-1/1 mb-base"},[e("vx-card",{staticClass:"text-center bg-primary-gradient greet-user",attrs:{slot:"no-body"},slot:"no-body"},[e("h1",{staticClass:"mb-6 text-white"},[t._v("You have logged-In Finance Department,")]),e("p",{staticClass:"xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5 mx-auto text-white"},[t._v("Tripcarte.Asia progress "),e("strong",[t._v(t._s(t.checkpointReward.progress))]),t._v(" more sales today. Check your new badge in your profile.")])])],1)]),e("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"},[e("vs-button",{staticClass:"shadow-md w-full lg:mt-0 mt-4",attrs:{"icon-pack":"feather",icon:"icon-chevrons-right","icon-after":"",href:"/apps/todo/all"}},[t._v("View Details")]),e("statistics-card-line",{attrs:{icon:"BookIcon",statistic:"12k",statisticTitle:"Total Reviews Collected",chartData:t.subscribersGained.series,type:"area"}})],1),e("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"},[e("vs-button",{staticClass:"shadow-md w-full lg:mt-0 mt-4",attrs:{"icon-pack":"feather",icon:"icon-chevrons-right","icon-after":"",href:"/ui-elements/ag-grid-table"}},[t._v("View Details")]),e("statistics-card-line",{attrs:{icon:"ShoppingBagIcon",statistic:"350 tickets.+ 15% ",statisticTitle:"Total Redemption this Week",chartData:t.ordersRecevied.series,color:"warning",type:"area"}})],1),e("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"},[e("div"),e("vx-card",[e("statistics-card-line",{attrs:{icon:"ActivityIcon",statistic:"14k",statisticTitle:"Total Redemption this Year",chartData:t.subscribersGained.series,type:"area"}})],1)],1),e("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"},[e("div"),e("vx-card",[e("statistics-card-line",{attrs:{icon:"BookmarkIcon",statistic:"Myr 3200 ",statisticTitle:"Total Pending Payout",chartData:t.ordersRecevied.series,color:"warning",type:"area"}})],1)],1)]),e("div",{staticClass:"vx-row"}),e("div",[t._v("-----Tripcarte.Asia Finance Dashboard Prototype Development Ver-0.0.1")])])},i=[],c=e("1321"),r=e.n(c),n=e("43ca"),o=e("da24"),l=e("5f88"),d=e("4489"),u={data:function(){return{checkpointReward:{},subscribersGained:{},ordersRecevied:{},salesBarSession:{},supportTracker:{},productsOrder:{},salesRadar:{},timelineData:[{color:"primary",icon:"PlusIcon",title:"Client Meeting",desc:"Bonbon macaroon jelly beans gummi bears jelly lollipop apple",time:"25 mins Ago"},{color:"warning",icon:"MailIcon",title:"Email Newsletter",desc:"Cupcake gummi bears soufflé caramels candy",time:"15 Days Ago"},{color:"danger",icon:"UsersIcon",title:"Plan Webinar",desc:"Candy ice cream cake. Halvah gummi bears",time:"20 days ago"},{color:"success",icon:"LayoutIcon",title:"Launch Website",desc:"Candy ice cream cake. Halvah gummi bears Cupcake gummi bears soufflé caramels candy.",time:"25 days ago"},{color:"primary",icon:"TvIcon",title:"Marketing",desc:"Candy ice cream cake. Halvah gummi bears Cupcake gummi bears.",time:"28 days ago"}],analyticsData:o["a"],dispatchedOrders:[]}},components:{VueApexCharts:r.a,StatisticsCardLine:n["a"],ChangeTimeDurationDropdown:l["a"],VxTimeline:d["a"]},created:function(){var t=this;this.$http.get("/api/user/checkpoint-reward").then((function(a){t.checkpointReward=a.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-statistics/subscribers").then((function(a){t.subscribersGained=a.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-statistics/orders").then((function(a){t.ordersRecevied=a.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-analytics/sales/bar").then((function(a){t.salesBarSession=a.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-analytics/support-tracker").then((function(a){t.supportTracker=a.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-analytics/products-orders").then((function(a){t.productsOrder=a.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-analytics/sales/radar").then((function(a){t.salesRadar=a.data})).catch((function(t){console.log(t)})),this.$http.get("/api/table/dispatched-orders").then((function(a){t.dispatchedOrders=a.data})).catch((function(t){console.log(t)}))}},p=u,h=(e("4017"),e("2877")),m=Object(h["a"])(p,s,i,!1,null,null,null);a["default"]=m.exports}}]);
//# sourceMappingURL=chunk-371bd831.1e4b7aae.js.map