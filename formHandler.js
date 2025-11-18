// formHandler.js - validação e mensagens
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  const errorsDiv = document.getElementById('formErrors');

  function validateCPF(cpf){
    // validação básica de formato (11 dígitos) — não é algoritmo completo de CPF para simplificar
    return /^\d{11}$/.test(cpf);
  }

  function showErrors(list){
    if(list.length===0){ errorsDiv.textContent=''; errorsDiv.style.display='none'; return; }
    errorsDiv.style.display='block';
    errorsDiv.innerHTML = '<ul>' + list.map(i => '<li>'+i+'</li>').join('') + '</ul>';
  }

  form.addEventListener('submit', function(e){
    const issues = [];
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const cpf = form.cpf.value.trim();
    const idade = Number(form.idade.value);
    const mensagem = form.mensagem.value.trim();

    if(nome.length < 3) issues.push('Nome precisa ter ao menos 3 caracteres.');
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) issues.push('Email em formato inválido.');
    if(!/^\d{10,11}$/.test(phone)) issues.push('Telefone deve ter 10 ou 11 dígitos numéricos.');
    if(!validateCPF(cpf)) issues.push('CPF deve conter 11 dígitos.');
    if(Number.isNaN(idade) || idade < 14 || idade > 120) issues.push('Idade fora do intervalo aceito (14-120).');
    if(mensagem.length < 10) issues.push('Mensagem deve ter ao menos 10 caracteres.');

    if(issues.length){
      e.preventDefault();
      showErrors(issues);
      // rolar para o topo do formulário
      form.scrollIntoView({behavior:'smooth', block:'center'});
    } else {
      // permite envio via GET (action=formAction.html). Limpeza mínima de dados já feita.
    }
  });

});
