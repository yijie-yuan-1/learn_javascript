f = x => x*x;
console.log(f(3));

g = x =>{
    return x*x;
}
console.log(g(3));

var obj = {
    birth: 1997,
    age: function () {
        var b = this.birth; 
        var fn = () => new Date().getFullYear() - this.birth; // this指向obj对象
        return fn();
    }
};
console.log(obj.age()); 