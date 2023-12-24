import "./friendlist.css"

const FriendList = ({ friends }) => {
    const elements = friends.map(({avatar, name, isOnline, id}) => (
        <li className="item" key={id}>
            <span className={isOnline ? "status-online" : "status-offline"}></span>
            <img className="avatar" src={avatar} alt="User avatar" width={48} />
            <p className="name">{ name}</p>
        </li>
    ))
    return (
        <ul className="friend-list">
            {elements}
        </ul>
    )
}

export default FriendList