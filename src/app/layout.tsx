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
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        {/* <link rel="stylesheet" href="./style/output.css"></link> */}
      </head>
      <body className="min-h-screen bg-lightgreen">{children}</body>
      {/* TODO: Add dark theme at the end: "dark:bg-black dark:text-white" */}
    </html>
  )
}
