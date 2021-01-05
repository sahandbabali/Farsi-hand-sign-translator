import React, { useRef, useState, useEffect } from "react";

import * as fp from "fingerpose";

import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import "./App.css";
import { drawHand } from "./utilities";

import copy from "./copy.png";
import enter from "./enter.png";
import clear from "./clear.png";
import addkon from "./addkon.png";

var hand;
var tempsign;
var stringema = " ";

const aa = new fp.GestureDescription("آ");
oo.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
oo.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
oo.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 1.0);
oo.addCurl(fp.Finger.Middle, fp.FingerCurl.HalfCurl, 1.0);
oo.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
oo.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

const ee = new fp.GestureDescription("ا");
ee.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
ee.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 1.0);
ee.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 1.0);
ee.addCurl(fp.Finger.Middle, fp.FingerCurl.HalfCurl, 1.0);
ee.addDirection(fp.Finger.Middle, fp.FingerDirection.HorizontalLeft, 1.0);
ee.addCurl(fp.Finger.Ring, fp.FingerCurl.HalfCurl, 1.0);
ee.addCurl(fp.Finger.Pinky, fp.FingerCurl.HalfCurl, 1.0);

const bb = new fp.GestureDescription("ب");
bb.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
bb.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 1.0);

bb.addCurl(fp.Finger.Middle, fp.FingerCurl.HalfCurl, 1.0);
bb.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalDown, 1.0);

bb.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
bb.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

const pp = new fp.GestureDescription("پ");
pp.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
pp.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 1.0);

pp.addCurl(fp.Finger.Middle, fp.FingerCurl.HalfCurl, 1.0);
pp.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalDown, 1.0);

pp.addCurl(fp.Finger.Ring, fp.FingerCurl.HalfCurl, 1.0);
pp.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalDown, 1.0);
pp.addCurl(fp.Finger.Pinky, fp.FingerCurl.HalfCurl, 1.0);
pp.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalDown, 1.0);

const sin = new fp.GestureDescription("س");
//sin.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
sin.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
sin.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 1.0);
sin.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
sin.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 1.0);
sin.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);

const laam = new fp.GestureDescription("ل");
//laam.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
laam.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
laam.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
laam.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);

laam.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
laam.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);



const mim = new fp.GestureDescription("م");
//mim.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
mim.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
mim.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalDown, 1.0);

mim.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
mim.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
mim.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

const ye = new fp.GestureDescription("ی");
ye.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
ye.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
//ye.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalDown, 1.0);
ye.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
ye.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
ye.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);

const kaf = new fp.GestureDescription("ک");
//mim.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
kaf.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
kaf.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);

kaf.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
kaf.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
kaf.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

const eyn = new fp.GestureDescription("ع");
eyn.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
//eyn.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);

eyn.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
eyn.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 1.0);
eyn.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
eyn.addDirection(fp.Finger.Middle, fp.FingerDirection.HorizontalLeft, 1.0);

eyn.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
eyn.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

const ghaaf = new fp.GestureDescription("ق");
ghaaf.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
ghaaf.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
ghaaf.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
ghaaf.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
ghaaf.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

function funcema() {
  stringema = stringema + tempsign;
  document.getElementById("textema").value = stringema;
 // console.log(stringema);
}

function clearkon() {
  document.getElementById("textema").value = " ";
  stringema = " ";
}

function addnewline() {
  console.log("fired");
  let tempvalue = document.getElementById("textema").value;
  stringema = tempvalue + '\r\n';
  document.getElementById("textema").value = stringema;
  console.log(tempvalue);
}

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [gest, setGest] = useState(null);

  const runHandpose = async () => {
    const net = await handpose.load();
   // console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      hand = await net.estimateHands(video);

      if (hand.length > 0) {
        document.getElementById(
          "alphabetema"
        ).innerText = hand[0].handInViewConfidence.toFixed(5);
      }

      // Gesture
      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          ee,
          bb,
          pp,
          sin,
          laam,
          aa,
          mim,
          ye,
          kaf,
          eyn,
          ghaaf,
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 4);

        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          const confidence = gesture.gestures.map(
            (prediction) => prediction.confidence
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );

          let tempak = gesture.gestures[maxConfidence].name;
          setGest(tempak);

          tempsign = tempak;

          //  console.log(tempak);
          // console.log(`final gest is: ${gest}`);
        }
      }

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  runHandpose();

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <nav>
            <div dir="rtl" class="nav-wrapper">
              <a dir="rtl" href="#" class="brand-logo">ساین برد فارسی
              </a>
              {/* <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul> */}
            </div>
          </nav>
        </div>

        <div className="row">
          <div className="col s6">
            <Webcam
              ref={webcamRef}
              style={{
                textAlign: "center",
                zindex: 9,
                width: 640,
                height: 480,
              }}
            />
            <canvas
              ref={canvasRef}
              style={{
                position: "absolute",

                top: 100,
                textAlign: "center",
                zindex: 9,
                width: 640,
                height: 480,
              }}
            />
          </div>
          <div className="col s6 infobox bigtar">
            <span className="gesclass">{gest}</span>
            <span id="alphabetema">0.00</span>

            <textarea id="textema" name="textema" rows="8" cols="50"></textarea>
          </div>
          <br />
        </div>

        <div className="row">
          <div onClick={funcema} className="col s2">
            {" "}
            <img src={addkon} alt="add" />{" "}
          </div>

          <div onClick={addnewline} className="col s2">
            {" "}
            <img src={enter} alt="enter" />{" "}
          </div>

          <div className="col s2">
            {" "}
            <img src={copy} alt="copy" />{" "}
          </div>

          <div className="col s2">
            {" "}
            <img onClick={clearkon} src={clear} alt="clear" />{" "}
          </div>
        </div>

        <footer className="page-footer">
          <div class="footer-copyright">
            <div class="container">
              © 2020 behance.net/sahandbabali
              <a class="grey-text text-lighten-4 right" href="#!">
                github.com/sahandbabali
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
