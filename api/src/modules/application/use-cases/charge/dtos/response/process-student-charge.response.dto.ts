export class ProcessStudentChargeResponseDTO {
  totalCharges: number;
  totalPaid: number;
  totalUnpaid: number;
  chargesByPaymentMethod: Array<{
    count: number;
    totalAmount: number;
    paymentMethod: string;
  }>;
}
