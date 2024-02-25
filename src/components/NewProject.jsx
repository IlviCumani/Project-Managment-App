import Input from "./Input"
import Modal from "./Modal"

import { useRef } from 'react'

export default function NewProject({onCreateNewProject, onSetToUndefined}) {
    const titleRef = useRef()
    const descriptionRef = useRef()
    const dueDateRef = useRef()
    const modalRef = useRef()

    function handleSave() {
        const enteredTitle = titleRef.current.value
        const enteredDescription = descriptionRef.current.value
        const enteredDueDate = dueDateRef.current.value

        if(enteredTitle.trim() ==='' 
        || enteredDescription.trim() === ''
        || enteredDueDate.trim() === '')
        {
            modalRef.current.open()
            return
        }

        onCreateNewProject({
            title : enteredTitle,
            description : enteredDescription,
            dueDate : enteredDueDate,
            tasks : []
        })
    }

    return (
        <>
            <Modal ref={modalRef} buttonCaption='Close'>
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">Ooops ... looks like you forgot to enter a value.</p>
                <p className="text-stone-600 mb-4"> Please make sure you provide a valid value for every input field</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button  className="text-stone-800 hover:text-stone-950" onClick={() => onSetToUndefined(undefined)}>Cancel</button>
                    </li>
                    <li>
                        <button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md" onClick={ handleSave }>Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input ref={titleRef} labelTitle={'Title'}  type={'text'} />
                    <Input ref={descriptionRef} labelTitle={'Description'} isTextArea />
                    <Input ref={dueDateRef} labelTitle={'Due Date'} type={'date'} />
                </div>
            </div>
        </>
    )
}