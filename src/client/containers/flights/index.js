import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RingLoader } from 'react-spinners';
import CountUp from 'react-countup';
import PropTypes from 'prop-types';
import { getTotalSales, getTopOrigins, getTopDestinations, getTopAirlines } from '../../actions/asyncActions/flights';
import SlideMenuBar from '../../components/slideMenuBar/slideMenuBar';
import DisplayRevenue from '../../components/displayRevenues/displayRevenue';
// import PieChart from '../../components/charts/pieChart/pieChart';
import DestinationVerticalBarChart from '../../components/flights/charts/destination/verticalBarChart/verticalBarChart';
import OriginVerticalBarChart from '../../components/flights/charts/origins/verticalBarChart/verticalBarChart';
import TreeMap from '../../components/flights/charts/airline/treemap/treemap';
import PieChart from '../../components/flights/charts/airline/pieChart/pieChart';
import './style.css';
import FilterTypes from './fliterTypes';

class FlightsDashBoard extends Component {
  componentDidMount() {
    const {
      fetchTotalSales,
      fetchTopOrigins,
      fetchTopDestinations,
      fetchTopAirlines,
    } = this.props;
    fetchTotalSales();
    fetchTopOrigins();
    fetchTopDestinations();
    fetchTopAirlines();
  }
  render() {
    const { totalSales, showLoader, history } = this.props;
    const keys = Object.keys(totalSales);
    const renderTotalSales = keys.map((item, id) => {
      let bgColor;
      if (item === 'IOV / GBV') {
        bgColor = { 'background-color': '#20a8d8' };
      } else if (item === 'NBV') {
        bgColor = { 'background-color': '#fdc10a' };
      } else if (item === 'AOV') {
        bgColor = { 'background-color': '#f86b6a' };
      } else {
        bgColor = { 'background-color': '#62c2de' };
      }
      return (<DisplayRevenue
        key={id}
        title={item}
        amount={<CountUp
          start={0}
          end={totalSales[item]}
          duration={2}
          useEasing
          decimals={2}
          decimal="."
          separator=","
        />}
        containerBgColor={bgColor}
        graphIcon="glyphicon-stats"
      />);
    });
    const renderComponent = showLoader ?
      (
        <div className="loaderContainer">
          <RingLoader
            color="#ffffff"
            loading
          />
        </div>
      )
      : (
        <div>
          <div className="row">
            {renderTotalSales}
          </div>
          <div className="row">
            <div className="col-sm-12 col-xs-12 commonChart">
              <DestinationVerticalBarChart />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-xs-12 commonChart">
              <OriginVerticalBarChart />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-xs-12 commonChart">
              <TreeMap />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-xs-12 commonChart">
              <PieChart />
            </div>
          </div>
        </div>
      );
    return (
      <div className="dasboardContainer">
        <div id="outer-container" style={{ height: '100%', overflow: 'hidden' }}>
          <SlideMenuBar FilterTypes={FilterTypes} history={history} />
          <main id="page-wrap" className="page" >
            {renderComponent}
          </main>
        </div>
      </div>
    );
  }
}

FlightsDashBoard.defaultProps = {
  totalSales: {},
};

const mapStateToProps = state => ({
  totalSales: state.flights.totalSales,
  showLoader: state.dashBoard.showLoader,
  topFlightsDestinations: state.flights.topFlightsDestinations,
});
const mapDispatchToProps = dispatch => ({
  fetchTotalSales: () => dispatch(getTotalSales()),
  fetchTopOrigins: () => dispatch(getTopOrigins()),
  fetchTopDestinations: () => dispatch(getTopDestinations()),
  fetchTopAirlines: () => dispatch(getTopAirlines()),
  // emptyTransactions: () => dispatch(clearTransactions()),
});

FlightsDashBoard.propTypes = {
  totalSales: PropTypes.object,
  fetchTotalSales: PropTypes.func.isRequired,
  fetchTopOrigins: PropTypes.func.isRequired,
  fetchTopDestinations: PropTypes.func.isRequired,
  fetchTopAirlines: PropTypes.func.isRequired,
  showLoader: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  // dateObj: PropTypes.object,
  // emptyTransactions: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(FlightsDashBoard);
