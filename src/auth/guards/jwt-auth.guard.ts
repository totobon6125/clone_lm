//src/auth/jwt-auth.guard.ts
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}

export class JwtAccessAuthGuard extends AuthGuard('access') {}
export class JwtRefreshAuthGuard extends AuthGuard('refresh') {}
