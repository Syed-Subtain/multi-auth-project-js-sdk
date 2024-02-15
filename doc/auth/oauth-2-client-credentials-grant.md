
# OAuth 2 Client Credentials Grant



Documentation for accessing and setting credentials for OAuthCCG.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| OAuthClientId | `string` | OAuth 2 Client ID | `oAuthClientId` |
| OAuthClientSecret | `string` | OAuth 2 Client Secret | `oAuthClientSecret` |
| OAuthToken | `OAuthToken` | Object for storing information about the OAuth token | `oAuthToken` |



**Note:** Auth credentials can be set using `oAuthCCGCredentials` object in the client.

## Usage Example

### Client Initialization

You must initialize the client with *OAuth 2.0 Client Credentials Grant* credentials as shown in the following code snippet.

```ts
const client = new Client({
  oAuthCCGCredentials: {
    oAuthClientId: 'OAuthClientId',
    oAuthClientSecret: 'OAuthClientSecret'
  },
});
```



Your application must obtain user authorization before it can execute an endpoint call in case this SDK chooses to use *OAuth 2.0 Client Credentials Grant*. This authorization includes the following steps

The `fetchToken` method will exchange the OAuth client credentials for an *access token*. The access token is an object containing information for authorizing client requests and refreshing the token itself.

```ts
try {
  const token = await client.oAuthCCGManager?.fetchToken();
  if (token) {
    client.withConfiguration({
      oAuthCCGCredentials: {
        ...config.oAuthCCGCredentials,
        oAuthToken: token
      }
    });
  }
} catch(error) {
  // handle ApiError or OAuthProviderError if needed
}
```

The client can now make authorized endpoint calls.

### Storing an access token for reuse

It is recommended that you store the access token for reuse.

```ts
Store the token in session storage or local storage.
```

### Creating a client from a stored token

To authorize a client from a stored access token, just set the access token in Configuration along with the other configuration parameters before creating the client:

```ts
const newClient = client.withConfiguration({
  oAuthCCGCredentials: {
    ...config.oAuthCCGCredentials,
    oAuthToken: token
  }
});
```

### Complete example



```ts
// function for storing token to database
async function saveTokenToDatabase(token: OAuthToken) {
  // Code to save the token to the database
}

// function for loading token from database
async function loadTokenFromDatabase(): Promise<OAuthToken | undefined> {
  // Load token from the database and return it (return undefined if no token exists)
  return undefined;
}

// create a new client from configuration
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

// obtain access token, needed for client to be authorized
const previousToken = await loadTokenFromDatabase();
if (previousToken) {
  // restore previous access token and update the cloned configuration with the token
  client.withConfiguration({
    oAuthCCGCredentials: {
      ...config.oAuthCCGCredentials,
      oAuthToken: previousToken
    }
  });
} else {
  // obtain a new access token
  try {
    const token = await client.oAuthCCGManager?.fetchToken();
    if (token) {
        await saveTokenToDatabase(token);
        client.withConfiguration({
          oAuthCCGCredentials: {
            ...config.oAuthCCGCredentials,
            oAuthToken: token
          }
        });
    }
  } catch (error) {
      if (error instanceof OAuthProviderError) {
          // handle OAuthProviderError if needed
      }
    }
}
```


