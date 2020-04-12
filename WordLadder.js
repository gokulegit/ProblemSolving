/**
 * https://leetcode.com/problems/word-ladder/
 */

var ladderLength = function (beginWord, endWord, wordList) {

    let table = {};
    wordList.map(word => table[word] = true);

    let q = [[beginWord, 1]];

    while (q.length > 0) {

        let [word, len] = q.shift();

        for (let i = 0; i < word.length; i++) {
            for (let c of "abcdefghijklmnopqrstuvwxyz") {
                let adjw = word.slice(0, i) + c + word.slice(i + 1);
                if (table.hasOwnProperty(adjw)) {
                    if (adjw == endWord) return len + 1;
                    q.push([adjw, len + 1]);
                    delete table[adjw];
                }
            }
        }

    }

    return 0;

};