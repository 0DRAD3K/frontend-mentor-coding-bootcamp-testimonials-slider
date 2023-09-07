const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const image = document.querySelector('.avatar');
const review = document.querySelector('.review');

const users = [
    {
        user: 'Tanya Sinclair',
        role: 'UX Engineer',
        review: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
        image: '/images/image-tanya.jpg'
    },
    {
        user: 'John Tarkpor',
        role: 'Junior Front-end Developer',
        review: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
        image: '/images/image-john.jpg'
    }
]

let slide = 0;

const navigation = () => {
    // Check slide value
    if(slide > users.length-1){
        slide = 0;
    }
    image.innerHTML = `
    <img src="${users[slide].image}" alt="">
    `
    review.innerHTML = `
    <img src="/images/pattern-quotes.svg" alt="">
    <p>${users[slide].review}</p>
    <h4 class="user">${users[slide].user} <span class="role">${users[slide].role}</span></h4>
    `;
    slide++;
}

navigation();

prevBtn.addEventListener('click', navigation);
nextBtn.addEventListener('click', navigation);