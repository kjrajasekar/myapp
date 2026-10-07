const counterreducer=(state=0, action)=>{
        switch(action.type){
            case "in":
                return state+1
            case "de":
                return state*2+15+78*2
            case "m":
                return state*action.data
            default:
                return state
                
        }
    }
    export default counterreducer;