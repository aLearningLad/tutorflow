import Sidebar from "@/components/forDashboard/Sidebar";
import MobileNavModal from "@/components/forMisc/MobileNavModal";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" h-full bg-yellow-600 text-black flex flex-col lg:flex-row relative">
      <Sidebar />
      <MobileNavModal />
      <div className=" w-full h-full">{children}</div>
    </main>
  );
}
