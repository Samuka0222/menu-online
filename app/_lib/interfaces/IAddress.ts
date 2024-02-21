export default interface IAddress {
  zipCode: string;
  street: string,
  neighborhood: string,
  number: string,
  city: string,
  state: string,
  complement?: string | null,
  id?: string | '',
  favorite: boolean
}