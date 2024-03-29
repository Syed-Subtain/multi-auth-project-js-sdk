/**
 * MultiAuth-SampleLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { HttpClientOptions } from './clientAdapter';
import { OAuthScopeOAuthACGEnum } from './models/oAuthScopeOAuthACGEnum';
import { OAuthToken } from './models/oAuthToken';
import { SuiteCodeEnum } from './models/suiteCodeEnum';

/** An interface for all configuration parameters required by the SDK. */
export interface Configuration {
  timeout: number;
  accessToken: string;
  environment: Environment;
  port: string;
  suites: SuiteCodeEnum;
  basicAuthCredentials?: {
    username: string;
    password: string;
  };
  apiKeyCredentials?: {
    'token': string;
    'api-key': string;
  };
  apiHeaderCredentials?: {
    'token': string;
    'api-key': string;
  };
  oAuthCCGCredentials?: {
    oAuthClientId: string;
    oAuthClientSecret: string;
    oAuthToken?: OAuthToken;
  };
  oAuthACGCredentials?: {
    oAuthClientId: string;
    oAuthClientSecret: string;
    oAuthRedirectUri: string;
    oAuthToken?: OAuthToken;
    oAuthScopes?: OAuthScopeOAuthACGEnum[];
  };
  oAuthROPCGCredentials?: {
    oAuthClientId: string;
    oAuthClientSecret: string;
    oAuthUsername: string;
    oAuthPassword: string;
    oAuthToken?: OAuthToken;
  };
  oAuthBearerTokenCredentials?: {
    accessToken: string;
  };
  customAuthCredentials?: {
  };
  httpClientOptions?: Partial<HttpClientOptions>;
  unstable_httpClientOptions?: any;
}

/** Environments available for API */
export enum Environment {
  Production = 'production',
  Testing = 'testing',
}
