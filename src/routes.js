import Users from "./pages/Users";
import Records from "./pages/Records";

export const ROUTES = {
  DASHBOARD: "/",
  USERS: "/users",
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
    path: ROUTES.RECORDS,
    component: Records,
    name: "Records",
    isPublic: false,
  },
];
