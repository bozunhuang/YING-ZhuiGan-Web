// var slider = $("#slider");


// function setup(){
//     var c = createCanvas(500, 500);
//     c.parent("canvasWrapper");
// }

// function draw(){
//     background("#000000");
//     noStroke();
//     fill("#0000ff");
//     circle(width/2,height/2,slider.val());
// }

//slider

let sliderSketch = function(p){
    let slider;

    p.setup = function(){
        let c = p.createCanvas(500, 500);
        c.parent("canvasWrapper");

        slider = $("#slider");
    };

    p.draw = function(){
        p.background(0);
        p.fill("#0000FF");
        p.circle(width/2, height/2, slider.val());
    };
};

new p5(sliderSketch);


//buttons
let buttonSketch = function(p){
    let btn;
    let bgColor;
    p.setup = function(){
        let c2 = p.createCanvas(500, 500);
        c2.parent("sec3CanvasWrapper");
        btn = $("#btn-bg");
        bgColor = 100;
    };
    p.draw = function(){ 
        p.background(0);
        p.fill(bgColor);
        p.circle(width/2, height/2, 400);
    };
    p.changeBGColor = function(){
        bgColor+=random(-50, 50);
    }
};

let myButtonSketch = new p5(buttonSketch);

$("#btn-bg").click(function(){
    myButtonSketch.changeBGColor();
});



//number input
let numInputSketch = function(p){
    let numInputX, numInputY;
    let tileW, tileH;
    p.setup = function(){
        let c = p.createCanvas(500, 500);
        c.parent("sec4CanvasWrapper");
        numInputX = $("#tilesX");
        numInputY = $("#tilesY");
        
    }
    p.draw = function(){
        p.background(0);
        p.fill(255);
        tileW = p.width / numInputX.val();
        tileH = p.height / numInputY.val();
        for(let y = 0; y < numInputY.val(); y++){
            for(let x = 0; x < numInputX.val(); x++){
                if(y %2 == 0){
                    if(x %2 == 1){
                        p.rect(x*tileW, y*tileH, tileW, tileH);
                    }
                } else {
                    if(x %2 == 0){
                        p.rect(x*tileW, y*tileH, tileW, tileH);
                    }
                }
                
            }
        }
    }
}

new p5(numInputSketch);


//text field; placed last
var textInput = $("#text-field");

function setup(){
    var c1 = createCanvas(500, 500);
    c1.parent("sec2CanvasWrapper");
}

function draw(){
    background(0);
    fill("#0000ff");
    textSize(80);
    textAlign(CENTER, CENTER);
    text(textInput.val(), width/2, height/2);
}

new p5(textInputSketch);


// let textInputSketch = function(p){
//     let textInput;
//     p.setup = function(){
//         let c1 = p.createCanvas(500, 500);
//         c1.parent("sec2CanvasWrapper");
//         textInput = $("#text-field");
//     }
//     p.draw = function(){
//         p.background(0);
//         p.fill("#0000ff");
//         p.textSize(80);
//         p.textAlign(CENTER, CENTER);
//         p.text(textInput.val(), width/2, height/2);
//     }

// }




