'use strict';

import { readFile } from 'fs/promises';

/**
 * @exports
 * @function
 * @description Cleans up an XML string
 * @param {string} xml - The XML string to clean up
 * @returns {string} The cleaned up XML string
 */
export function cleanXML(xml) {
  const cleaned = xml
    .replace(/\s\s+/g, ' ')
    .replace(/\s*</g, '<')
    .replace(/>\s*/g, '>')
    .trim();

  return cleaned;
}

/**
 * @exports
 * @async
 * @function
 * @description Loads an XML file
 * @param {string} file - The XML file to load
 * @returns {string} The loaded XML file
 */
export async function loadXML(file) {
  const data = await readFile(`./test/xml/${file}.xml`);
  const xml = data.toString();
  const cleaned = cleanXML(xml);

  return cleaned;
}
