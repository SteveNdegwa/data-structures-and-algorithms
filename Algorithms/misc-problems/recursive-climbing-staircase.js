/**
 * Given a staircase of 'n' steps, count the number of distict ways to climb to the top. 
 
 * You can either climb 1 or 2 steps at at time
  
 * n = 1; climbingStaircase(1) = 1 way     / (1)
 
 * n = 2; climbingStaircase(2) = 2 ways    / (1,1) and (2)

 * n = 3; climbingStaircase(3) = 3 ways    / (1,1,1), (1,2) and (2,1)

 * n = 4; climbingStaircase(4) = 5 ways    / (1,1,1,1) and (1,1,2), (1,2,1), (2,1,1) and (2,2)


  At any given time, you can climb either 1 or 2 steps.

  If you have to climb to step 'n', we can only climb from step 'n-1' or 'n-2'

  climbingStaircase(n) = climbingStaircase(n-1) +  climbingStaircase(n-2)

 */

  function climbingStaircase(n){
    if(n<3){
        return n;
    }

    if(n<0){
        return 0;
    }

    return climbingStaircase(n-1) + climbingStaircase(n-2)
  }

  console.log(climbingStaircase(1))
  console.log(climbingStaircase(6))