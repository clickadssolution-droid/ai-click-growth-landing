import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ancla la raíz del workspace a este proyecto — evita que Turbopack detecte
  // por error el lockfile de un directorio hermano no relacionado.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
