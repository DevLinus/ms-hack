"use client";
import Heart from "react-animated-heart";
import React, {useState} from "react";

export default function HeartVote() {
    const [isClick, setClick] = useState(false);
    return(
        <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
    )

}