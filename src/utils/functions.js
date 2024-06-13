export const checkObj = (data1,data2)=>{
    if(data1.map((data)=>{
        if(data.id === data2.id) return true;
    }))
    return false;
}

export const getIndex = (data1,data2)=>{
    if(data1.map((data,index)=>{
        if(data.id === data2.id) return index;
    }))
    return 0;
}