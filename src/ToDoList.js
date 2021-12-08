import './App.css';

const todos = [
    { title: 'Read Front End', completed: false, created_at: new Date() },
    { title: 'Read Back End', completed: false, created_at: new Date() },
    { title: 'Dancing', completed: false, created_at: new Date() },
    { title: 'Work', completed: false, created_at: new Date() },
    { title: 'Eat Food', completed: false, created_at: new Date() }
]

function Description() {
    return ( <p>測試分頁與練習ToDoList with 學米</p> )
}

function ListItem(props) {
    return <li>{props.title}</li>
}

function ToDoList() {
    return (
        <div className="App">
            <header className="App-header">
                <Description />

                <ul>
                    {todos.map((todo, index) => {
                        return <li key={index}>{todo.title}</li>
                    })}
                </ul>

                <ul>
                    {todos.map((todo, index) => {
                        return <ListItem title={todo.title} key={index}/>
                    })}
                </ul>
            </header>
        </div>
    )
}

export default ToDoList