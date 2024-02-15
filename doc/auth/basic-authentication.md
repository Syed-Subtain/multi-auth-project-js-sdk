
# Basic Authentication



Documentation for accessing and setting credentials for basicAuth.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| Username | `string` | The username to use with basic authentication | `username` |
| Password | `string` | The password to use with basic authentication | `password` |



**Note:** Auth credentials can be set using `basicAuthCredentials` object in the client.

## Usage Example

### Client Initialization

You must provide credentials in the client as shown in the following code snippet.

```ts
const client = new Client({
  basicAuthCredentials: {
    username: 'Username',
    password: 'Password'
  },
});
```


