Cypress.Commands.add("the", testSelector =>
  cy.get(`[data-test-${testSelector}]`)
);
Cypress.Commands.add("clickThe", testSelector => {
  cy.get(`[data-test-${testSelector}]`).click();
});
Cypress.Commands.add("clickTheFirst", testSelector => {
  cy.get(`[data-test-${testSelector}]`)
    .eq(0)
    .click();
});
Cypress.Commands.add("theFirst", testSelector =>
  cy.get(`[data-test-${testSelector}]`).eq(0)
);
Cypress.Commands.add("fillOutThe", testSelector =>
  cy.get(`[data-test-${testSelector}]`)
);
Cypress.Commands.add("with", { prevSubject: true }, (form, formData) => {
  cy.wrap(Object.keys(formData)).each(key => {
    cy.get(form)
      .find(`[name=${key}]`)
      .type(formData[key]);
  });
  cy.get(form).submit();
});
Cypress.Commands.add("getStore", () => {
  return cy.window().its("app.__vue__.$store");
});
Cypress.Commands.add(
  "dispatch",
  { prevSubject: true },
  (store, methodToDispatch, ...dispatchArguments) => {
    return store.dispatch(methodToDispatch, ...dispatchArguments);
  }
);
Cypress.Commands.add(
  "commit",
  { prevSubject: true },
  (store, methodToCommit, ...commitArguments) => {
    return store.commit(methodToCommit, ...commitArguments);
  }
);
Cypress.Commands.add(
  "setState",
  { prevSubject: true },
  (store, property, value) => {
    store.state[property] = value;
    return value;
  }
);
Cypress.Commands.add(
  "getState",
  { prevSubject: true },
  (store, property) => {
    return store.state[property];
  }
);