import React, { Component } from 'react'
import { connect } from 'react-redux'

import DecreaseCounter from '../components/DecreaseCounter'
import { decrementCounter } from '../actions'



class DecreaseCounterContainer extends React.Component {
  render() {
    return(
      <DecreaseCounter
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
    decrementCounter: count => { dispatch(decrementCounter(count)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (DecreaseCounter)

// export default compose(
//   connect(mapStateToProps, null),
//   //graphql(latestBrightenQuery, {name: 'getLatestBrightenQuery'}),
//   // graphql(findUser, {name: 'findCurrentUser'}, {
//   //   options: ({ icloudToken }) => ({ variables: '123' })
//   // }),
//   withLoadingComponent,
// ) (VisibleBrighten);