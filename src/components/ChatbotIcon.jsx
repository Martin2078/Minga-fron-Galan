const ChatIcon = ({ onClick, isVisible }) => {
    return (
        <div className={`chat-icon ${isVisible ? 'hidden' : ''}`} onClick={onClick}>
            <img src="./images/icon.webp" alt="" />
        </div>
    );
};

export default ChatIcon;