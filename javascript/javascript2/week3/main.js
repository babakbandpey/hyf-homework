// ------------------------------------------------------------------------ Warmup array exercises

// let numbers = [1, 2, 3, 4];
// let newNumbers = [];
// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 !== 0) {
//         newNumbers[i] = numbers[i] * 2;
//     }
// }

// console.log("The doubled numbers are", newNumbers); // [2, 6]

// console.log(`===========================================================`)


// map 


// numbers.map(getDoubling =(item)=> 
// (item % 2 !== 0) ? newNumbers.push += item * 2 : `Something wrong`);


// console.log("The doubled numbers are", newNumbers); // [2, 6]
// console.log(`===========================================================`)





// filter + map

// let newarr = numbers.filter(item => item % 2 !== 0);
// newNumbers = newarr.map(x => x * 2);

//   console.log("The doubled numbers are", newNumbers); // [2, 6]
// console.log(`===========================================================`)





  // ===================================================================================================================  Working with movies


  const movies = [
    {title: "'71","year": 2014,"rating": 7.2,"votes": 41702,"running_times": 5940,"tag":"Good"},
    {"title": "'71 summers","year": 2014,"rating": 7.2,"votes": 41702,"running_times": 5940,"tag":"Good"},
    {"title": "'A' gai wak alien","year": 1983,"rating": 7.4,"votes": 11942,"running_times": 6300,"tag":"Good"},
    {"title": "'Breaker' Morant surfer","year": 1980,"rating": 7.9,"votes": 10702,"running_times": 6420,"tag":"Good"},
    {"title": "'Crocodile' Dundee II","year": 1988,"rating": 5.5,"votes": 47180,"running_times": 6480,"tag":"Average"},
    {"title": "(500) Days of Summer of 2009","year": 2009,"rating": 7.7,"votes": 412368,"running_times": 5700,"tag":"Good"},]
    // {"title": "*batteries not included surfer","year": 1987,"rating": 6.6,"votes": 25636,"running_times": 6360,"tag":"Average"},
    // {"title": "...E tu vivrai nel terrore! L'aldilà","year": 1981,"rating": 6.9,"votes": 16484,"running_times": 5220},
    // {"title": "...and justice for all.","year": 1979,"rating": 7.4,"votes": 25408,"running_times": 7140},
    // {"title": "10","year": 1979,"rating": 6,"votes": 13152,"running_times": 7320},
    // {"title": "10 Cloverfield Lane","year": 2016,"rating": 7.2,"votes": 216151,"running_times": 6240},
    // {"title": "10 Items or Less","year": 2006,"rating": 6.7,"votes": 13342,"running_times": 4920},
    // {"title": "10 Things I Hate About You","year": 1999,"rating": 7.2,"votes": 247070,"running_times": 5820},
    // {"title": "10 Years","year": 2011,"rating": 6.1,"votes": 20790,"running_times": 6000},
    // {"title": "10,000 BC","year": 2008,"rating": 3,"votes": 114750,"running_times": 6540,"tag":"Bad"},
    // {"title": "100 Feet","year": 2008,"rating": 5.5,"votes": 10979,"running_times": 6240},
    // {"title": "100 Girls","year": 2000,"rating": 5.9,"votes": 19232,"running_times": 5640},
    // {"title": "101 Dalmatians","year": 1996,"rating": 5.7,"votes": 83245,"running_times": 6180},
    // {"title": "102 Dalmatians","year": 2000,"rating": 4.9,"votes": 28927,"running_times": 6000},
    // {"title": "11-11-11","year": 2011,"rating": 3.9,"votes": 11425,"running_times": 5400,"tag":"Bad"},]
    // {"title": "11:14","year": 2003,"rating": 7.2,"votes": 40149,"running_times": 5700},
    // {"title": "12 Angry Men","year": 1957,"rating": 8.9,"votes": 518449,"running_times": 5760},
    // {"title": "12 Rounds","year": 2009,"rating": 5.6,"votes": 24457,"running_times": 6480},
    // {"title": "12 Years a Slave","year": 2013,"rating": 8.1,"votes": 513047,"running_times": 8040},
    // {"title": "127 Hours","year": 2010,"rating": 7.6,"votes": 302809,"running_times": 5640},
    // {"title": "13","year": 2010,"rating": 6.1,"votes": 36623,"running_times": 5460},
    // {"title": "13 Going on 30","year": 2004,"rating": 6.1,"votes": 134434,"running_times": 5880},
    // {"title": "13 Hours","year": 2016,"rating": 7.3,"votes": 85771,"running_times": 8640},
    // {"title": "13 Sins","year": 2014,"rating": 6.3,"votes": 26738,"running_times": 5580},
    // {"title": "13th","year": 2016,"rating": 8.2,"votes": 15188,"running_times": 6000},
    // {"title": "1408","year": 2007,"rating": 6.8,"votes": 228738,"running_times": 6840},
    // {"title": "1492: Conquest of Paradise","year": 1992,"rating": 6.5,"votes": 24439,"running_times": 9240},
    // {"title": "15 Minutes","year": 2001,"rating": 6.1,"votes": 44647,"running_times": 7200},
    // {"title": "16 Blocks","year": 2006,"rating": 6.6,"votes": 117443,"running_times": 6600},
    // {"title": "17 Again","year": 2009,"rating": 6.4,"votes": 156663,"running_times": 6120},
    // {"title": "1922","year": 2017,"rating": 6.4,"votes": 15416,"running_times": 6120},
    // {"title": "1941","year": 1979,"rating": 5.9,"votes": 27172,"running_times": 8760},
    // {"title": "2 Days in New York","year": 2012,"rating": 6,"votes": 12766,"running_times": 5760},
    // {"title": "2 Days in Paris","year": 2007,"rating": 6.8,"votes": 28106,"running_times": 5760},
    // {"title": "2 Days in the Valley","year": 1996,"rating": 6.5,"votes": 16528,"running_times": 6240},
    // {"title": "2 Fast 2 Furious","year": 2003,"rating": 5.9,"votes": 213674,"running_times": 6420},
    // {"title": "2 Guns","year": 2013,"rating": 6.7,"votes": 170412,"running_times": 6540},
    // {"title": "20,000 Leagues Under the Sea","year": 1954,"rating": 7.2,"votes": 24094,"running_times": 7620},
    // {"title": "200 Cigarettes","year": 1999,"rating": 5.9,"votes": 13532,"running_times": 6060},
    // {"title": "2001 Maniacs","year": 2005,"rating": 5.4,"votes": 10889,"running_times": 5220},
    // {"title": "2001: A Space Odyssey","year": 1968,"rating": 8.3,"votes": 481800,"running_times": 9660},
    // {"title": "2001: A Space Travesty","year": 2000,"rating": 3.4,"votes": 10094,"running_times": 5940},
    // {"title": "2010","year": 1984,"rating": 6.8,"votes": 44155,"running_times": 6960},
    // {"title": "2012","year": 2009,"rating": 5.8,"votes": 306797,"running_times": 9480},
    // {"title": "20th Century Women","year": 2016,"rating": 7.4,"votes": 22965,"running_times": 7140},
    // {"title": "21 & Over","year": 2013,"rating": 5.9,"votes": 65298,"running_times": 5580},
    // {"title": "21","year": 2008,"rating": 6.8,"votes": 203251,"running_times": 7380},
    // {"title": "21 Grams","year": 2003,"rating": 7.7,"votes": 202129,"running_times": 7440},
    // {"title": "21 Jump Street","year": 2012,"rating": 7.2,"votes": 446476,"running_times": 6540},
    // {"title": "22 Jump Street","year": 2014,"rating": 7.1,"votes": 292991,"running_times": 6720},
    // {"title": "24 Hour Party People","year": 2002,"rating": 7.4,"votes": 28750,"running_times": 7020},
    // {"title": "25th Hour","year": 2002,"rating": 7.7,"votes": 157063,"running_times": 8100},
    // {"title": "27 Dresses","year": 2008,"rating": 6.1,"votes": 134861,"running_times": 6660},
    // {"title": "28 Days","year": 2000,"rating": 6,"votes": 37395,"running_times": 6180},
    // {"title": "28 Days Later...","year": 2002,"rating": 7.6,"votes": 323591,"running_times": 6780},
    // {"title": "28 Weeks Later","year": 2007,"rating": 7,"votes": 228033,"running_times": 6000},
    // {"title": "2:22","year": 2017,"rating": 5.7,"votes": 10266,"running_times": 5880},
    // {"title": "3 Days to Kill","year": 2014,"rating": 6.2,"votes": 75906,"running_times": 7380},
    // {"title": "3 Idiots","year": 2009,"rating": 8.4,"votes": 256619,"running_times": 10200},
    // {"title": "3 Men and a Baby","year": 1987,"rating": 5.9,"votes": 39924,"running_times": 6120},
    // {"title": "3 Men and a Little Lady","year": 1990,"rating": 5.3,"votes": 19005,"running_times": 6240},
    // {"title": "3 Ninjas","year": 1992,"rating": 5.2,"votes": 17582,"running_times": 5880},
    // {"title": "3 Women","year": 1977,"rating": 7.9,"votes": 10852,"running_times": 7440},
    // {"title": "30 Days of Night","year": 2007,"rating": 6.6,"votes": 148004,"running_times": 6780},
    // {"title": "30 Minutes or Less","year": 2011,"rating": 6.1,"votes": 83073,"running_times": 4980},
    // {"title": "300","year": 2006,"rating": 7.7,"votes": 654380,"running_times": 7020},
    // {"title": "3000 Miles to Graceland","year": 2001,"rating": 5.9,"votes": 39646,"running_times": 7500},
    // {"title": "300: Rise of an Empire","year": 2014,"rating": 6.2,"votes": 245690,"running_times": 6120},
    // {"title": "31","year": 2016,"rating": 5,"votes": 12536,"running_times": 6120},
    // {"title": "360","year": 2011,"rating": 6.2,"votes": 14275,"running_times": 6600},
    // {"title": "3:10 to Yuma","year": 1957,"rating": 7.6,"votes": 15498,"running_times": 5520},
    // {"title": "3:10 to Yuma","year": 2007,"rating": 7.7,"votes": 254591,"running_times": 7320},
    // {"title": "40 Days and 40 Nights","year": 2002,"rating": 5.6,"votes": 64777,"running_times": 5760},
    // {"title": "42","year": 2013,"rating": 7.5,"votes": 71968,"running_times": 7680},
    // {"title": "45 Years","year": 2015,"rating": 7.1,"votes": 24269,"running_times": 5460},]

