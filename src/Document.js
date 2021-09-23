import { useState } from "react"

function Document(props) {
    const [isRead, setRead] = useState(false)

    const handleScroll = (e) => {
        const element = e.target
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            setRead(true)
        } 
    }

    return (
        <div className="terms">
            <h1 className="title">{props.title}</h1>
            <p className="content" onScroll={(e) => handleScroll(e)}>{props.content}</p>
            <button disabled={isRead ? false : true}>I Agree</button>
        </div>
    )
}

export default Document;