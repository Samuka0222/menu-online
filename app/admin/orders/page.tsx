'use server'

import { Button } from "@/app/_components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/app/_components/ui/popover";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/_components/ui/table";
import formatZipCode from "@/app/_helpers/format-zip-code";
import { db } from "@/app/_lib/prisma";
import { format } from "date-fns";
import { CheckCircle2Icon } from "lucide-react";

const OrdersPage = async () => {
  const orders = await db.order.findMany({
    include: {
      orderItems: {
        include: {
          product: true
        }
      },
      user: true,
      address: true,
    },
    orderBy: {
      date: "desc"
    }
  })

  return (
    <section className="flex flex-col justify-center items-center w-full px-6 py-5">
      <h1 className="text-lg font-bold uppercase">Controle de Pedidos</h1>
      <Table className="border mt-2">
        <TableHeader>
          <TableRow>
            <TableHead className="border border-gray-600 text-center">Data</TableHead>
            <TableHead className="border border-gray-600 text-center">Cliente</TableHead>
            <TableHead className="border text-center border-gray-600">Pedido</TableHead>
            <TableHead className="border text-center border-gray-600">Valor</TableHead>
            <TableHead className="border text-center border-gray-600">Endereço</TableHead>
            <TableHead className="border text-center border-gray-600">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map(order => (
            <TableRow key={order.id}>
              <TableCell className="border text-center">
                {format(new Date(order.date), "dd'/'M'/'y '-' HH:mm:ss")}
              </TableCell>
              <TableCell className="border text-center">{order.user.name}</TableCell>
              <TableCell className="border text-center">
                <Popover>
                  <Button variant='link' className="text-lg" asChild>
                    <PopoverTrigger>Ver</PopoverTrigger>
                  </Button>
                  <PopoverContent>
                    <h3>Itens do Pedido</h3>
                    {order.orderItems.map(item => (
                      <div key={item.id} className="w-full">
                        <div className="w-full flex justify-between border-b border-gray-500 mt-1">
                          <span>{item.product.name}</span>
                          <span>x{item.quantity}</span>
                        </div>
                      </div>
                    ))}
                  </PopoverContent>
                </Popover>
              </TableCell>
              <TableCell className="border text-center">
                {
                  order.orderItems.reduce((total, { product, quantity }) => {
                    return total + Number(product.price) * quantity
                  }, 0).toFixed(2).replace('.', ',')
                }
              </TableCell>
              <TableCell className="border text-center">
                <Popover>
                  <Button variant='link' className="text-lg" asChild>
                    <PopoverTrigger>Ver</PopoverTrigger>
                  </Button>
                  <PopoverContent>
                    {/* TODO: Refatorar */}
                    <h3 className="font-semibold text-center">Endereço</h3>
                    <div className="flex flex-col">
                      <div className="w-full flex justify-between border-b border-gray-500 mt-1">
                        <span className="font-medium">Rua:</span>
                        <span>{order.address?.street}</span>
                      </div>
                      <div className="w-full flex justify-between border-b border-gray-500 mt-1">
                        <span className="font-medium">Número:</span>
                        <span>{order.address?.number}</span>
                      </div>
                      <div className="w-full flex justify-between border-b border-gray-500 mt-1">
                        <span className="font-medium">Bairro:</span>
                        <span>{order.address?.neighborhood}</span>
                      </div>
                      <div className="w-full flex justify-between border-b border-gray-500 mt-1">
                        <span className="font-medium">Cidade:</span>
                        <span>{order.address?.city}</span>
                      </div>
                      <div className="w-full flex justify-between border-b border-gray-500 mt-1">
                        <span className="font-medium">Estado:</span>
                        <span>{order.address?.state}</span>
                      </div>
                      <div className="w-full flex justify-between border-b border-gray-500 mt-1">
                        <span className="font-medium">CEP:</span>
                        <span>{order.address?.zipCode ? formatZipCode(order.address.zipCode) : ''}</span>
                      </div>
                      <div className="w-full flex justify-between border-b border-gray-500 mt-1">
                        <span className="font-medium">Complemento:</span>
                        <span>{order.address?.complement ? order.address?.complement : '(Não informado)'}</span>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
              <TableCell align="center" className="border h-full">
                {/* TODO: Adicionar lógica de completar pedido */}
                <CheckCircle2Icon className="text-green-700" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}

export default OrdersPage;