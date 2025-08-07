import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { OrderTableRow } from "./order-table-row";
import { OrderTableFilters } from "./order-table-filters";
import { Pagination } from "@/components/pagination";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "@/api/get-orders";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

export function Orders() {
  const [searchParams, setSearchParams] = useSearchParams()

  const pageIndex = z.coerce.number()
    .transform(page => page - 1)
    .parse(searchParams.get('page') ?? '1')

  const { data: result } = useQuery({
    queryKey: ['orders', pageIndex],
    queryFn: () => getOrders({ pageIndex }),
  })

  function handlePaginate(pageIndex: number) {
    setSearchParams(prev => {
      prev.set('page', String(pageIndex + 1))
      return prev
    })
  }

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

          {result && (
            <Pagination
              pageIndex={result.meta.pageIndex}
              totalCount={result.meta.totalCount}
              perPage={result.meta.perPage}
              onPageChange={handlePaginate}
            />
          )}
        </div>
      </div>
    </>
  )
}
