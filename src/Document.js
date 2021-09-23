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
            <h1>{props.title}</h1>
            <p className="content" onScroll={handleScroll}>{props.content}</p>
            <button className="btn" disabled={isRead ? false : true}>I Agree</button>
        </div>
    )
}

export default Document;