// ===================================================================================================================  No 1 + 2 :
    // let shorttitle =[];

    // shorttitle = movies.filter(item=> item.title.length<=10);
    // longtitle = movies.filter(item=> item.title.length>10);
    // console.log(shorttitle)
    // console.log(longtitle)
    // console.log(`===========================================================`)


// ===================================================================================================================  No 3 :
    // 1980-1989 (including both the years)

    // let moviebetween = movies.filter(item=> item.year>=1980 && item.year<=1989 )
    // console.log(moviebetween)
    // console.log(`===========================================================`)


// ===================================================================================================================  No 4 :

    // Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
    // let tag;
    // let newarray = [];
    // let result = movies.map(function(item) {
    //     item.rating = Math.floor(item.rating)
    //     if(item.rating>=7) tag = `Good`/*, console.log(tag)*/;
    //     else if(item.rating>=4 && item.rating<7) tag = `Average`/*, console.log(tag)*/;
    //     else if(item.rating<4) tag = `Bad`/*, console.log(tag)*/;
    //     newarray = Object.assign({tag}, item);
    //     // console.log(newarray)
    //     return newarray;
    // })
    // console.log(`===========================================================`)

// ===================================================================================================================  No 5 :
    // Using chaining, first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating of the movies.

    const higherthen6 = movies
    .filter(item => item.rating>6)
    .map(item => item.rating)

    // console.log(higherthen6);

