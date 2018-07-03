import React, { Component } from 'react';
import * as d3 from 'd3';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import './style.css';
import createChart from './createChart';

class TreeMap extends Component {
  constructor() {
    super();
    this.margin = {
      top: 20, right: 18, bottom: 100, left: 40,
    };
    this.width = 700 - this.margin.left - this.margin.right;
    this.height = 600 - this.margin.top - this.margin.bottom;
  }

  componentDidMount() {
    const { treeMapData } = this.props;
    if (isEmpty(treeMapData)) {
      return;
    }
    createChart(this.height, this.width, this.margin, d3, treeMapData, this.node);
  }
  componentDidUpdate() {
    const { treeMapData } = this.props;
    if (isEmpty(treeMapData)) {
      return;
    }
    createChart(this.height, this.width, this.margin, d3, treeMapData, this.node);
  }
  render() {
    return (
      <div className="treeMapContainer">
        <h3 className="treeMapHeading">Top 30 Airlines By IOV</h3>
        <svg ref={node => { this.node = node; }} />;
      </div>
    );
  }
}

const mapStateToProps = state => ({
  treeMapData: state.flights.treeMapData,
});
TreeMap.defaultProps = {
  treeMapData: {},
};
TreeMap.propTypes = {
  treeMapData: PropTypes.object,
};
export default connect(mapStateToProps)(TreeMap);
