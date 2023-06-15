
var altoContrasteAtivo = false;

function alternarAltoContraste() {
  altoContrasteAtivo = !altoContrasteAtivo;

  if (altoContrasteAtivo) {
    ativarAltoContraste();
    document.getElementById("btnContraste").textContent = "Desativar Alto Contraste";
  } else {
    desativarAltoContraste();
    document.getElementById("btnContraste").textContent = "Ativar Alto Contraste";
  }
}

function ativarAltoContraste() {
  var root = document.documentElement;
  root.style.setProperty('--bs-body-color', '#FFFFFF');
  root.style.setProperty('--bs-body-bg', '#000');
  root.style.setProperty('--bs-link-color', '#60e0df');
  root.style.setProperty('--bs-link-hover-color', '#4682B4');
  root.style.setProperty('--bs-code-color', '#d63384');
  root.style.setProperty('--bs-highlight-bg', '#fff3cd');
  root.style.setProperty('--bg-corlogo-rgb', '0, 0, 0');
  root.style.setProperty('--bg-steelblue-rgb', '255, 255, 255');
  root.style.setProperty('--bg-midnightblue-rgb', '0, 0, 0');
  root.style.setProperty('--bs-card-bg', '#000');
  root.style.setProperty('--bs-card-color', '#fff');
   root.style.setProperty('--bs-accordion-color', '#212529');
  root.style.setProperty('--bs-accordion-bg', '#fff');
  root.style.setProperty('--bs-accordion-transition', 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease');
  root.style.setProperty('--bs-accordion-border-color', 'var(--bs-border-color)');
  root.style.setProperty('--bs-accordion-border-width', '1px');
  root.style.setProperty('--bs-accordion-border-radius', '0.375rem');
  root.style.setProperty('--bs-accordion-inner-border-radius', 'calc(0.375rem - 1px)');
  root.style.setProperty('--bs-accordion-btn-padding-x', '1.25rem');
  root.style.setProperty('--bs-accordion-btn-padding-y', '1rem');
  root.style.setProperty('--bs-accordion-btn-color', '#212529');
  root.style.setProperty('--bs-accordion-btn-bg', 'var(--bs-accordion-bg)');
  root.style.setProperty('--bs-accordion-btn-icon', "url('data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23212529\'%3e%3cpath fill-rule=\'evenodd\' d=\'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z\'/%3e%3c/svg%3e')");
  root.style.setProperty('--bs-accordion-btn-icon-width', '1.25rem');
  root.style.setProperty('--bs-accordion-btn-icon-transform', 'rotate(-180deg)');
  root.style.setProperty('--bs-accordion-btn-icon-transition', 'transform 0.2s ease-in-out');
  root.style.setProperty('--bs-accordion-btn-active-icon', "url('data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%230c63e4\'%3e%3cpath fill-rule=\'evenodd\' d=\'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z\'/%3e%3c/svg%3e')");
  root.style.setProperty('--bs-accordion-btn-focus-border-color', '#86b7fe');
  root.style.setProperty('--bs-accordion-btn-focus-box-shadow', '0 0 0 0.25rem rgba(13, 110, 253, 0.25)');
  root.style.setProperty('--bs-accordion-body-padding-x', '1.25rem');
  root.style.setProperty('--bs-accordion-body-padding-y', '1rem');
  root.style.setProperty('--bs-accordion-active-color', '#0c63e4');
  root.style.setProperty('--bs-accordion-active-bg', '#e7f1ff');
    root.style.setProperty('--bs-card-spacer-y', '1rem');
  root.style.setProperty('--bs-card-spacer-x', '1rem');
  root.style.setProperty('--bs-card-title-spacer-y', '0.5rem');
  root.style.setProperty('--bs-card-border-width', '1px');
  root.style.setProperty('--bs-card-border-color', 'var(--bs-border-color-translucent)');
  root.style.setProperty('--bs-card-border-radius', '0.375rem');
  root.style.setProperty('--bs-card-box-shadow', '');
  root.style.setProperty('--bs-card-inner-border-radius', 'calc(0.375rem - 1px)');
  root.style.setProperty('--bs-card-cap-padding-y', '0.5rem');
  root.style.setProperty('--bs-card-cap-padding-x', '1rem');
  root.style.setProperty('--bs-card-cap-bg', 'rgba(0, 0, 0, 0.03)');
  root.style.setProperty('--bs-card-cap-color', '');
  root.style.setProperty('--bs-card-height', '');
  root.style.setProperty('--bs-card-color', '');
  root.style.setProperty('--bs-card-bg', '#fff');
  root.style.setProperty('--bs-card-img-overlay-padding', '1rem');
  root.style.setProperty('--bs-card-group-margin', '0.75rem');
  root.style.setProperty('position', 'relative');
  root.style.setProperty('display', 'flex');
  root.style.setProperty('flex-direction', 'column');
  root.style.setProperty('min-width', '0');
  root.style.setProperty('height', 'var(--bs-card-height)');
  root.style.setProperty('word-wrap', 'break-word');
  root.style.setProperty('background-color', 'var(--bs-card-bg)');
  root.style.setProperty('background-clip', 'border-box');
  root.style.setProperty('border', 'var(--bs-card-border-width) solid var(--bs-card-border-color)');
  root.style.setProperty('border-radius', 'var(--bs-card-border-radius)');
  document.body.classList.toggle('alto-contraste');
  document.querySelector("body").setAttribute("id", "contrasteAtivo");

  var body = document.querySelector("body");
  body.style.backgroundImage = "url('/img/backgroundEscuro.png')";
  

  var footerText= document.querySelector("footer p");
  footerText.classList.remove("text-white");
  footerText.classList.add("text-black");

  var elementosMenu = document.querySelectorAll('.menu-items a');
  for (var i = 0; i < elementosMenu.length; i++) {
      elementosMenu[i].style.color = 'black';
  }

}

function desativarAltoContraste() {
  var root = document.documentElement;
  root.style.setProperty('--bs-body-color', '#212529');
  root.style.setProperty('--bs-body-bg', '#fff');
  root.style.setProperty('--bs-link-color', '#0d6efd');
  root.style.setProperty('--bs-link-hover-color', '#0a58ca');
  root.style.setProperty('--bs-code-color', '#d63384');
  root.style.setProperty('--bs-highlight-bg', '#fff3cd');
  root.style.setProperty('--bg-corlogo-rgb', '96, 224, 223');
  root.style.setProperty('--bg-steelblue-rgb', '70, 130, 180');
  root.style.setProperty('--bg-midnightblue-rgb', '25, 25, 112');
  root.style.setProperty('--bs-card-bg', '#fff');
  root.style.setProperty('--bs-card-color', '#000');
    root.style.setProperty('--bs-accordion-color', ''); // Use o valor original ou remova a propriedade para reverter às configurações padrão
  root.style.setProperty('--bs-accordion-bg', '');
  root.style.setProperty('--bs-accordion-transition', '');
  root.style.setProperty('--bs-accordion-border-color', '');
  root.style.setProperty('--bs-accordion-border-width', '');
  root.style.setProperty('--bs-accordion-border-radius', '');
  root.style.setProperty('--bs-accordion-inner-border-radius', '');
  root.style.setProperty('--bs-accordion-btn-padding-x', '');
  root.style.setProperty('--bs-accordion-btn-padding-y', '');
  root.style.setProperty('--bs-accordion-btn-color', '');
  root.style.setProperty('--bs-accordion-btn-bg', '');
  root.style.setProperty('--bs-accordion-btn-icon', '');
  root.style.setProperty('--bs-accordion-btn-icon-width', '');
  root.style.setProperty('--bs-accordion-btn-icon-transform', '');
  root.style.setProperty('--bs-accordion-btn-icon-transition', '');
  root.style.setProperty('--bs-accordion-btn-active-icon', '');
  root.style.setProperty('--bs-accordion-btn-focus-border-color', '');
  root.style.setProperty('--bs-accordion-btn-focus-box-shadow', '');
  root.style.setProperty('--bs-accordion-body-padding-x', '');
  root.style.setProperty('--bs-accordion-body-padding-y', '');
  root.style.setProperty('--bs-accordion-active-color', '');
  root.style.setProperty('--bs-accordion-active-bg', '');
    root.style.setProperty('--bs-card-spacer-y', '');
  root.style.setProperty('--bs-card-spacer-x', '');
  root.style.setProperty('--bs-card-title-spacer-y', '');
  root.style.setProperty('--bs-card-border-width', '');
  root.style.setProperty('--bs-card-border-color', '');
  root.style.setProperty('--bs-card-border-radius', '');
  root.style.setProperty('--bs-card-box-shadow', '');
  root.style.setProperty('--bs-card-inner-border-radius', '');
  root.style.setProperty('--bs-card-cap-padding-y', '');
  root.style.setProperty('--bs-card-cap-padding-x', '');
  root.style.setProperty('--bs-card-cap-bg', '');
  root.style.setProperty('--bs-card-cap-color', '');
  root.style.setProperty('--bs-card-height', '');
  root.style.setProperty('--bs-card-color', '');
  root.style.setProperty('--bs-card-bg', '');
  root.style.setProperty('--bs-card-img-overlay-padding', '');
  root.style.setProperty('--bs-card-group-margin', '');
  root.style.removeProperty('position');
  root.style.removeProperty('display');
  root.style.removeProperty('flex-direction');
  root.style.removeProperty('min-width');
  root.style.removeProperty('height');
  root.style.removeProperty('word-wrap');
  root.style.removeProperty('background-color');
  root.style.removeProperty('background-clip');
  root.style.removeProperty('border');
  root.style.removeProperty('border-radius');
  document.querySelector("body").removeAttribute("id");

  var body = document.querySelector("body");
  body.style.backgroundImage = "url('/img/interlaced.png')";

  var footerText= document.querySelector("footer p");
  footerText.classList.remove("text-black");
  footerText.classList.add("text-white");
  
  var elementosMenu = document.querySelectorAll('.menu-items a');
  for (var i = 0; i < elementosMenu.length; i++) {
      elementosMenu[i].style.color = 'white';
  }

}

document.getElementById("btnContraste").addEventListener("click", alternarAltoContraste);
