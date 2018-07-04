import React, { Component } from 'react';
import * as d3 from 'd3';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BounceLoader } from 'react-spinners';
import './style.css';
import createChart from './createChart';

class VerticalBarChart extends Component {
  constructor(props) {
    super(props);
    this.margin = {
      top: 20, right: 18, bottom: 100, left: 40,
    };
    this.width = 650 - this.margin.left - this.margin.right;
    this.height = 350 - this.margin.top - this.margin.bottom;
  }
  componentDidMount() {
    const { topFlightsDestinations } = this.props;
    createChart(this.height, this.width, this.margin, d3, topFlightsDestinations, this.node);
  }
  componentDidUpdate() {
    const { topFlightsDestinations } = this.props;
    createChart(this.height, this.width, this.margin, d3, topFlightsDestinations, this.node);
  }

  render() {
    const { showDestLoader } = this.props;
    const renderComponent = showDestLoader ?
      (
        <div className="verticalLoaderContainer">
          <BounceLoader
            color="#ffffff"
            loading
          />
        </div>
      )
      : <svg ref={node => { this.node = node; }} />;
    return (
      <div className="verticalBarContainer" id="div1">
        <h3 className="verticalBarHeading">Top 15 Destinations By IOV, Bookings, Passengers</h3>
        {renderComponent}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  topFlightsDestinations: state.flights.topFlightsDestinations,
  showDestLoader: state.dashBoard.showDestLoader,
});
VerticalBarChart.defaultProps = {
  topFlightsDestinations: [],
};
VerticalBarChart.propTypes = {
  topFlightsDestinations: PropTypes.array,
  showDestLoader: PropTypes.bool.isRequired,

};
export default connect(mapStateToProps)(VerticalBarChart);
