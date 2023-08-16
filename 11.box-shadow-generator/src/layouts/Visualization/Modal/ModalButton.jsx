import {useState} from "react";
import {createPortal} from "react-dom";
import ModalResult from "./ModalResult.jsx";

export default function ModalButton() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button
                onClick={() => setShowModal(!showModal)}
                className="relative z-0 mx-auto mb-5 py-1 px-3 text-sm rounded text-white
                bg-blue-600 hover:bg-blue-700 cursor-pointer">
                Get the code
            </button>
            {showModal &&
                createPortal(
                    <ModalResult closeModal={() => setShowModal(!showModal)}/>,
                    document.body
                )}
        </>

    )
}