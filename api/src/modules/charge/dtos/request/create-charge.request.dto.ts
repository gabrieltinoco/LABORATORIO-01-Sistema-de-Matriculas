export class CreateChargeRequestDTO {
  amount: number;
  userId: string;
  paymentMethod: string;
  expiration: Date;
}
