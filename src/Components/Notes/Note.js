import './Note.css'

const Note = (props) => {
    const text = props.text;
    const image = props.image;
    return (
        <div className="container">
            <div className="note-container">
                <div className="sticky-note sticky-note-1">
                    { image && 
                        <p>
                            <img 
                                src={image.url} 
                                alt={image.alt}
                                style={{borderRadius: '20px', width: image.width}}
                            />
                        </p>
                    }
                    <div dangerouslySetInnerHTML={{ __html: text }} />
                </div>
            </div>
        </div>
    );
}

export default Note;