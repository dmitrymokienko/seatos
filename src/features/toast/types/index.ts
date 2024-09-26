export enum ToastStatus {
    Success = "success",
    Error = "error",
    Info = "info",
    Warning = "warning"
}

export enum ToastPosition {
    TopLeft = "top-left",
    TopRight = "top-right",
    BottomLeft = "bottom-left",
    BottomRight = "bottom-right"
}

export interface IToastProps {
    id: number;
    status: ToastStatus;
    title: string;
    message: string;
    position?: ToastPosition;
    duration?: number;
}