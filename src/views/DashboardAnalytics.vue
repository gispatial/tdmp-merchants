<!-- =========================================================================================
  File Name: DashboardAnalytics.vue
  Description: Dashboard Analytics
  ----------------------------------------------------------------------------------------
	Item Name: TDMP - NETQUEST SOLUTIONS SB
	Author: TripcarteDev
	Author URL: http://tripcarte.gispatial.now.sh/
========================================================================================== -->

<template>
  <div id="dashboard-analytics">
    <div class="vx-row">
    <!-- CARD 1: CONGRATS -->
    <div class="vx-col w-full">
      <div class="vx-col w-full lg:w-1/1 mb-base">
        <vx-card slot="no-body" class="text-center bg-primary-gradient greet-user">
          <h1 class="mb-6 text-white">Congratulations {{ checkpointReward.userName }},</h1>
          <p class="xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5 mx-auto text-white">You have done <strong>{{ checkpointReward.progress }}</strong> more sales today. Check your new badge in your profile.</p>
        </vx-card>
        </div>
        </div>


      <!-- CARD 2: SUBSCRIBERS GAINED -->
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
      <vs-button icon-pack="feather" icon="icon-chevrons-right" icon-after class="shadow-md w-full lg:mt-0 mt-4" href="/apps/todo/all">View Details</vs-button>
        <statistics-card-line icon="BookIcon" statistic="12k" statisticTitle="Total Reviews Collected" :chartData="subscribersGained.series" type='area'></statistics-card-line>
      </div>

      <!-- CARD 3: ORDER RECIEVED -->
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
      <vs-button icon-pack="feather" icon="icon-chevrons-right" icon-after class="shadow-md w-full lg:mt-0 mt-4" href="/ui-elements/ag-grid-table">View Details</vs-button>
        <statistics-card-line icon="ShoppingBagIcon" statistic="350 tickets.+ 15% " statisticTitle="Total Redemption this Week" :chartData="ordersRecevied.series" color='warning' type='area'></statistics-card-line>
      </div>

      <!-- CARD 2: SUBSCRIBERS GAINED -->
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
      <div>
      </div>
      <vx-card>
        <statistics-card-line icon="ActivityIcon" statistic="14k" statisticTitle="Total Redemption this Year" :chartData="subscribersGained.series" type='area'></statistics-card-line>
        </vx-card>
      </div>

      <!-- CARD 3: ORDER RECIEVED -->
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
      <div>
      </div>
      <vx-card>
        <statistics-card-line icon="BookmarkIcon" statistic="Myr 3200 " statisticTitle="Total Pending Payout" :chartData="ordersRecevied.series" color='warning' type='area'></statistics-card-line>
        </vx-card>
      </div>
    </div>

    <div class="vx-row">

    </div>
    <div>-----Tripcarte.Asia Merchants Dashboard Prototype Development Ver-0.0.1</div>

  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import analyticsData from './ui-elements/card/analyticsData.js'
import ChangeTimeDurationDropdown from '@/components/ChangeTimeDurationDropdown.vue'
import VxTimeline from "@/components/timeline/VxTimeline"

export default {
    data() {
        return {
            checkpointReward: {},
            subscribersGained: {},
            ordersRecevied: {},
            salesBarSession: {},
            supportTracker: {},
            productsOrder: {},
            salesRadar: {},

            timelineData: [
              {
                color: "primary",
                icon: "PlusIcon",
                title: "Client Meeting",
                desc: "Bonbon macaroon jelly beans gummi bears jelly lollipop apple",
                time: "25 mins Ago"
              },
              {
                color: "warning",
                icon: "MailIcon",
                title: "Email Newsletter",
                desc: "Cupcake gummi bears soufflé caramels candy",
                time: "15 Days Ago"
              },
              {
                color: "danger",
                icon: "UsersIcon",
                title: "Plan Webinar",
                desc: "Candy ice cream cake. Halvah gummi bears",
                time: "20 days ago"
              },
              {
                color: "success",
                icon: "LayoutIcon",
                title: "Launch Website",
                desc: "Candy ice cream cake. Halvah gummi bears Cupcake gummi bears soufflé caramels candy.",
                time: "25 days ago"
              },
              {
                color: "primary",
                icon: "TvIcon",
                title: "Marketing",
                desc: "Candy ice cream cake. Halvah gummi bears Cupcake gummi bears.",
                time: "28 days ago"
              }
            ],


            analyticsData: analyticsData,
            dispatchedOrders: [],
        }
    },
    components: {
        VueApexCharts,
        StatisticsCardLine,
        ChangeTimeDurationDropdown,
        VxTimeline
    },
    created() {
      //  User Reward Card
      this.$http.get("/api/user/checkpoint-reward")
        .then((response) => { this.checkpointReward = response.data })
        .catch((error)   => { console.log(error) })

      // Subscribers gained - Statistics
      this.$http.get("/api/card/card-statistics/subscribers")
        .then((response) => { this.subscribersGained = response.data })
        .catch((error)   => { console.log(error) })

      // Orders - Statistics
      this.$http.get("/api/card/card-statistics/orders")
        .then((response) => { this.ordersRecevied = response.data })
        .catch((error)   => { console.log(error) })

      // Sales bar - Analytics
      this.$http.get("/api/card/card-analytics/sales/bar")
        .then((response) => { this.salesBarSession = response.data })
        .catch((error)   => { console.log(error) })

      // Support Tracker
      this.$http.get("/api/card/card-analytics/support-tracker")
        .then((response) => { this.supportTracker = response.data })
        .catch((error)   => { console.log(error) })

      // Products Order
      this.$http.get("/api/card/card-analytics/products-orders")
        .then((response) => { this.productsOrder = response.data })
        .catch((error)   => { console.log(error) })

      // Sales Radar
      this.$http.get("/api/card/card-analytics/sales/radar")
        .then((response) => { this.salesRadar = response.data })
        .catch((error)   => { console.log(error) })

      // Dispatched Orders
      this.$http.get("/api/table/dispatched-orders")
        .then((response) => { this.dispatchedOrders = response.data })
        .catch((error)   => { console.log(error) })
    }
}
</script>

<style lang="scss">
/*! rtl:begin:ignore */
#dashboard-analytics {
  .greet-user{
    position: relative;

    .decore-left{
      position: absolute;
      left:0;
      top: 0;
    }
    .decore-right{
      position: absolute;
      right:0;
      top: 0;
    }
  }

  @media(max-width: 576px) {
    .decore-left, .decore-right{
      width: 140px;
    }
  }
}
/*! rtl:end:ignore */
</style>
