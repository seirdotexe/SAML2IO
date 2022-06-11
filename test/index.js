'use strict';

import SAML2IO from '../lib/index.js';

import { readFile } from 'node:fs/promises';
import test from 'node:test';
import assert from 'node:assert';

async function loadXML(file) {
  const data = await readFile(`./test/xml/${file}.xml`);
  const xml = data.toString();
  const cleaned = SAML2IO.cleanXML(xml);

  return cleaned;
}

test('encode and decode SAML request', async () => {
  const request = await loadXML('Request');

  const encoded = await SAML2IO.encodeSAMLRequest(request);
  const decoded = await SAML2IO.decodeSAMLRequest(encoded);

  assert.equal(request, decoded);
});

test('encode and decode SAML response', async () => {
  const response = await loadXML('Response');

  const encoded = SAML2IO.encodeSAMLResponse(response);
  const decoded = SAML2IO.decodeSAMLResponse(encoded);

  assert.equal(response, decoded);
});
