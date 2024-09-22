export default function CatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body>
      <h1>Cat</h1>
      {children}
    </body>
  );
}
