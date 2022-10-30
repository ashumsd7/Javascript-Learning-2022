console.log("SCOPE CHAINING")


function a(){
    var b=10;
    
    c()

    function c(){
        console.log(b)
    }
}





a()

// console.log(b)


// https://www.notion.so/monkashu/Scope-Chaining-a619b6b0d2974ba8a80518136c20f572