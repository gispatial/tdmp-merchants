/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Tripcarte.Asia Dashboard Management Portal
  Developer: Tripcarte Development Team
  Author URL: http://tripcarte.asia/
==========================================================================================*/


export default [
  // {
  //   url: "/apps/email",
  //   name: "Email",
  //   slug: "email",
  //   icon: "MailIcon",
  //   i18n: "Email",
  // },

  {
    header: "UI",
    icon: "LayersIcon",
    i18n: "UI",
    items: [
    {
      url: null,
      name: "Colors",
      slug: "colors",
      icon: "ListIcon",
      i18n: "Colors",
    },
    {
      url: null,
      name: "Finance",
      tag: "new",
      tagColor: "primary",
      icon: "FolderIcon",
      i18n: "Finance",
      submenu: [
        {
          url: '/dashboard/ecommerce',
          name: "ADMIN DASHBOARD",
          icon: "AwardIcon",
          slug: "extra-component-charts-echarts",
          i18n: "ADMIN DASHBOARD",
       },
       {
         url: '/ui-elements/ag-grid-table',
         name: "Payouts",
         slug: "extra-component-charts-echarts",
         i18n: "Payouts",
      },
      ]
    },
    {
      url: null,
      name: "Customer Service",
      tag: "new",
      tagColor: "primary",
      icon: "FolderIcon",
      i18n: "Customer Service",
      submenu: [
        {
          url: '/dashboard/ecommerce',
          name: "ADMIN DASHBOARD",
          icon: "AwardIcon",
          slug: "extra-component-charts-echarts",
          i18n: "ADMIN DASHBOARD",
       },
       {
         url: '/ui-elements/ag-grid-table',
         name: "Payouts",
         slug: "extra-component-charts-echarts",
         i18n: "Payouts",
      },
      ]
    },
      {
        url: null,
        name: "Management",
        tag: "new",
        tagColor: "primary",
        icon: "FolderIcon",
        i18n: "Management",
        submenu: [
          {
            url: '/dashboard/ecommerce',
            name: "ADMIN DASHBOARD",
            icon: "AwardIcon",
            slug: "extra-component-charts-echarts",
            i18n: "ADMIN DASHBOARD",
         },
         {
           url: '/ui-elements/ag-grid-table',
           name: "Payouts",
           slug: "extra-component-charts-echarts",
           i18n: "Payouts",
        },
        ]
      },{
        url: null,
        name: "Admin User Profile",
        icon: "UsersIcon",
        i18n: "Admin User Profile",
        submenu: [
          {
            url: '/apps/user/user-list',
            name: "User Management",
            icon: "UserIcon",
            slug: "app-user-list",
            i18n: "User Management",
          },
          {
            url: '/apps/user/user-view/268',
            name: "User Profile Update",
            icon: "SettingIcon",
            slug: "app-user-view",
            i18n: "User Profile Update",
          },
          {
            url: '/apps/user/user-edit/268',
            name: "Update all Users",
            slug: "app-user-edit",
            i18n: "Update all Users",
          },
        ]
      },
      {
        url: null,
        name: "Product Listing",
        icon: "EditIcon",
        i18n: "Product Listing",
        submenu: [
          // {
          //   name: "Import/Export",
          //   i18n: "Import/Export",
          //   submenu: [

          //   ]
          // },
          {
            url: "/ui-elements/data-list/thumb-view",
            name: "Point of Sale(POS)",
            icon: "HomeIcon",
            slug: "import",
            i18n: "Point of Sale(POS)"
          },
          {
            url: "/ui-elements/data-list/list-view",
            name: "Item Listings",
            icon: "HomeIcon",
            slug: "export",
            i18n: "Item Listings"
          }
        ]
      },
    ]
      },
]
