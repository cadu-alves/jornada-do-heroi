var ctx = document.getElementById('myChart').getContext('2d');
class ChartOptions {
    constructor(title, subtitle, text, img){
        this.title = title;
        this.subtitle = subtitle;
        this.text = text; 
        this.img = img;
    }
}

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: [
            'Passo 01', 
            'Passo 02', 
            'Passo 03', 
            'Passo 04', 
            'Passo 05', 
            'Passo 06', 
            'Passo 07',
            'Passo 08',
            'Passo 09',
            'Passo 10',
            'Passo 11',
            'Passo 12'
        ],
        datasets: [{
            label: 'My First dataset',
            data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            borderColor: '#fff',
            borderWidth: 5,
            backgroundColor: [
                '#4a509c', //cor do passo 01
                '#4a509c', //cor do passo 02
                '#4a509c', //cor do passo 03
                '#4a509c', //cor do passo 04

                '#45af80', //cor do passo 05
                '#45af80', //cor do passo 06
                '#45af80', //cor do passo 07
                '#45af80', //cor do passo 08
                '#45af80', //cor do passo 09

                '#db3c64', //cor do passo 10
                '#db3c64', //cor do passo 11
                '#db3c64'  //cor do passo 12
            ],
        }]
    },

    // Configuration options go here
    options: {
        // ========== Tira a tooltip do hover
        tooltips: {
          enabled: false,
        },

        // ========== Onhover => Cursor: pointer
        legend: {
            onHover: function(e) {
               e.target.style.cursor = 'pointer';
            }
        },
        hover: {
            onHover: function(e) {
                var point = this.getElementAtEvent(e);
                if (point.length) e.target.style.cursor = 'pointer';
                else e.target.style.cursor = 'default';
            }
        },
        legend: {
            display: false,
        },
        cutoutPercentage: 90,
    }
});










$("#myChart").click(function(evt){
        var activePoints = chart.getElementAtEvent(evt);           
        if(activePoints.length > 0){
            let index = activePoints[0]._index;
            $('#title').text(optionsArray[index].title);
            $('#subtitle').text(optionsArray[index].subtitle);
            $('#redacao').text(optionsArray[index].text);
            //console.log('Logando o Url: ' + optionsArray[index].img);
            $('.donut canvas').css('background-image',"url(" + optionsArray[index].img + ")");
        }
	    console.log(activePoints);
    }
);

const optionsArray = [
    new ChartOptions( title1  , subtitle1  , textao1  , img1 ),
    new ChartOptions( title2  , subtitle2  , textao2  , img2 ),
    new ChartOptions( title3  , subtitle3  , textao3  , img3 ),
    new ChartOptions( title4  , subtitle4  , textao4  , img4 ),
    new ChartOptions( title5  , subtitle5  , textao5  , img5 ),
    new ChartOptions( title6  , subtitle6  , textao6  , img6 ),
    new ChartOptions( title7  , subtitle7  , textao7  , img7 ),
    new ChartOptions( title8  , subtitle8  , textao8  , img8 ),
    new ChartOptions( title9  , subtitle9  , textao9  , img9 ),
    new ChartOptions( title10 , subtitle10 , textao10 , img10),
    new ChartOptions( title11 , subtitle11 , textao11 , img11),
    new ChartOptions( title12 , subtitle12 , textao12 , img12),
];