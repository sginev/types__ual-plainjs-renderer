import { Authenticator } from 'universal-authenticator-library';
import { UALJsAbstractBaseComponent } from '../UALJsAbstractBaseComponent';
interface DownloadAuthenticatorModalOptions {
    onGoBack: () => void;
    onClose: () => void;
}
export declare class DownloadAuthenticatorModal extends UALJsAbstractBaseComponent {
    /**
     *
     * @param options { onGoBack, onClose } // goback and close callbacks
     */
    constructor(options: DownloadAuthenticatorModalOptions);
    close(): void;
    /**
     * Show the download modal and provide a download button for the provided authenticator
     *
     * @param authenticator Authenticator this modal represents
     */
    open(authenticator: Authenticator): void;
    goBack(): void;
    protected generateStyles(): string;
    /**
     * Generates the Modal DOM, binds go-back, and close handlers
     */
    protected generateDom(): HTMLElement;
}
export {};
