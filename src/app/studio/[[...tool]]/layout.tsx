export const metadata = {
  title: 'Yash Kansal | Studio',
  description: 'Sanity Studio for Engineering Portfolio',
}

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  )
}

