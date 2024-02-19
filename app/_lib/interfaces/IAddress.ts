export default interface IAddress {
  id: string,
  zipCode: string;
  street: string,
  neighborhood: string,
  number: string,
  city: string,
  state: string,
  complement?: string,
}