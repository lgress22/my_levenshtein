         
         
         //      ""  a  b  c
        //    ""  0  1  2  3
        //    d   1  1  2  3
        //    b   2  2  1  3
        //    c   3  3  2  2



        function my_levenshtein(str1, str2){
            let i = 0;
            let count = 0;
            if(str1[i] !== str2[i]){
                count--
                return -1
            }
        while (i < str1.length){
            if (str1[i] != str2[i]){
                count ++;
                 //console.log('count--->',count)
                 //console.log("i--->",i)
            
          }
        i++
        }return count
    
    }
        //console.log(my_levenshtein('abcdef','dbc'))