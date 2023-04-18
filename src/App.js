import { useState } from 'react'

import AddList from './components/AddList'
import EditList from './components/EditList'
import './styles.scss'


function App() {
    const InitList = [
        {
            id: 1,
            name: 'HP',
            price: '222'
        },
        {
            id: 2,
            name: 'Dell',
            price: '333'
        },
    ]



    const [lists, setList] = useState(InitList)
    const [updatelist, setupdatalist] = useState(-1)


    const HandleSubmitEdit = (id) => {
        setupdatalist(id)
    }

    const HandDelete = (id) => {
        const delete_list = lists.filter(item => item.id !== id)
        setList(delete_list)

    }

    const handleSubmitForm = (event) => {
        event.preventDefault();
        const name = event.target.elements.name.value
        const price = event.target.elements.price.value
        const newlist = lists.map((item => (
            item.id === updatelist.id ? { ...item, name: name, price: price } : item
        )))

        setList(newlist)
        setupdatalist(-1)
    }
    return (
        <div className='crud'>
            <div>
                <AddList setList={setList} lists={lists} />
                <form onSubmit={handleSubmitForm}>
                    <table>
                        <tbody>
                            {
                                lists.map(list => (
                                    updatelist === list.id ? <EditList list={list} lists={lists} setlists={setList} /> :
                                        <tr key={list.id}>
                                            <td>{list.name}</td>
                                            <td>{list.price}</td>
                                            <td>
                                                <button className='edit'
                                                    onClick={() => HandleSubmitEdit(list.id)}
                                                >Edit</button>
                                                <button className='delete' type='button'
                                                    onClick={() => HandDelete(list.id)}
                                                >Delete</button>
                                            </td>
                                        </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </form>
            </div>

        </div>

    )
}

export default App;
