import React, { Component } from 'react'
import hoistNonReactMethods from 'hoist-non-react-methods'

export const someDecorator = WrappedComponent => {
  class Wrapper extends Component {
    constructor(props) {
      super(props)
      this.state = { newNumber: 1 }
      this.setNewNumber = this.setNewNumber.bind(this)
    }
    static displayName = `Wrapper(${WrappedComponent.displayName})`

    setNewNumber(num) {
      this.setState({
        newNumber: num
      })
    }

    render() {
      const props = Object.assign({}, ...this.props, {newNumber: this.state.newNumber}, {setNewNumber: this.setNewNumber})
      return <WrappedComponent ref="child" {...props} />
    }
  }

  return hoistNonReactMethods(Wrapper, WrappedComponent)
  // return Wrapper
}

export const someOtherDecorator = WrappedComponent => {
  class Wrapper extends Component {
    constructor(props) {
      super(props)
      this.someMethod = this.someMethod.bind(this)
    }
    static displayName = `Wrapper(${WrappedComponent.displayName})`

    someMethod(num) {
      console.log(num)
    }

    render() {
      return <WrappedComponent ref="child" {...this.props} someMethod={ this.someMethod } />
    }
  }

  // return hoistNonReactMethods(Wrapper, WrappedComponent)
  return Wrapper
}
