function data2tray(stt, time) {
    var tray = {};
    stt.map((val, id) => {
        tray[id] = {
            stt: val,
            time: time[id]
        }
    })
    return tray
}

function editTray(tray, stt) {
    const t = Date.now();
    if (!tray) {
        tray = {};
        stt.map((val, id) => {
            tray[id].stt = val;
            tray[id].time = t;
        })
    } else {
        stt.map((val, id) => {
            if (val && !tray[id].stt) tray[id].time = t;
            tray[id].stt = val;
        })
    }
    return tray
}

function settingMode(mode, time) {
    this.mode = mode;
    if (mode != 0) this.time = time;
}

module.exports = {
    data2tray,
    editTray,
    settingMode
};