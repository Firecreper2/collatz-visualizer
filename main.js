function calc(num) {
    if (num % 2 == 1) {
        return 3 * num + 1
    } else {
        return num / 2
    }
}
function generate(e){
    let data = e
    let graph = {
        x: [],
        y: []
    }
    let iteration = 0
    while(data != 1){
        graph.x.push(iteration)
        graph.y.push(data)
        data = calc(data)
        iteration++
        if(iteration == 1000){
            break
        }
    }
    genData(graph)
    Plotly.newPlot('graph',[graph])
    console.log(graph)
}
function genData(graph){
    let iterations = document.getElementById("iterations")
    let highest = document.getElementById("highest")
    let initial = document.getElementById("initial")
    let highestnum = 0
    initial.innerText = "Initial Value: "+graph.y[0]
    iterations.innerText = "Iterations: "+graph.x.length
    for(i in graph.y){
        if(graph.y[i] > highestnum) highestnum = graph.y[i]
    }
    highest.innerText = "Highest number: "+highestnum
}
addEventListener('keydown', (e)=>{
    if(e.key == "g"){
        let info = prompt("generate collatz conjecture")
        if(isNaN(info)){
            alert("thats not a number")
            return
        }
        generate(info)
    }
})