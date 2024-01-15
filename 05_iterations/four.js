//for-in loop for object 

const myObj = {
    js: 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for (const key in myObj) {
    // console.log(`${key} shotcut for ${myObj[key]}`);
    }

    //what for-in loop work for array to

    const programming = ["js", "rb", "py", "java"]
    for (const key in programming) {
        console.log(programming[key]);
            
        }

        //map on for-in loop is not valid
        // const map = new Map()
        
        
        const map = new Map()
        map.set('IN', "India")
        map.set('USA', "United States of America")
        map.set('Fr', "France")
        map.set('IN', "India")

        for (const key in map) {
            console.log(map[key]);
        }