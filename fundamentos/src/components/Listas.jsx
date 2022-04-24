import React from 'react'

const Listas = () => {
    const initialState = [
        {id: 1, text: 'work 1'},
        {id: 2, text: 'work 2'},
        {id: 3, text: 'work 3'},
        {id: 4, text: 'work 4'},
        {id: 5, text: 'work 5'},
        {id: 6, text: 'work 6'},
        {id: 7, text: 'work 7'}
    ]
    const [list, setList] = React.useState (initialState);
  return (
    <>
    <hr />
    <h1>List</h1>
    {
        list.map(({id,text})=> <h4 key={id}>{text}</h4>)
    }
    </>
  )
}

export default Listas