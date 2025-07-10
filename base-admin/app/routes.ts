import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  // Rotas públicas (sem sidebar)
  layout("routes/_public.tsx", [route("/login", "routes/login.tsx")]),

  // Rotas protegidas (com sidebar)
  layout("routes/_auth.tsx", [
    index("routes/home.tsx"),
    // route("/dashboard", "routes/dashboard.tsx"),
    // route("/products", "routes/products.tsx"),
    // route("/settings", "routes/settings.tsx"),
  ]),
] satisfies RouteConfig;
