function getTagIndex(num) {
    return Math.floor(Math.random() * num);
};
function quick_sork(arr) {
    // debugger
    sort(arr, 0, arr.length);
}

function sort(arr, lIndex, rIndex) {
    let tagIndex = getTagIndex((lIndex + rIndex) / 2);
    if (rIndex - lIndex <= 1) {
        return;
    }
    let tagValue = arr[tagIndex];
    for (let i = lIndex, j = rIndex - 1; ;) {
        if (i < tagIndex) {
            let leftValue = arr[i];
            if (leftValue > tagValue) {
                swap(arr, i, tagIndex);
                tagIndex = i;
                i++;
            } else {
                i++;
                continue;
            }
        }

        if (j > tagIndex) {
            let rightValue = arr[j];
            if (rightValue < tagValue) {
                swap(arr, tagIndex, j);
                tagIndex = j;
                j--;
            } else {
                j--;
                continue;
            }
        }

        if (j <= tagIndex && i >= tagIndex || (i >= rIndex && j <= lIndex)) {
            break;
        }
    }

    sort(arr, lIndex, tagIndex);
    sort(arr, tagIndex + 1, rIndex);
}

function swap(arr, leftIndex, rightIndex) {
    let temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
}