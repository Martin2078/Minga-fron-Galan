import React, { useState, useEffect } from 'react';
import socket from './Socket';
import ChatIcon from './ChatbotIcon';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../redux/actions/chatbotMessageAction';
import { setMsg } from '../redux/actions/chatbotMsg';



export default function Chatbot() {
    let { user } = useSelector((store) => store.profile)
    const { messages, msg } = useSelector((store) => store.chatReducer);
    const dispatch = useDispatch();
    const [chatOpen, setChatOpen] = useState(false);

    function toggleChat() {
        setChatOpen(!chatOpen);
    }

    function closeChat() {
        setChatOpen(false);
    }


    useEffect(() => {

        const responseHandler = async (response) => {
            dispatch(addMessage({ value: response, id: 'bot' }));
        };

        socket.on('response', responseHandler);

        return () => {
            socket.off('response', responseHandler);
        };
    }, []);

    function sendMsg(e) {
        if (e.key === 'Enter' || e.type === 'submit') {
            e.preventDefault();
            if (msg != '' && msg != ' ') {
                dispatch(addMessage({ value: msg, id: 'user' }));
                socket.emit('chat', msg);
                dispatch(setMsg(''));
            }
        }
    }



    function Message({ message }) {
        return (
            <li className={message.id === 'bot' ? 'bg-emerald-300 text-sm font-semibold m-1 rounded-md p-2' : 'bg-indigo-300 text-sm m-1 italic text-end rounded-md p-2'}>
                {message.value}
            </li>
        );
    }

    return (
        <>
             {user.role === 1 || user.role === 2 ? (
                <div className={`fixed bottom-4 hidden lg:block bg-white border-2 border-black rounded-full p-2 right-4 ${chatOpen ? 'w-60' : 'w-12'}`}>
                    <ChatIcon onClick={toggleChat} isVisible={chatOpen} />

                    {chatOpen && (
                        <div>
                            <form onSubmit={sendMsg} className='bg-indigo-700 w-72 h-80 fixed bottom-2 right-2 border-4 border-black flex flex-col items-center'>
                                <div className='flex w-full p-1 items-center justify-between'>
                                    <img className='w-6 h-6 bg-white rounded-full' src="/images/icon.webp" alt="" />
                                    <p className='text-white font-serif'>Mingabot</p>
                                    <button className="close-button p-1" onClick={closeChat}>
                                        <img className='h-5 w-5' src="/images/x.png" alt="" />
                                    </button>
                                </div>
                                <div className='w-full h-72 mb-1 bg-white max-h-96 overflow-y-auto'>
                                    <ul>
                                        {messages.map((message, index) => (
                                            <Message key={index} message={message} />
                                        ))}
                                    </ul>
                                </div>
                                <div className='flex w-full justify-around'>
                                    <input
                                        onKeyDown={sendMsg}
                                        value={msg}
                                        onChange={(e) => dispatch(setMsg(e.target.value))}
                                        className='w-[50%] h-5'
                                        type="text"
                                    />
                                    <button className='w-[20%] rounded-full text-xs border-2 border-black font-bold text-indigo-700 bg-white'>Submit</button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>)
                : ('')
            }
        </>
    );
}