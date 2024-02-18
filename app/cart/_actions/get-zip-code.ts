const getZipCode = async (zipCode: string) => {

  try {
    const res = (await fetch(`https://viacep.com.br/ws/${zipCode}/json/`))
    const convertedResponse = await res.json();
    const enderecoAtualizado = {
      zipCode: zipCode,
      street: convertedResponse.logradouro,
      neighborhood: convertedResponse.bairro,
      number: '0',
      city: convertedResponse.localidade,
      complement: '',
      state: convertedResponse.uf
    }
    return enderecoAtualizado
  } catch (error) {
    throw new Error(`Verifique o CEP novamente. ${error}`)
  }
}

export default getZipCode;