function openTab(tabName) {
    // Esconde todos os conteúdos das abas
    var tabContents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = 'none';
    }
  
    // Remove a classe 'active' de todas as abas
    var tabs = document.getElementsByClassName('tab');
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    }
  
    // Mostra o conteúdo da aba selecionada e adiciona a classe 'active' à aba
    document.getElementById(tabName).style.display = 'block';
    document.querySelector(`[onclick="openTab('${tabName}')"]`).classList.add('active');
  }