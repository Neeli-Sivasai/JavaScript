
let a = {}
a = {
    name : 'VisualStudio Code',
    parent : 'Microsoft',
    properties : {
        type : 'Code editor',
        supports : 'C, c++, Python'
        
    }
}

for(let key in a){
    console.log(key, a[key])
}