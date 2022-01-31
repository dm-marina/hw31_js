function flatMy(arr){
    let newArr=[];
    if(arguments.length>1){
        throw new Error('Function accepts only 1 argument, too much arguments provided');
    }
    else{
        for(let i=0;i<arr.length;i++){
            if(!Array.isArray(arr[i])){
                newArr.push(arr[i])
            }
            else{
                newArr = newArr.concat(flatMy(arr[i]));
            }
        }
    }
    return newArr
}
console.log(flatMy([[1,2,[3,4,[5,5]]],[4,5],[6]]))