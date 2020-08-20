/* eslint-disable */

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", name: "todo", component: () => import("pages/todo.vue") },
      {
        path: "/help",
        name: "help",
        component: () => import("pages/help.vue")
      },
      {
        path: "/time",
        name: "TIME MANAGEMENT",
        component: () => import("pages/time.vue")
      }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
