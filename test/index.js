'use strict';

import {
  encodeSAMLRequest, decodeSAMLRequest,
  encodeSAMLResponse, decodeSAMLResponse
} from '../lib/index.js';

import { loadXML } from './helper.js';

import test from 'node:test';
import assert from 'assert';

test('encode and decode SAML request', async () => {
  const request = await loadXML('Request');

  const encoded = await encodeSAMLRequest(request);
  const decoded = await decodeSAMLRequest(encoded);

  assert.equal(request, decoded);
});

test('encode and decode SAML response', async () => {
  const response = await loadXML('Response');

  const encoded = encodeSAMLResponse(response);
  const decoded = decodeSAMLResponse(encoded);

  assert.equal(response, decoded);
});
