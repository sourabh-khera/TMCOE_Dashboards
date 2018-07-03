const createChart = (height, width, margin, d3, topAirlines, node, radius) => {
  const svgNode = node;
  const svg = d3.select(svgNode)
    .attr('width', 600)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${width / 2},${150})`);
  const format = d3.format(',d');

  const color = d3.scaleOrdinal(['#20a8d8', '#f86b6a', '#ff8c00', '#6b486b', '#d0743c']);

  const pie = d3.pie()
    .sort(null)
    .value(d => (d.TotalBookings));

  const path = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

  const pieTween = b => {
    b.innerRadius = 0;
    const i = d3.interpolate({ startAngle: 0, endAngle: 0 }, b);
    return t => (path(i(t)));
  };
  const tooltip = d3.select('body').append('div')
    .style('position', 'absolute')
    .style('opacity', 0)
    .attr('class', 'tooltip')
    .style('display', 'inline-block')
    .style('padding', '10px')
    .style('background-color', 'rgba(0,0,0,0.5)')
    .style('color', 'white')
    .style('font-size', '11px');


  const g = svg.selectAll('.arc')
    .data(pie(topAirlines))
    .enter()
    .append('g')
    .attr('class', 'arc')
    .on('mouseover', d => {
      tooltip
        .style('opacity', 1)
        .text(`TotalBookings = ${format(d.data.TotalBookings)}`);
    })
    .on('mousemove', () => {
      tooltip
        .style('left', `${d3.event.pageX}px`)
        .style('top', `${d3.event.pageY - 40}px`);
    })
    .on('mouseout', () => {
      tooltip
        .style('opacity', 0);
    });


  g.append('path')
    .attr('d', path)
    .attr('fill', d => (color(d.data.Airline)))
    .transition()
    .ease(d3.easeLinear)
    .duration(3000)
    .attrTween('d', pieTween);

  const legend = svg.append('g')
    .attr('font-family', 'sans-serif')
    .attr('font-size', 10)
    .attr('text-anchor', 'end')
    .attr('transform', `translate(${100},${-70})`)
    .selectAll('g')
    .data(topAirlines)
    .enter()
    .append('g')
    .attr('transform', (d, i) => `translate(0, ${i * 20})`);

  legend.append('rect')
    .attr('x', width)
    .attr('width', 19)
    .attr('height', 19)
    .attr('fill', d => color(d.Airline));

  legend.append('text')
    .attr('x', width - 4)
    .attr('fill', 'white')
    .attr('y', 9.5)
    .attr('dy', '0.32em')
    .text(d => d.Airline);
}
export default createChart;
