import React, { Component } from 'react'
import { someDecorator, someOtherDecorator } from './hoc/hoc.js'
import { someMixin, someOtherMixin } from './mixin/mixin.js'
import './App.css'

class Composer extends React.Component {
  constructor(props) {
    super(props)
    this.someStaticMethod = this.someStaticMethod.bind(this)
  }

  render() {
    return <p>{this.props.newNumber}</p>
  }

  someStaticMethod(num) {
    this.props.setNewNumber(num)
    this.props.someMethod(num)
  }
}

const Composer2 = React.createClass({

  mixins: [
    someMixin,
    someOtherMixin
  ],

  render() {
    return <p>{this.state.newNumber}</p>
  },

  someStaticMethod(num) {
    this.setNewNumber(num)
    this.someMethod(num)
  }
})

const WrappedComposer = someDecorator(someOtherDecorator(Composer))
const MixinComposer = Composer2

class App extends React.Component {
  constructor(props) {
    super(props)
    this.callChildMethod = this.callChildMethod.bind(this)
  }

  callChildMethod() {
    console.log(this.refs)
    this.refs.composer.someStaticMethod(5)
  }

  render() {
    return (
      <div>
        <button onClick={this.callChildMethod}></button>
        <WrappedComposer ref="composer" />
      </div>
    )
  }
}

export default App
