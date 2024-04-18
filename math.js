function sub(a,b){
    return a-b
}

function multi(a,b){
    return a*b
}

// export in CJS

// module.exports = sub; //if we have to export single function

module.exports = {
    sub,
    multi
}
