let json = []


const req = new XMLHttpRequest();
req.open("GET",'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json',true);
req.send();
req.onload = function(){
 json = (JSON.parse(req.responseText));
 // let stringed=  JSON.stringify(json.data);
  let dataset = json.data
 
 console.log(dataset)

 const w = 1000;
 const h = 500;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);
      
    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d)=> h-(3*d))
       .attr("width", 25)
       .attr("height", (d, i) => {
return d[1]})
        .attr("fill", "navy")
};




/*const req = new XMLHttpRequest();
req.open("GET",'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json',true);
req.send();
req.onload = function(){
  json.push(JSON.parse(req.responseText));
  jsonstringify =JSON.stringify(json);*/