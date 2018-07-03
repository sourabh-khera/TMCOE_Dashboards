const createChart = (height, width, margin, d3, topFlightsDestinations, node) => {
  const svgNode = node;
  const xScale = d3.scaleBand()
    .rangeRound([0, width]);

  const yScale = d3.scaleLinear()
    .range([height, 0]);

  const yLine1Scale = d3.scaleLinear()
    .range([height, 0]);
  const yLine2Scale = d3.scaleLinear()
    .range([height, 0]);
  const color = d3.scaleOrdinal(['#20a8d8']);
  const format = d3.format(',d');
  const lineColor = d3.scaleOrdinal(['#ffffff', '#fdc10a']);
  const xAxis = d3.axisBottom(xScale);
  const yLeftAxis = d3.axisLeft(yScale);
  const yRightAxis = d3.axisRight(yLine1Scale);

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
    .attr('width', 1200)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left} , ${margin.right})`);


  xScale.domain(topFlightsDestinations.map(d => d.Destination));
  yScale.domain([0, d3.max(topFlightsDestinations, d => d.IOV)]);

  yLine1Scale.domain([0, d3.max(topFlightsDestinations, d => d.TotalBookings)]);
  yLine2Scale.domain([0, d3.max(topFlightsDestinations, d => d.TotalPassengers)]);

  const legend = svg.append('g')
    .attr('font-family', 'sans-serif')
    .attr('font-size', 12)
    .attr('transform', `translate(${120}, ${50})`)
    .attr('text-anchor', 'end')
    .selectAll('g')
    .data(['IOV'])
    .enter()
    .append('g')
    .attr('transform', (d, i) => `translate(0, ${i * 20})`);

  legend.append('rect')
    .attr('x', width)
    .attr('width', 19)
    .attr('height', 19)
    .attr('fill', '#20a8d8');
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
    .data(['Bookings', 'Passengers'])
    .enter()
    .append('g')
    .attr('transform', (d, i) => `translate(0, ${i * 20})`);

  legend1.append('line')
    .attr('x1', 610)
    .attr('x2', width)
    .attr('y1', 10)
    .attr('y2', 10)
    .attr('stroke', d => lineColor(d));
  legend1.append('text')
    .attr('x', 580)
    .attr('fill', 'white')
    .attr('y', 9.5)
    .attr('dy', '0.32em')
    .text(d => d);

  svg.append('g')
    .attr('class', 'x axis')
    .attr('transform', `translate(10, ${height})`)
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
    .text('IOV');

  svg.append('g')
    .attr('class', 'y axis')
    .attr('transform', `translate(${width + 15},${0})`)
    .call(yRightAxis.ticks(null, 's'))
    .append('text')
    .attr('y', 6)
    .attr('dy', '.41em')
    .attr('font-family', 'sans-serif')
    .attr('font-size', 12)
    .style('text-anchor', 'end')
    .text('Bookings & Passengers');

  svg.selectAll('.bar')
    .data(topFlightsDestinations)
    .enter().append('rect')
    .attr('class', 'bar')
    .attr('x', d => xScale(d.Destination))
    .attr('y', d => yScale(d.IOV))
    .attr('height', d => height - yScale(d.IOV))
    .attr('width', 30)
    .attr('transform', `translate(${15},${0})`)
    .attr('fill', d => color(d.Destination))
    .on('mouseover', d => {
      tooltip
        .style('opacity', 1)
        .text(`IOV = ${format(d.IOV)}`);
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
  const line1 = d3.line()
    .x(d => xScale(d.Destination))
    .y(d => yLine1Scale(d.TotalBookings));
  const line2 = d3.line()
    .x(d => xScale(d.Destination))
    .y(d => yLine2Scale(d.TotalPassengers));

  svg.selectAll('dot')
    .data(topFlightsDestinations)
    .enter()
    .append('circle')
    .attr('class', 'dot1')
    .attr('r', 3.5)
    .attr('fill', 'red')
    .attr('cx', d => xScale(d.Destination))
    .attr('cy', d => yLine1Scale(d.TotalBookings))
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
    .datum(topFlightsDestinations)
    .attr('fill', 'none')
    .attr('stroke', '#ffffff')
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', 'round')
    .attr('stroke-width', 1.5)
    .attr('d', line1);

  svg.selectAll('dot')
    .data(topFlightsDestinations)
    .enter()
    .append('circle')
    .attr('class', 'dot2')
    .attr('r', 3.5)
    .attr('fill', 'white')
    .attr('cx', d => xScale(d.Destination))
    .attr('cy', d => yLine2Scale(d.TotalPassengers))
    .on('mouseover', d => {
      tooltip
        .style('opacity', 1)
        .text(`TotalPassengers= ${format(d.TotalPassengers)}`);
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
    .datum(topFlightsDestinations)
    .attr('fill', 'none')
    .attr('stroke', '#fdc10a')
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', 'round')
    .attr('stroke-width', 1.5)
    .attr('d', line2);
};
export default createChart;
