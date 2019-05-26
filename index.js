// Write your solution in this file!
let driver = {}
const updateDriverWithKeyAndValue = (d,k,v)=>{
    return Object.assign({}, d, { [k]: v });
}

const destructivelyUpdateDriverWithKeyAndValue = (d,k,v)=>{
    d[k]=v
    return d
}

const deleteFromDriverByKey= (d,k)=>{
    const n=Object.assign({},driver)
    delete n[k]
    return n
}

const destructivelyDeleteFromDriverByKey = (d,k)=>{
    delete d[k]
    return d
}