import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
// Guard de autenticação local, usa a estratégia "local" do Passport
@Injectable()
export class LocalAuthGuard extends AuthGuard("local") {}
//Utilizado no Controller de Auth
