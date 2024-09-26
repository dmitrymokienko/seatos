import { useEffect, useRef, MouseEvent } from "react";
import { IModalProps, ModalSize } from "../types";
import "./Modal.css";

export function Modal(props: IModalProps) {
    const { isOpen, onClose, title, children, footerActions = [], size = ModalSize.Medium } = props;

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
        } else {
            document.removeEventListener("keydown", handleKeyDown);
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    useEffect(() => {
        if (isOpen) {
            const handleFocus = (event: KeyboardEvent) => {
                const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>("a[href], button, input");
                const firstElement = focusableElements?.[0];
                const lastElement = focusableElements?.[focusableElements.length - 1];

                if (event.key !== "Tab") return;
                if (document.activeElement === lastElement) {
                    firstElement?.focus();
                    event.preventDefault();
                }
            };

            document.addEventListener("keydown", handleFocus);
            return () => {
                document.removeEventListener("keydown", handleFocus);
            };
        }
    }, [isOpen]);

    const handleModalClick = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    return (
        <div className={`modal-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
            <div className={`modal ${size} ${isOpen ? "open" : ""}`} onClick={handleModalClick} ref={modalRef}>
                <div className="modal-header">
                    <h3>{title}</h3>

                    <button className="close-button" onClick={onClose}>
                        x
                    </button>
                </div>

                <div className="modal-body">{children}</div>

                {footerActions.length > 0 && (
                    <div className="modal-footer">
                        {footerActions.map((action) => (
                            <button key={action.label} onClick={action.onClick}>
                                {action.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
