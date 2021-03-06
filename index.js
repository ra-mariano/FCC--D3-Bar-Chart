let json = []


const req = new XMLHttpRequest();
req.open("GET",'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json',true);
req.send();
req.onload = function(){
 json = (JSON.parse(req.responseText));
 // let stringed=  JSON.stringify(json.data);
  let dataset = json.data
 
 console.log(dataset)

 const w = 1220;
 const h = 541.941;
let regex=/\d\d\d\d/
 


 const xscale = d3.scaleLinear()
    .domain([1947, 2016])
    .range([0, 1155]);

const yscale = d3.scaleLinear()
   .domain([0, 18064.7])
   .range([h, 0])




 
 const svgarea = d3.select("body")
 .append("svg")
 .attr("width", w)
 .attr("height", h+50);
 
    svgarea.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("id", "bars")
       .attr("x", (d,i) => (i* 4.2)+50)
       .attr("y", (d)=> (h-(d[1])*.03))
       .attr("width", 3.5)
       .attr("height", (d,i) => {
return (d[1])*.03})
        .attr("fill", "navy")
        .attr("class", "bar")
        .attr('index', (d, i) => i)
        .attr("data-date", (d)=>(d[0]))
        .attr("data-gdp", (d=>(d[1])))
        
        
        
        var tooltip = d3
        .select("body")
        .append("div")
        .style("visibility", "hidden")
        .attr('id', 'tooltip')
        
       
        
       
        
         
         
         d3.selectAll("#bars")
    
         .on("mouseover", function (event, d){
          var date = this.getAttribute('data-date');  
          var gdp = this.getAttribute("data-gdp")
        
          console.log(date) 
          
   return tooltip.style("visibility", "visible")
  .html(date + "<br>"+"$"+gdp+" BILLION")
  .attr("data-date",date)
  
 })

 .on("mousemove", function(event, d){
  var i = this.getAttribute('index');
 
  return tooltip
  .style('left', (i*4.2)+(200/i)  +"px")
  .style('top', h- (d[1]*.03)+50 +"px")
})


  .on("mouseout", function(){return tooltip.style("visibility", "hidden");});
       
       

        const xAxis = d3.axisBottom(xscale);
     
        svgarea.append("g")
           .attr("transform", "translate(50," + h + ")")
           .call(xAxis)
           .attr("id", "x-axis")

      const yAxis = d3.axisLeft(yscale);
     
        svgarea.append("g")
           .attr("transform", "translate("+50+", 0)")
           .call(yAxis)
           .attr("id", "y-axis")
};




/*const req = new XMLHttpRequest();
req.open("GET",'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json',true);
req.send();
req.onload = function(){
  json.push(JSON.parse(req.responseText));
  jsonstringify =JSON.stringify(json);*/