<template>
    <div id="innerpageBodyContentContact">
        <div class="row">
            <div class="col-lg-6 order-last order-lg-first" id="innerpageBodyContentContactLeft">
                <div v-html="objContact.content"></div>
                <ul class="contactList">
                    <li v-show="objContact.email"><IconsAt class="contactIcon" /><a
                            :href="'mailto:'+objContact.email">{{ objContact.email }}</a></li>
                    <li v-show="objContact.phone"><IconsMobileScreenButton class="contactIcon" /><a :href="'tel:'+objContact.phone">{{ objContact.phone }}</a></li>
                    <li v-show="objContact.address">
                        <IconsLocationDot class="contactIcon" />
                        <address v-html="objContact.address">
                        </address>
                    </li>
                    <li v-show="objContact.workhours"><IconsClock class="contactIcon" />{{ objContact.workhours }}</li>
                </ul>
            </div>
            <div class="col-lg-6" id="innerpageBodyContentContactRight">
                <Form @submit="submitContactUs" :validation-schema="schema" v-slot="{ errors }" method="post" class="form-control" id="contactForm">
                    <div class="contactFormHead">
                        <span class="contactHeading"><IconsPenNib class="contactFormIcon" />Send Us A
                            Message</span>
                    </div>
                    <div class="msgError">{{ message }}</div>
                    <label for="contactForm-name" class="form-label">Name:</label>
                    <Field name="name" type="text" id="contactForm-name" :class="{ 'is-invalid': errors.name }" class="form-control form-control-sm" placeholder="Name" />
                    <div class="msgError">{{errors.name}}</div>
                    <label for="contactForm-email">Email:</label>
                    <Field name="emil" type="email" id="contactForm-email" :class="{ 'is-invalid': errors.email }" class="form-control form-control-sm" placeholder="Email" />
                    <div class="msgError">{{errors.email}}</div>
                    <label for="contactForm-contact">Contact:</label>
                    <Field name="phone" type="tel" id="contactForm-contact" class="form-control form-control-sm" placeholder="Phone" />
                    <label for="contactForm-feedback">Message:</label>
                    <textarea name="message" class="form-control" id="contactForm-message" :class="{ 'is-invalid': errors.message }"></textarea>
                    <div class="msgError">{{errors.message}}</div>
                    <div class="d-flex p-2">
                        <button type="reset" class="btn btn-secondary" formtarget="contactForm">Clear</button>
                        <button type="submit" class="btn btn-success" formtarget="contactForm">Send</button>
                    </div>
                </Form>
            </div>
        </div>
        <Recaptcha />
        <ModalContactUsMessage />
    </div>
</template>

<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import { useReCaptcha } from 'vue-recaptcha-v3'
import { defineComponent } from 'vue'

const recaptchaInstance = useReCaptcha()

const recaptcha = async () => {
  await recaptchaInstance?.recaptchaLoaded()
  const token = await recaptchaInstance?.executeRecaptcha('ContactUs')
  return token
}


const pageStore = usePageStore();
const objContact = JSON.parse(pageStore.page.content);

/** Form validation */
const message = ref("");
const schema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Name must be at least 3 characters')
        .required('Name is required'),
    email: Yup.string()
        //.required('Email is required')
        .email('Email is invalid'),
    message: Yup.string()
        .min(10, 'Message must be at least 10 characters')
        //.required('Message is required')
});

async function submitContactUs(values) {
    // get the token on your method
    const token = await recaptcha();

    const data = {
            name: values.name,
            email: values.email,
            phone: values.phone,
            message: values.message,
            token: token
        };
    console.log('submitContactUs called');
    console.log(data);
    const API_URL = useRuntimeConfig().public.jsonApiPath + '/contactus';
    const { res, error } = await $fetch(API_URL, {
        method: "POST",
        body: data,
    });
    console.log('results:');
    console.log(res);
}
//onMounted(() => {
/*    const submitContactUs = (values) => {
        console.log('submitContactUs called');
        grecaptcha.ready(function() {
            grecaptcha.execute(useRuntimeConfig().public.recaptchaKey, {action: 'submit'}).then(function(token) {
                console.log('grecaptcha.execute called');
                sendContactUs(values, token);
            });
        });
    }
    async function sendContactUs(values, token) {
        const data = {
            name: values.name,
            email: values.email,
            phone: values.phone,
            message: values.message,
            token: token
        };
        console.log('sendContactUs called');
        console.log(data);
        const { res, error } = await useApiFetch(useRuntimeConfig().public.jsonApiPath + '/contactus', {
            method: "POST",
            body: data,
        });
    } */
//});
</script>