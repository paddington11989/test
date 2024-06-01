import React from "react";
import "./block.css";
import img from "./img/1.jpg"

export default function Block(){
    return(
        <>
         <div class="block">
        <div class="container">
            <div class="wrapper">
                <div class="block-first">
                <div class="block-wrapper">
                    <img src={img} alt="" />
                    <p class="block-text">bulbasaur</p>
                </div>
                <div class="block-wrapper">
                    <img src={img} alt="" />
                    <p class="block-text">venusaur</p>
                </div>
                <div class="block-wrapper">
                    <img src={img} alt="" />
                    <p class="block-text">butterfree</p>
                </div>
                </div>
                <div class="block-second">
                <div class="block-wrapper">
                   <img src={img} alt="" />
                    <p class="block-text">ivysaur</p>
                </div>
                <div class="block-wrapper">
                    <img src={img} alt="" />
                    <p class="block-text">metapod</p>
                </div>
                <div class="block-wrapper">
                   <img src={img} alt="" />
                    <p class="block-text">weedle</p>
                </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}