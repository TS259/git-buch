import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    root: path.resolve(__dirname, 'src'), // Verweist auf das src-Verzeichnis als Wurzel
    build: {
        outDir: path.resolve(__dirname, 'dist'), // Ausgabe in das Projekt-Root-Verzeichnis
        emptyOutDir: true, // Löscht alte Dateien im Ausgabeordner vor dem Build
        rollupOptions: {
            input: {
                index: path.resolve(__dirname, 'src/index.html'), // Expliziter Einstiegspunkt
            },
        },
    },
});   