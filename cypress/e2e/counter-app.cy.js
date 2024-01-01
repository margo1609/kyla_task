import { CounterAppPage } from '../pages/counter-app.po'

const counter = new CounterAppPage()

describe('Check counter app', () => {
  before(() => {
    Cypress.session.clearAllSavedSessions()
    cy.visit('http://localhost:3000/')
  })

  it('should be able to have title', () => {
    counter.verifyTitle()
  })

  it('should be able to have "10" as a default counter value', () => {
    counter.verifyTotalCounterValue('10')
  })

  it('should be able to increment total counter value by clicking "+1" button', () => {
    counter.incrementNumber()
    counter.verifyTotalCounterValue('11')
  })

  it('should be able to have "10" total counter value by clicking "Reset" button', () => {
    counter.resetCounter()
    counter.verifyTotalCounterValue('10')
  })

  it('should be able to decrement total counter value by clicking "+1" button', () => {
    Cypress._.times(11, () => {
      counter.decrementNumber()
    })
    counter.verifyTotalCounterValue('-1')
  })

  after(() => {
    cy.log('All tests have finished. Closing the browser.');
    cy.window().then((win) => win.close());
  })
})