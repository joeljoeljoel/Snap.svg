var speed = 1;
var s = Snap("#svg");
Snap.load("/res/img/Heart.svg", function (f) {
    var Heart = f.select("#Layer_2");
    s.append(Heart);
    console.log(Heart);
    var leftLeg = s.select("#HeartLegLeft");
    var rightLeg = s.select("#HeartLegRight");

    var animateBack = new Snap.Matrix();
    animateBack.rotate(-10, leftLeg.getBBox().x, leftLeg.getBBox().y);
    var animateForward = animateBack.invert();


    animateLeg(leftLeg, true);
    animateLeg(rightLeg, false);


    Heart.animate( {
            transform: 't700,0'
        },
        10000
    );

    function animateLeg(leg, backwards) {
        var animation = backwards ? animateBack : animateForward;
        leg.animate( {
                transform: animation
            },
            speed * 1000,
            mina.easeinout,
            function () {
                animateLeg(leg, !backwards)
            }
        );

    }


});