// ===================================================================================================================  No 6 : count the total number of movies
    
    // Count the total number of movies containing any of following keywords: 
    // Surfer, Alien or Benjamin. So if there were 3 movies that contained Surfer, 
    // 1 with Alien and 2 with Benjamin, you would return 6. Can you make sure the search is case insensitive?
    let i=0;
    movies.map(gettotalsearch=(item)=> {
        let smalltitle = (item.title).toLowerCase();
        if (smalltitle.includes(`surfer`) || smalltitle.includes(`alien`) || smalltitle.includes(`benjamin`)) i=i+1 /*, console.log(title)*/;
        // console.log(title)
        return i;
    })
    // console.log(`You got ${i} matches`)
    // console.log(`===========================================================`)

    
  
// ===================================================================================================================  No 7 

    // Create an array of movies where a word in the title is duplicated. 
    // Fx "Star Wars: The Clone Wars" the word Wars is duplicated.
    // const splitarr = movies
    // .filter(mov => (mov.title.split(" ")))
    // .reduce((item, val, i) =>{
    //   // console.log(i);
    //   // console.log(item);
    //   // console.log(val);
    // let x = val.length;
    //   if(val[x] === val[i]) console.log(val[i]);
    //   else{
    //     // console.log(`There is nothing to match`);
    //   }
    //   console.log(i);
      
    //  })
    

