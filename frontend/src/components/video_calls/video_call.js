import React from 'react';
import { useEffect, useRef, useState } from 'react';
import Peer from "simple-peer";
import { io } from "socket.io-client";
import { CopyToClipboard } from 'react-copy-to-clipboard';

// const socket = io.connect('http://localhost:9000') // consider refactoring for prod
// const socket = io.connect('https://codeups.herokuapp.com:53154/socket.io/');

let socket;
const port = process.env.PORT || 9000;
if (process.env.NODE_ENV === 'production') {
    socket = io.connect(`https://codeups.herokuapp.com:${port}/socket.io/`)
} else {
    socket = io.connect('http://localhost:9000')
};

function VideoCall() {
    const [ me, setMe ] = useState("");
    const [ stream, setStream ] = useState();
    const [ receivingCall, setReceivingCall ] = useState(false);
    const [ caller, setCaller ] = useState("");
    const [ callerSignal, setCallerSignal ] = useState();
    const [ callAccepted, setCallAccepted ] = useState(false);
    const [ idToCall, setIdToCall ] = useState("");
    const [ callEnded, setCallEnded ] = useState(false);
    const [ name, setName ] = useState("");
    const myVideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
            setStream(stream)
            myVideo.current.srcObject = stream
        })

        socket.on("me", id => {
            setMe(id)
        })

        socket.on("callUser", data => {
            setReceivingCall(true);
            setCaller(data.from);
            setName(data.name);
            setCallerSignal(data.signal);
        })
    }, [])

    const callUser = id => {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream: stream
        })

        peer.on("signal", data => {
            socket.emit("callUser", {
                userToCall: id,
                signalData: data,
                from: me,
                name: name
            })
        })

        peer.on("stream", stream => {
            userVideo.current.srcObject = stream
        })

        socket.on("callAccepted", signal => {
            setCallAccepted(true);
            peer.signal(signal);
        })

        connectionRef.current = peer;
    }

    const answerCall = () => {
        setCallAccepted(true);
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream: stream
        })

        peer.on("signal", data => {
            socket.emit("answerCall", { signal: data, to: caller });
        })

        peer.on("stream", stream => {
            userVideo.current.srcObject = stream;
        })

        peer.signal(callerSignal);
        connectionRef.current = peer;
    }

    const leaveCall = () => {
        setCallEnded(true);
        connectionRef.current.destroy();
        socket.disconnect();
    }

    return (
        <div>
            <div className='video-container'>
                <div className='video'>
                    { stream && <video 
                        playsInline 
                        muted 
                        ref={myVideo} 
                        autoPlay 
                        style={{ width: "600px" }} 
                        />
                    }
                </div>
                <div className='video'>
                    { callAccepted && !callEnded ? <video 
                        playsInline 
                        ref={userVideo} 
                        autoPlay 
                        style={{ width: "600px" }} 
                    /> : null }
                </div>
            </div>

            <div className='my-id'>
                <textarea
                    label="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <CopyToClipboard text={me}>
                    <button>
                        Copy ID
                    </button>
                </CopyToClipboard>

                <textarea
                    label="id-to-call"
                    value={idToCall}
                    onChange={e => setIdToCall(e.target.value)}
                />

                <div className="call-button">
                    {callAccepted && !callEnded ? (
                        <button
                            onClick={leaveCall}
                        >
                            End Call
                        </button>
                    ) : (
                        <button
                            onClick={() => callUser(idToCall)}
                        >
                            Phone Icon
                        </button>
                    )}
                    {idToCall}
                </div>
                <div>
                    {receivingCall && !callAccepted ? (
                        <div className="caller">
                            <h1 >{name} is calling...</h1>
                            <button 
                                onClick={answerCall}
                            >
                                Answer
                            </button>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default VideoCall;