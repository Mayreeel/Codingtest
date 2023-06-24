function solution(name, yearning, photo) {
    return photo.map(x=>x.reduce((acc,cur)=>name.findIndex(k => k == cur) === -1?acc:acc+yearning[name.findIndex(k => k == cur)],0));
}