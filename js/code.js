if (localStorage.getItem('Quiz') == undefined) {
    const quest = [
        // ['オーストWhaリアの首都は？', 'ウィーン', 'ロマ', 'プラハ', 1],
        // ['日本の首都は？', 'ソウル', 'ドバイ', '東京', 3],
        // ['エチオピアの首都は？', 'ラゴス', 'アディスアベバ', 'ニューヨーク', 2],
        [`What's the capital of Austria?`, `Vienna`, `Prague`, `Budapest`, 1],
        [`What's the capital of Japan?`, `Seoul`, `Osaka`, `Tokyo`, 3],
        [`What's the capital of Thailand?`, `Khon Khaen`, `Bangkok`, `Hanoi`, 2]
    ];
    let strqna = JSON.stringify(quest);
    localStorage.setItem('Quiz', strqna)
};

let i = 0;
let score = 0;
let objqna = JSON.parse(localStorage.getItem('Quiz'));

function q(i) {
    $('#q').text(objqna[i][0]);
    $('#ans1').text(objqna[i][1]);
    $('#ans2').text(objqna[i][2]);
    $('#ans3').text(objqna[i][3]);
};
q(i);

$('[name=ans]').on('click', function() {
    if ($(this).val() == objqna[i][4]) {
        alert('Correct');
        score++;
    } else {
        alert('Wrong!');
    }
    $('#score').text(`You've got ${score} out of ${objqna.length} correct`);
    i++;
    if (i < objqna.length) {
        q(i);
    } else {
        $('main').hide(200);
        // setTimeout(function() {
        //             alert(`You got ${score} out of ${objqna.length} correct`);
        //         }, 500);
        $('aside').show(200);
    }
});



$('#submit').on('click', function() {
    var qu = $('#Question').val();
    var an1 = $('#Answer1').val();
    var an2 = $('#Answer2').val();
    var an3 = $('#Answer3').val();
    var co = $('#Correct').val();

    objqna.push([qu, an1, an2, an3, co]);
    let nstr = JSON.stringify(objqna);
    localStorage.setItem('Quiz', nstr);
    alert('New Question Registered.')
});

$('#again').on('click', function() {
    i = 0;
    score = 0;
    $('main').show(1000);
    $('aside').hide(1000)
});