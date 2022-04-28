# SAML2IO

[![npm version](https://badge.fury.io/js/saml2io.svg)](https://badge.fury.io/js/saml2io)

Encoder and decoder for SAML2 messages.

# Installation

```
npm install saml2io
```

# Usage

```js
import {
  encodeSAMLRequest, decodeSAMLRequest,
  encodeSAMLResponse, decodeSAMLResponse
} from 'saml2io';

const encoded_request = await encodeSAMLRequest(/* SAML request... */);
const decoded_request = await decodeSAMLRequest(encoded_request);

const encoded_response = encodeSAMLResponse(/* SAML response... */);
const decoded_response = decodeSAMLResponse(encoded_response);
```
