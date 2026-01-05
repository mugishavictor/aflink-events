import "./globals.css";

export const metadata = {
  title: "Aflink Events Ltd",
  description: "Leading creative and trustworthy event partner in Rwanda and the region.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--fg))] antialiased">
        {children}
      </body>
    </html>
  );
}
