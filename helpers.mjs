export const connectToDatabase = () => {
    const dummyPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved")
        }, 1000)
    })
    return dummyPromise
}