import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";

interface ModalProps {
  title?: string;
  content?: string;
  buttonLabel?: string;
  onClose?: () => void;
}

export interface ModalRef {
  open: (options: ModalProps) => void;
}

const Modal = forwardRef<ModalRef, {}>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<ModalProps>({});
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useImperativeHandle(ref, () => ({
    open: (newOptions: ModalProps) => {
      setIsOpen(true);
      setOptions(newOptions);
    },
  }));

  const handleClose = useCallback(() => {
    setIsOpen(false);
    options.onClose && options.onClose();
  }, [options]);

  useEffect(() => {
    if (dialogRef.current) {
      if (isOpen) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [isOpen]);

  return (
    <dialog className="modal" ref={dialogRef}>
      <form method="dialog" className="modal-box">
        {options.title && (
          <h3 className="font-bold text-3xl text-center">{options.title}</h3>
        )}
        <p className="py-4 text-3xl text-center">
          {options.content || "NO CONTENT"}
        </p>
        <div className="modal-action justify-center">
          <button className="btn" onClick={handleClose}>
            {options.buttonLabel || "Close"}
          </button>
        </div>
      </form>
    </dialog>
  );
});

Modal.displayName = "Modal";

export default Modal;
