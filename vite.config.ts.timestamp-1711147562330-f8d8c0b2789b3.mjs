// vite.config.ts
import { defineConfig } from "file:///home/amine/Documents/projects/aminos-ds/node_modules/.pnpm/vite@5.2.3_@types+node@20.11.30/node_modules/vite/dist/node/index.js";
import react from "file:///home/amine/Documents/projects/aminos-ds/node_modules/.pnpm/@vitejs+plugin-react@4.2.1_vite@5.2.3/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import dts from "file:///home/amine/Documents/projects/aminos-ds/node_modules/.pnpm/vite-plugin-dts@3.7.3_@types+node@20.11.30_typescript@5.4.3_vite@5.2.3/node_modules/vite-plugin-dts/dist/index.mjs";
import { libInjectCss } from "file:///home/amine/Documents/projects/aminos-ds/node_modules/.pnpm/vite-plugin-lib-inject-css@2.0.0_vite@5.2.3/node_modules/vite-plugin-lib-inject-css/dist/index.js";
import tailwindcss from "file:///home/amine/Documents/projects/aminos-ds/node_modules/.pnpm/tailwindcss@3.4.1/node_modules/tailwindcss/lib/index.js";
var __vite_injected_original_dirname = "/home/amine/Documents/projects/aminos-ds";
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "index.ts"),
      name: "aminos-ds",
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss"
        }
      },
      treeshake: true
    },
    sourcemap: true,
    emptyOutDir: true
  },
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  },
  server: {
    port: 3e3,
    open: true,
    host: true
  },
  plugins: [react(), dts(), libInjectCss()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9hbWluZS9Eb2N1bWVudHMvcHJvamVjdHMvYW1pbm9zLWRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9hbWluZS9Eb2N1bWVudHMvcHJvamVjdHMvYW1pbm9zLWRzL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2FtaW5lL0RvY3VtZW50cy9wcm9qZWN0cy9hbWlub3MtZHMvdml0ZS5jb25maWcudHNcIjsvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdmFyLXJlcXVpcmVzICovXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuaW1wb3J0IHsgbGliSW5qZWN0Q3NzIH0gZnJvbSBcInZpdGUtcGx1Z2luLWxpYi1pbmplY3QtY3NzXCI7XG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSBcInRhaWx3aW5kY3NzXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiaW5kZXgudHNcIiksXG4gICAgICBuYW1lOiBcImFtaW5vcy1kc1wiLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBpbmRleC4ke2Zvcm1hdH0uanNgLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFtcInJlYWN0XCIsIFwicmVhY3QtZG9tXCIsIFwidGFpbHdpbmRjc3NcIl0sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHJlYWN0OiBcIlJlYWN0XCIsXG4gICAgICAgICAgXCJyZWFjdC1kb21cIjogXCJSZWFjdERPTVwiLFxuICAgICAgICAgIHRhaWx3aW5kY3NzOiBcInRhaWx3aW5kY3NzXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdHJlZXNoYWtlOiB0cnVlLFxuICAgIH0sXG4gICAgc291cmNlbWFwOiB0cnVlLFxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICB9LFxuICBjc3M6IHtcbiAgICBwb3N0Y3NzOiB7XG4gICAgICBwbHVnaW5zOiBbdGFpbHdpbmRjc3NdLFxuICAgIH0sXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDMwMDAsXG4gICAgb3BlbjogdHJ1ZSxcbiAgICBob3N0OiB0cnVlLFxuICB9LFxuICBwbHVnaW5zOiBbcmVhY3QoKSwgZHRzKCksIGxpYkluamVjdENzcygpXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8saUJBQWlCO0FBTnhCLElBQU0sbUNBQW1DO0FBU3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sS0FBSyxRQUFRLGtDQUFXLFVBQVU7QUFBQSxNQUN6QyxNQUFNO0FBQUEsTUFDTixVQUFVLENBQUMsV0FBVyxTQUFTLE1BQU07QUFBQSxJQUN2QztBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLFNBQVMsYUFBYSxhQUFhO0FBQUEsTUFDOUMsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFVBQ2IsYUFBYTtBQUFBLFFBQ2Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxXQUFXO0FBQUEsSUFDYjtBQUFBLElBQ0EsV0FBVztBQUFBLElBQ1gsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFNBQVMsQ0FBQyxXQUFXO0FBQUEsSUFDdkI7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsYUFBYSxDQUFDO0FBQzFDLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
