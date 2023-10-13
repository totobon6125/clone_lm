import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { JwtAccessStrategy } from './strategies/jwt-access.strategy';
import { UsersService } from 'src/users/users.service';
import { JwtKakaoStrategy } from './strategies/jwt-social-kakao.strategy';
//import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';

@Module({
  imports: [PrismaModule, PassportModule, UsersModule, JwtModule.register({})],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtAccessStrategy,
    AuthService,
    UsersService,
    JwtKakaoStrategy,
  ],
})
export class AuthModule {}
