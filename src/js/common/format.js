export default function formatTime(duration) {
    var minute = ~~(duration / 60),
        second = duration - minute * 60;
    if (minute < 10) {
        minute = '0' + minute;
    }
    if (second < 10) {
        second = '0' + second;
    }
    return minute + ':' + second;
}