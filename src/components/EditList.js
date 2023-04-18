function EditList({ list, lists, setlists }) {
    const handInputname = (event) => {
        const value = event.target.value
        const newlist = lists.map((item => (
            item.id === list.id ? { ...item, name: value } : item
        )))

        setlists(newlist)
    }
    const handInputprice = (event) => {
        const value = event.target.value
        const newlist = lists.map((item => (
            item.id === list.id ? { ...item, price: value } : item
        )))

        setlists(newlist)
    }
    return (
        <tr>
            <td><input type="text" name="name" value={list.name}
                onChange={e => handInputname(e)}
            /></td>
            <td><input type="text" name="price" value={list.price}
                onChange={e => handInputprice(e)}
            /></td>
            <td><button type="submit">Update</button></td>
        </tr>
    );
}

export default EditList;