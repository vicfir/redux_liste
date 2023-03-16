import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToList, deleteFromList } from './listeSlice';

export const Liste = () => {

    const tache = useRef(null);

    const dispatch = useDispatch();
    
    const addClick = () => {
        dispatch(addToList(tache.current.value))
    }
    const deleteClick = () => {
        dispatch(deleteFromList(tache.current.value))
    }

    const listArray = useSelector(state => state.liste);

  return (
    <div>
        <input type="text" ref={tache}/>
        <div>
            <button onClick={addClick}>Add</button>
            <button onClick={deleteClick}>Delete</button>
        </div>
        <ul>
            {listArray.map((listeItem, index)=><li key={index}>{listeItem}</li>)}
        </ul>
    </div>
  )
}
