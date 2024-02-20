function getElementWidth(content, padding, border){
    const a = Number.parseFloat(content)*1000;
    const b = Number.parseFloat(padding)*1000;
    const c = Number.parseFloat(border)*1000;

    return (a +2*b+2*c)/1000; 
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
