/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import * as jwt from 'jsonwebtoken';
export abstract class TokenValidator {
  public static validate(token: string): any | never {
    if (process.env.JWT_SECRET === undefined) {
      throw new Error('JWT_SECRET not defined');
    }

    try {
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch {
      throw new Error('Invalid or expired token');
    }
  }
}
