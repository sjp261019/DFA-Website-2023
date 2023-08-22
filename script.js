$(document).ready(function(){
    /* NAV MINIMIZE ON SCROLL */
    const handleNavMinimization = () => {
        if ($(document).scrollTop() > 0) {
            $("nav").removeClass("nav-1");
            $("nav").addClass("nav-2");
        } else {
            $("nav").removeClass("nav-2");
            $("nav").addClass("nav-1");
        }
    }

    // SCROLL SETUP
    const scrollElements = document.querySelectorAll(".js-appear");
    const scrollPercentage = 0.8;

    /* RETURNS TRUE IF ELEMENT'S POSITION IS ABOVE THE PERCENTAGE PARAMETER */
    const elementInView = (el, percentage) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= ((window.innerHeight || document.documentElement.clientHeight) * percentage)
        );
    };

    /* ELEMENT APPEAR ON SCROLL */
    const handleAppearAnimation = () => {
        scrollElements.forEach(el => {
            if (elementInView(el, scrollPercentage)) {
                el.classList.add("js-appeared");
            } else {
             el.classList.remove("js-appeared");
            }
        })
    };

    /* TEXT HIGHLIGHT ON SCROLL */
    const highlightElements = document.querySelectorAll(".js-highlight");
    const handleScrollHighlightAnimation = () => {
        highlightElements.forEach(el => {
            if (elementInView(el, scrollPercentage)) {
                el.classList.add("js-highlighted");
            } else {
                el.classList.remove("js-highlighted");
            }
            })
    }

    /* SCROLL EVENT LISTENER */
    window.addEventListener('scroll', () => {
        handleNavMinimization();
        handleAppearAnimation();
        handleScrollHighlightAnimation();
    });

    // LOOP SETUP
    var loopCount = $(".loop ul").length;  
    var loopImgWidth = $(".loop ul li").width(); 
    var loopWidth = loopCount*loopImgWidth;   
    $(".loop ul").css("width", loopWidth); 
    
    /* LOOP ANIMATE */
    setInterval(function(){
        $(".loop ul").animate({"margin-left":-loopWidth}, 2000, "linear", function(){
            $(".loop ul").find("li:first-child").insertAfter($(".loop ul").find("li:last-child"));
            $(".loop ul").css({"margin-left":"0px"});
        });
    });
});