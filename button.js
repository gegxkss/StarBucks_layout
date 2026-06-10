const orderPopup = document.getElementById('orderPopup');
const openPopupBtn = document.querySelector('.coffee-select-btn');
const closePopupBtn = document.querySelector('.close-popup');
const orderForm = document.getElementById('coffeeOrderForm');

if (openPopupBtn && orderPopup) {
    openPopupBtn.addEventListener('click', () => {
        console.log('попап открыт');
        orderPopup.style.display = 'flex';
    });
}

if (orderForm && orderPopup) {
    orderForm.addEventListener('submit', () => {
        const coffee = document.getElementById('coffeeType').value;
        const name = document.getElementById('userName').value;
        const phone = document.getElementById('userPhone').value;
        console.log(`Заказ ${coffee}, Имя ${name}, Телефон ${phone}`);
        console.log(`Ваш заказ принят`);

        orderForm.reset();
        orderPopup.style.display = 'none';
    });
}

if (closePopupBtn && orderPopup) {
    closePopupBtn.addEventListener('click', () => {
        console.log('попап закрыт');
        orderPopup.style.display = 'none';
    });
}
