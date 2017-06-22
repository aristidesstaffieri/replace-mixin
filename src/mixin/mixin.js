import React from 'react'

export const someMixin = {
  getInitialState() {
    return {
      newNumber: 1
    }
  },

  setNewNumber(num) {
    this.setState({
      newNumber: num
    })
  }
}

export const someOtherMixin = {
  someMethod(number) {
    console.log(number)
  }
}
