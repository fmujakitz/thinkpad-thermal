/**
 * @returns {VmwareCredentialsManager}
 */
export function getVmwareCredentialsManager(): VmwareCredentialsManager;
export const SERVICE_NAME: "gdm-vmwcred";
declare class VmwareCredentialsManager extends Credential.CredentialManager {
    constructor();
    _credentials: any;
}
import * as Credential from './credentialManager.js';
export {};
