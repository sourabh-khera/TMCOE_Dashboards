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
    const { topOrigins } = this.props;
    createChart(this.height, this.width, this.margin, d3, topOrigins, this.node);
  }
  componentDidUpdate() {
    const { topOrigins } = this.props;
    createChart(this.height, this.width, this.margin, d3, topOrigins, this.node);
  }

  render() {
    const { showOriginLoader } = this.props;
    const renderComponent = showOriginLoader ?
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
        <h3 className="verticalBarHeading">Top 15 Origins By IOV, Bookings, Passengers</h3>
        {renderComponent}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  topOrigins: state.flights.topOrigins,
  showOriginLoader: state.dashBoard.showOriginLoader,
});
VerticalBarChart.defaultProps = {
  topOrigins: [],
};
VerticalBarChart.propTypes = {
  topOrigins: PropTypes.array,
  showOriginLoader: PropTypes.bool.isRequired,

};
export default connect(mapStateToProps)(VerticalBarChart);
