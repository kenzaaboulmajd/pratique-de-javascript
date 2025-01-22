fetch("numbers.json")
.then((response)=>response.json())
.then((data)=>{
    const numberSelect=document.getElementById("numberSelect")
    data.numbers.forEach((element)=>{
        const option=document.createElement("option")
        option.value=element;
        option.textContent=element;
        numberSelect.appendChild(option)
    });
})

document.getElementById('calculateBtn').addEventListener("click",()=>{
    const selectNumber = parseFloat(document.getElementById("numberSelect").value);
    const userInput = parseFloat(document.getElementById("userInput").value);
    const operation = document.querySelector("input[name='operation']:checked").value;

    let result ;
    if(isNaN(userInput)){
        alert("please enter a valid number")
        return;
    }
    switch(operation){
        case "add" :
            result=selectNumber+userInput;
            break;
        case "subsctruct" :
            result=selectNumber-userInput;
            break;
        case "multiply":
            result=selectNumber*userInput;
            break;
        case "devide":
            if(userInput===0){
                alert("cannot devide by 0")
                return;
            }
            result=selectNumber/userInput;
            break;
            default:
                result=0;

    }
    document.getElementById('result').textContent=result;
})