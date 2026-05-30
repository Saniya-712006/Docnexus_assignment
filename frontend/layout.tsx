import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>

        <nav className="p-4 border-b flex gap-4">

          <Link
            href="/"
            className="font-medium"
          >
            Physician Discovery
          </Link>

          <Link
            href="/campaign-builder"
            className="font-medium"
          >
            Campaign Builder
          </Link>

          <Link
            href="/campaigns"
            className="font-medium"
          >
            Campaign Dashboard
          </Link>

        </nav>

        {children}

       <footer
      className="
        text-center
        text-slate-500
        py-4
        border-t
        border-slate-800
      "
    >
      DocNexus Assignment • Next.js + Flask + MongoDB
    </footer>

      </body>
    </html>
  );
}