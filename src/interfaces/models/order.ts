export default interface IOrder {
  id?: number;
  description: string;
  value: string;
  quantity: string;
  createdDate?: Date;
  updatedDate?: Date;
}
