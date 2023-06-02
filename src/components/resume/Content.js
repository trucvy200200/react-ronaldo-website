const Content = ({ contents }) => {
    const { date, heading, title, desc } = contents;
    return (

        <div className="content">
            <div className="date">
                {date}
            </div>
            <div className="heading">
                {heading}
            </div>
            <div className="title">
                {title}
            </div>
            <div className="desc">
                {desc}
            </div>
        </div>
    );
}
export default Content