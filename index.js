console.log('From index.js')

const BUY_CAKE = 'BUY_CAKE'


function buyCake(){
    return {
        type:BUY_CAKE,
        info:'First react action'
    }
}

const initialState = {
    
}