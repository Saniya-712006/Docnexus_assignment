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

      </body>
    </html>
  );
}