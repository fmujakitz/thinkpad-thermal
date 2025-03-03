/**
 * @param {string} iface the interface name
 * @returns {string | null} the XML string or null if it is not found
 */
export function loadInterfaceXML(iface: string): string | null;
/**
 * @param {string} iface the interface name
 * @param {string} ifaceFile the interface filename
 * @returns {string | null} the XML string or null if it is not found
 */
export function loadSubInterfaceXML(iface: string, ifaceFile: string): string | null;
