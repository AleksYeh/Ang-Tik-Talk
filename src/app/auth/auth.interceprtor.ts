import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Auth } from './auth';
import { catchError, throwError } from 'rxjs';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(Auth);
  const token: string | null = authService.token;

  if (!token) return next(req);

  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
  return next(req).pipe(
    catchError((error) => {
      if (error.status === 403) {
        return refreshAndProceed(authService, req, next);
      }

      return throwError(() => error);
    }),
  );
};

const refreshAndProceed = (authService: Auth, req: HttpRequest<any>, next: HttpHandlerFn) => {
  return authService.refreshAuthToken().pipe();
};
