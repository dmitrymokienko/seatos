import { useState } from "react";
import { Modal } from "../features/modal/components/Modal";
import { ModalSize } from "../features/modal/types";

export function ModalExampleComponent() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title="Modal Title"
                size={ModalSize.Medium}
                footerActions={[
                    { label: "Cancel", onClick: closeModal },
                    { label: "Confirm", onClick: () => alert("Confirmed") },
                ]}
            >
                <p>This is the body content of the modal.</p>
            </Modal>
        </div>
    );
}
