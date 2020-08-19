for(let i = 1;i <= 100;i++){
    if(!(i % 3 && i % 5)){
        if(i % 5){
            document.write('Fizz')
        }
        else{
            if(i % 3){
                document.write('Buzz')
            }
            else{
                document.write('FizzBuzz')
            }
        }
    }
    else{
        document.write(i)
    }
    document.write('  ')
}
