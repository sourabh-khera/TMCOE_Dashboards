import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RingLoader } from 'react-spinners';
import CountUp from 'react-countup';
import PropTypes from 'prop-types';
import { getOverAllSales, getTopSuppliers, getTopDestinations } from '../../actions/asyncActions/hotels';
import SlideMenuBar from '../../components/slideMenuBar/slideMenuBar';
import DisplayRevenue from '../../components/displayRevenues/displayRevenue';
import PieChart from '../../components/hotels/charts/pieChart/pieChart';
import VerticalBarChart from '../../components/hotels/charts/verticalBarChart/verticalBarChart';
import './style.css';
import FilterTypes from './fliterTypes';

class HotelsDashBoard extends Component {
  componentDidMount() {
    const {
      fetchOverAllSales,
      fetchTopSuppliers,
      fetchTopDestinations,
    } = this.props;
    fetchOverAllSales();
    fetchTopSuppliers();
    fetchTopDestinations();
  }
  render() {
    const { overAllSales, showLoader, history } = this.props;
    const keys = Object.keys(overAllSales);
    const renderOverAllSales = keys.map((item, id) => {
      let bgColor;
      if (item === 'Number Of Bookings') {
        bgColor = { 'background-color': '#20a8d8' };
      } else if (item === 'Number Of Rooms') {
        bgColor = { 'background-color': '#fdc10a' };
      } else if (item === 'IBV') {
        bgColor = { 'background-color': '#f86b6a' };
      } else {
        bgColor = { 'background-color': '#62c2de' };
      }
      return (<DisplayRevenue
        key={id}
        title={item}
        amount={<CountUp
          start={0}
          end={overAllSales[item]}
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
            {renderOverAllSales}
          </div>
          <div className="row">
            <div className="col-sm-12 col-xs-12 commonChart">
              <PieChart />
            </div>
            <div className="row">
              <div className="col-sm-12 col-xs-12 commonChart">
                <VerticalBarChart />
              </div>
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

HotelsDashBoard.defaultProps = {
  overAllSales: {},
};

const mapStateToProps = state => ({
  overAllSales: state.hotels.overAllSales,
  showLoader: state.dashBoard.showLoader,
});
const mapDispatchToProps = dispatch => ({
  fetchOverAllSales: () => dispatch(getOverAllSales()),
  fetchTopSuppliers: () => dispatch(getTopSuppliers()),
  fetchTopDestinations: () => dispatch(getTopDestinations()),
  // fetchCityBasedRevenues: dateObj => dispatch(getCityBasedRevenues(dateObj)),
  // emptyTransactions: () => dispatch(clearTransactions()),
});

HotelsDashBoard.propTypes = {
  overAllSales: PropTypes.object,
  fetchOverAllSales: PropTypes.func.isRequired,
  fetchTopSuppliers: PropTypes.func.isRequired,
  fetchTopDestinations: PropTypes.func.isRequired,
  // fetchCityBasedRevenues: PropTypes.func.isRequired,
  showLoader: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  // dateObj: PropTypes.object,
  // emptyTransactions: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(HotelsDashBoard);
