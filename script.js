function newFact() {

    let facts = [
        "اولین هارددیسک فقط 5 مگابایت ظرفیت داشت!",
        "گوگل روزانه میلیاردها جستجو را پردازش می‌کند.",
        "اولین وب‌سایت جهان هنوز آنلاین است.",
        "SSD هیچ قطعه متحرکی ندارد.",
        "اولین نسخه ویندوز در سال 1985 منتشر شد.",
        "جاوااسکریپت زبان برنامه‌نویسی مرورگرهاست.",
        "هوش مصنوعی می‌تواند تصاویر تولید کند.",
        "پردازنده مغز کامپیوتر است.",
        "اولین وب‌سایت دنیا در سال ۱۹۹۱ ساخته شد.",
        "SSD از HDD سریع‌تر است."
    ];

    let randomIndex = Math.floor(Math.random() * facts.length);

    document.getElementById("fact").innerText =
        facts[randomIndex];
}

function toggleMode() {
    document.body.classList.toggle("light");
}
function updateClock(){

    let now = new Date();

    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    document.getElementById("clock").innerText =
    hour + ":" + minute + ":" + second;

}

setInterval(updateClock,1000);

updateClock();
function updateDate(){

    let now = new Date();

    let day = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();

    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    document.getElementById("date").innerText =
    "📅 " + day + " " + months[month] + " " + year;
}

updateDate();
function searchCards(){

    let input =
    document.getElementById("search").value.toLowerCase();

    let cards =
    document.getElementsByClassName("searchable");

    for(let i=0;i<cards.length;i++){

        if(cards[i].innerText.toLowerCase().includes(input)){

            cards[i].style.display="block";

        }else{

            cards[i].style.display="none";

        }

    }

}
function welcomeMessage(){

    let hour = new Date().getHours();

    let message = "";

    if(hour < 5){
    message = "🌙 هنوز بیداری؟ برو بخواب! 😴";
}
else if(hour < 12){
    message = "🌅صبح بخیر";
}
    else if(hour < 18){
        message = "☀️ روز بخیر ";
    }
    else if(hour < 21){
        message = "🌇 عصر بخیر ";
    }
    else{
        message = "🌙 شب بخیر ";
    }

    document.getElementById("welcome").innerText = message;

}

welcomeMessage();
let secretNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess(){

    let guess = Number(document.getElementById("guess").value);

    if(guess == secretNumber){

        document.getElementById("result").innerText =
        "🎉 آفرین! درست حدس زدی.";
secretNumber = Math.floor(Math.random() * 100) + 1;
    }
    else if(guess < secretNumber){

        document.getElementById("result").innerText =
        "📈 عدد بزرگ‌تر است.";

    }
    else{

        document.getElementById("result").innerText =
        "📉 عدد کوچک‌تر است.";

    }

}
let playerScore = 0;
let computerScore = 0;

function play(player){

    let choices = ["سنگ","کاغذ","قیچی"];

    let computer =
    choices[Math.floor(Math.random()*3)];

    let result = "";

    if(player == computer){

        result = "🤝 مساوی شد!";

    }
    else if(
        (player=="سنگ" && computer=="قیچی") ||
        (player=="کاغذ" && computer=="سنگ") ||
        (player=="قیچی" && computer=="کاغذ")
    ){

        playerScore++;
result = "🎉 تو برنده شدی!";

    }
    else{

    computerScore++;
result = "😢 کامپیوتر برنده شد!";

    }

    document.getElementById("gameResult").innerText =
    "تو: " + player +
    "\nکامپیوتر: " + computer +
    "\n\n" + result;
document.getElementById("score").innerText =
"🏆 امتیاز تو: " + playerScore +
" | 🤖 امتیاز کامپیوتر: " + computerScore;
}
let allNews = [];
async function loadNews(){

    let response = await fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=5");

    let data = await response.json();allNews = data.results;

    let html = "";

    for(let i = 0; i < data.results.length; i++){

        html += `

        <div class="news-card">

            <img src="${data.results[i].image_url}">

            <h3>${data.results[i].title}</h3>

            <p>${data.results[i].summary}</p>
<a href="${data.results[i].url}" target="_blank">
    مطالعه خبر
</a>
        </div>
        `;

    }

    document.getElementById("news").innerHTML = html;

}
function filterNews(){

    let search =
    document.getElementById("newsSearch")
    .value
    .toLowerCase();

    let html = "";

    for(let i=0;i<allNews.length;i++){

        if(allNews[i].title
        .toLowerCase()
        .includes(search)){

            html += `
            <div class="news-card">

                <img src="${allNews[i].image_url}">

                <h3>${allNews[i].title}</h3>

                <p>${allNews[i].summary}</p>

                <a href="${allNews[i].url}" target="_blank">
                مطالعه خبر
                </a>

            </div>
            `;

        }

    }

    document.getElementById("news").innerHTML = html;

}
let slides = [

{
title:"🚀 TechVerse",
text:"دنیای تکنولوژی، هوش مصنوعی و امنیت سایبری"
},

{
title:"🤖 AI News",
text:"جدیدترین اخبار هوش مصنوعی را دنبال کن."
},

{
title:"🎮 Gaming",
text:"آخرین اخبار بازی‌های روز دنیا."
},

{
title:"🛡️ Cyber Security",
text:"آموزش امنیت و هک اخلاقی."
}

];

let currentSlide = 0;

function changeHero(){

currentSlide++;

if(currentSlide>=slides.length){

currentSlide=0;

}

document.getElementById("hero-title").innerText =
slides[currentSlide].title;

document.getElementById("hero-text").innerText =
slides[currentSlide].text;

}

setInterval(changeHero,4000);
tsParticles.load("particles",{

background:{
color:"#0f172a"
},

particles:{

number:{
value:80
},

color:{
value:"#38bdf8"
},

links:{
enable:true,
distance:150,
color:"#38bdf8"
},

move:{
enable:true,
speed:2
}

}

});
tsParticles.load("particles", {
    background: {
        color: "#0f172a"
    },

    particles: {
        number: {
            value: 80
        },

        color: {
            value: "#38bdf8"
        },

        links: {
            enable: true,
            distance: 150,
            color: "#38bdf8"
        },

        move: {
            enable: true,
            speed: 2
        }
    }
});