import { Injectable } from '@nestjs/common';
import * as faker from 'faker';

interface AccountModel { // Data model
  readonly name: string;
  readonly email: string;
  readonly account: number;
  readonly iban: string;
}

@Injectable()
export class AppService {

  /**
   * This function calls to FakerJs API's to forge a huge of data.
   * @returns string
   */
  getData(): string {
    const data: AccountModel [] = [];

    faker.locale = 'pt_BR'; // setting locale to generate data based on it.

    for (let i = 0; i < 8; i++) {
      data.push({
        name: faker.name.findName(),
        email: faker.internet.email(),
        account: faker.finance.account(),
        iban: faker.finance.iban()
      });
    }

    return JSON.stringify(data);
  }
}
