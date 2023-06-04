mobiscroll.setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

var calendar = mobiscroll.eventcalendar('#demo-day-work-week-view', {
    view: {
        timeline: {
            type: 'week'
        }
    },
    resources: [{
        id: 1,
        name: 'Ryan',
        color: '#ff0101',
        title: 'Cloud System Engineer',
        img: 'https://img.mobiscroll.com/demos/m1.png'
    }, {
        id: 2,
        name: 'Kate',
        color: '#239a21',
        title: 'Help Desk Specialist',
        img: 'https://img.mobiscroll.com/demos/f1.png'
    }, {
        id: 3,
        name: 'John',
        color: '#8f1ed6',
        title: 'Application Developer',
        img: 'https://img.mobiscroll.com/demos/m2.png'
    }, {
        id: 4,
        name: 'Mark',
        color: '#01adff',
        title: 'Network Administrator',
        img: 'https://img.mobiscroll.com/demos/m3.png'
    }, {
        id: 5,
        name: 'Sharon',
        color: '#d8ca1a',
        title: 'Data Quality Manager',
        img: 'https://img.mobiscroll.com/demos/f2.png'
    }],
    renderResource: function (resource) {
        return '<div class="md-work-week-cont">' +
            '<div class="md-work-week-name">' + resource.name + '</div>' +
            '<div class="md-work-week-title">' + resource.title + '</div>' +
            '<img class="md-work-week-avatar" src="' + resource.img + '"/>' +
            '</div>';
    },
    renderHeader: function () {
        return '<div mbsc-calendar-nav class="md-work-week-nav"></div>' +
            '<div class="md-work-week-picker">' +
            '<label>Day<input mbsc-segmented type="radio" name="view" value="day" class="md-view-change"></label>' +
            '<label>Work week<input mbsc-segmented type="radio" name="view" value="workweek" class="md-view-change"></label>' +
            '<label>Week<input mbsc-segmented type="radio" name="view" value="week" class="md-view-change" checked></label>' +
            '</div>' +
            '<div mbsc-calendar-prev class="md-work-week-prev"></div>' +
            '<div mbsc-calendar-today class="md-work-week-today"></div>' +
            '<div mbsc-calendar-next class="md-work-week-next"></div>';
    },
    invalid: [{
        start: '00:00',
        end: '06:00',
        recurring: {
            repeat: 'weekly',
            weekDays: 'MO,TU,WE,TH,FR'
        }
    }, {
        start: '20:00',
        end: '23:59',
        recurring: {
            repeat: 'weekly',
            weekDays: 'MO,TU,WE,TH,FR'
        }
    }, {
        recurring: {
            repeat: 'weekly',
            weekDays: 'SA,SU'
        }
    }],
    onEventCreateFailed: function () {
        mobiscroll.toast({
            message: 'Can\'t schedule outside of working hours'
        });
    },
    onEventUpdateFailed: function () {
        mobiscroll.toast({
            message: 'Can\'t schedule outside of working hours'
        });
    }
});

document.querySelectorAll('.md-view-change').forEach(function (elm) {
    elm.addEventListener('change', function (ev) {
        switch (ev.target.value) {
            case 'day':
                calendar.setOptions({
                    view: {
                        timeline: { type: 'day' }
                    }
                })
                break;
            case 'workweek':
                calendar.setOptions({
                    view: {
                        timeline: {
                            type: 'week',
                            startDay: 1,
                            endDay: 5
                        }
                    }
                })
                break;
            case 'week':
                calendar.setOptions({
                    view: {
                        timeline: {
                            type: 'week'
                        }
                    }
                })
                break;
        }
    });
});

mobiscroll.util.http.getJson('https://trial.mobiscroll.com/timeline-events/', function (events) {
    calendar.setEvents(events);
}, 'jsonp');