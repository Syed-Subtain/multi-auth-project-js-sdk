
# Client Class Documentation

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `accessToken` | `string` |  |
| `port` | `string` | *Default*: `'80'` |
| `suites` | `SuiteCodeEnum` | *Default*: `SuiteCodeEnum.Hearts` |
| `environment` | Environment | The API environment. <br> **Default: `Environment.Testing`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `basicAuthCredentials` | [`BasicAuthCredentials`]($a/basic-authentication.md) | The credential object for basicAuth |
| `apiKeyCredentials` | [`ApiKeyCredentials`]($a/custom-query-parameter.md) | The credential object for apiKey |
| `apiHeaderCredentials` | [`ApiHeaderCredentials`]($a/custom-header-signature.md) | The credential object for apiHeader |
| `oAuthCCGCredentials` | [`OAuthCCGCredentials`]($a/oauth-2-client-credentials-grant.md) | The credential object for oAuthCCG |
| `oAuthACGCredentials` | [`OAuthACGCredentials`]($a/oauth-2-authorization-code-grant.md) | The credential object for oAuthACG |
| `oAuthROPCGCredentials` | [`OAuthROPCGCredentials`]($a/oauth-2-resource-owner-credentials-grant.md) | The credential object for oAuthROPCG |
| `oAuthBearerTokenCredentials` | [`OAuthBearerTokenCredentials`]($a/oauth-2-bearer-token.md) | The credential object for oAuthBearerToken |

## HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

## RetryConfiguration

| Parameter | Type | Description |
|  --- | --- | --- |
| `maxNumberOfRetries` | `number` | Maximum number of retries. <br> *Default*: `0` |
| `retryOnTimeout` | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| `retryInterval` | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| `maximumRetryWaitTime` | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| `backoffFactor` | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| `httpStatusCodesToRetry` | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| `httpMethodsToRetry` | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT']` |

The API client can be initialized as follows:

```ts
const client = new Client({
  basicAuthCredentials: {
    username: 'Username',
    password: 'Password'
  },
  apiKeyCredentials: {
    'token': 'token',
    'api-key': 'api-key'
  },
  apiHeaderCredentials: {
    'token': 'token',
    'api-key': 'api-key'
  },
  oAuthCCGCredentials: {
    oAuthClientId: 'OAuthClientId',
    oAuthClientSecret: 'OAuthClientSecret'
  },
  oAuthACGCredentials: {
    oAuthClientId: 'OAuthClientId',
    oAuthClientSecret: 'OAuthClientSecret',
    oAuthRedirectUri: 'OAuthRedirectUri',
    oAuthScopes: [
      OAuthScopeOAuthACGEnum.ReadScope
    ]
  },
  oAuthROPCGCredentials: {
    oAuthClientId: 'OAuthClientId',
    oAuthClientSecret: 'OAuthClientSecret',
    oAuthUsername: 'OAuthUsername',
    oAuthPassword: 'OAuthPassword'
  },
  oAuthBearerTokenCredentials: {
    accessToken: 'AccessToken'
  },
  accessToken: 'accessToken',
  timeout: 0,
  environment: Environment.Testing,
});
```

## MultiAuth-Sample Client

The gateway for the SDK. This class acts as a factory for the Controllers and also holds the configuration of the SDK.

## Controllers

| Name | Description |
|  --- | --- |
| authentication | Gets AuthenticationController |
| oAuthAuthorization | Gets OAuthAuthorizationController |

