function repeat(str,count){
    let result = ''
    for(let i = 0; i < count; i++){
        result = result + str;
    }
    return result;
}
document.write(repeat('*',6))