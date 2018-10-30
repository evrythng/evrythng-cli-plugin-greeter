/**
 * (c) Copyright Reserved EVRYTHNG Limited 2018.
 * All rights reserved. Use of this material is subject to license.
 */

module.exports = (api) => {
  // The standard command structure
  const newCommand = {
    about: 'Greet someone',
    firstArg: 'greet',
    operations: {
      greetSomeoneByName: {
        execute: ([name]) => console.log(`Hello there, ${name}!`),
        pattern: '$name',
      },
    },
  };

  // Register the new command
  api.registerCommand(newCommand);
};
