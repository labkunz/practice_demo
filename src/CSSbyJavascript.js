import './App.css';

function CheckFile() {
    console.log("in CSSbyJavascript")
}

function Description() {
    return ( <p>練習CSS in Javascript</p> )
}

function Test(props) { 
    return (
        <p style={{
            color: props.color,
            backgroundColor: props.bColor
        }}>使用Function Component來測試</p>
    )
}

function CSSByJS() {
    return (
        <div className="App">
            <header className="App-header">
                {CheckFile()}
                <p style={{
                    color: "red",
                    backgroundColor: "black"
                }}>測試透過Javascript傳入CSS樣式進入元素</p>
                <Test color="yellow" bColor="black" />
                <Description />
            </header>
        </div>
    )
}

export default CSSByJS