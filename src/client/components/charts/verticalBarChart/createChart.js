const createChart = (height, width, margin, d3, topDestinations, node) => {
  const svgNode = node;
  const xScale = d3.scaleBand()
    .rangeRound([0, width]);

  const yScale = d3.scaleLinear()
    .range([height, 0]);

  const yLineScale = d3.scaleLinear()
    .range([height, 0]);

  const color = d3.scaleOrdinal(['#6b486b', '#8a89a6', '#ff8c00', '#98abc5', '#d0743c']);
  const format = d3.format(',d');


  const xAxis = d3.axisBottom(xScale);
  const yLeftAxis = d3.axisLeft(yScale);
  const yRightAxis = d3.axisRight(yLineScale);

  const tooltip = d3.select('body').append('div')
    .style('position', 'absolute')
    .style('opacity', 0)
    .attr('class', 'tooltip')
    .style('display', 'inline-block')
    .style('padding', '10px')
    .style('background-color', 'rgba(0,0,0,0.5)')
    .style('color', 'white')
    .style('font-size', '11px');


  const svg = d3.select(svgNode)
    .attr('width', 800)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left} , ${margin.right})`);


  xScale.domain(topDestinations.map(d => d.Destination));
  yScale.domain([0, d3.max(topDestinations, d => d.IBV)]);

  yLineScale.domain([0, d3.max(topDestinations, d => d.TotalBookings)]);
  const legend = svg.append('g')
    .attr('font-family', 'sans-serif')
    .attr('font-size', 12)
    .attr('transform', `translate(${120}, ${50})`)
    .attr('text-anchor', 'end')
    .selectAll('g')
    .data(['IBV'])
    .enter()
    .append('g')
    .attr('transform', (d, i) => `translate(0, ${i * 20})`);

  legend.append('rect')
    .attr('x', width)
    .attr('width', 19)
    .attr('height', 19)
    .attr('fill', '#6b486b');
  legend.append('text')
    .attr('x', width - 4)
    .attr('fill', 'white')
    .attr('y', 9.5)
    .attr('dy', '0.32em')
    .text(d => d);

  const legend1 = svg.append('g')
    .attr('font-family', 'sans-serif')
    .attr('font-size', 12)
    .attr('transform', `translate(${120}, ${70})`)
    .attr('text-anchor', 'end')
    .selectAll('g')
    .data(['Bookings'])
    .enter()
    .append('g')
    .attr('transform', (d, i) => `translate(0, ${i * 20})`);

  legend1.append('line')
    .attr('x1', 610)
    .attr('x2', width)
    .attr('y1', 10)
    .attr('y2', 10)
    .attr('stroke', '#1f78b5');
  legend1.append('text')
    .attr('x', 580)
    .attr('fill', 'white')
    .attr('y', 9.5)
    .attr('dy', '0.32em')
    .text(d => d);

  svg.append('g')
    .attr('class', 'x axis')
    .attr('transform', `translate(5, ${height})`)
    .call(xAxis)
    .selectAll('text')
    .attr('transform', 'rotate(-60)')
    .attr('dx', '-.9em')
    .attr('dy', '.25em')
    .attr('text-anchor', 'end');

  svg.append('g')
    .attr('class', 'y axis')
    .call(yLeftAxis.ticks(null, 's'))
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '.71em')
    .attr('font-family', 'sans-serif')
    .attr('font-size', 12)
    .style('text-anchor', 'end')
    .text('IBV');

  svg.append('g')
    .attr('class', 'y axis')
    .attr('transform', `translate(${width},${0})`)
    .call(yRightAxis.ticks(null, 's'))
    .append('text')
    .attr('y', 6)
    .attr('dy', '.41em')
    .attr('font-family', 'sans-serif')
    .attr('font-size', 12)
    .style('text-anchor', 'end')
    .text('Bookings');

  svg.selectAll('.bar')
    .data(topDestinations)
    .enter().append('rect')
    .attr('class', 'bar')
    .attr('x', d => xScale(d.Destination))
    .attr('y', d => yScale(d.IBV))
    .attr('height', d => height - yScale(d.IBV))
    .attr('width', 30)
    .attr('transform', `translate(${22},${0})`)
    .attr('fill', d => color(d.Destination))
    .on('mouseover', d => {
      tooltip
        .style('opacity', 1)
        .text(`IBV = ${format(d.IBV)}`);
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
  const line = d3.line()
    .x(d => xScale(d.Destination))
    .y(d => yLineScale(d.TotalBookings));

  svg.selectAll('dot')
    .data(topDestinations)
    .enter()
    .append('circle')
    .attr('class', 'dot')
    .attr('r', 3.5)
    .attr('fill', 'white')
    .attr('cx', d => xScale(d.Destination))
    .attr('cy', d => yLineScale(d.TotalBookings))
    .on('mouseover', d => {
      tooltip
        .style('opacity', 1)
        .text(`TotalBookings= ${format(d.TotalBookings)}`);
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
  svg.append('path')
    .datum(topDestinations)
    .attr('fill', 'none')
    .attr('stroke', '#1f78b5')
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', 'round')
    .attr('stroke-width', 1.5)
    .attr('d', line);
};
export default createChart;
