import Sidebar from "@/components/forDashboard/Sidebar";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" h-full bg-yellow-600 text-black flex flex-col lg:flex-row relative">
      <Sidebar />
      <div className=" w-full h-full">{children}</div>
    </main>
  );
}
