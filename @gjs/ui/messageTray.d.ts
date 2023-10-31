export const ANIMATION_TIME: 200;
export namespace State {
    let HIDDEN: number;
    let SHOWING: number;
    let SHOWN: number;
    let HIDING: number;
}
export type NotificationDestroyedReason = number;
export namespace NotificationDestroyedReason {
    let EXPIRED: number;
    let DISMISSED: number;
    let SOURCE_CLOSED: number;
    let REPLACED: number;
}
export type Urgency = number;
export namespace Urgency {
    let LOW: number;
    let NORMAL: number;
    let HIGH: number;
    let CRITICAL: number;
}
export type PrivacyScope = number;
export namespace PrivacyScope {
    let USER: number;
    let SYSTEM: number;
}
export const NotificationPolicy: any;
export const NotificationGenericPolicy: any;
export const NotificationApplicationPolicy: any;
export const Notification: any;
export const NotificationBanner: any;
export const SourceActor: any;
export const Source: any;
export const MessageTray: any;
export const SystemNotificationSource: any;
