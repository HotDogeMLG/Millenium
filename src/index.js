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
import researchPNG from "./img/research.png"
import analysisPNG from "./img/analysis.png"
import designPNG from "./img/design.png"
import layoutPNG from "./img/layout.png"
import cmsPNG from "./img/cms.png"
import teamPNG from "./img/team.png"
import rectanglePNG from "./img/form-rectangle.png"
import barPNG from  "./img/form-bar.png"
import donutPNG from "./img/form-donut.png"
import cubePNG from "./img/form-cube.png"
import likePNG from "./img/form-like.png"
import telegramFooter from "./img/footer-telegram.svg"
import whatsappFooter from "./img/footer-whatsapp.svg"
import logoFooter from "./img/footer-logo.svg"

const headerLogo = document.getElementById("header__logo")
headerLogo.src = logo

const footerLogo = document.getElementById("footer__logo")
footerLogo.src = logoFooter

const phoneTelegram = document.getElementById("phone__telegram")
phoneTelegram.src = telegram

const phoneWhatsapp = document.getElementById("phone__whatsapp")
phoneWhatsapp.src = whatsapp

const call = document.getElementById("call")
call.src = phoneIcon

const advArrow = document.getElementById("adv__arrow")
advArrow.src = arrow

const keepScrolling = document.querySelectorAll(".keep-scrolling")
    keepScrolling.forEach((element) => {
        element.src = arrow
    })


//----------------------------------- Features block -----------------------------------//

const catalog = document.getElementById("catalog")
catalog.src = catalogPNG

const ordering = document.getElementById("ordering")
ordering.src = orderingPNG

const integration = document.getElementById("integration")
integration.src = integrationPNG

const crm = document.getElementById("crm")
crm.src = crmPNG


//--------------------------------- Awards and research ---------------------------------//

const awards = document.getElementById("awards-img")
awards.src = awardsPNG

const certificate1 = document.querySelectorAll(".certificate1-img")
    certificate1.forEach((element) => {
        element.src = certificate1PNG
    })

const certificate2 = document.querySelectorAll(".certificate2-img")
    certificate2.forEach((element) => {
        element.src = certificate2PNG
    })

const research = document.getElementById("research-img")
research.src = researchPNG


//----------------------------------- Stages block -----------------------------------//

const analysis = document.getElementById("analysis-img")
analysis.src = analysisPNG

const design = document.getElementById("design-img")
design.src = designPNG

const layout = document.getElementById("layout-img")
layout.src = layoutPNG

const cms = document.getElementById("cms-img")
cms.src = cmsPNG


//----------------------------------- Team block -----------------------------------//

const team = document.getElementById("team-img")
team.src = teamPNG

const rectangle = document.getElementById("form-rectangle-img")
rectangle.src = rectanglePNG

const bar = document.getElementById("form-bar-img")
bar.src = barPNG

const donut = document.getElementById("form-donut-img")
donut.src = donutPNG

const cube = document.getElementById("form-cube-img")
cube.src = cubePNG

const like = document.getElementById("form-like-img")
like.src = likePNG


//----------------------------------- Footer block -----------------------------------//

const footerPhoneTelegram = document.getElementById("footer-telegram")
footerPhoneTelegram.src = telegramFooter

const footerPhoneWhatsapp = document.getElementById("footer-whatsapp")
footerPhoneWhatsapp.src = whatsappFooter


//----------------------------------- Buttons block -----------------------------------//

document.getElementById("menu-button").addEventListener("click", () => {
    document.querySelector("header").classList.toggle("open")
})
document.getElementsByClassName("header__dim")[0].addEventListener("click", () => {
    document.querySelector("header").classList.remove("open")
})

document.getElementsByClassName("adv__arrow")[0].addEventListener("click", () => {
    const LaptopAdvItems = document.querySelectorAll(".laptop-adv__item")
    LaptopAdvItems.forEach((element) => {
        element.classList.toggle("laptop-adv__item_active")
    })
    document.querySelector(".adv__arrow").classList.toggle("adv__arrow_active")
    document.querySelector(".adv .price").classList.toggle("price_active")
    document.querySelector(".main-body").classList.toggle("main-body_acitve")
})