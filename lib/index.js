'use strict';

import zlib from 'zlib';
import { promisify } from 'util';

//? Promisify ZLIB functions
const deflateRaw = promisify(zlib.deflateRaw);
const inflateRaw = promisify(zlib.inflateRaw);

/**
 * @exports
 * @async
 * @function
 * @description Encodes an XML SAML request
 * @param {string} xml - The XML SAML request to encode
 * @returns {string} The encoded XML SAML request
 */
export async function encodeSAMLRequest(xml) {
  const raw = await deflateRaw(xml);
  const b64 = raw.toString('base64');
  const enc = encodeURIComponent(b64);

  return enc;
}

/**
 * @exports
 * @async
 * @function
 * @description Decodes an XML SAML request
 * @param {string} enc - The XML SAML request to decode
 * @returns {string} The decoded XML SAML request
 */
export async function decodeSAMLRequest(enc) {
  const dec = decodeURIComponent(enc);
  const b64 = Buffer.from(dec, 'base64');
  const raw = await inflateRaw(b64);
  const xml = raw.toString();

  return xml;
}

/**
 * @exports
 * @function
 * @description Encodes an XML SAML response
 * @param {string} xml - The XML SAML response to encode
 * @returns {string} The encoded XML SAML response
 */
export function encodeSAMLResponse(xml) {
  const b64 = Buffer.from(xml).toString('base64');

  return b64;
}

/**
 * @exports
 * @function
 * @description Decodes an XML SAML response
 * @param {string} b64 - The XML SAML response to decode
 * @returns {string} The decoded XML SAML response
 */
export function decodeSAMLResponse(b64) {
  const xml = Buffer.from(b64, 'base64').toString();

  return xml;
}
