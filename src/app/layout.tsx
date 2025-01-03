export const metadata = {
  title: 'Benign.ae',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <script src="https://cdn.tailwindcss.com"></script>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body>{children}</body>
    </html>
  )
}
