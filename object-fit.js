function fit(contains = true){
    return function(containerWidth, containerHeight, width, height){
        let doRatio = width / height;
        let cRatio = containerWidth / containerHeight;
        let targetWidth = 0;
        let targetHeight = 0;
        let test = contains ? (doRatio > cRatio) : (doRatio < cRatio);

        if (test) {
            targetWidth = containerWidth;
            targetHeight = targetWidth / doRatio;
        } else {
            targetHeight = containerHeight;
            targetWidth = targetHeight * doRatio;
        }

        return {
            width: targetWidth,
            height: targetHeight,
            x: (containerWidth - targetWidth) / 2,
            y: (containerHeight - targetHeight) / 2
        };
    }
}

export let contain = fit(true);
export let cover = fit(false);

export default {
    contain : contain,
    cover : cover
};