
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
        obj.$store.commit('CURRENTDATA', {
            type: dataType,
            url: url
        });
        return false
    },
    upDate(obj, datas){
        datas = datas || obj.$store.state.showData ;
        if (!obj.$store.state.upDateFlag){
            obj.$store.commit('TFLAG');
            for (var data of datas){
                obj.$store.dispatch('getData', {
                    type: data.dataType,
                    url: data.url
                });
            }
            setTimeout(function(){
                obj.$store.commit('FFLAG');
            }, 10000);
        }
    },
    scrTop(initH, direction, className){
        return stretch(initH, direction, className);
    },
    scrBottom(initH, direction, className){
        direction = direction || -1 ;
        if(direction > 0) direction = -direction ;
        return stretch(initH, direction, className);
    }
}

export default tools

//移动端页面拖拽拉伸效果
function stretch(initH, direction, className){
    initH = initH || 0 ;
    direction = direction || 1 ;
    if (direction == 0) return 0 ;
    className = className || 'upDate' ;
    className = className + parseInt(direction) + '_' + parseInt((direction % 1)*100) ;
    if(!document.querySelector('.' + className)){
        var upDate = document.createElement('div'),
            html =  document.documentElement;
        upDate.style.clear = 'both' ;
        var clearEl = upDate.cloneNode();
        upDate.className = className ;
        upDate.style.backgroundColor = 'red' ;
        upDate.style.transition = 'height .5s';
        upDate.style.height = initH + 'px';
        if(direction > 0) document.body.insertBefore(upDate, document.body.firstChild) ;
        if(direction < 0) document.body.appendChild(upDate) ;
        document.body.insertBefore(clearEl, upDate) ;
        var h = 0, flag = false, h0 = 0;
        html.addEventListener('touchmove', (e) => {
            if(upDate.offsetTop != html.scrollHeight && direction < 0 && !h) clearEl.style.height = html.scrollHeight - upDate.offsetTop + 'px';
            console.log(html.scrollHeight, upDate.offsetTop);
            if(direction > 0) flag = html.scrollTop == 0 ;
            if(direction < 0) flag = html.scrollTop + html.clientHeight == html.scrollHeight;
            e = e || window.event ;
            if(!h) h0 = e.touches[0].screenY ;
            if(flag || h) h = e.touches[0].screenY ;
            if(h) upDate.style.height = Math.abs(h - h0) + initH + 'px';
            if(Math.abs(h - h0) > 100 * Math.abs(direction) && h) upDate.style.height = 100  * Math.abs(direction) + initH + 'px';
        }, false);
        html.addEventListener('touchend', () => {
            setTimeout(function(){
                upDate.style.height = initH + 'px';
            }, 1000)
            setTimeout(function(){
                clearEl.style.height = '0px';
            }, 1500)
            h = h0 = 0 ;
        }, false)
    }
    return document.querySelector('.' + className).offsetHeight - initH ;
}