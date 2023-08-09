function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const currentElement = arr[i];
        let j = i - 1;
        
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = currentElement;
    }
}

// Example usage
const myArray = [5, 2, 8, 1, 3];
insertionSort(myArray);
console.log(myArray);  // Output: [1, 2, 3, 5, 8]
