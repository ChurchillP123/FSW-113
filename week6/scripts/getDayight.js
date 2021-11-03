// This script should return the results of a function that use data from the api to determine whether it 
// is daylight in the specified city. It should return "blue" if daylight, and "black" if night time.

export default function dayOrNight(data) {
    return data.dt >= data.sys.sunrise ? (data.dt < data.sys.sunset ? 'blue' : 'black') : 'black';
}