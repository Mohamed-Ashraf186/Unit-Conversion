const convertBtn=document.querySelector(".convert")
const input=document.getElementById("unit")
const lengthEl=document.querySelector(".length")
const volumeEl=document.querySelector(".volume")
const massEl=document.querySelector(".mass")


const calculate = function(data,rate){
    const num1 = (data * rate).toFixed(3)
    const num2= (data * 1/rate).toFixed(3)
    return [num1,num2]
}

function renderConv(unit1,unit2,rate,data,type){
    const res = calculate(data,rate)
    let html= `<p class="active">${data} ${unit1} = ${res[0]} ${unit2} | ${data} ${unit2} = ${res[1]} ${unit1}</p>`
    type.innerHTML=html
}

function convertMeters(){
    const data =input.value;
    renderConv("meters","feet",3.2808399,data,lengthEl)
}
function convertLiters(){
    const data =input.value;
    renderConv("liters","gallons",0.26417205,data,volumeEl) 
}
function convertKilos(){
    const data =input.value;
    renderConv("kilos","pounds",2.20462262,data,massEl) 
}


convertBtn.addEventListener("click",convertMeters)
convertBtn.addEventListener("click",convertLiters)
convertBtn.addEventListener("click",convertKilos)


