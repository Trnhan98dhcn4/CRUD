import { useRef } from 'react';

import './styles.scss'

function AddList({ lists, setList }) {
    const nameRef = useRef()
    const priceRef = useRef()
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const price = event.target.elements.price.value;

        setList((prevlist) => {
            const newList = [...prevlist]
            newList.push({
                id: (lists.length + 1),
                name,
                price
            })
            return newList
        })
        nameRef.current.focus()
        nameRef.current.value = ""
        priceRef.current.value = ""
    }
    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <input ref={nameRef} type="text" name="name" placeholder="Enter Name" />
            <input ref={priceRef} type="text" name="price" placeholder="Enter Price" />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddList;