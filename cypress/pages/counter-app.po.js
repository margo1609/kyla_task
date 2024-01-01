import { counterAppConst } from '../constants/counter-app'

export class CounterAppPage {
  title = '#app h1'
  totalCounter = '#app h2'
  buttons = '#app button'

  verifyTitle() {
    cy.get(this.title)
    .should('be.visible')
    .invoke('text')
    .then(text => expect(text).to.be.eq(counterAppConst.counterApp))
  }

  verifyTotalCounterValue(value) {
    cy.get(this.totalCounter)
    .should('be.visible')
    .invoke('text')
    .then(text => expect(text.trim()).to.be.eq(value))
  }
  
  incrementNumber() {
    cy.get(this.buttons).contains(counterAppConst.plusOneBtn).click()
  }

  decrementNumber() {
    cy.get(this.buttons).contains(counterAppConst.minusOneBtn).click()
  }

  resetCounter() {
    cy.get(this.buttons).contains(counterAppConst.resetBtn).click()
  }
}