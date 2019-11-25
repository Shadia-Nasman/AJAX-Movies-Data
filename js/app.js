
//http://www.omdbapi.com/?apikey=[yourkey]&
//apikey=5e6714ab"

// ${id}



(() => {
   

    const apiKey= "5e6714ab";
//////////////////////the eventlistener//////////////////////////////

    document.querySelector("#run").addEventListener("click", async () => {

        const movieName=document.getElementById("nameSearch").value;
        // const movieType=document.getElementById("typeSearch").value;

    /////////////////////////
    var typ = document.getElementById("typeSearch");
    const movieType = typ.options[typ.selectedIndex].value;
    ////////////////////////////
       //fetch
        const response = await fetch("http://www.omdbapi.com/?s="+movieName+"&type="+movieType+"&apikey="+apiKey);
        var result = await response.json();
        //console.log(result);
        
        const target = document.querySelector("#target");
        
        var years=[];
        result.Search.forEach(element => {
            
            years.push(element);

             years.sort(sortByYear);
            
        });
        console.log(years);


 years.forEach(element => {
     ///////////////creating new elements to display the results/////////////

const displayMovie = document.querySelector(".displayElements");
    const newElement = displayMovie.cloneNode(true);
    target.appendChild(newElement);

    newElement.querySelector(".movie-Type").innerHTML ="Type: "+element.Type;  
    newElement.querySelector(".movie-Year").innerHTML ="Year: "+element.Year.slice(0,4);
    newElement.querySelector(".movie-Title").innerHTML ="Title:<br> "+element.Title;
    show_image(element.Poster,200,300,'logo');
    });

    });

///////////////////////function to display the foto///////////
    function show_image(src, width, height, alt) {
        var img = document.createElement("img");
        img.src = src;
        img.width = width;
        img.height = height;
        img.alt = alt;
    
        //This next line will just add it to the <body> tag
      target.appendChild(img);
    }
    
const sortByYear = (a, b) => {
    var A=a.Year.slice(0,4);
    var B=b.Year.slice(0,4);
  return B-A;
};


})();






  