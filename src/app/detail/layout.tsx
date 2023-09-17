export default function DetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>중요X 긴급O (임시타이틀)</h1>
      {children}
    </div>
  );
}
