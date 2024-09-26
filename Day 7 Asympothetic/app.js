// ================================   Asymptotic analysis and  notation  ===========================================
//   Big O  
// >>>>>>                  ` f(n) = 5^2 + 6n + 12
// n mean = array(inputSize) f(10) = (5 lines belong to loop's inside loop)(10*2) + (6 lines belong to normal loop)(10) + outside loops line(12)
// >>>>>>                    f(10) = 5(10*2) + 6(10) + 12
// >>>>>>                    f(10) = 5(100) + 60 + 12
// >>>>>>                    f(10) = 500 + 60 + 12
// >>>>>>                    f(10) = 572
// >>>>>>
// Example:
function timeComplexity(n) {
  let name = "Noman Ahemd";
  let hobby = "Reading";
  for (let i = 0; i < n.length; i++) {
    console.log(name);
    for (let j = 0; j < n.length; j++) {
      console.log(hobby);
    }
  }
}
let n = [1, 2, 3, 4, 5, 6];
timeComplexity(n);

// ==================================  Summery of the function Time Complexity  ================================================
// line 1      //  1
// line 2      //  1
// line 3      // outer loop (6) time iterate        = 6
// line 4     //  outer loop will print 6 time name  = 6
// line 5     //  each iteration of outer loop which is (6) times the inner loop will run also(6) times total 6 * 6 = 36 Times inner loops will run.
// Line 6     //  inner loop will print hobby to 6 * 6 time which is total = 36
//  =================  Total Lines excute = 86      total as per standerd 80 we will remove remainig 6


// Total Running Time Calculation asympotatic example percentage;
//  f(n) = 5n2 + 6n + 12
// n = 6                                            T(6) = 6(6^2) + 3(6) + 2 = 6(36) + 18 + 2 = 216 + 18 + 2 = 236
// calculate the contribution of 6(5^2)             6n^2 = 6(6*2) = 216
// percentage contribution =                        (236 / 216) * 100  = 91.52542373%
// =============================     Perform the Calculation:   ===================================
// First, calculate the fraction:                   236 / 216 ~~   0.9152542373% 
// Then multiply by 100 to convert to a percentage  0.78260869565 * 100 ~~ 91.52542373% 
// Running time complexity    91.52542373%



//  What is Asymptotic Analysis?
//  Asymptotic analysis is a foundational concept in algorithm analysis that helps developers and computer scientists understand how algorithms     perform in terms of time and space as input sizes increase.
// We use all notation in Asymptotic Analysis.
