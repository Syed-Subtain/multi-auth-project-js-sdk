/**
 * MultiAuth-SampleLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  accessTokenAuthenticationProvider,
  basicAuthenticationProvider,
  compositeAuthenticationProvider,
  customAuthenticationProvider,
  customHeaderAuthenticationProvider,
  customQueryAuthenticationProvider,
  requestAuthenticationProvider,
} from './authentication';
import { Configuration } from './configuration';

export function createAuthProviderFromConfig(config: Partial<Configuration>) {
  const authConfig = {
    basicAuth:
      config.basicAuthCredentials &&
      basicAuthenticationProvider (
        config.basicAuthCredentials.username,
        config.basicAuthCredentials.password
    ),
    apiKey:
      config.apiKeyCredentials &&
      customQueryAuthenticationProvider (
        config.apiKeyCredentials
    ),
    apiHeader:
      config.apiHeaderCredentials &&
      customHeaderAuthenticationProvider (
        config.apiHeaderCredentials
    ),
    oAuthCCG:
      config.oAuthCCGCredentials &&
      requestAuthenticationProvider (
        config.oAuthCCGCredentials.oAuthToken
    ),
    oAuthACG:
      config.oAuthACGCredentials &&
      requestAuthenticationProvider (
        config.oAuthACGCredentials.oAuthToken
    ),
    oAuthROPCG:
      config.oAuthROPCGCredentials &&
      requestAuthenticationProvider (
        config.oAuthROPCGCredentials.oAuthToken
    ),
    oAuthBearerToken:
      config.oAuthBearerTokenCredentials &&
      accessTokenAuthenticationProvider (
        config.oAuthBearerTokenCredentials
    ),
    customAuth:
      config.customAuthCredentials &&
      customAuthenticationProvider (
        config.customAuthCredentials
    ),
  };

  return compositeAuthenticationProvider <
    keyof typeof authConfig,
    typeof authConfig
  > (authConfig);
}

