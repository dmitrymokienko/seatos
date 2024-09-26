// ExampleComponent.js

import { useToast } from "../features/toast/hooks/useToast";
import { ToastPosition, ToastStatus } from "../features/toast/types";

export function ExampleComponent() {
    const { showToast } = useToast();

    const handleClick = () => {
        showToast({
            status: ToastStatus.Success,
            title: "Success!",
            message: "Form submitted successfully!",
            position: ToastPosition.TopRight,
            duration: 3000,
        });
    };

    return (
        <div>
            <button onClick={handleClick}>Submit Form</button>
        </div>
    );
}
