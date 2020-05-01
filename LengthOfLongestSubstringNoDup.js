/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    function method1(s) {
        let mx = 0;

        for (let i = 0; i < s.length; i++) {
            for (let j = i; j < s.length; j++) {
                let set = new Set();
                for (let k = i; k <= j; k++) {
                    if (!set.has(s[k])) {
                        set.add(s[k]);
                        mx = Math.max(mx, set.size);
                    }
                    else break;
                }
            }
        }

        return mx;
    }

    function method2(s) {
        let mx = 0;
        let i = 0, j = 0;
        let set = new Set();
        while (i < s.length && j < s.length) {
            if (set.has(s[j])) {
                set.delete(s[i++])
            }
            else {
                set.add(s[j]);
                mx = Math.max(mx, j - i + 1);
                j++;
            }
        }

        return mx;
    }

    function method3(s) {
        let mx = 0;
        let map = new Map();
        let i = 0, j = 0;
        while (j < s.length) {
            if (map.has(s[j])) {
                i = Math.max(i, map.get(s[j]));
            }
            map.set(s[j], j + 1);
            mx = Math.max(mx, j - i + 1);
            j++;
        }

        return mx;
    }

    return method3(s);
};
