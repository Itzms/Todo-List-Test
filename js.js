let Bit = {key:1};

function main() {
    let savedKey = localStorage.getItem("themeKey");
    if (savedKey !== null) {
        Bit.key = parseInt(savedKey);
    }
    changeMode();
}

function changeMode(){
   
    let lightbg = "white";
    let darkbg = "black";
    let darkBodyColor = "rgb(0,0,50)";
    let lightBodyColor =  "#FFFFCD"; //"rgb(245,245,255)"; // "#FFFFCD";
    let darkinput = "rgb(15, 15, 30)";
    let lightinput = "#F0F0E1";
    let darkwavy = "rgb(30,30,60)";
    let lightwavy = "#E1E1C3";
    let darkOpBg  = "rgb(0,0,20)";
    let lightOpBg  = "rgb(255,255,235)";
    // Background Colors Declared
    
    let darkthemefont = "white";
    let lightthemefont = "black";
    let darkheader1 = "rgb(25, 25, 255)";
    let lightheader1 = "#E6E600";
    let darkheader2 = "rgb(10, 0, 100)";
    let lightheader2 = "#F5FF9B";
    // All Colors Set
    
    let bg, font, bodyBG,radFrom, radTo, inputBg, wavyBg,
    themebg, radio, colour;
    //Declared action variables
    if(Bit.key===0){
         bg = lightbg;
          font = lightthemefont;
          bodyBG = lightBodyColor;
          radFrom = lightheader1;
          radTo = lightheader2;
          inputBg = lightinput;
          wavyBg = lightwavy;
          themebg = lightOpBg;
          radio = "Black";
          colour = "Blue";
    }
    else if (Bit.key===1){
          bg = darkbg;
          font = darkthemefont;
          bodyBG = darkBodyColor;
          radFrom = darkheader1;
          radTo = darkheader2;
          inputBg = darkinput;
          wavyBg = darkwavy;
          themebg = darkOpBg;
          radio = "white";
          colour = "yellow";
    }
    //assigning action variables to css variables
    document.documentElement.style.setProperty("--bg", bg);
    document.documentElement.style.setProperty("--font", font);
    document.documentElement.style.setProperty("--bodyBG", bodyBG);
    document.documentElement.style.setProperty("--radFrom", radFrom);
    document.documentElement.style.setProperty("--radTo", radTo);
    document.documentElement.style.setProperty("--inputBg", inputBg);
    document.documentElement.style.setProperty("--wavyBg", wavyBg);
    document.documentElement.style.setProperty("--themebg", themebg);
    document.documentElement.style.setProperty("--radio", radio);
    document.documentElement.style.setProperty("--colour", colour);
   
    //storing Theme Details
    localStorage.setItem("themeKey", Bit.key);  // Save to localStorage
}
function toggleMenu(){
    document.querySelector(".sidebar").classList.toggle("active");
}