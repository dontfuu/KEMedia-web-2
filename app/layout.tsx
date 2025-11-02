import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "KẾ Media – Quay chụp & Video Ads 3 ngày",
  description:
    "Portfolio + gói dịch vụ quay chụp sản phẩm, video bán hàng & video chạy quảng cáo – giao trong 3 ngày.",
  metadataBase: new URL("https://ke-media-web-l1re.vercel.app"),
  openGraph: {
    title: "KẾ Media – Portfolio & Service Packages",
    description:
      "Quay chụp & Video Ads – 3 Day Sprint. Tối ưu TikTok/Meta Ads & Social.",
    url: "https://ke-media-web-l1re.vercel.app",
    siteName: "KẾ Media",
    images: ["/og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KẾ Media",
    description:
      "Quay chụp & Video Ads – 3 Day Sprint. Tối ưu TikTok/Meta Ads & Social.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={`${inter.className} min-h-screen bg-gray-50 text-gray-900 antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
