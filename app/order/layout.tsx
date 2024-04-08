import { OrderSidebar } from "@/components/order/OrderSidebar";
import { OrderSummary } from "@/components/order/OrderSummary";

export const metadata = {
  title: "Order",
  description: "Ordenes de Compra",
};
export default function OrderLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="max-md:block flex">
        <OrderSidebar />
        <main className="max-md:block flex-1 p-5 md:h-screen overflow-y-scroll" >{children}</main>
        <OrderSummary />
      </div>
    </>
  );
}
