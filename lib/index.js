'use strict';

import zlib from 'zlib';
import { promisify } from 'util';

//? Promisify ZLIB functions
const deflateRaw = promisify(zlib.deflateRaw);
const inflateRaw = promisify(zlib.inflateRaw);

/**
 * @exports
 * @default
 * @class
 * @module SAML2IO
 */
export default class SAML2IO {
  /**
   * @static
   * @description Cleans up an XML string
   * @param {string} xml - The XML string to clean up
   * @returns {string} The cleaned up XML string
   */
  static cleanXML(xml) {
    const cleaned = xml
      .replace(/\s\s+/g, ' ')
      .replace(/\s*</g, '<')
      .replace(/>\s*/g, '>')
      .trim();

    return cleaned;
  }

  /**
   * @static
   * @async
   * @description Encodes an XML SAML request
   * @param {string} xml - The XML SAML request to encode
   * @returns The encoded XML SAML request
   */
  static async encodeSAMLRequest(xml) {
    const raw = await deflateRaw(xml);
    const b64 = raw.toString('base64');
    const enc = encodeURIComponent(b64);

    return enc;
  }

  /**
   * @static
   * @async
   * @description Decodes an XML SAML request
   * @param {string} enc - The XML SAML request to decode
   * @returns The decoded XML SAML request
   */
  static async decodeSAMLRequest(enc) {
    const dec = decodeURIComponent(enc);
    const b64 = Buffer.from(dec, 'base64');
    const raw = await inflateRaw(b64);
    const xml = raw.toString();

    return xml;
  }

  /**
   * @static
   * @description Encodes an XML SAML response
   * @param {string} xml - The XML SAML response to encode
   * @returns {string} The encoded XML SAML response
   */
  static encodeSAMLResponse(xml) {
    const b64 = Buffer.from(xml).toString('base64');

    return b64;
  }

  /**
   * @static
   * @description Decodes an XML SAML response
   * @param {string} b64 - The XML SAML response to decode
   * @returns {string} The decoded XML SAML response
   */
  static decodeSAMLResponse(b64) {
    const xml = Buffer.from(b64, 'base64').toString();

    return xml;
  }
}
