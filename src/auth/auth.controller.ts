import {
  ClassSerializerInterceptor,
  Controller,
  Post,
  SerializeOptions,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { LocalAuthGuard } from './guards/local-auth.guard';

@SerializeOptions({ strategy: 'exposeAll' })
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(LocalAuthGuard)
  login(@CurrentUser() user: User) {
    const tokens = this.authService.createTokens(user);

    return {
      message: 'user logged in successfully',
      status: 200,
      data: {
        ...user,
        tokens,
      },
    };
  }
}
