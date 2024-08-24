import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsconfigPaths({
      projects: ["./tsconfig-build.json"],
    }),
    react({ jsxImportSource: "https://esm.sh/react" }),
    dts({
      tsconfigPath: "./tsconfig-build.json",
      rollupTypes: true,
    }),
  ],
  publicDir: false,
  build: {
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      preserveEntrySignatures: "strict",
      input: {
        index: path.resolve(__dirname, "src/index.ts"),
      },
      output: {
        preserveModules: true,
        dir: path.resolve(__dirname, "dist"),
        format: "es",
        entryFileNames: (chunkInfo) => {
          const fileName = chunkInfo.name;
          // Check if the file is in the 'nested' directory
          if (fileName.startsWith("components/")) {
            // Move the file to the parent directory
            return fileName.replace("components/", "") + ".js";
          }
          return "[name].js";
        },
      },
    },
  },
});
