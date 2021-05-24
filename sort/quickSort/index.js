function getTagIndex(num) {
    return Math.floor(Math.random() * num);
};
function quick_sork(arr) {
    let tagIndex = getTagIndex(arr.length);
    sort(arr, tagIndex, 0, arr.length);
}

function sort(arr, tagIndex, lIndex, rIndex) {
    if (rIndex - lIndex < 1) {
        return;
    }
    let tagValue = arr[tagIndex];
    for (let i = lIndex, j = rIndex - 1;; i++, j--) {
        if (i !== tagIndex) {
            let leftValue = arr[i];
            if (leftValue > tagValue) {
                swap(arr, i, tagIndex);
            }
            tagIndex = i;
        }

        if (j !== tagIndex) {
            let rightValue = arr[j];
            if (rightValue < tagValue) {
                swap(arr, tagIndex, j);
            }

            tagIndex = j;
        }

        if (j <= tagIndex && i >= tagIndex ) {
            break;
        }
    }

    sort(arr, getTagIndex((lIndex + tagIndex) / 2), lIndex, tagIndex);
    sort(arr, getTagIndex((rIndex + tagIndex) / 2), tagIndex, rIndex);
}

function swap(arr, leftIndex, rightIndex) {
    let temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
}