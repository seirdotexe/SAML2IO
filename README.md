# SAML2IO

Encoder and decoder for SAML2 messages.

# Usage

```js
const encoded_request = await SAML2IO.encodeSAMLRequest(/* SAML request... */);
const decoded_request = await SAML2IO.decodeSAMLRequest(encoded_request);

const encoded_response = SAML2IO.encodeSAMLResponse(/* SAML response... */);
const decoded_response = SAML2IO.decodeSAMLResponse(encoded_response);
```
