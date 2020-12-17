import { AuthGuard } from './auth.guard';
import { ErrorInterceptor } from './error.interceptor';
import { FakeBackendInterceptor } from './fake-backend'
import { JwtInterceptor } from './jwt.interceptor'

export const services: any[] = [AuthGuard, ErrorInterceptor, FakeBackendInterceptor, JwtInterceptor];

export * from './auth.guard';
export * from './error.interceptor';
export * from './fake-backend';
export * from './jwt.interceptor';