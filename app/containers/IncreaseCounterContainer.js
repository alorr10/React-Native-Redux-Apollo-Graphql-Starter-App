import React, { Component } from 'react'
import { connect } from 'react-redux'

import IncreaseCounter from '../components/IncreaseCounter'
import { incrementCounter } from '../actions'



class IncreaseCounterContainer extends React.Component {
  render() {
    return(
      <IncreaseCounter
        count={this.props.count}
      />
    )
  }
}

const mapStateToProps  = state => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: count => { dispatch(incrementCounter(count)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (IncreaseCounter)

// export default compose(
//   connect(mapStateToProps, null),
//   //graphql(latestBrightenQuery, {name: 'getLatestBrightenQuery'}),
//   // graphql(findUser, {name: 'findCurrentUser'}, {
//   //   options: ({ icloudToken }) => ({ variables: '123' })
//   // }),
//   withLoadingComponent,
// ) (VisibleBrighten);