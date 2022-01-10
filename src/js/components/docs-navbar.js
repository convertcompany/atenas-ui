Vue.component("docs-navbar", {
    template : `
        <nav class="at-navbar">
            <div class="at-u-container">
                <div class="at-navbar-logo-container">
                    <img :src="path+'../../src/assets/logo-light.svg'" class="at-navbar-logo" at-hide-dark>
                    <img :src="path+'../../src/assets/logo-dark.svg'" class="at-navbar-logo" at-show-dark>
                </div>
                <div class="at-navbar-items">
                    <a  :href="path+'../'"><div class="at-navbar-item" :at-active="(active == 'home')" >Home</div></a>
                    <a  :href="path+'../installation/'"><div class="at-navbar-item" :at-active="(active == 'installation')" >Instalação</div></a>
                    <a  :href="path+'../css/'"><div class="at-navbar-item" :at-active="(active == 'css')" >Tema</div></a>
                    <a  :href="path+'../components/'"><div class="at-navbar-item" :at-active="(active == 'components')" >Componentes</div></a>
                    <a  :href="path+'../css/'"><div class="at-navbar-item" :at-active="(active == 'layout')" >Layout</div></a>
                    <div class="at-navbar-item navbar-icon" @click="( $parent.system.darkmode = !$parent.system.darkmode )"><i :class="($parent.system.darkmode) ? 'bx bxs-moon' : 'bx bxs-sun'"></i></div>
                </div>
            </div>
        </nav>
    `,
    props : ['active', 'path']
})