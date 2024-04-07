import { OrderSidebar } from "@/components/OrderSidebar";
import { OrderSummary } from "@/components/OrderSummary";

export const metadata = {
  title: "Order",
  description: "Ordenes de Compra",
};
export default function OrderLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="md:flex">
        <OrderSidebar />
        <main className="md:flex-1 p-5 md:h-screen overflow-y-scroll" >{children}</main>
        <OrderSummary />
      </div>
    </>
  );
}
