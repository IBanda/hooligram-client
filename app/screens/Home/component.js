import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button, View } from 'react-native'
import { colors } from 'hg/constants'

export default class Home extends Component {
  static navigationOptions = {
    headerTitle: 'Hooligram'
  }

  static propTypes = {}

  state = {}

  render() {
    return (
      <View
        style={{
          backgroundColor: colors.WHITE,
          flex: 1
        }}
      >
        <Button
          onPress={this.props.signOut}
          title='Sign out'
        />
      </View>
    )
  }
}
