function genDiff(file1, file2) {
    let result = '{ \n'
    const filesKeysSortedArray = Object.keys({...file1, ...file2}).sort()
    filesKeysSortedArray.forEach(key => {
        // use hasOwnProperty
        if(file1[key] !== undefined && file2[key] === undefined) {
            result += `-  ${key}: ${file1[key]} \n`
            return
        }
        if(file1[key] === undefined && file2[key] !== undefined) {
            result += `+  ${key}: ${file2[key]} \n`
            return
        }
        if(file1[key] === file2[key]) {
            result += `   ${key}: ${file1[key]} \n`
            return
        }
        if(file1[key] !== file2[key]) {
            result += `-  ${key}: ${file1[key]} \n+  ${key}: ${file2[key]} \n`
            return
        }
    })
    console.log('result ===> ', result)
}

module.exports = genDiff
