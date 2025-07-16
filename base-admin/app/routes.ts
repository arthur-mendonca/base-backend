import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  // Rotas públicas
  layout("routes/_public.tsx", [route("/login", "routes/login.tsx")]),

  // Rotas protegidas
  layout("routes/_auth.tsx", [
    index("routes/home.tsx"),
    route("/account", "routes/account.tsx"),
    route("/users", "routes/users.tsx"),
    route("/volunteers", "routes/volunteers.tsx"),
    // route("/products", "routes/products.tsx"),
    // route("/settings", "routes/settings.tsx"),
  ]),
] satisfies RouteConfig;
