import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react({ jsxImportSource: "https://esm.sh/react" }),
    dts({ include: ["lib"] }),
  ],
  build: {
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      preserveEntrySignatures: "strict",
      input: {
        index: path.resolve(__dirname, "lib/index.ts"),
      },
      output: {
        preserveModules: true,
        dir: path.resolve(__dirname, "dist"),
        format: "es",
        entryFileNames: "[name].js",
      },
    },
  },
  resolve: {
    alias: {
      src: path.resolve("src/"),
    },
  },
});
