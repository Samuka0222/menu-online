import AdminHeader from "./_components/admin-header";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="text-black">
      <AdminHeader />
      {children}
    </main>
  );
}

export default AdminLayout;