// Sort and Search
function ArrayList(){
    let array = [];
    this.insert = function(item){
        array.push(item);
    };
    this.toString = function(){
        return array.join();
    };
    const swap = function(index1, index2){
        let tmp = array[index1];
        array[index1] = array[index2];
        array[index2] = tmp;
    };
    // Time Complexity: O(n2) to O(n)
    // Space Complexity: θ(1)
    this.bubbleSort = function(){
        let flag = true;
        for(let i = 0; i < array.length - 1 && flag; i++){
            flag = false;
            for(let j = 0; j < array.length - i - 1; j++){
                if(array[j] < array[j + 1]){
                    swap(j, j + 1);
                    flag = true;
                }
            }
        }
    };
    // Time Complexity: O(n2) to O(n2)
    // Space Complexity: θ(1)
    this.selectionSort = function(){
        let indexMin;
        for(let i = 0; i < array.length - 1; i++){
            indexMin = i;
            for(let j = i; j < array.length; j++){
                if(array[indexMin] > array[j]){
                    indexMin = j;
                }
            }
            if(i !== indexMin){
                swap(i, indexMin);
            }
        }
    };
    // Time Complexity: O(n2) to O(1)
    // Space Complexity: θ(1)
    this.insertionSort = function(){
        let j;
        let temp;
        for(let i = 1; i < array.length; i++){
            j = i;
            temp = array[i];
            while(j > 0 && array[j - 1] > temp){
                array[j] = array[j - 1];
                j--;
            }
            array[j] = temp;
        }
    };
    // Time Complexity: O(nlogn) to O(nlogn)
    // Space Complexity: θ(n)
    this.mergeSort = function(){
        array = mergeSortRec(array);
    };
    const mergeSortRec = function(array){
        const length = array.length;
        if(length === 1){
            return array;
        }
        const mid = Math.floor(length / 2);
        const left = array.slice(0, mid);
        const right = array.slice(mid, length);
        return merge(mergeSortRec(left), mergeSortRec(right));
    };
    const merge = function(left, right){
        const result = [];
        let il = 0;
        let ir = 0;
        while(il < left.length && ir < right.length){
            if(left[il] < right[ir]){
                result.push(left[il++]);
            }
            else{
                result.push(right[ir++]);
            }
        }

        while(il < left.length){
            result.push(left[il++]);
        }

        while(ir < right.length){
            result.push(right[ir++]);
        }

        return result;
    };
    // Time Complexity: O(n2) to O(nlogn)
    // Space Complexity: θ(logn) to θ(n)
    this.quickSort = function(){
        quick(array, 0, array.length - 1);
    };
    const quick = function(array, left, right){
        let index;
        if(array.length > 1){
            index = partition(array, left, right);
        }
    };
    const partition = function(array, left, right){
        const pivot = array[Math.floor((right + left) / 2)];
        let i = left;
        let j = right;
        while(i <= j){
            while(array[i] < pivot){
                i++;
            }
            while(array[j] > pivot){
                j--;
            }
            if(i <= j){
                swapQuickSort(array, i, j);
                i++;
                j--;
            }
        }
        return i;
    };
    const swapQuickSort = function(array, index1, index2){
        const tmp = array[index1];
        array[index1] = array[index2];
        array[index2] = tmp;
    };
    this.sequentialSearch = function(item){
        for(let i = 0; i < array.length; i++){
            if(item === array[i]){
                return i;
            }
        }
        return -1;
    };
    this.binarySearch = function(){
        this.quickSort();
        let low = 0;
        let high = array.length;
        let mid;
        let element;
        while(low <= high){
            mid = Math.floor((low + high) / 2);
            element = array[mid];
            if(element < item){
                low = mid + 1;
            }
            else if(element > item){
                high = mid - 1;
            }
            else{
                return mid;
            }
        }
        return -1;
    };
}