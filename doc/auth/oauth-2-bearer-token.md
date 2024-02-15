
# OAuth 2 Bearer token



Documentation for accessing and setting credentials for OAuthBearerToken.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| AccessToken | `string` | The OAuth 2.0 Access Token to use for API requests. | `accessToken` |



**Note:** Auth credentials can be set using `oAuthBearerTokenCredentials` object in the client.

## Usage Example

### Client Initialization

You must provide credentials in the client as shown in the following code snippet.

```ts
const client = new Client({
  oAuthBearerTokenCredentials: {
    accessToken: 'AccessToken'
  },
});
```


