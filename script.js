'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const frErrorWords = ["どんだけー！", "何か間違ってるよ"];
const frSummerWords = ["今日も暑いね", "夏の思い出だね", "夏祭りも楽しかったね"];
const frWinterWords = ["今日も寒いね", "クリスマス楽しかったね"];
const frAutumnWords = ["秋の思い出だね", "紅葉がきれいだったね", "ハロウィンも楽しかったね"];
const frSpringWords = ["春の思い出だね", "入園式を思い出すね", "お花がきれいだったね"];
const frTodayWords = ["今日はプレゼンの日だね", "きっと、今日のプレゼン上手くいくよ"];
const frbirthDay = ["パパ、お誕生日おめでとう！"]

const rrErrorWords = ["そんな日付はないです"];
const rrNormalWords = ["疲れてるなら休んでね", "ちょっと、甘い物でも食べて休憩してね", "無理しないでね。ちょっと休もう", "パパ、またどこか遊びに行こうね！"];
const rrTodayWords = ["がんばってね！", "僕たちも応援してるよ!"];
const rrbirthDay = ["Happy Birthday!"]

const frWord = document.getElementById("frWord");
const rrWord = document.getElementById("rrWord");

function message(frArray, rrArray) {
    let randNum1 = Math.floor(Math.random() * frArray.length);
    let randNum2 = Math.floor(Math.random() * rrArray.length);
    frWord.innerText = frArray[randNum1];
    rrWord.innerText = rrArray[randNum2];
}

const imgUrlbase = "./picture/"
const springImg = ["spring1", "spring2", "spring3", "spring4"];
const summerImg = ["summer1", "summer2", "summer3", "summer4", "summer5"];
const autumnImg = ["autumn1", "autumn2", "autumn3", "autumn4"];
const winterImg = ["winter1", "winter2", "winter3", "winter4"];
const error = ["error1.gif", "error2.png"]

const monthElem = document.getElementById("month");
const dayElem = document.getElementById("day");
const btn = document.getElementById("submit");
const season = [springImg, summerImg, autumnImg, winterImg];

function showImage() {
    let imgUrl = "";
    let seasonImg = [];
    let month = Number(monthElem.value);
    let frMsg = [];
    let rrMsg = [];
    if (month === 0) {
        imgUrl = imgUrlbase + error[1];
        frMsg.push(frErrorWords[1]);
        rrMsg = rrErrorWords;
        message(frMsg, rrMsg);
    } else {
        if (month > 12) {
            imgUrl = imgUrlbase + error[0];
            frMsg.push(frErrorWords[0]);
            rrMsg = rrErrorWords;
            message(frMsg, rrMsg);
            document.getElementsByTagName("audio")[0].src = imgUrlbase + "error.mp3";
        } else {
            if (month === 8 && dayElem.value === "17") {
                imgUrl = imgUrlbase + "event_1.jpg";
                frMsg = frbirthDay;
                rrMsg = rrbirthDay;
                document.getElementById('image').src = imgUrl;
                message(frMsg, rrMsg);
                document.getElementsByClassName("message")[0].animate(imgKeyframes, 1000);
                document.getElementsByClassName("message")[1].animate(imgKeyframes, 1000);
                return;
            } else if (month === 8 && dayElem.value === "8") {
                imgUrl = imgUrlbase + "event_2.jpg";
                frMsg = frTodayWords;
                rrMsg = rrTodayWords;
                document.getElementById('image').src = imgUrl;
                message(frMsg, rrMsg);
                document.getElementsByClassName("message")[0].animate(imgKeyframes, 1000);
                document.getElementsByClassName("message")[1].animate(imgKeyframes, 1000);
                return;
            } else if (3 > month || month > 11) {
                seasonImg = winterImg;
                frMsg = frWinterWords;
                rrMsg = rrNormalWords;
                message(frMsg, rrMsg);
            } else if (12 > month && month > 9) {
                seasonImg = autumnImg;
                frMsg = frAutumnWords;
                rrMsg = rrNormalWords;
                message(frMsg, rrMsg);
            } else if (10 > month && month > 5) {
                seasonImg = summerImg;
                frMsg = frSummerWords;
                rrMsg = rrNormalWords;
                message(frMsg, rrMsg);
            } else if (6 > month && month > 2) {
                seasonImg = springImg;
                frMsg = frSpringWords;
                rrMsg = rrNormalWords;
                message(frMsg, rrMsg);
            } else {
                imgUrl = imgUrlbase + error[1];
                document.getElementById('image').src = imgUrl;
                frMsg.push(frErrorWords[1]);
                rrMsg = rrErrorWords;
                message(frMsg, rrMsg);
                document.getElementsByClassName("message")[0].animate(imgKeyframes, 1000);
                document.getElementsByClassName("message")[1].animate(imgKeyframes, 1000);
                return;
            }
            let randNum = Math.floor(Math.random() * seasonImg.length);
            imgUrl = imgUrlbase + seasonImg[randNum] + ".jpg";
        }
    }
    document.getElementById('image').src = imgUrl;
    document.getElementsByClassName("message")[0].animate(imgKeyframes, 1000);
    document.getElementsByClassName("message")[1].animate(imgKeyframes, 1000);
}

const imgKeyframes = {
    opacity: ["0", "1"],
}

btn.addEventListener("click", showImage);