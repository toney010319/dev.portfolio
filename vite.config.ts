import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig, type Plugin } from "vite"

const GA_MEASUREMENT_ID = "G-B1ZJNCRSRN"

function ga4Plugin(): Plugin {
  return {
    name: "ga4",
    apply: "build",
    transformIndexHtml(html) {
      const snippet = `    <!-- Load Google Analytics after the visitor interacts with the page. -->
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;

      function loadGoogleAnalytics() {
        if (window.googleAnalyticsLoaded) return;
        window.googleAnalyticsLoaded = true;

        var script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}';
        document.head.appendChild(script);

        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}');
      }

      ['pointerdown', 'keydown', 'touchstart', 'click'].forEach(function (eventName) {
        window.addEventListener(eventName, loadGoogleAnalytics, {
          once: true,
          passive: true
        });
      });
    </script>
`
      return html.replace("  </head>", `${snippet}  </head>`)
    },
  }
}

function inlineCssPlugin(): Plugin {
  return {
    name: "inline-css",
    apply: "build",
    enforce: "post",
    generateBundle(_, bundle) {
      const htmlAsset = bundle["index.html"]
      if (!htmlAsset || htmlAsset.type !== "asset") return

      let html = String(htmlAsset.source)
      for (const [fileName, output] of Object.entries(bundle)) {
        if (output.type !== "asset" || !fileName.endsWith(".css")) continue

        const stylesheetPattern = new RegExp(
          `<link rel="stylesheet"[^>]*href="/${fileName.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")}"[^>]*>`,
        )
        html = html.replace(stylesheetPattern, `<style>${String(output.source)}</style>`)
        delete bundle[fileName]
      }
      htmlAsset.source = html
    },
  }
}

export default defineConfig({
  plugins: [react(), ga4Plugin(), inlineCssPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
