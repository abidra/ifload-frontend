import React from 'react';
import Icon from 'material-ui/Icon';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import SearchBar from 'material-ui-search-bar'

import injectSheet from 'react-jss';

const styles = {
  outsideContainer: {
    width: '100%',
    height: '70%',
  },
  insideContainer: {
    marginTop: '0 !important',
    height: '100%',
  },
  inputBox: {
    flexGrow: '1 !important',
  },
  input: {
    width: '100%',
    border: 0,
    '&:focus': {
      outline: 0,
    },
  },
  iconContainer: {
    marginLeft: 8,
    paddingRight: '0 !important',
  },
};

function SearchBar({ classes }) {
  return (
    <Paper xs={12}>
    <SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '0 auto',
        maxWidth: 800
      }}
    />
    </Paper>
  );
}

export default injectSheet(styles)(SearchBar);
