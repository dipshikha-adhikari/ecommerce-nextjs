export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" max-w-md w-full min-h-screen  grid place-content-center mx-auto">
      {children}
    </div>
  );
}
