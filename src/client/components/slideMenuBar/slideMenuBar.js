import React, { Component } from 'react';
import { push as Menu } from 'react-burger-menu';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import avatar from '../../assets/images/avatar.jpg';
import DisplayMenuItems from '../../components/menuItems/menuItems';
import { highlightHotel, highlightFlight } from '../../actions/common';
import './style.css';
import styles from './style';

class SlideMenuBar extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
      showLeftIcon: true,
      openCalendar: false,
      toggleFilterTypes: false,
    };
  }
  handleMenuClick = () => {
    const { toggle } = this.state;
    this.setState({ toggle: !toggle });
  }
  handleFiltersClick = () => {
    const { openCalendar, toggleFilterTypes } = this.state;
    this.setState({ openCalendar: !openCalendar, toggleFilterTypes: !toggleFilterTypes });
  }
  handleHotelClick = () => {
    const { history, activeHotelDashboard } = this.props;
    activeHotelDashboard(true);
    history.push('/');
  }
  handleFlightClick = () => {
    const { history, activeFlightDashboard } = this.props;
    activeFlightDashboard(true);
    history.push('/flights');
  }
  render() {
    const { menuOpen, FilterTypes, activeHotel, activeFlight } = this.props;
    const { toggle, showLeftIcon, openCalendar, toggleFilterTypes } = this.state;
    const filters = FilterTypes.map(item => (
      <DisplayMenuItems
        title={item.title}
        icon={item.icon}
        showLeftIcon={item.showLeftIcon}
      />
    ));
    const renderDateFilter = openCalendar ? (
      <div>
        <DisplayMenuItems title="Month" showLeftIcon={false} />
        <DisplayMenuItems title="Year" showLeftIcon={false} />
      </div>
    ) : null;
    const renderFilterTypes = toggle ?
      (
        <div className="filterTypes">
          <DisplayMenuItems
            title="Select Date Range"
            icon="glyphicon-calendar"
            handleClick={this.handleFiltersClick}
            toggleFilterTypes={toggleFilterTypes}
          />
          {renderDateFilter}
          {filters}
        </div>
      )
      : null;

    return (
      <div>
        <Menu
          isOpen={menuOpen}
          //  onStateChange={state => this.handleStateChange(state)}
          styles={styles}
          width={240}
          noOverlay
          pageWrapId="page-wrap"
          outerContainerId="outer-container"
        >
          <div className="profileContainer">
            <span><img src={avatar} alt="can not load" className="slidePanelProfileImage" /></span>
            <span className="userName">Admin</span>
          </div>
          <form>
            <div className="input-group formPadding">
              <input type="text" className="form-control textFieldStyle" placeholder="Search" name="search" />
              <div className="input-group-btn">
                <button className="btn btn-default textFieldStyle" type="submit">
                  <i className="glyphicon glyphicon-search searchIcon" />
                </button>
              </div>
            </div>
          </form>
          <div className="dashboardItemsParentContainer">
            <div className="dashboardItemContainer">
              <span className="glyphicon glyphicon-dashboard commonIcons" />
              <span className="dashboardItemsFont">DashBoards</span>
            </div>
            <div className="dashboardLeftIconContainer">
              <span className="glyphicon glyphicon-menu-down commonIcons" />
            </div>
          </div>
          <div className="dashboardItemListContainer">
            <div className={activeHotel ? 'activeHotelOrFlight' : 'dashboardTypeContainer'}
              onClick={this.handleHotelClick}>
              <span className="glyphicon glyphicon-home commonIcons" />
              <span className="menuItemsFont">Hotels</span>
            </div>
            <div className={activeFlight ? 'activeHotelOrFlight' : 'dashboardTypeContainer'}
              onClick={this.handleFlightClick}>
              <span className="glyphicon glyphicon-plane commonIcons" />
              <span className="menuItemsFont">Flights</span>
            </div>
          </div>
          <DisplayMenuItems
            title="Filters"
            icon="glyphicon-filter"
            showLeftIcon={showLeftIcon}
            toggle={toggle}
            handleClick={this.handleMenuClick}
          />
          { renderFilterTypes }
        </Menu>

      </div>
    );
  }
}
SlideMenuBar.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  FilterTypes: PropTypes.array.isRequired,
  activeHotelDashboard: PropTypes.func.isRequired,
  activeFlightDashboard: PropTypes.func.isRequired,
  activeFlight: PropTypes.bool.isRequired,
  activeHotel: PropTypes.bool.isRequired,
};
const mapStateToProps = state => ({
  menuOpen: state.dashBoard.menuOpen,
  activeHotel: state.dashBoard.activeHotel,
  activeFlight: state.dashBoard.activeFlight,
});
const mapDispatchToProps = dispatch => ({
  activeHotelDashboard: highlight => dispatch(highlightHotel(highlight)),
  activeFlightDashboard: highlight => dispatch(highlightFlight(highlight)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SlideMenuBar);
