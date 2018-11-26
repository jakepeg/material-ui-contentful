import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#00BCD4',
    marginTop: 80,
    },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 400,
    align: 'center',
    backgroundColor: '#00BCD4'
    },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
    fontSize: 40,
    color: 'white',
    borderBottom: '3px solid #fff',
    backgroundColor: '#00BCD4',
    outline: 'none',
    },
});

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" fill="white" width="20"/>
      </SvgIcon>
    );
  }

class SearchTool extends React.Component {
  state = {
    age: '',
    name: 'hai',
    labelWidth: 0,
  };


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <Select
            value={this.state.age}
            IconComponent={HomeIcon}
            onChange={this.handleChange}
            name="age"
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem value="" disabled>
              Discover amazing experiences
            </MenuItem>
            <MenuItem value={10}>Adventure Sports</MenuItem>
            <MenuItem value={20}>Attractions</MenuItem>
            <MenuItem value={30}>Art, Crafts &amp; Cooking</MenuItem>
            <MenuItem value={40}>Birthday Parties</MenuItem>
            <MenuItem value={50}>Events</MenuItem>
            <MenuItem value={60}>Holiday Camps</MenuItem>
            <MenuItem value={70}>Parks &amp; Skate Parks</MenuItem>
            <MenuItem value={80}>Performing Arts</MenuItem>
            <MenuItem value={90}>Play Centres</MenuItem>
            <MenuItem value={100}>Theme Parks &amp; Water Parks</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

SearchTool.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchTool);
