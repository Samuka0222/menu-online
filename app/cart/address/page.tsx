import AddressForm from "./_components/address-form";
import ZipCodeForm from "./_components/zip-code-form";

const SelectAddressPage = () => {
  return (
    // TODO: Verificar layout quando tem muitos itens no carrinho.
    <main className="px-5 h-full w-full overflow-y-hidden flex flex-col justify-center">
      <h1 className="text-2xl font-medium text-black mb-2">Endereço de entrega:</h1>
      <div className="flex flex-col w-full px-2 overflow-y-auto mb-2">
        <h2>Preencha o endereço:</h2>
        <ZipCodeForm />
        <AddressForm />
      </div>
    </main>
  );
}

export default SelectAddressPage;