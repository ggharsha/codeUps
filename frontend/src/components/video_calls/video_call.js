import React from 'react';
import { useEffect, useRef, useState } from 'react';
import Peer from "peerjs";
import io from "socket.io-client";


const socket = io.connect('http://localhost:8000')

function VideoCall() {
    const [ me, setMe ] = useState("");
    const [ stream, setStream ] = useState();
    const [ receivingCall, setReceivingCall ] = useState(false);
    const [ caller, setCaller ] = useState("");
    const [ callerSignal, setCallerSignal ] = useState();
    
}