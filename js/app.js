function toggle_image(event) {

    if(event[`target`][`outerHTML`].includes(`whitelipped-tree-frog-litoria-infrafrenata-green-leaves`) === true)
    {
        event[`target`].setAttribute(`src`, `https://img.freepik.com/free-photo/avan-tree-frog-closeup-image-rhacophorus-reinwartii-branch_488145-2530.jpg?w=1380&t=st=1680041362~exp=1680041962~hmac=3d4c7c783d9e88c50d32f9d627751c2109b025147ade84a513d9fc8ca8794d56`);
    }
    else
    {
        event[`target`].setAttribute(`src`, `https://img.freepik.com/free-photo/whitelipped-tree-frog-litoria-infrafrenata-green-leaves_488145-1765.jpg?w=1480&t=st=1680040599~exp=1680041199~hmac=0172bab582b150ea6198c61a5021733d00c198223281b19a285974d522fbe3c7`);
    }
}

function secret_appear(event)
{
    event[`currentTarget`].insertAdjacentHTML(`afterend`, `<h3 id="secret_text">SECRET HOVER</h3>`)
}

function secret_remove()
{
    document.querySelector(`#secret_text`).remove();
}

function change_background_color(event)
{
    if(event[`key`] === `p`)
    {
        event[`currentTarget`][`style`][`backgroundColor`] = `purple`
    }
}

function reset_background_color(event)
{
    if(event[`key`] === `p`)
    {
        event[`currentTarget`][`style`][`backgroundColor`] = ``;
    }
}


let frog = document.querySelector(`#frog`);
let title = document.querySelector(`#title`);
let page = document.querySelector(`body`);

frog.addEventListener(`click`, toggle_image);
title.addEventListener(`mouseover`, secret_appear);
title.addEventListener(`mouseleave`, secret_remove);
page.addEventListener(`keydown`, change_background_color);
page.addEventListener(`keyup`, reset_background_color)