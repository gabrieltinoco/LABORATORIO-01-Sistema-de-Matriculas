export class EditChargeRequestDTO {
  amount: number;
  userId: string;
  paid: boolean;
  paymentMethod: string;
  expiration: Date;
}
