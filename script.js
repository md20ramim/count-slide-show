let count=document.getElementById("count");
let setCount =10;
setInterval(() => {
    setCount--;
    if(setCount<10 && setCount>3)
    {
        count.innerHTML = "0"+setCount;
    }
    else if(setCount==3)
    {
        count.innerHTML = "Ready";
    }
    else if(setCount==2)
    {
        count.innerHTML = "Steady";
    }
    else if(setCount==1)
    {
        count.innerHTML = "go";
        setCount=10;
    }
}, 1000);