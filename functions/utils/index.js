const utils = {

  push: (event) => {
    event.array.push(event.element)
    return event.array
  },
  split: (event) => {
    return event.string.split(event.separator)
  }
  
}

exports.handler = async function handler(event) {
  if (!event || !event.action || typeof utils[event.action] !== 'function') {
    return { error: 'The method property must be a valid and implemented method, please take a look at the readme.' }
  }

  return utils[event.action](event)
};
