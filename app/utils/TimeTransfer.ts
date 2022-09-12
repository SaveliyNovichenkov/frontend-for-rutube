export const getTimeFromMins = (min:number, seconds: number) => {
    let secondsFunc = (seconds: number) => {
        if (seconds < 10) {
            return "0" + seconds
        } return seconds
    }
    let hours = Math.trunc(min/60);
    let minutes = min % 60;
    if(hours) {
        return hours + ":" + minutes + ":" + secondsFunc(seconds)
    }
    return minutes + ":" + secondsFunc(seconds) + " мин";
};


export const SecondsToNormalTime = (sec: number) => {
    let hours = Math.floor(sec / 60 / 60);
    let minutes = Math.floor(sec / 60) - (hours * 60);
    let seconds = Math.floor(sec % 60);
    let secondsFunc = (seconds: number) => {
        if (seconds < 10) {
            return "0" + seconds
        } return seconds
    }
    let minutesFunc = (minutes: number) => {
        if (minutes < 10) {
            return "0" + minutes
        } return minutes
    }
    let hoursFunc = (hours: number) => {
        if (!hours) {
            return ""
        } return hours + ":"
    }

    return hoursFunc(hours) + "" + minutesFunc(minutes) + ":" + secondsFunc(seconds)
}
