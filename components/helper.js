function navClick(){
    const element = document.getElementById('nav');
    if(element.style.width>0){
        return false
    }else{
        return true
    }
    // var count=0;
    // const ch =elements.children;
    // for (let item of ch) {
    //     count+=1;
    //     if(count%2==0){
    //         // item.classList.toggle("shadow-3xl")
    //     }
    // }
}

export {navClick}