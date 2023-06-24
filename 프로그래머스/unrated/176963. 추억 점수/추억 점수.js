function solution(name, yearning, photo) {
    let arr = [...yearning];
    for (let i = 0; i < name.length - yearning.length; i++){
        arr.push(0);
    }
    return photo.map(x=>x.reduce((acc,cur)=>name.findIndex(k => k == cur) === -1?acc:acc+yearning[name.findIndex(k => k == cur)],0));
}