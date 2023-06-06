
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Box = (pros) => {
    const { src, title, desc, date, author, comments } = pros;
    return (
        <div className="blogs-box-wrapper">
            <img className="blogs-box-image" src={src}></img>
            <div className="blogs-box-title">{title}</div>
            <span className="blogs-box-inline">
                <div className="blogs-box-date>">{date}</div>
                <div className="blogs-box-author">{author}</div>
                <div class="blogs-box-icon">
                    <FontAwesomeIcon icon={"comment"} />
                </div>
                <div className="blogs-box-comment">{comments}</div>
            </span>
            <div className="blogs-box-desc">{desc}</div>

        </div>

    );
}

export default Box