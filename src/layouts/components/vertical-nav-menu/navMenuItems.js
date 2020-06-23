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
      url: '/ui-elements/ag-grid-table',
      name: "PAYOUTS",
      tag: "new",
      tagColor: "primary",
      icon: "FolderIcon",
      i18n: "PAYOUTS",
    },
    {
      url: '/ui-elements/data-list/list-view',
      name: "REDEMPTIONS",
      tag: "new",
      tagColor: "primary",
      icon: "FolderIcon",
      i18n: "REDEMPTIONS",
    },
      {
        url: '/apps/eCommerce/shop',
        name: "PRODUCTS",
        tag: "new",
        tagColor: "primary",
        icon: "FolderIcon",
        i18n: "PRODUCTS",
      },
        {
          url: '/apps/todo/all',
          name: "REVIEWS",
          tag: "new",
          tagColor: "primary",
          icon: "FolderIcon",
          i18n: "REVIEWS",
        },
        {
  url: '/extensions/drag-and-drop',
  name: "SCAN TICKETS",
  icon: "FolderIcon",
  i18n: "SCAN TICKETS",
},
{
              url: '/ui-elements/table',
              name: "BOOKINGS",
              tag: "new",
              tagColor: "primary",
              icon: "FolderIcon",
              i18n: "BOOKINGS",
            },
              {
                url: '/extensions/i18n',
                name: "SETTINGS",
                tagColor: "primary",
                icon: "FolderIcon",
                i18n: "SETTINGS",
              },
              {
        url: null,
        name: "ADMINISTRATOR ACCOUNT",
        icon: "UsersIcon",
        i18n: "ADMINISTRATOR ACCOUNT",
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
          {
            url: '/pages/user-settings',
            name: "User Management",
            icon: "UserIcon",
            slug: "app-user-list",
            i18n: "User Settings",
          },
        ]
      },
      {
        url: null,
        name: "FINANCE ADMIN",
        icon: "HomeIcon",
        i18n: "FINANCE ADMIN",
        submenu: [
          // {
          //   name: "Import/Export",
          //   i18n: "Import/Export",
          //   submenu: [

          //   ]
          // },
          {
            url: "/dashboard/ecommerce",
            name: "Dashboard",
            icon: "HomeIcon",
            slug: "import",
            i18n: "Dashboard"
          },
          {
            url: "/ui-elements/ag-grid-table",
            name: "PAYOUTS",
            icon: "HomeIcon",
            slug: "export",
            i18n: "PAYOUTS"
          }
        ]
      },
    ]
      },
]
