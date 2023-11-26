document.addEventListener('DOMContentLoaded', function () {
    var ctxWeekday = document.getElementById('weekdaySchedule').getContext('2d');
    var weekdayChart = new Chart(ctxWeekday, {
        type: 'pie',
        data: {
            labels: ['睡眠 (0:00-7:00)', '農作業 (7:30-9:00)', '朝食 (9:00-9:30)', '本業 (9:30-19:00)', '自由時間 (19:00-20:00)', '夕食・交流 (20:00-24:00)'],
            datasets: [{
                label: '平日のスケジュール',
                data: [7, 1.5, 0.5, 9.5, 1, 4],
                backgroundColor: ['blue', 'green', 'orange', 'red', 'purple', 'yellow'],
                borderColor: ['white', 'white', 'white', 'white', 'white', 'white'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 10,
                    padding: 20,
                    fontSize: 11,
                    fontStyle: 'normal',
                    fontColor: '#000',
                    usePointStyle: true
                }
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        var label = data.labels[tooltipItem.index];
                        var value = data.datasets[0].data[tooltipItem.index];
                        return label + ': ' + value + '時間';
                    }
                }
            }
        }
    });

    var ctxWeekend = document.getElementById('weekendSchedule').getContext('2d');
    var weekendChart = new Chart(ctxWeekend, {
        type: 'pie',
        data: {
            labels: ['睡眠 (0:00-7:00)', '農作業 (7:30-9:00)', '朝食 (9:00-9:30)', 'イベント (9:30-19:00)', '自由時間 (19:00-20:00)', '夕食・交流 (20:00-24:00)'],
            datasets: [{
                label: '週末のスケジュール',
                data: [7, 1.5, 0.5, 9.5, 1, 4],
                backgroundColor: ['blue', 'green', 'orange', 'red', 'purple', 'yellow'],
                borderColor: ['white', 'white', 'white', 'white', 'white', 'white'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 10,
                    padding: 20,
                    fontSize: 11,
                    fontStyle: 'normal',
                    fontColor: '#000',
                    usePointStyle: true
                }
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        var label = data.labels[tooltipItem.index];
                        var value = data.datasets[0].data[tooltipItem.index];
                        return label + ': ' + value + '時間';
                    }
                }
            }
        }
    });
});
