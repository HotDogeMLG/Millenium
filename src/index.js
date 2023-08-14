import "./sass/style.scss"
import arrow from "./img/arrow.svg"
import logo from "./img/logo.svg"
import phoneIcon from "./img/phone-icon.svg"
import telegram from "./img/telegram.svg"
import whatsapp from "./img/whatsapp.svg"
import catalogPNG from "./img/catalog.png"
import orderingPNG from "./img/ordering.png"
import integrationPNG from "./img/integration.png"
import crmPNG from "./img/crm.png"
import awardsPNG from "./img/awards.png"
import certificate1PNG from "./img/certificate1.png"
import certificate2PNG from "./img/certificate2.png"

const headerLogo = document.getElementById("header__logo")
headerLogo.src = logo

const phoneTelegram = document.getElementById("phone__telegram")
phoneTelegram.src = telegram

const phoneWhatsapp = document.getElementById("phone__whatsapp")
phoneWhatsapp.src = whatsapp

const call = document.getElementById("call")
call.src = phoneIcon

const advArrow = document.getElementById("adv__arrow")
advArrow.src = arrow


//----------------------------------- Features block -----------------------------------//

const catalog = document.getElementById("catalog")
catalog.src = catalogPNG

const ordering = document.getElementById("ordering")
ordering.src = orderingPNG

const integration = document.getElementById("integration")
integration.src = integrationPNG

const crm = document.getElementById("crm")
crm.src = crmPNG


//----------------------------------- Awards block -----------------------------------//

const awards = document.getElementById("awards-img")
awards.src = awardsPNG

const certificate1 = document.getElementById("certificate1-img")
certificate1.src = certificate1PNG

const certificate2 = document.getElementById("certificate2-img")
certificate2.src = certificate2PNG


//----------------------------------- Buttons block -----------------------------------//

document.getElementById("menu-button").addEventListener("click", () => {
    document.querySelector("header").classList.toggle("open")
})
document.getElementsByClassName("header__dim")[0].addEventListener("click", () => {
    document.querySelector("header").classList.toggle("open")
})

document.getElementsByClassName("adv__arrow")[0].addEventListener("click", () => {
    const LaptopAdvItems = document.querySelectorAll(".laptop-adv__item")
    LaptopAdvItems.forEach((element) => {
        element.classList.toggle("laptop-adv__item_active")
    })
    document.querySelector(".adv__arrow").classList.toggle("adv__arrow_active")
    document.querySelector(".adv .price").classList.toggle("price_active")
})