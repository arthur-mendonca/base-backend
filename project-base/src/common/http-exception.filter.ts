import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus, Logger } from "@nestjs/common";
import { Request, Response } from "express";

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = "Internal server error";
    let stack: string | undefined = undefined;
    const error: any = exception;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const responseObj = exception.getResponse();
      message = typeof responseObj === "object" ? JSON.stringify(responseObj) : responseObj;
      stack = exception.stack;
    } else if (exception instanceof Error) {
      message = exception.message;
      stack = exception.stack;
    }

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
      stack,
      error,
    });
  }
}
