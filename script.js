const inputEl= document.getElementById("inText");
const btnEl = document.querySelector(".btn");
const titleEl= document.querySelector(".title");
const meaningEl= document.querySelector(".meaning-container");
const audioEl = document.getElementById("audio");
const infoTextEl = document.querySelector(".info-text");
async function fetchApi(word){
infoTextEl.innerHTML=`Searching for ${word} &nbsp <i class="fa-solid fa-2x fa-radiation fa-spin"></i>`
try {
     const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const response = await fetch(url).then((res)=>res.json());
    console.log(response);
    if(!response.title){
    infoTextEl.style.display = "none";
   // meaningEl.style.display="flex";
    meaningEl.classList.toggle("active");
    titleEl.innerText=response[0].word;
    meaningEl.querySelector(".meaning").innerText=response[0].meanings[0].definitions[0].definition;
    audioEl.src=response[0].phonetics[0].audio;
    inputEl.value="";
    }else{
        alert("Undefined");
    }
} catch (error) {
    setTimeout(()=>{
          infoTextEl.innerText="İnternet bağlantınızı kontrol ediniz"
    console.log(error)
    },2000)
  
}
   
   
    
}
btnEl.addEventListener("click", () => {
    fetchApi(inputEl.value);
})
inputEl.addEventListener("keyup",(e)=>{
    if(e.key==="Enter"){
        fetchApi(inputEl.value);
    }
})
inputEl.addEventListener("input",()=>{
    meaningEl.classList.remove("active");
    infoTextEl.style.display = "flex";
    infoTextEl.innerText = ` Searching for "${inputEl.value}"`;
})



