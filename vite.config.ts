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

export default defineConfig({
  plugins: [react(), ga4Plugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
