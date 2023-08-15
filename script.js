const btn = document.querySelector('#button-contato');
const janelaModal = document.querySelector('#janela-modal');
const wpp1 = document.querySelector('#wpp1');
const wpp2 = document.querySelector('#wpp2');

// Abrir Janela modal
btn.addEventListener('click', () => {
	janelaModal.style.display = 'block';
});

// Fechar Janela Modal
const fecharJanelaModal = () => {
	janelaModal.style.display = 'none';
};

// Pegar número escolhido
const pegarNumero = (wpp) => {
	const numberFormat = wpp.textContent.replace(/\D/g, '');
	wpp.href = `https://api.whatsapp.com/send?phone=${numberFormat}`;
	window.open(wpp.href);
};

// wpp1
wpp1.addEventListener('click', (e) => {
	e.preventDefault();
	pegarNumero(wpp1);
	fecharJanelaModal();
});

// wpp2
wpp2.addEventListener('click', (e) => {
	e.preventDefault();
	pegarNumero(wpp2);
	fecharJanelaModal();
});

// Fechar Janela Modal com o X
const buttonX = document.querySelector('.btn-close');
buttonX.addEventListener('click', () => {
	janelaModal.style.display = 'none';
});