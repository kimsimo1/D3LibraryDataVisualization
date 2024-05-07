d3.json('data.json').then(
  function(d) {


    let s = d3.select("body")
      .append("svg")
      .attr("width", 500)
      .attr("height", 400);

    let r = s.selectAll("rect")
      .data(d)
      .enter()
      .append("rect")
      .attr("fill", function(d) {
        return d.color;
      })
      .attr("x", 0)
      .attr("height", 35)
      .attr("y", function(d, i) {
        return i * 40;
      })
      .attr("width", function(d) {
        return d.population / 100000;
      })
      .attr("data-name", function(d) {
        return d.name;
      })
      .attr("data-population", function(d) {
        return d.population;
      })
      .on("click", handleClick);





    ;
  }
);



// function runs when user clicks rect from d3 svg
function handleClick(d3clickObject) {

  document.getElementById("msg").innerHTML = d3clickObject.target.dataset.name;

  document.getElementById("msg2").innerHTML = "Population: " + d3clickObject.target.dataset.population + " people";




}
