const skillsData = [
    { skill: "WEB DIZAJN I RAZVOJ", level: 80 },
    { skill: "PROGRAMIRANJE", level: 60 },
    { skill: "MULTIMEDIJA", level: 85 },
    { skill: "TIMSKI RAD", level: 85 },
    { skill: "KREATIVNOST", level: 90 },
    { skill: "SNALAŽLJIVOST", level: 75 }
];

const margin = { top: 20, right: 20, bottom: 30, left: 120 };
const width = 800 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

const svg = d3.select("#skills-chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

const x = d3.scaleLinear()
    .domain([0, 100]) 
    .range([0, width]);

const y = d3.scaleBand()
    .domain(skillsData.map(d => d.skill))
    .range([0, height])
    .padding(0.1); 

svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x).ticks(5).tickFormat(d => d + "%"));

svg.append("g")
    .call(d3.axisLeft(y));

svg.selectAll(".bar")
    .data(skillsData)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", 0)
    .attr("y", d => y(d.skill))
    .attr("width", 0) 
    .attr("height", y.bandwidth())
    .attr("fill", "#4682B4")
    .transition() 
    .duration(800)
    .attr("width", d => x(d.level));

svg.selectAll(".label")
    .data(skillsData)
    .enter()
    .append("text")
    .attr("class", "label")
    .attr("x", d => x(d.level) - 5) 
    .attr("y", d => y(d.skill) + y.bandwidth() / 2 + 4)
    .attr("text-anchor", "end")
    .text(d => d.level + "%")
    .style("fill", "white");


//ako podesim responzivnost, na desktop verziji mi ne bude puna širina nego mali grafikon, pa sam ostavila da bude lijepi prikaz na desktopu