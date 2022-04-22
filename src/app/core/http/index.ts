import { AuthInterceptor } from './auth.interceptor';
import { HTTP_INTERCEPTORS } from "@angular/common/http";


export const HTPP_INTERCEPTORS_PROVIDERS = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
