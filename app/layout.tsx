import "./globals.css";

export const metadata = {
  title: "Kế Media",
  description: "One-page portfolio & service packages",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
