public class Solution {
    public int[][] Insert(int[][] intervals, int[] newInterval) {
        var result = new List<int[]>();
        
        // 1. Insert the new interval in its appropriate position.
        var tempList = new List<(int start, int end)>();
        foreach(var interval in intervals) {
            if(newInterval[0] < interval[0]) {
                tempList.Add((newInterval[0], newInterval[1]));
            }
            tempList.Add((interval[0], interval[1]));
        }
        
        if(tempList.Count == 0 || tempList.Count == intervals.Length) {
            tempList.Add((newInterval[0], newInterval[1]));
        }
        
        //[1,2],[3,5],   [4,8],   [6,7],[8,10],[12,16]
        // 2. Perform merging on that list.
        var linkedList = new LinkedList<(int start, int end)>(tempList);
        var temp = linkedList.First;
        while(temp != null ) {
            var cur = temp.Value;
            
            while(temp.Next != null) {
                var next = temp.Next.Value;
                if(next.start <= cur.end) {
                    // merging....
                    cur.end = Math.Max(next.end, cur.end);
                    temp = temp.Next;
                }
                else {
                    break;
                }
            }
            result.Add(new []{cur.start, cur.end});
            
            temp = temp.Next;
        }
        
        return result.ToArray();
    }
}
