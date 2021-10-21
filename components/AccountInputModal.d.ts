import { Authenticator } from 'universal-authenticator-library';
import { UALJsAbstractBaseComponent } from '../UALJsAbstractBaseComponent';
export interface AccountInputModalOptions {
    onGoBack: () => void;
    onClose: () => void;
}
/**
 * @param options { onGoBack, onClose } // goback and close callbacks
 */
export declare class AccountInputModal extends UALJsAbstractBaseComponent {
    constructor(options: AccountInputModalOptions);
    protected generateStyles(): string;
    /**
     * Generates the Modal DOM, binds go-back, and close handlers
     */
    protected generateDom(): HTMLElement;
    /**
     * Sets and displays account input error
     *
     * @param inputError Error message to show
     */
    private showAccountNameInputError;
    /**
     * Clears account input error and hides it
     */
    private clearAccountNameInputError;
    private getInputField;
    /**
     * Displays the input modal and ties it to the authenticator requesting
     * username.  Then calls login callback to complete login when clicked.
     *
     * @param authenticator Authenticator you wiish to login with
     * @param login login callback passed from UAL
     */
    showInput(authenticator: Authenticator, login: any): void;
}
