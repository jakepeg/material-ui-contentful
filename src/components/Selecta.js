import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Dialog from '@material-ui/core/Dialog';
import './selecta.css';
import Slide from '@material-ui/core/Slide';
import SvgIcon from '@material-ui/core/SvgIcon';

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

const activities = ['Adventure Sports', 'Attractions', 'Art, Crafts & Cooking', 'Birthday Parties', 'Events', 'Holiday Camps', 'Parks & Skate Parks', 'Performing Arts', 'Play Centres', 'Sport & Games', 'Theme Parks & Water Parks'];
const styles = {

};

class Selecta extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog TransitionComponent={Transition} onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <div>
          <List>
            {activities.map(activity => (
              <ListItem button onClick={() => this.handleListItemClick(activity)} key={activity}>
                <a className="selecta-item">{activity}</a>
              </ListItem>
            ))}
          </List>
        </div>
      </Dialog>
    );
  }
}

Selecta.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

function DownIcon(props) {
  return (
    <SvgIcon>
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" fill="white" width="30"/>
    </SvgIcon>
  );
}

const SelectaWrapped = withStyles(styles)(Selecta);

class SelectaCategory extends React.Component {
  state = {
    open: false,
    // selectedValue: activities[1],
    selectedValue: 'Amazing Experiences',
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
  };

  render() {
    return (
      <div className="selecta-wrap" style={{marginTop: '100px'}}>
        <a className="selecta" onClick={this.handleClickOpen}>Discover {this.state.selectedValue} <DownIcon /></a>
        <SelectaWrapped
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

export default SelectaCategory;