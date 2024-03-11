import ProductForm from "../../_components/product-form";

const AddProductPage = () => {
  return (
    <main className="px-6 py-5 flex flex-col justify-center items-center">
      <h1 className="text-xl text-black font-semibold mb-3">Adicionar Novo Produto</h1>
      <p className="text-base text-gray-400 mb-5">Adicione um novo produto ao seu cardápio.</p>
      <ProductForm type="create" />
    </main>
  );
}

export default AddProductPage;