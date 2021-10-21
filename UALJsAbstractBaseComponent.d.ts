export declare abstract class UALJsAbstractBaseComponent {
    protected dom: HTMLElement;
    protected styleElement: HTMLStyleElement;
    protected options: any;
    /**
     * Creates component container and attaches generated dom to it
     */
    constructor(options?: any);
    /**
     * Shows the component
     */
    show(): void;
    /**
     * Hides the component
     */
    hide(): void;
    /**
     * Return styles this component needs to display properly
     */
    protected abstract generateStyles(): string;
    /**
     * Generates and returns dom of the Components
     */
    protected abstract generateDom(): HTMLElement;
    /**
     * Attaches the dom of the component to the provided parent
     * element
     *
     * @param parent element the component dom should attach to
     */
    attach(parent: HTMLElement): void;
    /**
     * Helper method to return the parent of the component
     */
    getComponentElement(): HTMLElement;
}
