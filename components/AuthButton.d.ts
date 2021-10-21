import { Authenticator } from 'universal-authenticator-library';
import { UALJsAbstractBaseComponent } from '../UALJsAbstractBaseComponent';
interface AuthButtonOptions {
    authenticator: Authenticator;
    showDownload?: boolean;
    key?: number;
    onClick?: (e: Event) => void;
}
export declare class AuthButton extends UALJsAbstractBaseComponent {
    /**
     * Constructs an Auth Button
     *
     * @param authButtonOptions { authenticator, showDownload, key, onClick }
     */
    constructor(authButtonOptions: AuthButtonOptions);
    protected generateStyles(): string;
    /**
     * Renders Button element based on current state of authenticator
     */
    protected generateDom(): HTMLElement;
}
export {};
