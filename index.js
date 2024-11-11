const getFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}

const actualFullName = getFullName('Bruce', 'Wayne')
const expectedFullName = 'BruceWayne'

if(actualFullName !== expectedFullName) {
    throw new Error(`${actualFullName} is not equal to ${expectedFullName}`)
}