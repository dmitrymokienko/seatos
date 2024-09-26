// ExampleComponent.js

import { useToast } from "../features/toast/hooks/useToast";
import { ToastPosition, ToastStatus } from "../features/toast/types";

export function ToastExampleComponent() {
    const { showToast } = useToast();

    const handleSubmitClick = () => {
        showToast({
            status: ToastStatus.Success,
            title: "Success!",
            message: "Form submitted successfully!",
            position: ToastPosition.TopRight,
            duration: 3000,
        });
    };

    const handleCancelClick = () => {
        showToast({
            status: ToastStatus.Error,
            title: "Error!",
            message: "Form submission failed!",
            position: ToastPosition.BottomLeft,
            duration: 7000,
        });
    };

    return (
        <div style={{ display: "flex", gap: 24 }}>
            <button onClick={handleSubmitClick}>Submit Form</button>

            <button onClick={handleCancelClick}>Cancel Form</button>
        </div>
    );
}
