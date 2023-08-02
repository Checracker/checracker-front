export default function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>board title</h1>
      {children}
    </div>
  );
}
