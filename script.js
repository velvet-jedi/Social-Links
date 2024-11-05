document.addEventListener('DOMContentLoaded', () => {
    let links = Array.from(document.getElementsByTagName('a'))

    let body = document.querySelector('body')

    const handleStyleChange = (target) => {
        if (target === "github") {
            body.style.backgroundImage = "linear-gradient(135deg, #4078c0, #6cc644)";
            return "black";
        } else if (target === "Ld") {
            body.style.backgroundImage = "linear-gradient(135deg, #0A66C2, #FFFFFF)";
            return "rgb(10, 102, 194)";
        } else if (target === "X") {
            body.style.backgroundImage = "linear-gradient(135deg, #1DA1F2, #657786)";
            return "rgb(29, 161, 242)";
        } else if (target === "gram") {
            body.style.backgroundImage = "linear-gradient(135deg, #E1306C, #E1E8ED)";
            return "#E4405F";
        } else if (target === "hashnode") {
            body.style.backgroundImage = "linear-gradient(135deg, #2962ff, #b3e5fc)";
            return "#2962ff";
        } else if (target === "medium") {
            body.style.backgroundImage = "linear-gradient(135deg, #00ab6c, #ffffff)";
            return "#00ab6c";
        }
    };


    const resetStyles = () => {
        body.style.backgroundImage = "linear-gradient(135deg, beige, beige)";
        links.forEach(link => {
            link.style.background = "antiquewhite";
        });
    };

    links.forEach(link => {
        // Handle mouse events
        link.addEventListener('click', (e) => {
            const bgColor = handleStyleChange(e.currentTarget.id);
            if (bgColor) {
                e.currentTarget.style.background = bgColor;
            }
        })

        // Handle keyboard focus
        link.addEventListener('focus', (e) => {
            const bgColor = handleStyleChange(e.currentTarget.id);
            if (bgColor) {
                e.currentTarget.style.background = bgColor;
            }
        });

        // Reset styles when focus is lost
        link.addEventListener('blur', () => {
            resetStyles();
        });

    })
})