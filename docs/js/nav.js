// NAV NOT LOGGEDIN

// export const navContainer = document.getElementById('nav-container')

// if(navContainer) {
//         navContainer.innerHTML = `
//         <nav class="nav-principale">
//             <a href="index.html"><img src="../assets/logo-zios.png" width=40rem alt="logo zi open source"></a>

//             <a href="index.html"><img src="../assets/icon-profile.png" width=35rem alt="logo zi open source"></a>
//       </nav>`

// }



// NAV LOGGEDIN / USER - READER



export const navContainer = document.getElementById('nav-container')

if(navContainer) {
        navContainer.innerHTML = `
        <nav class="nav-principale">
        <div class="nav-container">
            <a href="index.html"><img src="../assets/logo-zios.png" width=40rem alt="logo zi open source"></a>
<button class="menu-btn" id="menu-btn" aria-label="ouvrir la sidebar"><img src="../assets/nav-loggedin.png" alt=""></button>
            <a href="index.html"><img src="../assets/icon-profile.png" width=35rem alt="logo zi open source"></a>
      </nav></div>`

}


export const navSidebar = document.getElementById('sidebar-container')

if(navSidebar) {
        navSidebar.innerHTML = `
    <nav class="nav-profile-redacteur">
      <a href="index.html"
        ><img
          src="../assets/logo-zios.png"
          width="40rem"
          alt="logo zi open source"
      /></a>

      <div class="nav-redacteur" id="nav-redacteur">
        <ul class="nav-liste1" id="nav-liste1">
          <li>
            <a href="accueil.html"
              ><img
                src="../assets/icon-home.png"
                alt="icon accueil" />accueil</a
            >
          </li>
          <li>
            <a href="profil.html"
              ><img src="../assets/icon-profile.png" alt="" />profil</a
            >
          </li>
          <li>
            <a href="ecrire.html"
              ><img
                src="../assets/icon-write.png"
                alt="icone ecrire" />écrire</a
            >
          </li>
          <li>
            <a href="sauvegarde.html"
              ><img src="../assets/icon-save.png" alt="" />sauvegardés</a
            >
          </li>
        </ul>
        <hr>

        <ul class="nav-liste2" id="nav-liste2">
          <li>
            <a href="reglages.html"
              ><img src="../assets/icon-settings.png" alt="icone" />réglages</a
            >
          </li>
          <li>
            <a href="support.html"
              ><img src="../assets/icon-help.png" alt="icone" />support</a
            >
          </li>
          <li>
            <a href="logout.html"
              ><img src="../assets/icon-logout.png" alt="icone" />déconnexion</a
            >
          </li>
        </ul>
      </div>
    </nav>`

}


