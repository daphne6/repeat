let birthYear = 2001
if (birthYear % 400 ===0){
    document.write('うるう年です');
}
else{ 
 if (birthYear % 100 !== 0){
    if(birthYear % 4 ===0){
    document.write('うるう年です');
    }
    else {
    document.write('うるう年ではありません');
    }
 }
 else {
    document.write('うるう年ではありません');
 }
}