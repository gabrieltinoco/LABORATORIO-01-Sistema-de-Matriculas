import { Injectable } from '@nestjs/common';
import { Charge } from '@prisma/client';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { PaymentMethod } from 'src/modules/charge/enums/payment-methos.enum';

@Injectable()
export class ChargeRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    amount: number,
    userId: string,
    paymentMethod: string,
    expiration: Date,
  ): Promise<Charge> {
    return this.prisma.charge.create({
      data: {
        amount,
        userId,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        paymentMethod: PaymentMethod[paymentMethod],
        expiration,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.charge.delete({
      where: {
        id,
      },
    });
  }

  async edit(
    id: string,
    amount: number,
    userId: string,
    paid: boolean,
    paymentMethod: string,
    expiration: Date,
  ): Promise<Charge> {
    return this.prisma.charge.update({
      where: {
        id,
      },
      data: {
        amount,
        userId,
        paid,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        paymentMethod: PaymentMethod[paymentMethod],
        expiration,
      },
    });
  }

  async findById(id: string): Promise<Charge | null> {
    return this.prisma.charge.findUnique({
      where: {
        id,
      },
    });
  }

  async findByUserId(userId: string): Promise<Charge[]> {
    return this.prisma.charge.findMany({
      where: {
        userId,
      },
    });
  }
}
