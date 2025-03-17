import { Injectable } from '@nestjs/common';
import { ProcessStudentChargeResponseDTO } from 'src/modules/application/use-cases/charge/dtos/response/process-student-charge.response.dto';
import { UserChargeService } from 'src/modules/charge/services/user-charge.service';
import { Charge } from '@prisma/client';

@Injectable()
export class ProcessStudentChargeService {
  constructor(private readonly service: UserChargeService) {}

  async execute(studentId: string): Promise<ProcessStudentChargeResponseDTO> {
    const charges = await this.service.execute(studentId);

    return this.aggregateChargeData(charges);
  }

  private aggregateChargeData(
    charges: Charge[],
  ): ProcessStudentChargeResponseDTO {
    const report: ProcessStudentChargeResponseDTO = {
      totalCharges: charges.length,
      totalPaid: 0,
      totalUnpaid: 0,
      chargesByPaymentMethod: [],
    };

    const paymentMethods = ['PIX', 'CreditCard', 'DebitCard', 'BankSlip'];
    paymentMethods.forEach((method) => {
      report.chargesByPaymentMethod.push({
        paymentMethod: method,
        count: 0,
        totalAmount: 0,
      });
    });

    charges.forEach((charge) => {
      if (charge.paid) {
        report.totalPaid += charge.amount;
      } else {
        report.totalUnpaid += charge.amount;
      }

      const paymentMethodGroup = report.chargesByPaymentMethod.find(
        (method) => method.paymentMethod === charge.paymentMethod,
      );
      if (paymentMethodGroup) {
        paymentMethodGroup.count += 1;
        paymentMethodGroup.totalAmount += charge.amount;
      }
    });

    return report;
  }
}
