import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const message = exception.getResponse();
    
    if (status === 400) {      
      response
        .status(status)
        .json({
          status: "Bad Request",
          message: typeof message["message"] == "object" ? message["message"][0] : message["message"],
          data: {}
        });
    } else if (status === 404) {
      response
        .status(status)
        .json({
          status: "Not Found",
          message: exception.message,
          data: {}
        });
    }
  }
}
