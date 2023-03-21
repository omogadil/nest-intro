import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getDate(): string {
    return 'Today is Tuesday 21st of March';
  }
}
