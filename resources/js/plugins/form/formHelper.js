import { ref } from "vue"
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { format, parseISO } from 'date-fns'
import axios from 'axios'


export const isFullScreen = ref(false)
export const toggleFullScreen = () => {
    isFullScreen.value = !isFullScreen.value
}

export const siteData = ref(null)
export const getSiteSettings = async () => {
    const { data } = await axios.get('get-site-settings')
    if(data.status){
        siteData.value = data.data
    }
}

export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(email && email.trim() !== '') {
        email = email.replaceAll(/[\s-]/g, '')
        return emailRegex.test(email)
    }
}

export const dateFormate = (date) => {
    if(!date) return
    const dateObj = parseISO(date);
    return format(dateObj, 'MMM dd, yyyy')
}

export const timeFormate = (time) => {
    const formattedTime = time.replace(/(\d{2})(\d{2})/, '$1:$2')
    return formattedTime
}
export const getDateToTime = (date) => {
    if(!date) return
    const dateObj = parseISO(date);

    return format(dateObj, 'HH:mm')
}
export const isValidBangladeshiPhoneNumber = (number) => {
    const bangladeshiPhoneNumberRegex = /^(?:\+88|01)?\d{11}$/;
  
    if(number && number.trim() !== '') {
        const cleanedNumber = number.replaceAll(/[\s-]/g, '')
        return bangladeshiPhoneNumberRegex.test(cleanedNumber)
    }
}

export const resizeObserver = (element, cb) => {
    if(!element) return
    const resizeObserver = new ResizeObserver(cb)

    resizeObserver.observe(element)
}

export const camelToWord = (word) => {
    if(!word) return word
    return String(word).replace(/([a-z])([A-Z])/g, '$1 $2');
}

export const pageLoading = ref(false)

let closeTime = 1000
export const notify = {
    'success': (msg) => toast.success(msg, {
                autoClose: closeTime,
            }),
    'error': (msg) => toast.error(msg, {
                autoClose: closeTime,
            }),
    'warning': (msg) => toast.warning(msg, {
                autoClose: closeTime,
            }),
    'info': (msg) => toast.info(msg, {
                autoClose: closeTime,
            })
}

const handleOutsideClick = function(e, el, binding) {
    if(!el.contains(e.target)){
        binding.value()
    }
}

export const vOutsideClick = {
    mounted: (el, binding) => {
        window.addEventListener('click', (e) => {
            handleOutsideClick(e, el, binding)
        })
    },
    beforeUnmount : () => {
        window.removeEventListener('click', () => {})
    }
}

export const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}