export type AuthPromptMode = number;
export namespace AuthPromptMode {
    let UNLOCK_ONLY: number;
    let UNLOCK_OR_LOG_IN: number;
}
export type AuthPromptStatus = number;
export namespace AuthPromptStatus {
    let NOT_VERIFYING: number;
    let VERIFYING: number;
    let VERIFICATION_FAILED: number;
    let VERIFICATION_SUCCEEDED: number;
    let VERIFICATION_CANCELLED: number;
    let VERIFICATION_IN_PROGRESS: number;
}
export type BeginRequestType = number;
export namespace BeginRequestType {
    let PROVIDE_USERNAME: number;
    let DONT_PROVIDE_USERNAME: number;
    let REUSE_USERNAME: number;
}
export const AuthPrompt: any;
