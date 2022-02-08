import React from 'react';
import { useEffect, useRef, useState } from 'react';
import Peer from "peerjs";
import io from "socket.io-client";


const socket = io.connect('http://localhost:8000') // consider refactoring for prod

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
        const peer = new Peer({ // consider refactoring for prod
            host: "localhost",
            port: 8000,
            path: '/peerjs',
            ssl: {
                key: "",
                cert: "",
            },
            proxied: true,
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
            // here
        })
    }
}