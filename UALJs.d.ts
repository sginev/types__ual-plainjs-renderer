import { Authenticator, Chain, UAL, User } from 'universal-authenticator-library';
import { UALJsDom } from './UALJsDom';
/**
 * Render configuration for the UAL renderer
 */
export interface UALJsRenderConfig {
    containerElement: HTMLElement;
    buttonStyleOverride?: string;
}
/**
 * Plain JS implementation for UAL Interaction with UI
 */
export declare class UALJs extends UAL {
    isAutologin: boolean;
    protected static SESSION_EXPIRATION_KEY: string;
    protected static SESSION_AUTHENTICATOR_KEY: string;
    protected static SESSION_ACCOUNT_NAME_KEY: string;
    protected static AUTHENTICATOR_LOADING_INTERVAL: number;
    protected userCallbackHandler: (users: User[]) => any;
    protected accountNameInputValue: string;
    protected dom?: UALJsDom;
    protected activeAuthenticator?: Authenticator;
    private renderConfig?;
    /**
     *
     * @param userCallbackHandler Called with the array of users after a successful authenticator selection
     * @param chains Array of Chains the application wants to support
     * @param appName Name of the application
     * @param authenticators List of authenticators this app supports
     * @param renderConfig Optional UI rendering configuration for environments not using login
     */
    constructor(userCallbackHandler: (users: User[]) => any, chains: Chain[], appName: string, authenticators: Authenticator[], renderConfig?: UALJsRenderConfig);
    /**
     * Initializes UAL: If a renderConfig was provided and no autologin authenticator
     * is returned it will render the Auth Button and relevant DOM elements.
     *
     */
    init(): void;
    /**
     * Attempts to resume a users session if they previously logged in
     *
     * @param authenticators Available authenticators for login
     */
    private attemptSessionLogin;
    /**
     * App developer can call this directly with the preferred authenticator or render a
     * UI to let the user select their authenticator
     *
     * @param authenticator Authenticator chosen for login
     * @param accountName Account name (optional) of the user logging in
     */
    loginUser(authenticator: Authenticator, accountName?: string): Promise<void>;
    private waitForAuthenticatorToLoad;
    /**
     * Clears the session data for the logged in user
     */
    logoutUser(): Promise<void>;
    private clearStorageKeys;
}
