import "./statistics.css"

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const Statistics = ({ title = '', stats }) => {
        const header = title.length > 0 ? <h2 className="title">{title}</h2> : '';
    const elements = stats.map(({id, label, percentage}) => (
        <li className="item" key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <span className="label">{label }</span>
            <span className="percentage">{percentage}%</span>
        </li>
    ))
    return (
        <section className="statiscics">
            {header}

            <ul className="stat-list">
                {elements}
            </ul>
        </section>
    )
}

export default Statistics