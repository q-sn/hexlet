const time = (minutes) => {
    let hours = minutes / 60 >> 0;
    minutes = minutes % 60;

    return `${hours >= 10 ? hours : '0' + hours}:${minutes >= 10 ? minutes : '0' + minutes}`;
};

export default time;
