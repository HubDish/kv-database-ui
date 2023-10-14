export const convertBytes = (bytes, perSecond = false) => {
    if (bytes >= 1024*1024*1024){
        if (perSecond){
            return (bytes/(1024*1024*1024)).toFixed(2) + ' GB/s'
        } else {
            return (bytes/(1024*1024*1024)).toFixed(2) + ' GB'
        }
    } else if (bytes >= 1024*1024){
        if (perSecond){
            return (bytes/(1024*1024)).toFixed(2) + ' MB/s'
        } else {
            return (bytes/(1024*1024)).toFixed(2) + ' MB'
        }
    } else if (bytes >= 1024){
        if (perSecond){
            return (bytes/(1024)).toFixed(2) + ' KB/s'
        } else {
            return (bytes/(1024)).toFixed(2) + ' KB'
        }
    } else {
        if (perSecond){
            return (bytes/(1024)).toFixed(2) + ' B/s'
        } else {
            return (bytes/(1024)).toFixed(2) + ' B'
        }
    }
}

export const convertTime = (time) => {
    const parts = time.split(':');

    const hours = parseInt(parts[0], 10);
    const minutes = parseInt(parts[1], 10);
    const [seconds, milliseconds] = parts[2].split('.').map(parseFloat);

    if (hours === 0){
        if (minutes === 0){
            if (seconds === 0){
                return (`${milliseconds} Millisecond(s)`); 
            }
            return (`${seconds} Second(s), ${milliseconds} Millisecond(s)`); 
        }
        return (`${minutes} Minute(s), ${seconds} Second(s), ${milliseconds} Millisecond(s)`); 
    }
    return (`${hours} Hour(s), ${minutes} Minute(s), ${seconds} Second(s), ${milliseconds} Millisecond(s)`); 
}