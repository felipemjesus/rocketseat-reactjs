import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { OrderTableRow } from "./order-table-row";
import { OrderTableFilters } from "./order-table-filters";
import { Pagination } from "@/components/pagination";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "@/api/get-orders";

export function Orders() {
  const { data: result } = useQuery({
    queryKey: ['orders'],
    queryFn: getOrders
  })

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Pedidos</h1>


        <div className="space-y-2.5">
          <OrderTableFilters />

          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[65px]"></TableHead>
                  <TableHead className="w-[150px]">Identificador</TableHead>
                  <TableHead className="w-[150px]">Realizado há</TableHead>
                  <TableHead className="w-[150px]">Status</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="w-[150px]">Total do pedido</TableHead>
                  <TableHead className="w-[100px]"></TableHead>
                  <TableHead className="w-[100px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {result && result.orders.map((order) => (
                  <OrderTableRow
                    key={order.orderId}
                    order={order}
                  />
                ))}
              </TableBody>
            </Table>
          </div>


          <Pagination pageIndex={0} totalCount={100} perPage={10} />
        </div>
      </div>
    </>
  )
}
