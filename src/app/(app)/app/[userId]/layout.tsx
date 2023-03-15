import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <Sidebar />
      {children}
    </div>
  );
}
