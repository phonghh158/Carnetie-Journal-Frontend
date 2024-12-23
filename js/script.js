function dropdownExpand(id) {
    document.getElementById(id).classList.toggle('expand');
}

if (websiteToolActive == null) {
    document.getElementById('txt').innerText = "null";
}

function toolExpand(id) {
    var websiteToolActive = document.querySelector('.website-tool.active');
    if (websiteToolActive != null) {
        if (websiteToolActive.id != id) {
            websiteToolActive.classList.remove('active');
        }
    }

    document.getElementById(id).classList.toggle('active');
}

function themeToggle() {
    document.body.classList.toggle('dark');
}

function themeColorChange(color) {
    var websiteColor = document.querySelector('.theme-color.selected');
    if (websiteColor != null) {
        if (websiteColor.id != color) {
            document.body.classList.remove(websiteColor.id);
            websiteColor.classList.remove('selected');
        }
    }

    document.getElementById(color).classList.add('selected');
    document.body.classList.add(color);
}


