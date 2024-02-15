# O Auth Authorization

```ts
const oAuthAuthorizationController = new OAuthAuthorizationController(client);
```

## Class Name

`OAuthAuthorizationController`

## Methods

* [Request Token O Auth CCG](../../doc/controllers/o-auth-authorization.md#request-token-o-auth-ccg)
* [Request Token O Auth ACG](../../doc/controllers/o-auth-authorization.md#request-token-o-auth-acg)
* [Refresh Token O Auth ACG](../../doc/controllers/o-auth-authorization.md#refresh-token-o-auth-acg)
* [Request Token O Auth ROPCG](../../doc/controllers/o-auth-authorization.md#request-token-o-auth-ropcg)
* [Refresh Token O Auth ROPCG](../../doc/controllers/o-auth-authorization.md#refresh-token-o-auth-ropcg)


# Request Token O Auth CCG

Create a new OAuth 2 token.

:information_source: **Note** This endpoint does not require authentication.

```ts
async requestTokenOAuthCCG(
  authorization: string,
  scope?: string,
  fieldParameters?: Record<string, unknown>,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OAuthToken>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string` | Header, Required | Authorization header in Basic auth format |
| `scope` | `string \| undefined` | Form, Optional | Requested scopes as a space-delimited list. |
| `fieldParameters` | `Record<string, string>` | Optional | Pass additional field parameters. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OAuthToken`](../../doc/models/o-auth-token.md)

## Example Usage

```ts
const authorization = 'Authorization8';

const fieldParameters: Record<string, string> = {
  'key0': 'additionalFieldParams9'
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await oAuthAuthorizationController.requestTokenOAuthCCG(
  authorization,
  undefined,
  fieldParameters
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | OAuth 2 provider returned an error. | [`OAuthProviderError`](../../doc/models/o-auth-provider-error.md) |
| 401 | OAuth 2 provider says client authentication failed. | [`OAuthProviderError`](../../doc/models/o-auth-provider-error.md) |


# Request Token O Auth ACG

Create a new OAuth 2 token.

:information_source: **Note** This endpoint does not require authentication.

```ts
async requestTokenOAuthACG(
  authorization: string,
  code: string,
  redirectUri: string,
  fieldParameters?: Record<string, unknown>,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OAuthToken>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string` | Header, Required | Authorization header in Basic auth format |
| `code` | `string` | Form, Required | Authorization Code |
| `redirectUri` | `string` | Form, Required | Redirect Uri |
| `fieldParameters` | `Record<string, string>` | Optional | Pass additional field parameters. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OAuthToken`](../../doc/models/o-auth-token.md)

## Example Usage

```ts
const authorization = 'Authorization8';

const code = 'code8';

const redirectUri = 'redirect_uri8';

const fieldParameters: Record<string, string> = {
  'key0': 'additionalFieldParams9'
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await oAuthAuthorizationController.requestTokenOAuthACG(
  authorization,
  code,
  redirectUri,
  fieldParameters
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | OAuth 2 provider returned an error. | [`OAuthProviderError`](../../doc/models/o-auth-provider-error.md) |
| 401 | OAuth 2 provider says client authentication failed. | [`OAuthProviderError`](../../doc/models/o-auth-provider-error.md) |


# Refresh Token O Auth ACG

Obtain a new access token using a refresh token

:information_source: **Note** This endpoint does not require authentication.

```ts
async refreshTokenOAuthACG(
  authorization: string,
  refreshToken: string,
  scope?: string,
  fieldParameters?: Record<string, unknown>,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OAuthToken>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string` | Header, Required | Authorization header in Basic auth format |
| `refreshToken` | `string` | Form, Required | Refresh token |
| `scope` | `string \| undefined` | Form, Optional | Requested scopes as a space-delimited list. |
| `fieldParameters` | `Record<string, string>` | Optional | Pass additional field parameters. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OAuthToken`](../../doc/models/o-auth-token.md)

## Example Usage

```ts
const authorization = 'Authorization8';

const refreshToken = 'refresh_token0';

const fieldParameters: Record<string, string> = {
  'key0': 'additionalFieldParams9'
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await oAuthAuthorizationController.refreshTokenOAuthACG(
  authorization,
  refreshToken,
  undefined,
  fieldParameters
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | OAuth 2 provider returned an error. | [`OAuthProviderError`](../../doc/models/o-auth-provider-error.md) |
| 401 | OAuth 2 provider says client authentication failed. | [`OAuthProviderError`](../../doc/models/o-auth-provider-error.md) |


# Request Token O Auth ROPCG

Create a new OAuth 2 token.

:information_source: **Note** This endpoint does not require authentication.

```ts
async requestTokenOAuthROPCG(
  authorization: string,
  username: string,
  password: string,
  scope?: string,
  fieldParameters?: Record<string, unknown>,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OAuthToken>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string` | Header, Required | Authorization header in Basic auth format |
| `username` | `string` | Form, Required | Resource owner username |
| `password` | `string` | Form, Required | Resource owner password |
| `scope` | `string \| undefined` | Form, Optional | Requested scopes as a space-delimited list. |
| `fieldParameters` | `Record<string, string>` | Optional | Pass additional field parameters. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OAuthToken`](../../doc/models/o-auth-token.md)

## Example Usage

```ts
const authorization = 'Authorization8';

const username = 'username0';

const password = 'password4';

const fieldParameters: Record<string, string> = {
  'key0': 'additionalFieldParams9'
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await oAuthAuthorizationController.requestTokenOAuthROPCG(
  authorization,
  username,
  password,
  undefined,
  fieldParameters
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | OAuth 2 provider returned an error. | [`OAuthProviderError`](../../doc/models/o-auth-provider-error.md) |
| 401 | OAuth 2 provider says client authentication failed. | [`OAuthProviderError`](../../doc/models/o-auth-provider-error.md) |


# Refresh Token O Auth ROPCG

Obtain a new access token using a refresh token

:information_source: **Note** This endpoint does not require authentication.

```ts
async refreshTokenOAuthROPCG(
  authorization: string,
  refreshToken: string,
  scope?: string,
  fieldParameters?: Record<string, unknown>,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OAuthToken>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string` | Header, Required | Authorization header in Basic auth format |
| `refreshToken` | `string` | Form, Required | Refresh token |
| `scope` | `string \| undefined` | Form, Optional | Requested scopes as a space-delimited list. |
| `fieldParameters` | `Record<string, string>` | Optional | Pass additional field parameters. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OAuthToken`](../../doc/models/o-auth-token.md)

## Example Usage

```ts
const authorization = 'Authorization8';

const refreshToken = 'refresh_token0';

const fieldParameters: Record<string, string> = {
  'key0': 'additionalFieldParams9'
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await oAuthAuthorizationController.refreshTokenOAuthROPCG(
  authorization,
  refreshToken,
  undefined,
  fieldParameters
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | OAuth 2 provider returned an error. | [`OAuthProviderError`](../../doc/models/o-auth-provider-error.md) |
| 401 | OAuth 2 provider says client authentication failed. | [`OAuthProviderError`](../../doc/models/o-auth-provider-error.md) |

