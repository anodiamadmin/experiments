const getFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}

const actualFullName = getFullName('James', 'Bond')
const expectedFullName = 'JamesBond'

if(actualFullName !== expectedFullName) {
    throw new Error(`${actualFullName} is not equal to ${expectedFullName}`)
}