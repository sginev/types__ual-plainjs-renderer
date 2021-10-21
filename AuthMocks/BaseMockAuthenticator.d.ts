import { Authenticator, ButtonStyle, User } from 'universal-authenticator-library';
export declare class BaseMockAuthenticator extends Authenticator {
    init(): Promise<void>;
    login(): Promise<User[]>;
    getStyle(): ButtonStyle;
    getError(): any;
    getOnboardingLink(): string;
    isErrored(): boolean;
    isLoading(): boolean;
    reset(): void;
    shouldRender(): boolean;
    shouldAutoLogin(): boolean;
    shouldRequestAccountName(): Promise<boolean>;
    logout(): Promise<void>;
    requiresGetKeyConfirmation(): boolean;
    getName(): string;
}
