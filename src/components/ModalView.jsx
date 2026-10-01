import { useRef, useEffect} from "react"
export default function ModalView({ isOpen, children }) {
    const dialogRef = useRef("null");

    useEffect(() => {
        const dialog = dialogRef.current;

        if (!dialog) return;

        if (isOpen) {
            if (!dialog.open) dialog.showModal();
        }
        else {
            if (dialog.open) dialog.close();
        }

    }, [isOpen]);

    return (
        <dialog ref={ dialogRef} className="ModalDialogView">
            {children}
        </dialog>
    )
}