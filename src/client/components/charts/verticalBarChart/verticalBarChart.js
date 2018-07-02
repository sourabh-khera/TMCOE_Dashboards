import React, { Component } from 'react';
import * as d3 from 'd3';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './style.css';
import createChart from './createChart';

class VerticalBarChart extends Component {
  constructor(props) {
    super(props);
    this.margin = {
      top: 20, right: 18, bottom: 100, left: 40,
    };
    this.width = 650 - this.margin.left - this.margin.right;
    this.height = 400 - this.margin.top - this.margin.bottom;
  }
  componentDidMount() {
    const { topDestinations } = this.props;
    createChart(this.height, this.width, this.margin, d3, topDestinations, this.node);
  }
  componentDidUpdate() {
    const { topDestinations } = this.props;
    createChart(this.height, this.width, this.margin, d3, topDestinations, this.node);
  }

  render() {
    return (
      <div className="verticalBarContainer" id="div1">
        <h3 className="verticalBarHeading">Top 10 Destinations By IBV & Bookings</h3>
        <svg ref={node => { this.node = node; }} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  topDestinations: state.hotels.topDestinations,
});
VerticalBarChart.defaultProps = {
  topDestinations: [],
};
VerticalBarChart.propTypes = {
  topDestinations: PropTypes.array,
  // showChannelTypeLoader: PropTypes.bool,

};
export default connect(mapStateToProps)(VerticalBarChart);
