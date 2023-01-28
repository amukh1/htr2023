

function analyze() {
    for(var ji = 1; ji<=3; ji++) {
    document.getElementById(`con${ji}`).innerHTML = ''
    }
    let code = document.getElementById('code').value
    console.log(code)
    let algorithm = eval(code)
    console.log(algorithm)
// let algorithm = (x) => x*x // graph 1

let graph1 = algorithm

let graph2 = derivative(algorithm)

function differentiate(fn, x) {
    return (fn(x + 0.001) - fn(x))/0.001
}

function derivative(fn) {
    return (x) => differentiate(fn, x)
}

// console.log(algorithm(3))
// console.log(derivative(algorithm)(3))

// console.log(p5)
let sketch = function(p) {
    p.setup = function(){
      p.createCanvas(500, 250);
      p.background(0);
      p.stroke(141, 141, 245)
      p.strokeWeight(10)
      p.graph = (x,y) => {
        p.point((0) + x, (p.height) - y)
      }
    //   p.graph(100,10)
      for(var j = 0; j < 500; j+=0.1) {
        p.graph(j, graph1(j))
      }
    }
};

let sketch2 = function(p) {
    p.setup = function(){
      p.createCanvas(500, 250);
      p.background(0);
      p.stroke(141, 141, 245)
      p.strokeWeight(10)
      p.graph = (x,y) => {
        p.point((0) + x, (p.height) - y)
      }
      for(var j = 0; j < 500; j+=0.1) {
        p.graph(j, graph2(j))
      }
    }
};

let sketch3 = function(p) {
    p.setup = function(){
      p.createCanvas(500, 250);
      p.background(0);
      p.stroke(141, 141, 245)
      p.strokeWeight(10)
      p.graph = (x,y) => {
        p.point((0) + x, (p.height) - y)
      }
    //   p.graph(100,10)
    }
};

new p5(sketch, window.document.getElementById('con1'));
new p5(sketch2, window.document.getElementById('con2'));
new p5(sketch3, window.document.getElementById('con3'));

}