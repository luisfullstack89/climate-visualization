// src/components/ScatterPlot.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ScatterPlot = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current);
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    svg
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleLinear()
      .domain(d3.extent(data, d => d.co2))
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain(d3.extent(data, d => d.temperature))
      .range([height, 0]);

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .call(d3.axisLeft(y));

    svg.selectAll('.dot')
      .data(data)
      .enter().append('circle')
      .attr('class', 'dot')
      .attr('cx', d => x(d.co2))
      .attr('cy', d => y(d.temperature))
      .attr('r', 5)
      .attr('fill', 'steelblue')
      .attr('opacity', 0)
      .transition()
      .duration(1000)
      .attr('opacity', 1);

  }, [data]);

  return (
    <svg ref={ref}></svg>
  );
};

export default ScatterPlot;
