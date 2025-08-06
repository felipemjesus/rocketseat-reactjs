import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { OrderTableRow } from "./order-table-row";
import { OrderTableFilters } from "./order-table-filters";

export function Orders() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Pedidos</h1>
      </div>

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
              {Array.from({ length: 10 }).map((_, index) => (
                <OrderTableRow key={index} />
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
