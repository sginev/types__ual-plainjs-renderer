import { Authenticator } from 'universal-authenticator-library';
declare global {
    interface Window {
        tippy: (e: any, t: any, r: any | null) => void;
    }
}
declare type UserLoginCallback = (authenticator: Authenticator, accountName: string | undefined) => void;
/**
 * UnisonDom responsible for creating the UI elements of the Authenticator
 */
export declare class UALJsDom {
    private loginCallback;
    private containerElement;
    private buttonStyleOverride;
    private authenticators;
    private authStateString;
    private getAuthenticatorsView;
    private authenticatorModal;
    private downloadAuthenticatorView;
    private messageModalView;
    private accountInputModalView;
    /**
     * UnisonDom responsible for creating the UI elements of the Authenticator
     *
     * @param Authenticator[] Array of authenticators to show the user
     * @param HTMLElement Container element for all Authenticator UI elements
     * @param buttonStyleOverride Allows the user to override the default styles of the auth start button
     * @stylePrefix Allows the user to override the prefix of class and id elements to avoid style conflicts
     */
    constructor(loginCallback: UserLoginCallback, authenticators: Authenticator[], containerElement: HTMLElement, buttonStyleOverride?: string | boolean);
    /**
     * Generates and appends the UI to the dom; this is user called because the container
     * element may not be available at initialization
     */
    generateUIDom(): void;
    /**
     * Does a cyclical redraw of the authenticators so we can redraw on state change
     */
    private startRefreshAuthenticatorsTimeout;
    /**
     * Handles download clicks showing the individual authenticators download modal
     *
     * @param authenticator Authenticator for download representation
     */
    private onDownloadClick;
    /**
     * Calls reset on all authenticators, used when retrying authenticator initialization
     * when no active or authenticators are found for the current environment or all available
     * authenticators have errored out
     */
    private resetAuthenticators;
    private showGetAuthenticators;
    /**
     * Generates unique string for comparing authenticator states
     */
    private getAuthenticatorsStateString;
    /**
     * Cleans up existing authenticators and redraws them so we can
     * respond to authenticator state changes
     */
    private drawAuthenticatorsButtons;
    /**
     * Renders authenticators in the modal selection box
     *
     * @param authenticators Authenticators to render
     */
    protected renderAuthenticationSelections(authenticators: Authenticator[]): void;
    /**
     * Resets the ui to it's original state
     */
    reset(): void;
    /**
     * Login Method handling login UI status and errors
     *
     * @param authenticator Authenticator to login with
     * @param accountName Optional account name for login
     */
    private login;
    /**
     * Shows account name input for the provide authenticator
     */
    showAccountNameInput(authenticator: Authenticator): void;
    /**
     * Show Authenticator Selector view
     */
    private showAuthenticatorSelection;
    /**
     * Show Authenticator Selector view
     */
    private hideAuthenticatorSelection;
    /**
     * Generic message display modal for users.
     *
     * @param modalMessage Message to show
     */
    private showMessage;
    /**
     * Shows the authentication modal
     */
    showAuthModal(): void;
    /**
     * Adds login button watcher for displaying the auth modal
     */
    private attachLoginButtonWatcher;
    /**
     * Renders the Modal to contain auth continue buttons
     */
    createAuthenticatorModal(): HTMLElement;
    /**
     * Determines if the authenticator is ready for dapp interaction
     *
     * @param authenticator UAL Authenticator
     */
    private static authenticatorCanLogin;
    /**
     * Handles the click action of Authenticator buttons
     *
     * @param authenticators Authenticators
     */
    private onAuthButtonClickHandler;
    /**
     * Renders the Auth start button
     */
    createButton(): HTMLButtonElement;
    /**
     * Generates the CSS styles for the Auth start button
     *
     * @param css Optional css override for user provided button styles
     */
    createButtonStyles(css: string | boolean): HTMLStyleElement;
    /**
     * Generates the CSS styles for the Auth Modal
     */
    createAuthenticatorModalStyles(): HTMLStyleElement;
}
export {};
