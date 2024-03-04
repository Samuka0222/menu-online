import { format } from "date-fns"
import { Calendar } from "lucide-react";
import RevenueCard from "./_components/revenue-card";
import OrderCard from "./_components/orders-card";
import TopProductCard from "./_components/top-product-card";
import UnfinishedOrdersCard from "./_components/unfinished-orders-card";
import RevenueGraph from "./_components/revenue-graph";
import TopClientsTable from "./_components/top-clients-table";

const DashboardPage = () => {
  // TODO: Adicionar responsividade
  return (
    <section className="px-5 w-full h-full">
      <div className="flex w-full justify-between">
        <h1 className="text-lg font-medium">Dashboard</h1>
        <span className="flex gap-1">
          <Calendar />
          {
            format(new Date(), "dd MMM',' y")
          }
        </span>
      </div>
      <div className="flex flex-col gap-2 mt-3 lg:flex-row w-full">
        <RevenueCard />
        <OrderCard />
        <TopProductCard />
        <UnfinishedOrdersCard />
      </div>
      <div className="flex flex-col w-full">
        <div className="w-full lg:w-2/4 mt-3">
          <h2 className="text-lg font-medium text-center">Receita</h2>
          <RevenueGraph />
        </div>
        <div className="w-full mt-3 lg:w-2/4">
        <h2 className="text-lg font-medium text-center">Clientes mais frequentes</h2>
          <TopClientsTable />
        </div>
      </div>
    </section>
  );
}

export default DashboardPage;