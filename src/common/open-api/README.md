These models were bootstrapped [`open-api-generator`](https://openapi-generator.tech/)

```shell
openapi-generator generate -g typescript-fetch -i https://play-app.orkes.io/api-docs
```

# Changes

The `runtime` file has been modified to:

- Import fetch globals from `node-fetch`
- Allow passing `tls` options
- 
The original generates

