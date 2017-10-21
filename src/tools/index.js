
//函数工具
let tools = {
    isDataNull(obj, dataType, url){
        if(!obj.$store.state[dataType]){
            obj.$store.dispatch('getData', {
                type: dataType,
                url: url
            });
            return true
        }
        return false
    }
}

export default tools