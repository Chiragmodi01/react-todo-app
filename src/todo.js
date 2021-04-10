import { Button, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import { db } from './firebase_config';

export default function TodoListItem({todo, inprogress, id}) {


    function toggleInProgress(){
        db.collection("todos").doc(id).update({
            inprogress: !inprogress
        })
    }

    function deleteTodo(){
        db.collection("todos").doc(id).delete();
    }

    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100vw", marginTop: "13px"}}>
            <ListItem style={{width: "350px", marginRight: "20px"}}>
                <ListItemText primary={todo}
                secondary={inprogress ? "In Progress" : "Completed"}/>
            </ListItem>

            <Button onClick={toggleInProgress}> {inprogress ? "Done" : "undone"}</Button>
            <Button onClick={deleteTodo}>X</Button>
        </div>
    );
}
