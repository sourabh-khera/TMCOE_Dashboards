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
    this.height = 400 - this.margin.top - this.margin.bottom;
  }
  componentDidMount() {
    const { topHotelsDestinations } = this.props;
    createChart(this.height, this.width, this.margin, d3, topHotelsDestinations, this.node);
  }
  componentDidUpdate() {
    const { topHotelsDestinations } = this.props;
    createChart(this.height, this.width, this.margin, d3, topHotelsDestinations, this.node);
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
        <h3 className="verticalBarHeading">Top 10 Destinations By IBV & Bookings</h3>
        {renderComponent}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  topHotelsDestinations: state.hotels.topHotelsDestinations,
  showDestLoader: state.dashBoard.showDestLoader,
});
VerticalBarChart.defaultProps = {
  topHotelsDestinations: [],
};
VerticalBarChart.propTypes = {
  topHotelsDestinations: PropTypes.array,
  showDestLoader: PropTypes.bool.isRequired,

};
export default connect(mapStateToProps)(VerticalBarChart);
