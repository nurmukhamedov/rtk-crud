import { useState } from "react"
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { addToDo, removeToDo } from "./redux/slice/todo";


const AddToDo = () => {
    const [todo, setToDo] = useState("");



    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newToDo = {
            id: Math.floor(Math.random() * 999999) + 100000,
            name: todo,
            isDone: false,
            createAt: (new Date().toLocaleString())
        }

        dispatch(addToDo(newToDo));
        setToDo('');
    }



    return (
        <Form className="mb-4" onSubmit={handleSubmit}>
            <div className="d-flex">
                <Form.Group style={{ width: "100%" }}>
                    <Form.Control
                        required
                        type="text"
                        value={todo}
                        placeholder="To do List"
                        onChange={(e) => setToDo(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Button type="submit">Submit</Button>
                </Form.Group>
            </div>
        </Form>
    )
}

export default AddToDo