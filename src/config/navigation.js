import { LayoutDashboard, Package, Settings, ShoppingCart, User, Users, UserShield } from "lucide-react";

export const navigation = [
  {
    title: "Main Menu",
    items: [
      {
        label: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard
      },
      {
        label: "Users",
        path: "/user/list",
        icon: Users
      },
      {
        label: "Products",
        path: "/product/list",
        icon: Package
      },
      {
        label: "Orders",
        path: "/orders",
        icon: ShoppingCart
      },
      {
        label: "Roles",
        path: "/role/list",
        icon: UserShield
      },
      {
        label: "Settings",
        path: "/settings",
        icon: Settings
      },
     
    ]
  },
  {
    title: "Account",
    items: [
      {
        label: "Profile",
        path: "/profile",
        icon: User
      },
    ]
  }
]


export const pageTitles = {
  "/dashboard": "Dashboard",
  "/user/list": "Users",
  "/user/form": "User Form",
  "/product/list": "Products",
  "/product/form": "Product Form",
  "/orders": "Orders",
  "/settings": "Settings",
  "/profile": "Profile",
  "/role/list": "Roles",
  "/role/form": "Role Form",
}
