Vue.component("docs-footer", {
    template : `
    <div>
        <div class="at-hero footer" at-bg="primary">
            <div class="at-hero-content at-u-flex-column" at-size="medium">
                <h1 class="at-u-col-12 at-u-my2 at-u-border-bottom" at-border="transparent-white" at-tx="white" at-left>O que visualizar na sequência?</h1>
                <div class="at-u-flex at-u-col-12">
                    <div class="at-u-col-4">
                        <p class="at-u-semibold at-u-h4" at-tx="white">Instalando o Atenas UI</p>
                        <a :href="path + '../installation#package'" at-tx="transparent-white" class="at-u-opacity-80 at-u-block">Pacote</a>
                        <a :href="path + '../css#extra'" at-tx="transparent-white" class="at-u-opacity-80 at-u-block">Recursos sugeridos</a><br>
                        <p class="at-u-semibold at-u-h4" at-tx="white">Customizando o Atenas UI</p>
                        <a :href="path + '../css#darkmode'" at-tx="transparent-white" class="at-u-opacity-80 at-u-block">Darkmode</a>
                        <a :href="path + '../css#colors'" at-tx="transparent-white" class="at-u-opacity-80 at-u-block">Cores</a>
                    </div>
                    <div class="at-u-col-4">
                        <p class="at-u-semibold at-u-h4" at-tx="white">Componentes</p>
                        <a at-tx="transparent-white" :href="path + '../components/buttons/'" class="at-u-opacity-80 at-u-block">Botões</a>
                        <a at-tx="transparent-white" :href="path + '../components/hero/'"class="at-u-opacity-80 at-u-block">Hero</a>
                        <a at-tx="transparent-white" :href="path + '../components/cards/'"class="at-u-opacity-80 at-u-block">Cards</a>
                        <a at-tx="transparent-white" :href="path + '../components/sidebar/'"class="at-u-opacity-80 at-u-block">Sidebar</a>
                        <a at-tx="transparent-white" :href="path + '../components/navbar/'"class="at-u-opacity-80 at-u-block">Navbar</a>
                        <a at-tx="transparent-white" :href="path + '../components/tables/'"class="at-u-opacity-80 at-u-block">Tabelas</a>
                        <a at-tx="transparent-white" :href="path + '../components/alerts/'"class="at-u-opacity-80 at-u-block">Alertas</a>
                        <a at-tx="transparent-white" :href="path + '../components/fields/'"class="at-u-opacity-80 at-u-block">Formulários</a>
                        <a at-tx="transparent-white" :href="path + '../components/modal/'"class="at-u-opacity-80 at-u-block">Modal</a>
                        <a at-tx="transparent-white" :href="path + '../components/lists/'"class="at-u-opacity-80 at-u-block">Listas</a>
                        <a at-tx="transparent-white" :href="path + '../components/keys/'"class="at-u-opacity-80 at-u-block">Teclas</a>
                        <a at-tx="transparent-white" :href="path + '../components/glass/'"class="at-u-opacity-80 at-u-block">Glassmorphism</a>
                        <a at-tx="transparent-white" :href="path + '../components/badges/'"class="at-u-opacity-80 at-u-block">Badge</a>
                        <a at-tx="transparent-white" :href="path + '../components/profile/'"class="at-u-opacity-80 at-u-block">Perfil</a>
                    </div>
                    <div class="at-u-col-4">
                        <p class="at-u-semibold at-u-h4" at-tx="white">Layout / Utils</p>
                        <a at-tx="transparent-white" class="at-u-opacity-80 at-u-block">Shadows</a>
                        <a at-tx="transparent-white" class="at-u-opacity-80 at-u-block">Backgrounds</a>
                        <a at-tx="transparent-white" class="at-u-opacity-80 at-u-block">Container</a>
                        <a at-tx="transparent-white" class="at-u-opacity-80 at-u-block">Padding</a>
                        <a at-tx="transparent-white" class="at-u-opacity-80 at-u-block">Margin</a>
                        <a at-tx="transparent-white" class="at-u-opacity-80 at-u-block">Separador</a>
                        <a at-tx="transparent-white" class="at-u-opacity-80 at-u-block">Cores</a>
                        <a at-tx="transparent-white" class="at-u-opacity-80 at-u-block">Flex</a>
                        <a at-tx="transparent-white" class="at-u-opacity-80 at-u-block">Alinhamento</a>
                        <a at-tx="transparent-white" class="at-u-opacity-80 at-u-block">Posicionamento</a>
                        <a at-tx="transparent-white" class="at-u-opacity-80 at-u-block">Opacidade</a>
                        <a at-tx="transparent-white" class="at-u-opacity-80 at-u-block">Tipografia</a>
                        <a at-tx="transparent-white" class="at-u-opacity-80 at-u-block">Largura</a>
                        <a at-tx="transparent-white" class="at-u-opacity-80 at-u-block">Borda</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="at-hero" style="background-color: var(--at-blue-700);">
            <div class="at-hero-content" at-size="small" at-left>
                <img :src="path+'../../src/assets/logo-dark.svg'" style="width: 150px;">
                <div class="at-u-flex-grow" at-right>
                    <b at-tx="white">Atenas UI</b><br>
                    <small at-tx="transparent-white">Todos os direitos reservados | convert® company</small>
                </div>
            </div>
        </div>
    </div>
    `,
    props : ['path']
})