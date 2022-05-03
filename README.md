# SAML2IO [![npm version](https://badge.fury.io/js/saml2io.svg)](https://badge.fury.io/js/saml2io)

Encoder and decoder for SAML2 messages.

# Installation

```
npm install saml2io
```

# Usage

```js
import SAML2IO from 'saml2io';

const encoded_request = await SAML2IO.encodeSAMLRequest(/* SAML request... */);
const decoded_request = await SAML2IO.decodeSAMLRequest(encoded_request);

const encoded_response = SAML2IO.encodeSAMLResponse(/* SAML response... */);
const decoded_response = SAML2IO.decodeSAMLResponse(encoded_response);
```
