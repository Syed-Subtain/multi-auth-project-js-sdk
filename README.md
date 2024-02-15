
# Getting Started with MultiAuth-Sample

## Introduction

API for Markdown Notes app.

## Install the Package

Run the following command from your project directory to install the package from npm:

```ts
npm install multi-auth-project-sdk@1.0.0
```

For additional package details, see the [Npm page for the multi-auth-project-sdk@1.0.0 npm](https://www.npmjs.com/package/multi-auth-project-sdk/v/1.0.0).

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/doc/client.md)

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
| `basicAuthCredentials` | [`BasicAuthCredentials`](https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/doc/$a/https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/basic-authentication.md) | The credential object for basicAuth |
| `apiKeyCredentials` | [`ApiKeyCredentials`](https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/doc/$a/https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/custom-query-parameter.md) | The credential object for apiKey |
| `apiHeaderCredentials` | [`ApiHeaderCredentials`](https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/doc/$a/https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/custom-header-signature.md) | The credential object for apiHeader |
| `oAuthCCGCredentials` | [`OAuthCCGCredentials`](https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/doc/$a/https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/oauth-2-client-credentials-grant.md) | The credential object for oAuthCCG |
| `oAuthACGCredentials` | [`OAuthACGCredentials`](https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/doc/$a/https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/oauth-2-authorization-code-grant.md) | The credential object for oAuthACG |
| `oAuthROPCGCredentials` | [`OAuthROPCGCredentials`](https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/doc/$a/https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/oauth-2-resource-owner-credentials-grant.md) | The credential object for oAuthROPCG |
| `oAuthBearerTokenCredentials` | [`OAuthBearerTokenCredentials`](https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/doc/$a/https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/oauth-2-bearer-token.md) | The credential object for oAuthBearerToken |

### HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

### RetryConfiguration

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

## Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

### Fields

| Name | Description |
|  --- | --- |
| production | - |
| testing | **Default** |

## Authorization

This API uses the following authentication schemes.

* [`basicAuth (Basic Authentication)`](https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/doc/$a/https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/basic-authentication.md)
* [`apiKey (Custom Query Parameter)`](https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/doc/$a/https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/custom-query-parameter.md)
* [`apiHeader (Custom Header Signature)`](https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/doc/$a/https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/custom-header-signature.md)
* [`OAuthCCG (OAuth 2 Client Credentials Grant)`](https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/doc/$a/https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/oauth-2-client-credentials-grant.md)
* [`OAuthACG (OAuth 2 Authorization Code Grant)`](https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/doc/$a/https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/oauth-2-authorization-code-grant.md)
* [`OAuthROPCG (OAuth 2 Resource Owner Credentials Grant)`](https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/doc/$a/https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/oauth-2-resource-owner-credentials-grant.md)
* [`OAuthBearerToken (OAuth 2 Bearer token)`](https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/doc/$a/https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/oauth-2-bearer-token.md)
* `CustomAuth (Custom Authentication)`

## List of APIs

* [O Auth Authorization](https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/doc/controllers/o-auth-authorization.md)
* [Authentication](https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/doc/controllers/authentication.md)

## Classes Documentation

* [ApiResponse](https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/doc/api-response.md)
* [ApiError](https://www.github.com/Syed-Subtain/multi-auth-project-js-sdk/tree/1.0.0/doc/api-error.md)