// let title=[];
// let first=[];

//   for(let i=0; i<movies.length;i++)
//   {
//     // console.log(movies[i].title);
//     let count = 0;    
//     for (let j = 0; j < movies.length; j++)    
//     {   
    
//       let splittedval = movies[i].title.split(" ");
//     title.push(movies[j].title);
//     title.shift();
//     first.push(splittedval[0]);
//     // console.log(first);
//     // console.log(first[i]);
    
//     if(title[j].includes(first[j]))
//     {
//       count = count+1;
//       if (count > 1) {
//         console.log(title[i]);
//         // console.log(count);
        
//       }
//       else{
//       // console.log(`searching again`);
        
//       }
//     }
//     else{
//       // console.log(`try again`);
      
//     }
//     }
    
    
//   }


    
    
    // let duplicateword = splitarr.forEach((item, index)=>{ //(500) Days of Summer of 2009
    //   console.log(item);
    // })
    // console.log(duplicateword);
    
    

// ===================================================================================================================  No 9 


// Calculate the average rating of all the movies using reduce. Optional



// let average = movies.reduce((avgRating, val) => avgRating + val.rating, 0) / movies.length;
// console.log(Math.round(average));


// ===================================================================================================================  No 10 

//Count the total number of Good, Average and Bad movies using reduce. Optional


let result1; 
let result2; 
let result3;
let tag; let times=0;let good=0;let avg=0;let bad=0;
    let newarray = [];
    let result = movies.map((item) =>{item.rating = Math.floor(item.rating)
    if(item.rating>=7) tag = `Good`, good++;
    else if(item.rating>=4 && item.rating<7) tag = `Average`, avg++;
    else if(item.rating<4) tag = `Bad`, bad++;
    newarray = Object.assign({tag}, item);
    return newarray;
    })
    
let comments = movies.reduce((item, val) =>{ 
  if(val.tag === `Good`) result1 = `${val.tag} movies are ${good}`;
  else if(val.tag === `Average`) result2 = `${val.tag} movies are ${avg}`;
  else if(val.tag === `Bad`) result3 = `${val.tag} movies are ${bad}`;
  return `${result1}\n${result2}\n${result3}`;
})

console.log(comments);
