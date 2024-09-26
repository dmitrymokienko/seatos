export enum ModalSize {
    Small = "small",
    Medium = "medium",
    Large = "large",
}

export type FooterAction = {
    label: string;
    onClick: () => void;
};

export interface IModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    footerActions?: FooterAction[];
    size?: ModalSize;
}