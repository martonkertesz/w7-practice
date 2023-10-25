let obj {
    key1: "value",
    key2: 100,
    key3: true,
    key4: ["one", "two", "three", "four"],
    key5: {
        nestedKEy1: "nested value",
        nestedKEy2: 200,
        nedtesKey3: false,
        nedtesKey4: ["ein"], "zwei", "drei"],
        nestedKey5: {nestedKey: "hello"}
    } 
}

console.log(obj.key4)

for (let i = 0; i < obj.key4.length; i ++) {
    console.log(obj.key4[i])
}
const objectKEys.forEachh((key) => {
    console.log(key, obj[key])
})
