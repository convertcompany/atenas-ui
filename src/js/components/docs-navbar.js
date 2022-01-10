Vue.component("docs-navbar", {
    template : `
        <nav class="at-navbar">
            <div class="at-u-container">
                <div class="at-navbar-logo-container">
                    <a href="/src/">
                        <img src="/src/assets/logo-light.svg" class="at-navbar-logo" at-hide-dark>
                        <img src="/src/assets/logo-dark.svg" class="at-navbar-logo" at-show-dark>
                    </a>
                </div>
                <div class="at-navbar-items">
                    <a  href="/src/"><div class="at-navbar-item" :at-active="(active == 'home')" >Home</div></a>
                    <a  href="/src/docs/installation/"><div class="at-navbar-item" :at-active="(active == 'installation')" >Instalação</div></a>
                    <a  href="/src/docs/css/"><div class="at-navbar-item" :at-active="(active == 'css')" >Tema</div></a>
                    <a  href="/src/docs/components/"><div class="at-navbar-item" :at-active="(active == 'components')" >Componentes</div></a>
                    <a  href="/src/docs/css/"><div class="at-navbar-item" :at-active="(active == 'layout')" >Layout</div></a>
                    <div class="at-navbar-item navbar-icon" @click="( $parent.system.darkmode = !$parent.system.darkmode )"><i :class="($parent.system.darkmode) ? 'bx bxs-moon' : 'bx bxs-sun'"></i></div>
                </div>
            </div>
        </nav>
    `,
    props : ['active', 'path']
})