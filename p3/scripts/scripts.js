
function findVals() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var num3 = Number(document.getElementById("num3").value);
    console.log(num1,num2,num3);


 //checking if all 3 numbers are in
 if (!isNumeric(num1) || !isNumeric(num2) || !isNumeric(num3)) {
    alert("Please enter numeric values for all fields.");
    return; // Stop further processing
  }


    //making arrays to access array methods
    const nums = [num1,num2,num3];

    //sorting in increasing order

    nums.sort(function(a, b) {
        return a - b;
      });

    console.log(nums);

    //finding mean 
    var mean = ((num1+num2+num3)/3);
    mean = mean.toFixed(2);
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


    //   document.getElementById("statusDisplay").innerHTML = "The mean of these 3 numbers are: " +mean;
    //   document.getElementById("statusDisplay").innerHTML = "<br> The max of these 3 numbers are: " +max;
    //   document.getElementById("statusDisplay").innerHTML = "The min of these 3 numbers are: " +min;
    //   document.getElementById("statusDisplay").innerHTML = "The median of these 3 numbers are: " +median;
    //   document.getElementById("statusDisplay").innerHTML = "The range of these 3 numbers are: " +range;

      statusDisplay.innerHTML= `
      Mean: ${mean}, <br>
      Max: ${max},<br>
      Min: ${min},<br>
      Median: ${median},<br>
      Range: ${range}<br>
      `

}

function isNumeric(value) {
    return !isNaN(value) && !isNaN(parseFloat(value));
  }

