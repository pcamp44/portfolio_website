import React, { useEffect } from "react";
import p5 from "p5";

export default function P5Sketch(){
    useEffect(() => {
        new p5(sketch);
    }, []);

    return <div id="sketch-container" />;
}

function sketch(p){
    p.setup = function(){
        p.createCanvas(400, 400);
    }

    p.draw = function(){

    }
}