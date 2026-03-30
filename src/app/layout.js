export const metadata = {
  title: "diggr.ai — Latent Defect Insurance Platform",
  description: "AI-native platform replacing insurance brokers for UK construction LDI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
