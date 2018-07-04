import React, { Component } from 'react';
import Popover from 'material-ui/Popover';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class FilterPopOver extends Component {
  render() {
    let renderData;
    const { show, onHide, modalType, month, year } = this.props;
    if (modalType === 'Month') {
        renderData = month.map(item => (
          <MenuItem primaryText={item} />
      ));
    } else {
        renderData = year.map(item => (
          <MenuItem primaryText={item} />
      ))
    }
    return (
      <div>
        <Popover
          open={show}
          anchorEl={this.props.anchorEl}
          style={{ height: '200px', width: '100px', position: 'absolute', top: '200px' }}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={onHide}
        >
          <Menu>
            {renderData}
          </Menu>
        </Popover>
      </div>
    );
  }
}

FilterPopOver.propTypes = {
  show: PropTypes.bool.isRequired,
  month: PropTypes.array.isRequired,
  year: PropTypes.array.isRequired,
  onHide: PropTypes.func.isRequired,
  modalType: PropTypes.string.isRequired,
};
const mapStateToProps = state => ({
  month: state.dashBoard.month,
  year: state.dashBoard.year,
});
const mapDispatchToProps = dispatch => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(FilterPopOver);
