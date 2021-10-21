import { UALJsAbstractBaseComponent } from '../UALJsAbstractBaseComponent';
export declare enum MessageTypes {
    ERROR = 1,
    SUCCESS = 2
}
export interface ModalMessage {
    title?: string;
    message: string;
    type?: MessageTypes;
    onClose?: any;
}
export declare class MessageModal extends UALJsAbstractBaseComponent {
    private onClose;
    generateStyles(): string;
    /**
     * Generates the Modal DOM and binds close handler
     */
    protected generateDom(): HTMLElement;
    /**
     * Sets the message content of the modal
     *
     * @param modalMessage ModalMessage
     */
    setMessage(modalMessage: ModalMessage): void;
    /**
     * Sets the message for the modal and also shows it
     *
     * @param modalMessage ModalMessage
     */
    showMessage(modalMessage: ModalMessage): void;
    close(): void;
}
