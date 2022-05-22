const gettingToKnowMe = {
    personal: {
        hobbies: [
            'On weekends you can find me taste-testing the latest release and raiding the food truck at a (semi-)local brewery.',
            'You can usually find me "hiking" (but not, like... real hiking) in order to indulge in nearby craft beers / food trucks.',
            'I love reading, netflix-binging, and retro video games (Super Mario 64, Zelda Ocarina of Time, etc.)',
            'I spend my days converting coffee into code.',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
        ],
        tidbits: [
            'I\'m a grammar snob.',
            'I love hawaiian pizza.',
            'I\'m way too invested in the 90 Day Fiance Franchise.',
            'I hate flavored coffee - coffee IS a flavor.',
            'I\'ve read the Harry Potter series more times than I am willing to put in print, but I will never finish the movies.',
            'I am basically Hermione Granger.',
            'Books or nothing (keep your e-readers away).',
            'I live for Fall.',
            'My 2021 Spotify Wrapped aura was FOCUSED and BOLD.',
            'abc',
            'xyz',
            'I\'m anti-oxford comma.',
        ],
    },
    professional: {
        background: [
            'The first seven years of my professional career were spent in supply chain planning roles and project management',
            'When I worked at Hartz Mountain as a CSM, I started dabbling in MS Excel. I got so excited about the fact that I could '
            + 'write a formula to do my work for me. I started nesting formulas inside of formulas. Once a coworker in IT saw what '
            + 'I was doing, he suggested I take a class at my local community college learning how to code, and the rest is history.',
            'I went back to school at night while continuing to work in suppy chain planning during the day. Once I received my A.S. in '
            + 'Computer Science from my community college, I quit my job and pursued my bachelor degree full time at Rutgers University.',
            'After graduating with my B.S. in Computer Science from Rutgers University, (or technically just slightly before graduating), '
            + 'I started as a Junior Full-Stack Engineer at SiteCompli, a small SAAS company is New York City, where I moved up to '
            + 'a mid-level Full Stack Engineer after a year or so.',
            'My passion is in Full Stack development. I enjoy building out the UI as well as programming the back end to handle all '
            + 'sorts of robust scenarios.',
        ],
        skills: [
            '5+ years of hands on PHP experience (proficient).',
            '5+ years of hands on JS/jQuery experience (moderately proficient).',
            '5+ years of hands on MySQL Experience (using MySQLWorkbench) - (proficient)',
            '4+ years of React.js experience (proficient).',
            'I have worked limitedly in React Native at my current position (and am very comfortable with React.js).',
            'I have worked limitedly in Python at my current position (and have used it more robustly in the past). ',
            '5+ years of hands on HTML and CSS (moderately proficient).',
            '5+ years of hands on CLI-only git (proficient).',
            '4+ years working in IntelliJ (proficient).',
            '5+ years coding in a macOS / Linux OS environment using either Virutal Machines or Docker Containers',
        ],
    },
};

function startAnimations() {
    // load in navbar and set active tab
    $("#navbar").load("navbar.html", function () {
        // $("#github, #twitter, #linkedin").hide();

        // $("#navbar").hover(function () {
        //     $("#github, #twitter, #linkedin").fadeToggle(500);
        // });

        $("#home").addClass("active");
    });

    // enable popovers and tooltips where they exist.
    $('[data-bs-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();

    // when hovering over the main picture, toggle back and forth between pictures.
    $(".profilePic").mouseenter(function () {
        $("#us").show();
        $("#me").hide();
    });
    $(".profilePic").mouseleave(function () {
        $("#me").show();
        $("#us").hide();
    });
};

function updateHexSquareColor(hexcode) {
    if (hexcode.length && hexcode[0] !== '#') {
        hexcode = `#${hexcode}`;
    }

    var $div = $("<div>");
    $div.css("border", `1px solid ${hexcode}`);

    if ($div.css("border-color") === '') {
        // not a valid code, clear box and set to #FFFFFF 
        $("#hex-code-input").val('')
        hexcode = "#FFFFFF";
    } else {
        $("#hex-code-input").val(hexcode.toUpperCase());
    }

    $(".hex-square").css('background', hexcode);
}

function getRandomIndexFromArray(arr) {
    debugger;
    return arr[Math.floor(Math.random() * arr.length)];
}

function setStoryListeners() {
    $(".story-button-container").on('click', '#story-time-button', function () {
        $(".story-text-container").html("<p>Ok, sit tight and I'll tell you my story.  What would you like to know?</p>");
        $(".story-button-container").html('<button id="profButton">Professional Story</button><button id="personalButton">Personal Story</button>');
    });

    $(".story-button-container").on('click', '#profButton', function () {
        $(".story-text-container").html("<p>Good choice, what exactly are you interested in knowing?</p>");
        $(".story-button-container").html('<button id="backgroundButton">Give me some background info</button><button id="skillsButton">All about the skills</button><button id="story-time-button">Go Back</button>');
    });

    $(".story-button-container").on('click', '#backgroundButton', function () {
        $(".story-text-container").html(getRandomIndexFromArray(gettingToKnowMe.professional.background));
        $(".story-button-container").html('<button id="backgroundButton">Another!</button><button id="profButton">Go Back</button>');
    });

    $(".story-button-container").on('click', '#skillsButton', function () {
        $(".story-text-container").html(getRandomIndexFromArray(gettingToKnowMe.professional.skills));
        $(".story-button-container").html('<button id="skillsButton">More!</button><button id="profButton">Go Back</button>');
    });

    $(".story-button-container").on('click', '#personalButton', function () {
        $(".story-text-container").html("<p>Ok, let's get personal.</p>");
        $(".story-button-container").html('<button id="hobbyButton">Spending Downtime</button><button id="tidbitsButton">Some Tidbits</button><button id="story-time-button">Go Back</button>');
    });

    $(".story-button-container").on('click', '#hobbyButton', function () {
        $(".story-text-container").html(getRandomIndexFromArray(gettingToKnowMe.personal.hobbies));
        $(".story-button-container").html('<button id="hobbyButton">What else?</button><button id="personalButton">Go Back</button>');
    });

    $(".story-button-container").on('click', '#tidbitsButton', function () {
        $(".story-text-container").html(getRandomIndexFromArray(gettingToKnowMe.personal.tidbits));
        $(".story-button-container").html('<button id="tidbitsButton">Again Again!</button><button id="personalButton">Go Back</button>');
    });
}

$(function () {
    startAnimations();
    setStoryListeners();

    // todo: move to new JS file when moving to new file
    $("#hex-code-input").on('change', function (e) {
        let hexcode = e.target.value;
        updateHexSquareColor(hexcode);
    });

    // todo: move to separate file when moving to themes.
    $('.change-style').click(function (ev) {
        ev.preventDefault();
        const newStyleSheet = 'resources/css/' + $(this).data("style-ref");
        $("link[title='switcheroo']").attr("href", newStyleSheet);
    });


});
