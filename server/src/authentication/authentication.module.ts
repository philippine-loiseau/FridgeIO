import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { LocalStrategy } from './local.strategy';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  providers: [AuthenticationService, LocalStrategy],
  imports: [UserModule, PassportModule],

})
export class AuthenticationModule {
}
