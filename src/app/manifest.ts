import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mohammed Salman Portfolio",
    short_name: "Mohammed Salman",
    description: "A portfolio Progressive Web App built by Mohammed Salman",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    screenshots: [
      {
        src: "/Pwa-logos/Logo-v1-white.png",
        sizes: "1280x720",
        type: "image/png",
        form_factor: "wide",
      },
      {
        src: "/Pwa-logos/Logo-v1-white.png",
        sizes: "1080x1920",
        type: "image/png",
        form_factor: "narrow",
      },
    ],
  };
}
