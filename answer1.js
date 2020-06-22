let array = [4,5,1,2,6,8,9,7,3];

let largest = 0;

for (let i=0 ; i< array.length ; i++){
    if(largest<array[i]){
        largest = array[i];
    }
}
let secondLargest = 0;

for (let i=0 ; i< array.length ; i++){
    if(secondLargest<array[i] && largest!= array[i] ) {
        secondLargest = array[i];
    }
}

console.log( "Second largest = " + secondLargest );

let lowest = 999999;

for (let i=0 ; i< array.length ; i++){
    if(lowest>=array[i]){
        lowest = array[i];
    }
}
let secondLowest = 99999;

for (let i=0 ; i< array.length ; i++){
    if(secondLowest>array[i] && lowest!= array[i] ) {
        secondLowest = array[i];
    }
}

console.log( "Second lowest = " + secondLowest );

let array1 = [4,5,1,2,6,8,9,7,3,24,24,17,19,19,24];

let countnumber=0;

for(let i=0 ;i<array1.length ; i++){
    let num = array1[i];
    for(let j=0 ;j<array1.length ; j++){
        if(array1[i]==array1[j] && array1[i]!=-1){
            
            countnumber++;
            array1[j] = -1;
            
        }
    }
    console.log(  " Number = " + num + " count = " + countnumber);
    countnumber=0;
}



