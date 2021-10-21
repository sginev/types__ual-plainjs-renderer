import { Authenticator } from 'universal-authenticator-library';
import { UALJsAbstractBaseComponent } from '../UALJsAbstractBaseComponent';
interface GetAuthenticatorModalOptions {
    authenticators: Authenticator[];
    onClose: () => void;
    onDownloadClick: (authenticator: Authenticator) => void;
    onResetAuthenticatorsClick: () => void;
}
export declare class GetAuthenticatorModal extends UALJsAbstractBaseComponent {
    /**
     *
     * @param getAuthenticatorModalOptions { authenticators, onClose, onDownloadClick, onResetAuthenticatorsClick }
     */
    constructor(getAuthenticatorModalOptions: GetAuthenticatorModalOptions);
    protected generateStyles(): string;
    private onDownloadClick;
    close(): void;
    open(): void;
    /**
     * Generates the Modal DOM, binds go-back, and close handlers, creates and renders Download Authenticator buttons
     */
    protected generateDom(): HTMLElement;
}
export {};
