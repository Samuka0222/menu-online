import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/app/_components/ui/table";

const TopClientsTable = () => {
  return ( 
    <Table className="border mt-2">
      <TableCaption>Clientes mais frequentes</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="border">Cliente</TableHead>
          <TableHead className="border">Pedidos</TableHead>
          <TableHead className="border">Receita</TableHead>
          <TableHead className="border">Favorito</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Samuel</TableCell>
          <TableCell>29</TableCell>
          <TableCell>R$ 1208,00</TableCell>
          <TableCell>Burguer</TableCell>
        </TableRow>
      </TableBody>
    </Table>
   );
}
 
export default TopClientsTable;