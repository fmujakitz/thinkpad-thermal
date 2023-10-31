/**
 * @returns {OVirtCredentialsManager}
 */
export function getOVirtCredentialsManager(): OVirtCredentialsManager;
export const SERVICE_NAME: "gdm-ovirtcred";
declare class OVirtCredentialsManager extends Credential.CredentialManager {
    constructor();
    _credentials: any;
}
import * as Credential from './credentialManager.js';
export {};
