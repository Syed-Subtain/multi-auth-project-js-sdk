# Authentication

```ts
const authenticationController = new AuthenticationController(client);
```

## Class Name

`AuthenticationController`

## Methods

* [O Auth Bearer Token](../../doc/controllers/authentication.md#o-auth-bearer-token)
* [Custom Authentication](../../doc/controllers/authentication.md#custom-authentication)
* [Custom Query or Header Authentication](../../doc/controllers/authentication.md#custom-query-or-header-authentication)
* [O Auth Grant Types or Combinations](../../doc/controllers/authentication.md#o-auth-grant-types-or-combinations)
* [No Auth](../../doc/controllers/authentication.md#no-auth)
* [O Auth Client Credentials Grant](../../doc/controllers/authentication.md#o-auth-client-credentials-grant)
* [Basic Auth and Api Header Auth](../../doc/controllers/authentication.md#basic-auth-and-api-header-auth)
* [O Auth Authorization Grant](../../doc/controllers/authentication.md#o-auth-authorization-grant)
* [Multiple Auth Combination](../../doc/controllers/authentication.md#multiple-auth-combination)


# O Auth Bearer Token

```ts
async oAuthBearerToken(
  requestOptions?: RequestOptions
): Promise<ApiResponse<string>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`string`

## Example Usage

```ts
try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await authenticationController.oAuthBearerToken();
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


# Custom Authentication

```ts
async customAuthentication(
  requestOptions?: RequestOptions
): Promise<ApiResponse<string>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`string`

## Example Usage

```ts
try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await authenticationController.customAuthentication();
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


# Custom Query or Header Authentication

```ts
async customQueryOrHeaderAuthentication(
  requestOptions?: RequestOptions
): Promise<ApiResponse<string>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`string`

## Example Usage

```ts
try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await authenticationController.customQueryOrHeaderAuthentication();
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


# O Auth Grant Types or Combinations

This endpoint tests or combinations of OAuth types

```ts
async oAuthGrantTypesORCombinations(
  requestOptions?: RequestOptions
): Promise<ApiResponse<string>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`string`

## Example Usage

```ts
try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await authenticationController.oAuthGrantTypesORCombinations();
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


# No Auth

**This endpoint is deprecated since version 0.0.1-alpha. You should not use this method as it requires no auth and can bring security issues to the server and api call itself!!**

This endpoint does not use auth.

Swagger URL Endpoint 1: [http://swagger.io/endpoint1](http://swagger.io/endpoint1)

:information_source: **Note** This endpoint does not require authentication.

```ts
async noAuth(
  requestOptions?: RequestOptions
): Promise<ApiResponse<string>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`string`

## Example Usage

```ts
try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await authenticationController.noAuth();
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


# O Auth Client Credentials Grant

```ts
async oAuthClientCredentialsGrant(
  requestOptions?: RequestOptions
): Promise<ApiResponse<ServiceStatus>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ServiceStatus`](../../doc/models/service-status.md)

## Example Usage

```ts
try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await authenticationController.oAuthClientCredentialsGrant();
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


# Basic Auth and Api Header Auth

```ts
async basicAuthAndApiHeaderAuth(
  requestOptions?: RequestOptions
): Promise<ApiResponse<string>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`string`

## Example Usage

```ts
try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await authenticationController.basicAuthAndApiHeaderAuth();
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


# O Auth Authorization Grant

```ts
async oAuthAuthorizationGrant(
  requestOptions?: RequestOptions
): Promise<ApiResponse<User>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`User`](../../doc/models/user.md)

## Example Usage

```ts
try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await authenticationController.oAuthAuthorizationGrant();
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


# Multiple Auth Combination

**This endpoint is deprecated.**

This endpoint uses globally applied auth which is a hypothetical scneraio but covers the worst case.

Swagger URL Endpoint 1: [http://swagger.io/endpoint1](http://swagger.io/endpoint1)

```ts
async multipleAuthCombination(
  requestOptions?: RequestOptions
): Promise<ApiResponse<string>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`string`

## Example Usage

```ts
try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await authenticationController.multipleAuthCombination();
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

