import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en-US'
import zh from './zh-CN'

Vue.use(VueI18n)

const messages = {
    'en-US': Object.assign({}, en),
    'zh-CN': Object.assign({}, zh)
}

const numberFormats = {
    'en-US': {
        currency: {
            style: 'currency', currency: 'USD', currencyDisplay: 'symbol'
        }
    },
    'zh-CN': {
        currency: {
            style: 'currency', currency: 'CNY', currencyDisplay: 'symbol'
        }
    }
}

const dateTimeFormats = {
    'en-US': {
        short: {
            year: 'numeric', month: 'short', day: 'numeric', hour12: true
        },
        long: {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        }
    },
    'zh-CN': {
        short: {
            year: 'numeric', month: 'short', day: 'numeric', hour12: false
        },
        long: {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: false
        }
    }
}
let locale = localStorage.getItem('lang')

export default new VueI18n({
    locale: locale,
    fallbackLocale: 'en-US',
    numberFormats,
    dateTimeFormats,
    messages
})
