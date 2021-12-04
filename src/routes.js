import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import Records from "./pages/Records";

export const ROUTES = {
  DASHBOARD: "/",
  USERS: "/users",
  USER_DETAIL: "/users/:external_id/detail",
  RECORDS: "/records",
};

export const routes = [
  {
    path: ROUTES.DASHBOARD,
    component: Users,
    name: "Users",
    isPublic: false,
  },
  {
    path: ROUTES.USERS,
    component: Users,
    name: "Users",
    isPublic: false,
  },
  {
    path: ROUTES.USER_DETAIL,
    component: UserDetail,
    name: "Users",
    isPublic: false,
  },
  {
    path: ROUTES.RECORDS,
    component: Records,
    name: "Records",
    isPublic: false,
  },
];
