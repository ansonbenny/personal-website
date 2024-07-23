import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import path from "path";

export default {
  plugins: [
    react(),
    vike({
      prerender: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};
