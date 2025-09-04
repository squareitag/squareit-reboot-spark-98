import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { Connect } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    middlewareMode: false,
    configureServer(server: any) {
      if (mode === 'development') {
        server.middlewares.use((req: any, res: any, next: any) => {
          const auth = req.headers.authorization;
          
          if (!auth || !auth.startsWith('Basic ')) {
            res.statusCode = 401;
            res.setHeader('WWW-Authenticate', 'Basic realm="Development Environment"');
            res.end('Unauthorized - Development Environment\n\nUsername: dev\nPassword: squareit2024');
            return;
          }
          
          const credentials = Buffer.from(auth.slice(6), 'base64').toString();
          const [username, password] = credentials.split(':');
          
          if (username === 'dev' && password === 'squareit2024') {
            next();
          } else {
            res.statusCode = 401;
            res.setHeader('WWW-Authenticate', 'Basic realm="Development Environment"');
            res.end('Unauthorized');
          }
        });
      }
    }
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
