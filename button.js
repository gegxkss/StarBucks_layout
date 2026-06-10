const orderPopup = document.getElementById('orderPopup');
const openPopupBtn = document.querySelector('.coffee-select-btn');
const closePopupBtn = document.querySelector('.close-popup');
const orderForm = document.getElementById('coffeeOrderForm');

if (openPopupBtn && orderPopup) {
    openPopupBtn.addEventListener('click', () => {
        console.log('попап открыт');
        orderPopup.classList.toggle('active');
        openPopupBtn.classList.toggle('active');
    });
}

if (orderForm && orderPopup) {
    orderForm.addEventListener('submit', () => {
        const coffee = document.getElementById('coffeeType').value;
        const nameInputValue = document.getElementById('nameInput').value;
        const phoneInputValue = document.getElementById('phoneInput').value;
        console.log(`Заказ ${coffee}, Имя ${nameInputValue}, Телефон ${phoneInputValue}`);
        console.log(`Ваш заказ принят`);

        orderForm.reset();
    });
}

if (closePopupBtn && orderPopup) {
    closePopupBtn.addEventListener('click', () => {
        console.log('попап закрыт');
        orderPopup.classList.toggle('active');
        openPopupBtn.classList.toggle('active');
    });
}
