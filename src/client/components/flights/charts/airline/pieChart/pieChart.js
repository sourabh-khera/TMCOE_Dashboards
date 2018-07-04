import React, { Component } from 'react';
import * as d3 from 'd3';
import { connect } from 'react-redux';
import { BounceLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import './style.css';
import createChart from './createChart';

class PieChart extends Component {
  constructor() {
    super();
    this.margin = {
      top: 30, bottom: 30, left: 40, right: 20,
    };
    this.width = 380 - this.margin.left - this.margin.right;
    this.height = 320 - this.margin.top - this.margin.bottom;
    this.radius = this.width / 2;
  }

  componentDidMount() {
    const { topAirlines } = this.props;
    createChart(this.height, this.width, this.margin, d3, topAirlines, this.node, this.radius);
  }
  componentDidUpdate() {
    const { topAirlines } = this.props;
    createChart(this.height, this.width, this.margin, d3, topAirlines, this.node, this.radius);
  }

  render() {
    const { showAirlineLoader } = this.props;
    const renderComponent = showAirlineLoader ?
      (
        <div className="pieLoaderContainer">
          <BounceLoader
            color="#ffffff"
            loading
          />
        </div>
      )
      : <svg ref={node => { this.node = node; }} />;
    return (
      <div className="pieContainer" id="pieDiv">
        <h3 className="pieHeading">Top 10 Airlines By Total Bookings</h3>
        {renderComponent}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  topAirlines: state.flights.topAirlines,
  showAirlineLoader: state.dashBoard.showAirlineLoader,
});
PieChart.defaultProps = {
  topAirlines: [],
};
PieChart.propTypes = {
  topAirlines: PropTypes.array,
  showAirlineLoader: PropTypes.bool.isRequired,
};
export default connect(mapStateToProps)(PieChart);
