function findVals() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var num3 = Number(document.getElementById("num3").value);
    console.log(num1,num2,num3);

    //making arrays to access array methods
    const nums = [num1,num2,num3];

    //sorting in increasing order

    nums.sort(function(a, b) {
        return a - b;
      });

    console.log(nums);

    //finding mean 
    //remember to add percision & keep in mind decimal (etc)
    var mean = ((num1+num2+num3)/3);
    console.log("The mean of these 3 numbers are: " ,mean);

    //find max
    //last element
    var max = nums[nums.length -1];
    console.log("The max of these 3 numbers are: " ,max);

    
    //find min
    //first element
 
    var min = nums [0];
    console.log("The min of these 3 numbers are: " ,min);

    //find median 
    var middle = Math.floor(nums.length/2);
    var median = nums[middle];
    console.log("The median of these 3 numbers are: " ,median);

    //find range 

    var range = max - min;
    console.log("The range of these 3 numbers are: " ,range);




}