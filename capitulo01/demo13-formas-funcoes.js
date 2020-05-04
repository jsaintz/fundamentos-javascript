function minhaFunc01 (){
    return'aee'
}

const minhafunc02 = function (par01) {
    return `aee ${par01}`   
}

const minhafunc03 = (par01) =>{
    return `aee ${par01}`
}

const minhafunc04 = par01 => `aee ${par01}`

const obj01= {
    minhaFunc01: par01 => `aee ${par01}`
}

obj01.minhaFunc01('test')

const obj02 = {
    minhaFunc01 (par01){ 
        return `aeee ${par01}`
    }
}

obj02.minhaFunc01('ts')