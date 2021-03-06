// @flow

import helmet from 'helmet';
import cors from 'cors';
import ioc from './ioc';
import addon from './addon';

export default (app: any, ace: any): void => {
  app.use(
    cors({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
    }),
  );
  app.use(
    helmet({
      contentSecurityPolicy: false,
      expectCt: false,
      dnsPrefetchControl: false,
      frameguard: {
        action: 'ALLOW-FROM',
        domain: 'atlassian.net',
      },
      hidePoweredBy: {
        setTo: 'Green Ether',
      },
      hpkp: false,
      hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true,
      },
      ieNoOpen: true,
      noCache: true,
      noSniff: true,
      xssFilter: true,
    }),
  );
  app.use(/^(?!\/(atlassian-connect\.json|installed).*)/, ace.checkValidToken());
  app.use(ioc);
  app.use(addon(ace));
};
