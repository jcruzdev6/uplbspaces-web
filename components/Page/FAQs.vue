<template>
    <div id="innerpageBodyContentFaq">
        <div class="faqAnswerBox"></div>
        <div class="faqGroup">
            <div v-for="(faq, index) in pageStore.faqs"
                :key="index" @click="showAnswer(index)">
                <div :class="index == 0 ? 'faqQuestion active' : 'faqQuestion'" :id="`faqQ${index}`">
                    <IconsCaretRight class="faqArrow" />
                    <div class="faqQ">
                        {{ faq.question }}
                    </div>
                </div>
                <div :class="index == 0 ? 'faqAnswer active' : 'faqAnswer'" :id="`faqA${index}`">
                    <div class="faqImg">
                        <img :src="images[index]">
                    </div>
                    <div class="faqQAContainer">
                        <h4 class="question">{{ faq.question }}</h4>
                        <p class="answer">{{ faq.answer }}</p>
                    </div>
                    <div class="faqPrevNext" :id="`faq${index}PrevNext`">
                        <div class="faqPrev" @click="showAnswer(index)"><i class="fa-solid fa-caret-left"></i> Previous</div>
                        <div class="faqNext" @click="showAnswer(index)">Next <i class="fa-solid fa-caret-right"></i></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div :v-html="pageStore.page.content" class="faqMore"></div>
</template>

<script setup>
const pageStore = usePageStore();
pageStore.fetchFAQs();
const images = useFetchImages('page', pageStore.page.id);

function showAnswer(index) {
    const faqQ = document.getElementById(`faqQ${index}`);
    const faqA = document.getElementById(`faqA${index}`);
    //const faqPrev = document.getElementById(`faq${index}PrevNext`).querySelector('.faqPrev');
    //const faqNext = document.getElementById(`faq${index}PrevNext`).querySelector('.faqNext');
    const faqAnswerBox = document.querySelector('.faqAnswerBox');

    faqAnswerBox.classList.add('active');
    faqQ.classList.add('active');
    faqA.classList.add('active');

    for (let i = 0; i < pageStore.faqs.length; i++) {
        if (i != index) {
            const faqQ = document.getElementById(`faqQ${i}`);
            const faqA = document.getElementById(`faqA${i}`);

            faqQ.classList.remove('active');
            faqA.classList.remove('active');
        }
    }

}
</script>