export const checkObj = (data1,data2)=>{
    // if(data1.map((data)=>{
    //     if(data.id === data2.id) return true;
    // }))
    // return false;
    const index = data1.findIndex(data=> data.id === data2.id);
    if(index === -1) return false 
    return true
}

export const getIndex = (data1,data2)=>{
    const index = data1.findIndex(data=> data.id === data2.id);
    return index
}

export const findObjIndex = (id,data)=>{
    const index = data.findIndex((data)=>data.id === id);
    return index
}

export const findingPath = (string)=>{
    var pathName;
    if(string[0]==="m"){
        pathName = "/"+ string.substring(6,14);
    }
    else if(string[0]==="w"){
        pathName = "/"+ string.substring(8,16);
    }
    else pathName = "/"+string;
    return pathName;
}