/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    if(!wordList.includes(endWord)) return [];
    let answer = [];
    let map = new Map();
    wordList.forEach(word=> map.set(word, true));
    if(!map.has(beginWord)) {
        map.set(beginWord, true);
        wordList.unshift(beginWord);
    }
    
    // 1. Construct a graph
    let graph = new Map();
    for(let word of wordList) {
        if(!graph.has(word)) {
            graph.set(word, new Node(word));
        }
        for(let ng of getNeighbors(map, word)) {
            let nd = graph.get(ng);
            if(!nd) {
                nd = new Node(ng);
                graph.set(ng, nd);
            }
            graph.get(word).neighbors.push(nd);
        }
    }
    
    // 2. Assign distance for each node from start node.
    let distance = -1;
    let q = [graph.get(beginWord)];
    while(q.length > 0) {
        let size = q.length;
        while(size--) {
            let curNode = q.shift();
            if(curNode.distance != -1) continue;
            curNode.distance = distance+1;
            for(let n of curNode.neighbors) {
                if(n.distance === -1) q.push(n);
            }
        }
        distance++;
    }
    
    console.log(graph);
    
    // 3. Construct all the paths
    let min = Infinity;
    let stack = [  [graph.get(beginWord), []]   ] ;
    while(stack.length > 0) {
        let [curNode, chain] = stack.pop();
        if(curNode.val === endWord) {
            min = Math.min(min, chain.length+1);
            answer.push([...chain, curNode.val]);
        }
        else {
            for(let nei of curNode.neighbors) {
                if(nei.distance > curNode.distance) {
                    stack.push([nei, [...chain, curNode.val]]);
                }
            }
        }
    }
    
    // 4. return only min sequences.
    answer = answer.filter(arr => arr.length === min);
    
    return answer; 
};

function getNeighbors(map, word) {
    let nei = []
    for(let i=0;i<word.length;i++) {
        for(let c of "abcdefghijklmnopqrstuvwxyz") {
            let nw = word.slice(0, i) + c + word.slice(i+1);
            if(map.has(nw) && word !== nw) {
                nei.push(nw);
            }
        }
    }
    
    return nei;
}

class Node {
    constructor(val) {
        this.val = val;
        this.neighbors = [];
        this.distance = -1;
    }
}
