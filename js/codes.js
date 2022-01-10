const codes = {
    installation : {
        add : 
            `<!-- Carregando atenas remotamente via CDN -->\n`+
            `<link rel="stylesheet" type="text/css" href="https://cdn.convert.app.br/atenas.min.css"/>\n`+
            `<!-- Carregando atenas localmente -->\n`+
            `<link rel="stylesheet" type="text/css" href="../css/atenas.min.css"/>`,
        extra : 
            `<!-- Carregando fonte Poppins via Google Fonts -->\n`+
            `<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>\n`+
            `<!-- Carregando fonte Fira Code via Google Fonts, Caso desejar usar syntax highlight -->\n`+
            `<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400&display=swap" rel="stylesheet"/>\n`+
            `<!-- Carregando icones da biblioteca Box Icons -->\n`+
            `<link href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" rel="stylesheet"/>\n`,
        done : 
            `<!-- Criando um botão com atenas ui -->\n`+
            `<button class="at-button" at-bg="primary">Hello World!</button>\n`
    },
    css : {
        darkmodecss: 
        `[at-dark] .button-toggle{\n`+
        `    background: var(--at-amber-400);\n`+
        `    color: #FFF;\n`+
        `}\n`,
        darkmode: 
        `<!-- Adicionando o atributo [at-dark] ao body -->\n`+
        `<body at-dark="true">\n`+
        `    <div class="at-card at-u-p2">\n`+
        `        <!-- Esconde o h3 no modo dark -->\n`+
        `        <h3 at-hide-dark>Card de Demonstração Light</h3>\n`+
        `        <!-- Exibe o h3 no modo dark -->\n`+
        `        <h3 at-show-dark>Card de Demonstração Dark</h3>\n`+
        `        <p>Esse é um card de exemplo clique abaixo para alternar o tema!</p>\n`+
        `        <button class="at-button at-u-mt1" at-bg="primary">Alternar</button>\n`+
        `    </div>\n`+
        `<body>\n`,
        darkmodefalse: 
        `<!-- Removendo o atributo [at-dark] do body -->\n`+
        `<body>\n`+
        `    <div class="at-card at-u-p2">\n`+
        `        <!-- Esconde o h3 no modo dark -->\n`+
        `        <h3 at-hide-dark>Card de Demonstração Light</h3>\n`+
        `        <!-- Exibe o h3 no modo dark -->\n`+
        `        <h3 at-show-dark>Card de Demonstração Dark</h3>\n`+
        `        <p>Esse é um card de exemplo clique abaixo para alternar o tema!</p>\n`+
        `        <button class="at-button at-u-mt1" at-bg="primary">Alternar</button>\n`+
        `    </div>\n`+
        `<body>\n`,
        test : 
            `.my-button{\n`+
            `   color : var(--at-slate-400);\n`+
            `   font-size : var(--at-font-size);\n`+
            `   background-color : var(--at-slate);\n`+
            `   border-radius : var(--at-border-radius);\n`+
            `   padding: 5px 10px;\n`+
            `}\n`
        ,
        variables : 
        `<span class="font-cyan">:</span><span class="font-green">root</span>{\n`+
        `    --at-slate : #95A7B82C; <div class="badge-circle-color" style="background: #95A7B82C;"></div>\n`+
        `    --at-slate-50 : #F8FAFC; <div class="badge-circle-color" style="background: #F8FAFC;"></div>\n`+
        `    --at-slate-100 : #F1F5F9; <div class="badge-circle-color" style="background: #F1F5F9;"></div>\n`+
        `    --at-slate-200 : #E2E8F0; <div class="badge-circle-color" style="background: #E2E8F0;"></div>\n`+
        `    --at-slate-300 : #CBD5E1; <div class="badge-circle-color" style="background: #CBD5E1;"></div>\n`+
        `    --at-slate-400 : #9FAFC4; <div class="badge-circle-color" style="background: #9FAFC4;"></div>\n`+
        `    --at-slate-500 : #64748B; <div class="badge-circle-color" style="background: #64748B;"></div>\n`+
        `    --at-slate-600 : #475569; <div class="badge-circle-color" style="background: #475569;"></div>\n`+
        `    --at-slate-700 : #334155; <div class="badge-circle-color" style="background: #334155;"></div>\n`+
        `    --at-slate-800 : #1E293B; <div class="badge-circle-color" style="background: #1E293B;"></div>\n`+
        `    --at-slate-900 : #0F172A; <div class="badge-circle-color" style="background: #0F172A;"></div>\n`+
        `    --at-slate-transparent : #64748B2C; <div class="badge-circle-color" style="background: #64748B2C;"></div>\n`+
        `    --at-gray-50 : #F9FAFB; <div class="badge-circle-color" style="background: #F9FAFB;"></div>\n`+
        `    --at-gray-100 : #F3F4F6; <div class="badge-circle-color" style="background: #F3F4F6;"></div>\n`+
        `    --at-gray-200 : #E5E7EB; <div class="badge-circle-color" style="background: #E5E7EB;"></div>\n`+
        `    --at-gray-300 : #D1D5DB; <div class="badge-circle-color" style="background: #D1D5DB;"></div>\n`+
        `    --at-gray-400 : #9CA3AF; <div class="badge-circle-color" style="background: #9CA3AF;"></div>\n`+
        `    --at-gray-500 : #6B7280; <div class="badge-circle-color" style="background: #6B7280;"></div>\n`+
        `    --at-gray-600 : #4B5563; <div class="badge-circle-color" style="background: #4B5563;"></div>\n`+
        `    --at-gray-700 : #374151; <div class="badge-circle-color" style="background: #374151;"></div>\n`+
        `    --at-gray-800 : #1F2937; <div class="badge-circle-color" style="background: #1F2937;"></div>\n`+
        `    --at-gray-900 : #111827; <div class="badge-circle-color" style="background: #111827;"></div>\n`+
        `    --at-gray-transparent : #6B72802C; <div class="badge-circle-color" style="background: #6B72802C;"></div>\n`+
        `    --at-zinc-50 : #FAFAFA; <div class="badge-circle-color" style="background: #FAFAFA;"></div>\n`+
        `    --at-zinc-100 : #F4F4F5; <div class="badge-circle-color" style="background: #F4F4F5;"></div>\n`+
        `    --at-zinc-200 : #E4E4E7; <div class="badge-circle-color" style="background: #E4E4E7;"></div>\n`+
        `    --at-zinc-300 : #D4D4D8; <div class="badge-circle-color" style="background: #D4D4D8;"></div>\n`+
        `    --at-zinc-400 : #A1A1AA; <div class="badge-circle-color" style="background: #A1A1AA;"></div>\n`+
        `    --at-zinc-500 : #71717A; <div class="badge-circle-color" style="background: #71717A;"></div>\n`+
        `    --at-zinc-600 : #52525B; <div class="badge-circle-color" style="background: #52525B;"></div>\n`+
        `    --at-zinc-700 : #3F3F46; <div class="badge-circle-color" style="background: #3F3F46;"></div>\n`+
        `    --at-zinc-800 : #27272A; <div class="badge-circle-color" style="background: #27272A;"></div>\n`+
        `    --at-zinc-900 : #18181B; <div class="badge-circle-color" style="background: #18181B;"></div>\n`+
        `    --at-zinc-transparent : #71717A2C; <div class="badge-circle-color" style="background: #71717A2C;"></div>\n`+
        `    --at-neutral-50 : #FAFAFA; <div class="badge-circle-color" style="background: #FAFAFA;"></div>\n`+
        `    --at-neutral-100 : #F5F5F5; <div class="badge-circle-color" style="background: #F5F5F5;"></div>\n`+
        `    --at-neutral-200 : #E5E5E5; <div class="badge-circle-color" style="background: #E5E5E5;"></div>\n`+
        `    --at-neutral-300 : #D4D4D4; <div class="badge-circle-color" style="background: #D4D4D4;"></div>\n`+
        `    --at-neutral-400 : #A3A3A3; <div class="badge-circle-color" style="background: #A3A3A3;"></div>\n`+
        `    --at-neutral-500 : #737373; <div class="badge-circle-color" style="background: #737373;"></div>\n`+
        `    --at-neutral-600 : #525252; <div class="badge-circle-color" style="background: #525252;"></div>\n`+
        `    --at-neutral-700 : #404040; <div class="badge-circle-color" style="background: #404040;"></div>\n`+
        `    --at-neutral-800 : #262626; <div class="badge-circle-color" style="background: #262626;"></div>\n`+
        `    --at-neutral-900 : #171717; <div class="badge-circle-color" style="background: #171717;"></div>\n`+
        `    --at-neutral-transparent : #7373732C; <div class="badge-circle-color" style="background: #7373732C;"></div>\n`+
        `    --at-stone-50 : #FAFAF9; <div class="badge-circle-color" style="background: #FAFAF9;"></div>\n`+
        `    --at-stone-100 : #F5F5F4; <div class="badge-circle-color" style="background: #F5F5F4;"></div>\n`+
        `    --at-stone-200 : #E7E5E4; <div class="badge-circle-color" style="background: #E7E5E4;"></div>\n`+
        `    --at-stone-300 : #D6D3D1; <div class="badge-circle-color" style="background: #D6D3D1;"></div>\n`+
        `    --at-stone-400 : #A8A29E; <div class="badge-circle-color" style="background: #A8A29E;"></div>\n`+
        `    --at-stone-500 : #78716C; <div class="badge-circle-color" style="background: #78716C;"></div>\n`+
        `    --at-stone-600 : #57534E; <div class="badge-circle-color" style="background: #57534E;"></div>\n`+
        `    --at-stone-700 : #44403C; <div class="badge-circle-color" style="background: #44403C;"></div>\n`+
        `    --at-stone-800 : #292524; <div class="badge-circle-color" style="background: #292524;"></div>\n`+
        `    --at-stone-900 : #1C1917; <div class="badge-circle-color" style="background: #1C1917;"></div>\n`+
        `    --at-stone-transparent : #78716C2C; <div class="badge-circle-color" style="background: #78716C2C;"></div>\n`+
        `    --at-red-50 : #FEF2F2; <div class="badge-circle-color" style="background: #FEF2F2;"></div>\n`+
        `    --at-red-100 : #FEE2E2; <div class="badge-circle-color" style="background: #FEE2E2;"></div>\n`+
        `    --at-red-200 : #FECACA; <div class="badge-circle-color" style="background: #FECACA;"></div>\n`+
        `    --at-red-300 : #FCA5A5; <div class="badge-circle-color" style="background: #FCA5A5;"></div>\n`+
        `    --at-red-400 : #F87171; <div class="badge-circle-color" style="background: #F87171;"></div>\n`+
        `    --at-red-500 : #EF4461; <div class="badge-circle-color" style="background: #EF4461;"></div>\n`+
        `    --at-red-600 : #DC2626; <div class="badge-circle-color" style="background: #DC2626;"></div>\n`+
        `    --at-red-700 : #B91C1C; <div class="badge-circle-color" style="background: #B91C1C;"></div>\n`+
        `    --at-red-800 : #991B1B; <div class="badge-circle-color" style="background: #991B1B;"></div>\n`+
        `    --at-red-900 : #7F1D1D; <div class="badge-circle-color" style="background: #7F1D1D;"></div>\n`+
        `    --at-red-transparent : #EF44612C; <div class="badge-circle-color" style="background: #EF44612C;"></div>\n`+
        `    --at-orange-50 : #FFF7ED; <div class="badge-circle-color" style="background: #FFF7ED;"></div>\n`+
        `    --at-orange-100 : #FFEDD5; <div class="badge-circle-color" style="background: #FFEDD5;"></div>\n`+
        `    --at-orange-200 : #FED7AA; <div class="badge-circle-color" style="background: #FED7AA;"></div>\n`+
        `    --at-orange-300 : #FDBA74; <div class="badge-circle-color" style="background: #FDBA74;"></div>\n`+
        `    --at-orange-400 : #FB923C; <div class="badge-circle-color" style="background: #FB923C;"></div>\n`+
        `    --at-orange-500 : #F97316; <div class="badge-circle-color" style="background: #F97316;"></div>\n`+
        `    --at-orange-600 : #EA580C; <div class="badge-circle-color" style="background: #EA580C;"></div>\n`+
        `    --at-orange-700 : #C2410C; <div class="badge-circle-color" style="background: #C2410C;"></div>\n`+
        `    --at-orange-800 : #9A3412; <div class="badge-circle-color" style="background: #9A3412;"></div>\n`+
        `    --at-orange-900 : #7C2D12; <div class="badge-circle-color" style="background: #7C2D12;"></div>\n`+
        `    --at-orange-transparent : #F973162C; <div class="badge-circle-color" style="background: #F973162C;"></div>\n`+
        `    --at-amber-50 : #FFFBEB; <div class="badge-circle-color" style="background: #FFFBEB;"></div>\n`+
        `    --at-amber-100 : #FEF3C7; <div class="badge-circle-color" style="background: #FEF3C7;"></div>\n`+
        `    --at-amber-200 : #FDE68A; <div class="badge-circle-color" style="background: #FDE68A;"></div>\n`+
        `    --at-amber-300 : #FCD34D; <div class="badge-circle-color" style="background: #FCD34D;"></div>\n`+
        `    --at-amber-400 : #FBBF24; <div class="badge-circle-color" style="background: #FBBF24;"></div>\n`+
        `    --at-amber-500 : #F59E0B; <div class="badge-circle-color" style="background: #F59E0B;"></div>\n`+
        `    --at-amber-600 : #D97706; <div class="badge-circle-color" style="background: #D97706;"></div>\n`+
        `    --at-amber-700 : #B45309; <div class="badge-circle-color" style="background: #B45309;"></div>\n`+
        `    --at-amber-800 : #92400E; <div class="badge-circle-color" style="background: #92400E;"></div>\n`+
        `    --at-amber-900 : #78350F; <div class="badge-circle-color" style="background: #78350F;"></div>\n`+
        `    --at-amber-transparent : #F59E0B2C; <div class="badge-circle-color" style="background: #F59E0B2C;"></div>\n`+
        `    --at-yellow-50 : #FEFCE8; <div class="badge-circle-color" style="background: #FEFCE8;"></div>\n`+
        `    --at-yellow-100 : #FEF9C3; <div class="badge-circle-color" style="background: #FEF9C3;"></div>\n`+
        `    --at-yellow-200 : #FEF08A; <div class="badge-circle-color" style="background: #FEF08A;"></div>\n`+
        `    --at-yellow-300 : #FDE047; <div class="badge-circle-color" style="background: #FDE047;"></div>\n`+
        `    --at-yellow-400 : #FACC15; <div class="badge-circle-color" style="background: #FACC15;"></div>\n`+
        `    --at-yellow-500 : #EAB308; <div class="badge-circle-color" style="background: #EAB308;"></div>\n`+
        `    --at-yellow-600 : #CA8A04; <div class="badge-circle-color" style="background: #CA8A04;"></div>\n`+
        `    --at-yellow-700 : #A16207; <div class="badge-circle-color" style="background: #A16207;"></div>\n`+
        `    --at-yellow-800 : #854D0E; <div class="badge-circle-color" style="background: #854D0E;"></div>\n`+
        `    --at-yellow-900 : #713F12; <div class="badge-circle-color" style="background: #713F12;"></div>\n`+
        `    --at-yellow-transparent : #EAB3082C; <div class="badge-circle-color" style="background: #EAB3082C;"></div>\n`+
        `    --at-lime-50 : #F7FEE7; <div class="badge-circle-color" style="background: #F7FEE7;"></div>\n`+
        `    --at-lime-100 : #ECFCCB; <div class="badge-circle-color" style="background: #ECFCCB;"></div>\n`+
        `    --at-lime-200 : #D9F99D; <div class="badge-circle-color" style="background: #D9F99D;"></div>\n`+
        `    --at-lime-300 : #BEF264; <div class="badge-circle-color" style="background: #BEF264;"></div>\n`+
        `    --at-lime-400 : #A3E635; <div class="badge-circle-color" style="background: #A3E635;"></div>\n`+
        `    --at-lime-500 : #84CC16; <div class="badge-circle-color" style="background: #84CC16;"></div>\n`+
        `    --at-lime-600 : #65A30D; <div class="badge-circle-color" style="background: #65A30D;"></div>\n`+
        `    --at-lime-700 : #4D7C0F; <div class="badge-circle-color" style="background: #4D7C0F;"></div>\n`+
        `    --at-lime-800 : #3F6212; <div class="badge-circle-color" style="background: #3F6212;"></div>\n`+
        `    --at-lime-900 : #365314; <div class="badge-circle-color" style="background: #365314;"></div>\n`+
        `    --at-lime-transparent : #84CC162C; <div class="badge-circle-color" style="background: #84CC162C;"></div>\n`+
        `    --at-green-50 : #F0FDF4; <div class="badge-circle-color" style="background: #F0FDF4;"></div>\n`+
        `    --at-green-100 : #DCFCE7; <div class="badge-circle-color" style="background: #DCFCE7;"></div>\n`+
        `    --at-green-200 : #BBF7D0; <div class="badge-circle-color" style="background: #BBF7D0;"></div>\n`+
        `    --at-green-300 : #86EFAC; <div class="badge-circle-color" style="background: #86EFAC;"></div>\n`+
        `    --at-green-400 : #4ADE80; <div class="badge-circle-color" style="background: #4ADE80;"></div>\n`+
        `    --at-green-500 : #22C55E; <div class="badge-circle-color" style="background: #22C55E;"></div>\n`+
        `    --at-green-600 : #16A34A; <div class="badge-circle-color" style="background: #16A34A;"></div>\n`+
        `    --at-green-700 : #15803D; <div class="badge-circle-color" style="background: #15803D;"></div>\n`+
        `    --at-green-800 : #166534; <div class="badge-circle-color" style="background: #166534;"></div>\n`+
        `    --at-green-900 : #14532D; <div class="badge-circle-color" style="background: #14532D;"></div>\n`+
        `    --at-green-transparent : #22C55E2C; <div class="badge-circle-color" style="background: #22C55E2C;"></div>\n`+
        `    --at-emerald-50 : #ECFDF5; <div class="badge-circle-color" style="background: #ECFDF5;"></div>\n`+
        `    --at-emerald-100 : #D1FAE5; <div class="badge-circle-color" style="background: #D1FAE5;"></div>\n`+
        `    --at-emerald-200 : #A7F3D0; <div class="badge-circle-color" style="background: #A7F3D0;"></div>\n`+
        `    --at-emerald-300 : #6EE7B7; <div class="badge-circle-color" style="background: #6EE7B7;"></div>\n`+
        `    --at-emerald-400 : #34D399; <div class="badge-circle-color" style="background: #34D399;"></div>\n`+
        `    --at-emerald-500 : #10B981; <div class="badge-circle-color" style="background: #10B981;"></div>\n`+
        `    --at-emerald-600 : #059669; <div class="badge-circle-color" style="background: #059669;"></div>\n`+
        `    --at-emerald-700 : #047857; <div class="badge-circle-color" style="background: #047857;"></div>\n`+
        `    --at-emerald-800 : #065F46; <div class="badge-circle-color" style="background: #065F46;"></div>\n`+
        `    --at-emerald-900 : #064E3B; <div class="badge-circle-color" style="background: #064E3B;"></div>\n`+
        `    --at-emerald-transparent : #10B9812C; <div class="badge-circle-color" style="background: #10B9812C;"></div>\n`+
        `    --at-teal-50 : #F0FDFA; <div class="badge-circle-color" style="background: #F0FDFA;"></div>\n`+
        `    --at-teal-100 : #C2F5EA; <div class="badge-circle-color" style="background: #C2F5EA;"></div>\n`+
        `    --at-teal-200 : #99F6E4; <div class="badge-circle-color" style="background: #99F6E4;"></div>\n`+
        `    --at-teal-300 : #5EEAD4; <div class="badge-circle-color" style="background: #5EEAD4;"></div>\n`+
        `    --at-teal-400 : #2DD4BF; <div class="badge-circle-color" style="background: #2DD4BF;"></div>\n`+
        `    --at-teal-500 : #14B8A6; <div class="badge-circle-color" style="background: #14B8A6;"></div>\n`+
        `    --at-teal-600 : #0D9488; <div class="badge-circle-color" style="background: #0D9488;"></div>\n`+
        `    --at-teal-700 : #0F766E; <div class="badge-circle-color" style="background: #0F766E;"></div>\n`+
        `    --at-teal-800 : #115E59; <div class="badge-circle-color" style="background: #115E59;"></div>\n`+
        `    --at-teal-900 : #134E4A; <div class="badge-circle-color" style="background: #134E4A;"></div>\n`+
        `    --at-teal-transparent : #14B8A62C; <div class="badge-circle-color" style="background: #14B8A62C;"></div>\n`+
        `    --at-cyan-50 : #ECFEFF; <div class="badge-circle-color" style="background: #ECFEFF;"></div>\n`+
        `    --at-cyan-100 : #CFFAFE; <div class="badge-circle-color" style="background: #CFFAFE;"></div>\n`+
        `    --at-cyan-200 : #A5F3FC; <div class="badge-circle-color" style="background: #A5F3FC;"></div>\n`+
        `    --at-cyan-300 : #67E8F9; <div class="badge-circle-color" style="background: #67E8F9;"></div>\n`+
        `    --at-cyan-400 : #22D3EE; <div class="badge-circle-color" style="background: #22D3EE;"></div>\n`+
        `    --at-cyan-500 : #06B6D4; <div class="badge-circle-color" style="background: #06B6D4;"></div>\n`+
        `    --at-cyan-600 : #0891B2; <div class="badge-circle-color" style="background: #0891B2;"></div>\n`+
        `    --at-cyan-700 : #0E7490; <div class="badge-circle-color" style="background: #0E7490;"></div>\n`+
        `    --at-cyan-800 : #155E75; <div class="badge-circle-color" style="background: #155E75;"></div>\n`+
        `    --at-cyan-900 : #164E63; <div class="badge-circle-color" style="background: #164E63;"></div>\n`+
        `    --at-cyan-transparent : #06B6D42C; <div class="badge-circle-color" style="background: #06B6D42C;"></div>\n`+
        `    --at-sky-50 : #F0F9FF; <div class="badge-circle-color" style="background: #F0F9FF;"></div>\n`+
        `    --at-sky-100 : #E0F2FE; <div class="badge-circle-color" style="background: #E0F2FE;"></div>\n`+
        `    --at-sky-200 : #BAE6FD; <div class="badge-circle-color" style="background: #BAE6FD;"></div>\n`+
        `    --at-sky-300 : #7DD3FC; <div class="badge-circle-color" style="background: #7DD3FC;"></div>\n`+
        `    --at-sky-400 : #38BDF8; <div class="badge-circle-color" style="background: #38BDF8;"></div>\n`+
        `    --at-sky-500 : #0EA5E9; <div class="badge-circle-color" style="background: #0EA5E9;"></div>\n`+
        `    --at-sky-600 : #0284C7; <div class="badge-circle-color" style="background: #0284C7;"></div>\n`+
        `    --at-sky-700 : #0369A1; <div class="badge-circle-color" style="background: #0369A1;"></div>\n`+
        `    --at-sky-800 : #075985; <div class="badge-circle-color" style="background: #075985;"></div>\n`+
        `    --at-sky-900 : #0C4A6E; <div class="badge-circle-color" style="background: #0C4A6E;"></div>\n`+
        `    --at-sky-transparent : #0EA5E92C; <div class="badge-circle-color" style="background: #0EA5E92C;"></div>\n`+
        `    --at-blue-50 : #EFF6FF; <div class="badge-circle-color" style="background: #EFF6FF;"></div>\n`+
        `    --at-blue-100 : #DBEAFE; <div class="badge-circle-color" style="background: #DBEAFE;"></div>\n`+
        `    --at-blue-200 : #BFDBFE; <div class="badge-circle-color" style="background: #BFDBFE;"></div>\n`+
        `    --at-blue-300 : #93C5FD; <div class="badge-circle-color" style="background: #93C5FD;"></div>\n`+
        `    --at-blue-400 : #60A5FA; <div class="badge-circle-color" style="background: #60A5FA;"></div>\n`+
        `    --at-blue-500 : #1A72FF; <div class="badge-circle-color" style="background: #1A72FF;"></div>\n`+
        `    --at-blue-600 : #2563EB; <div class="badge-circle-color" style="background: #2563EB;"></div>\n`+
        `    --at-blue-700 : #1D4ED8; <div class="badge-circle-color" style="background: #1D4ED8;"></div>\n`+
        `    --at-blue-800 : #1E40AF; <div class="badge-circle-color" style="background: #1E40AF;"></div>\n`+
        `    --at-blue-900 : #1E3A8A; <div class="badge-circle-color" style="background: #1E3A8A;"></div>\n`+
        `    --at-blue-transparent : #3B82F62C; <div class="badge-circle-color" style="background: #3B82F62C;"></div>\n`+
        `    --at-indigo-50 : #EEF2FF; <div class="badge-circle-color" style="background: #EEF2FF;"></div>\n`+
        `    --at-indigo-100 : #E0E7FF; <div class="badge-circle-color" style="background: #E0E7FF;"></div>\n`+
        `    --at-indigo-200 : #C7D2FE; <div class="badge-circle-color" style="background: #C7D2FE;"></div>\n`+
        `    --at-indigo-300 : #A5B4FC; <div class="badge-circle-color" style="background: #A5B4FC;"></div>\n`+
        `    --at-indigo-400 : #818CF8; <div class="badge-circle-color" style="background: #818CF8;"></div>\n`+
        `    --at-indigo-500 : #6366F1; <div class="badge-circle-color" style="background: #6366F1;"></div>\n`+
        `    --at-indigo-600 : #4F46E5; <div class="badge-circle-color" style="background: #4F46E5;"></div>\n`+
        `    --at-indigo-700 : #4338CA; <div class="badge-circle-color" style="background: #4338CA;"></div>\n`+
        `    --at-indigo-800 : #3730A3; <div class="badge-circle-color" style="background: #3730A3;"></div>\n`+
        `    --at-indigo-900 : #312E81; <div class="badge-circle-color" style="background: #312E81;"></div>\n`+
        `    --at-indigo-transparent : #6366F12C; <div class="badge-circle-color" style="background: #6366F12C;"></div>\n`+
        `    --at-violet-50 : #F5F3FF; <div class="badge-circle-color" style="background: #F5F3FF;"></div>\n`+
        `    --at-violet-100 : #EDE9FE; <div class="badge-circle-color" style="background: #EDE9FE;"></div>\n`+
        `    --at-violet-200 : #DDD6FE; <div class="badge-circle-color" style="background: #DDD6FE;"></div>\n`+
        `    --at-violet-300 : #C4B5FD; <div class="badge-circle-color" style="background: #C4B5FD;"></div>\n`+
        `    --at-violet-400 : #A78BFA; <div class="badge-circle-color" style="background: #A78BFA;"></div>\n`+
        `    --at-violet-500 : #8B5CF6; <div class="badge-circle-color" style="background: #8B5CF6;"></div>\n`+
        `    --at-violet-600 : #7C3AED; <div class="badge-circle-color" style="background: #7C3AED;"></div>\n`+
        `    --at-violet-700 : #6D28D9; <div class="badge-circle-color" style="background: #6D28D9;"></div>\n`+
        `    --at-violet-800 : #5B21B6; <div class="badge-circle-color" style="background: #5B21B6;"></div>\n`+
        `    --at-violet-900 : #4C1D95; <div class="badge-circle-color" style="background: #4C1D95;"></div>\n`+
        `    --at-violet-transparent : #8B5CF62C; <div class="badge-circle-color" style="background: #8B5CF62C;"></div>\n`+
        `    --at-purple-50 : #FAF5FF; <div class="badge-circle-color" style="background: #FAF5FF;"></div>\n`+
        `    --at-purple-100 : #F3E8FF; <div class="badge-circle-color" style="background: #F3E8FF;"></div>\n`+
        `    --at-purple-200 : #E9D5FF; <div class="badge-circle-color" style="background: #E9D5FF;"></div>\n`+
        `    --at-purple-300 : #D8B4FE; <div class="badge-circle-color" style="background: #D8B4FE;"></div>\n`+
        `    --at-purple-400 : #C084FC; <div class="badge-circle-color" style="background: #C084FC;"></div>\n`+
        `    --at-purple-500 : #A855F7; <div class="badge-circle-color" style="background: #A855F7;"></div>\n`+
        `    --at-purple-600 : #9333EA; <div class="badge-circle-color" style="background: #9333EA;"></div>\n`+
        `    --at-purple-700 : #7E22CE; <div class="badge-circle-color" style="background: #7E22CE;"></div>\n`+
        `    --at-purple-800 : #6B21A8; <div class="badge-circle-color" style="background: #6B21A8;"></div>\n`+
        `    --at-purple-900 : #581C87; <div class="badge-circle-color" style="background: #581C87;"></div>\n`+
        `    --at-purple-transparent : #A855F72C; <div class="badge-circle-color" style="background: #A855F72C;"></div>\n`+
        `    --at-fuchsia-50 : #FDF4FF; <div class="badge-circle-color" style="background: #FDF4FF;"></div>\n`+
        `    --at-fuchsia-100 : #FAE8FF; <div class="badge-circle-color" style="background: #FAE8FF;"></div>\n`+
        `    --at-fuchsia-200 : #F5D0FE; <div class="badge-circle-color" style="background: #F5D0FE;"></div>\n`+
        `    --at-fuchsia-300 : #F0ABFC; <div class="badge-circle-color" style="background: #F0ABFC;"></div>\n`+
        `    --at-fuchsia-400 : #E879F9; <div class="badge-circle-color" style="background: #E879F9;"></div>\n`+
        `    --at-fuchsia-500 : #D946EF; <div class="badge-circle-color" style="background: #D946EF;"></div>\n`+
        `    --at-fuchsia-600 : #C026D3; <div class="badge-circle-color" style="background: #C026D3;"></div>\n`+
        `    --at-fuchsia-700 : #A21CAF; <div class="badge-circle-color" style="background: #A21CAF;"></div>\n`+
        `    --at-fuchsia-800 : #86198F; <div class="badge-circle-color" style="background: #86198F;"></div>\n`+
        `    --at-fuchsia-900 : #701A75; <div class="badge-circle-color" style="background: #701A75;"></div>\n`+
        `    --at-fuchsia-transparent : #D946EF2C; <div class="badge-circle-color" style="background: #D946EF2C;"></div>\n`+
        `    --at-pink-50 : #FDF2F8; <div class="badge-circle-color" style="background: #FDF2F8;"></div>\n`+
        `    --at-pink-100 : #FCE7F3; <div class="badge-circle-color" style="background: #FCE7F3;"></div>\n`+
        `    --at-pink-200 : #FBCFE8; <div class="badge-circle-color" style="background: #FBCFE8;"></div>\n`+
        `    --at-pink-300 : #F9A8D4; <div class="badge-circle-color" style="background: #F9A8D4;"></div>\n`+
        `    --at-pink-400 : #F472B6; <div class="badge-circle-color" style="background: #F472B6;"></div>\n`+
        `    --at-pink-500 : #EC4899; <div class="badge-circle-color" style="background: #EC4899;"></div>\n`+
        `    --at-pink-600 : #DB2777; <div class="badge-circle-color" style="background: #DB2777;"></div>\n`+
        `    --at-pink-700 : #BE185D; <div class="badge-circle-color" style="background: #BE185D;"></div>\n`+
        `    --at-pink-800 : #9D174D; <div class="badge-circle-color" style="background: #9D174D;"></div>\n`+
        `    --at-pink-900 : #831843; <div class="badge-circle-color" style="background: #831843;"></div>\n`+
        `    --at-pink-transparent : #EC48992C; <div class="badge-circle-color" style="background: #EC48992C;"></div>\n`+
        `    --at-rose-50 : #FFF1F2; <div class="badge-circle-color" style="background: #FFF1F2;"></div>\n`+
        `    --at-rose-100 : #FFE4E6; <div class="badge-circle-color" style="background: #FFE4E6;"></div>\n`+
        `    --at-rose-200 : #FECDD3; <div class="badge-circle-color" style="background: #FECDD3;"></div>\n`+
        `    --at-rose-300 : #FDA4AF; <div class="badge-circle-color" style="background: #FDA4AF;"></div>\n`+
        `    --at-rose-400 : #FB7185; <div class="badge-circle-color" style="background: #FB7185;"></div>\n`+
        `    --at-rose-500 : #F43F5E; <div class="badge-circle-color" style="background: #F43F5E;"></div>\n`+
        `    --at-rose-600 : #E11D48; <div class="badge-circle-color" style="background: #E11D48;"></div>\n`+
        `    --at-rose-700 : #BE123C; <div class="badge-circle-color" style="background: #BE123C;"></div>\n`+
        `    --at-rose-800 : #9F1239; <div class="badge-circle-color" style="background: #9F1239;"></div>\n`+
        `    --at-rose-900 : #881337; <div class="badge-circle-color" style="background: #881337;"></div>\n`+
        `    --at-rose-transparent : #F43F5E2C; <div class="badge-circle-color" style="background: #F43F5E2C;"></div>\n`+
        `    --at-border-radius :  <span class='font-cyan'>6</span><span class='font-pink'>px</span>;\n`+
        `    --at-bg-color : #FFFFFF; <div class="badge-circle-color" style="background: #FFFFFF;"></div>\n`+
        `    --at-title-color : #112233; <div class="badge-circle-color" style="background: #112233;"></div>\n`+
        `    --at-subtitle-color : #95A7B8; <div class="badge-circle-color" style="background: #95A7B8;"></div>\n`+
        `    --at-font-size : <span class='font-cyan'>14</span><span class='font-pink'>px</span>;\n`+
        `    --at-primary-400 : <span at-tx="cyan">var</span>(--at-blue-400); <div class="badge-circle-color" style="background: #60A5FA;"></div>\n`+
        `    --at-primary-500 : <span at-tx="cyan">var</span>(--at-blue-500); <div class="badge-circle-color" style="background: #1A72FF;"></div>\n`+
        `    --at-primary-600 : <span at-tx="cyan">var</span>(--at-blue-600); <div class="badge-circle-color" style="background: #2563EB;"></div>\n`+
        `    --at-primary-transparent : <span at-tx="cyan">var</span>(--at-blue-transparent); <div class="badge-circle-color" style="background: #3B82F62C;"></div>\n`+
        ` }
        `
    },
    components : {
        buttons : {
            first : `<button class="at-button">Hello World!</button>`,
            colors : 
            `<button class="at-button" at-bg="reverse-primary">Reverse Primary</button>\n`+
            `<button class="at-button" at-bg="primary">Primary</button>\n`+
            `<button class="at-button" at-bg="reverse-secondary">Reverse Secondary</button>\n`+
            `<button class="at-button" at-bg="secondary">Secondary</button>\n`+
            `<button class="at-button" at-bg="reverse-success">Reverse Success</button>\n`+
            `<button class="at-button" at-bg="success">Success</button>\n`+
            `<button class="at-button" at-bg="reverse-danger">Reverse Danger</button>\n`+
            `<button class="at-button" at-bg="danger">Danger</button>\n`+
            `<button class="at-button" at-bg="reverse-warning">Reverse Warning</button>\n`+
            `<button class="at-button" at-bg="warning">Warning</button>\n`+
            `<button class="at-button" at-bg="reverse-light-blue">Reverse Light Blue</button>\n`+
            `<button class="at-button" at-bg="light-blue">Light Blue</button>\n`,
            shadows : 
            `<button class="at-button" at-bg="primary" at-shadow="primary">Primary</<button>\n`+
            `<button class="at-button" at-bg="secondary" at-shadow="secondary">Secondary</<button>\n`+
            `<button class="at-button" at-bg="success" at-shadow="success">Success</<button>\n`+
            `<button class="at-button" at-bg="danger" at-shadow="danger">Danger</<button>\n`+
            `<button class="at-button" at-bg="warning" at-shadow="warning">Warning</<button>\n`+
            `<button class="at-button" at-bg="light-blue" at-shadow="light-blue">Light Blue</<button>\n`,
        },
        hero : {
            first:
            `<div class="at-hero" at-bg="primary">\n`+
            `   <div class="at-hero-content">\n`+
            `       ...\n`+
            `   </div>\n`+
            `</div>`,
            small : 
            `<div class="at-hero" at-bg="primary">\n`+
            `   <div class="at-hero-content" at-size="small">\n`+
            `       ...\n`+
            `   </div>\n`+
            `</div>`,
            medium : 
            `<div class="at-hero" at-bg="primary">\n`+
            `   <div class="at-hero-content" at-size="medium">\n`+
            `       ...\n`+
            `   </div>\n`+
            `</div>`,
            large : 
            `<div class="at-hero" at-bg="primary">\n`+
            `   <div class="at-hero-content" at-size="large">\n`+
            `       ...\n`+
            `   </div>\n`+
            `</div>`,
            fullscreen : 
            `<div class="at-hero" at-bg="primary">\n`+
            `   <div class="at-hero-content" at-size="fullscreen">\n`+
            `       ...\n`+
            `   </div>\n`+
            `</div>`,
        },
        cards : {
            preview :
            `<div class="at-u-flex">\n`+
            `    <div class="at-u-p1 at-u-col-4">\n`+
            `        <div class="at-card" at-shadow="small">\n`+
            `            <img src="../../../assets/demo.jpeg" class="at-card-image">\n`+
            `            <h2>Imagem</h2>\n`+
            `            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\n`+
            `        </div>\n`+
            `    </div>\n`+
            `    <div class="at-u-p1 at-u-col-4">\n`+
            `        <div class="at-card" at-shadow="small">\n`+
            `            <h2>Titulo</h2>\n`+
            `            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit....</p>\n`+
            `            <button class="at-button at-u-mt2" at-bg="primary">Saiba mais...</button>\n`+
            `        </div>\n`+
            `    </div>\n`+
            `    <div class="at-u-p1 at-u-col-4">\n`+
            `        <div class="at-card" at-shadow="small">\n`+
            `            <h2>Perfil do Cliente</h2><hr>\n`+
            `            <div class="at-profile">\n`+
            `                <div class="at-profile-avatar" at-bg="primary" at-profile-mockup="GL"></div>\n`+
            `                <div class="at-profile-info">\n`+
            `                    <b>João Silva</b>\n`+
            `                    <p>convert company</p>\n`+
            `                </div>\n`+
            `                <hr>\n`+
            `            </div>\n`+
            `            <div class="at-button-group">\n`+
            `                <button class="at-button">Anterior</button>\n`+
            `                <button class="at-button" at-bg="primary">Proximo</button>\n`+
            `            </div>\n`+
            `        </div>\n`+
            `    </div>\n`+
            `</div>\n`,
        },
        sidebar : {
            normal : 
            `<div class="at-page">\n`+
            `    <div class="at-sidebar">\n`+
            `        <img class="at-sidebar-logo" src="../../../assets/logo-dark.svg" at-show-dark></img>\n`+
            `        <img class="at-sidebar-logo" src="../../../assets/logo-light.svg" at-hide-dark></img>\n`+
            `        <img class="at-sidebar-logo-compact" src="../../../assets/icon.svg"></img>\n`+
            `        <div class="at-sidebar-items">\n`+
            `            <div class="at-sidebar-item" at-active><i class="bx bx-star"></i><span>Favoritos</span></div>\n`+
            `            <div class="at-sidebar-item"><i class="bx bx-category"></i><span>Dashboard</span></div>\n`+
            `            <div class="at-sidebar-item"><i class="bx bx-chat"></i><span>Mensagens</span></div>\n`+
            `            <div class="at-sidebar-item"><i class="bx bx-chart"></i><span>Analytics</span></div>\n`+
            `            <div class="at-sidebar-item"><i class="bx bx-cog"></i><span>Configurações</span></div>\n`+
            `        </div>\n`+
            `        <div class="at-sidebar-bottom ">\n`+
            `            <div class="at-profile">\n`+
            `                <div class="at-profile-avatar" at-bg="primary" at-profile-mockup="JS"></div>\n`+
            `                <div class="at-profile-info">\n`+
            `                    <b>João Silva</b>\n`+
            `                    <p>Clique para visualizar</p>\n`+
            `                </div>\n`+
            `            </div>\n`+
            `        </div>\n`+
            `    </div>\n`+
            `    <div class="at-page-content">\n`+
            `        <div class="at-u-p1">\n`+
            `            <h1>Favoritos</h1>\n`+
            `            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et consequuntur facere, repudiandae provident quae repellendus, quam vitae, harum porro iusto delectus quo magnam eius excepturi dolore dolores fugiat debitis reprehenderit?</p>\n`+
            `        </div>\n`+
            `    </div>\n`+
            `</div>\n`,
            compact : 
            `<div class="at-page">\n`+
            `    <div class="at-sidebar" at-compact>\n`+
            `       ...\n`+
            `    </div>\n`+
            `    <div class="at-page-content">\n`+
            `        <div class="at-u-p1">\n`+
            `            <h1>Favoritos</h1>\n`+
            `            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et consequuntur facere, repudiandae provident quae repellendus, quam vitae, harum porro iusto delectus quo magnam eius excepturi dolore dolores fugiat debitis reprehenderit?</p>\n`+
            `        </div>\n`+
            `    </div>\n`+
            `</div>\n`,
        },
        navbar : {
            normal : `<nav class="at-navbar">\n`+
            `    <div class="at-u-container at-u-relative">\n`+
            `        <div class="at-navbar-logo-container">\n`+
            `            <img src="../../../assets/logo-light.svg" class="at-navbar-logo" at-hide-dark>\n`+
            `            <img src="../../../assets/logo-dark.svg" class="at-navbar-logo" at-show-dark>\n`+
            `        </div>\n`+
            `        <div class="at-navbar-items">\n`+
            `            <a  href="#"><div class="at-navbar-item">Instalação</div></a>\n`+
            `            <a  href="#"><div class="at-navbar-item">CSS</div></a>\n`+
            `            <a  href="#"><div class="at-navbar-item" at-active>Components</div></a>\n`+
            `            <a  href="#"><div class="at-navbar-item">Layout</div></a>\n`+
            `            <div class="at-navbar-item navbar-icon"><i class="bx bxs-sun"></i></div>\n`+
            `        </div>\n`+
            `    </div>\n`+
            `</nav>\n`+
            `<div class="at-page">\n`+
            `    <div class="at-page-content">\n`+
            `        <div class="at-u-p1">\n`+
            `            <h1>Components</h1>\n`+
            `            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et consequuntur facere, repudiandae provident quae repellendus, quam vitae, harum porro iusto delectus quo magnam eius excepturi dolore dolores fugiat debitis reprehenderit?</p>\n`+
            `        </div>\n`+
            `    </div>\n`+
            `</div>\n`
        },
        glass : 
        `<div class="at-hero">\n`+
        `    <div class="at-hero-content" at-size="large">\n`+
        `        <div class="at-u-col-6 at-u-px2">\n`+
        `            <h2 at-tx="white">Light glass</h2>\n`+
        `            <div class="at-card" at-glass="light" at-center>\n`+
        `                <img src="../../../assets/emoji.png" class="at-u-my2">\n`+
        `                <h1 at-tx="white">Sucesso!</h1>\n`+
        `                <p at-tx="transparent-white">Todas as tarefas foram realizadas, parabéns</p>\n`+
        `                <div class="at-u-m2">\n`+
        `                    <button class="at-button" at-tx="transparent-white">Voltar</button>\n`+
        `                    <button class="at-button" at-bg="white" at-tx="secondary">Obrigado!</button>\n`+
        `                </div>\n`+
        `            </div>\n`+
        `        </div>\n`+
        `        <div class="at-u-col-6 at-u-px2">\n`+
        `            <h2 at-tx="white">Dark Glass</h2>\n`+
        `            <div class="at-card" at-glass="dark" at-center>\n`+
        `                <img src="../../../assets/emoji.png" class="at-u-my2">\n`+
        `                <h1 at-tx="white">Sucesso!</h1>\n`+
        `                <p at-tx="transparent-white">Todas as tarefas foram realizadas, parabéns</p>\n`+
        `                <div class="at-u-m2">\n`+
        `                    <button class="at-button" at-tx="transparent-white">Voltar</button>\n`+
        `                    <button class="at-button" at-bg="white" at-tx="secondary">Obrigado!</button>\n`+
        `                </div>\n`+
        `            </div>\n`+
        `        </div>\n`+
        `    </div>\n`+
        `</div>\n`,
        tables : 
            `<table class="at-table">\n`+
            `    <thead at-bg="primary">\n`+
            `        <tr>\n`+
            `            <th>Código</th>\n`+
            `            <th>Nome</th>\n`+
            `            <th at-center>Empresa</th>\n`+
            `            <th at-right>Cidade</th>\n`+
            `        </tr>\n`+
            `    </thead>\n`+
            `    <tbody>\n`+
            `        <tr>\n`+
            `            <td at-tx="primary">#124</td>\n`+
            `            <td>Gabriel Leite</td>\n`+
            `            <td at-center>convert company</td>\n`+
            `            <td at-right>Passo Fundo, RS</td>\n`+
            `        </tr>\n`+
            `        <tr>\n`+
            `            <td at-tx="primary">#142</td>\n`+
            `            <td>Jarbas Leite</td>\n`+
            `            <td at-center>convert company</td>\n`+
            `            <td at-right>Passo Fundo, RS</td>\n`+
            `        </tr>\n`+
            `        <tr>\n`+
            `            <td at-tx="primary">#512</td>\n`+
            `            <td>Bruno Leite</td>\n`+
            `            <td at-center>convert company</td>\n`+
            `            <td at-right>Passo Fundo, RS</td>\n`+
            `        </tr>\n`+
            `    </tbody>\n`+
            `    <tfoot>\n`+
            `        <tr>\n`+
            `            <td colspan="100%">Mostrando 3 registros</td>\n`+
            `        </tr>\n`+
            `    </tfoot>\n`+
            `</table>\n`,
        alerts : 
        `<div class="at-alert" at-status="info">\n`+
        `    <div class="at-alert-icon"></div>\n`+
        `    <div class="at-alert-close"></div>\n`+
        `    <div class="at-alert-info">\n`+
        `        <b>Aviso!</b>\n`+
        `        <p>Aplicação atualizada</p>\n`+
        `    </div>\n`+
        `</div>\n`+
        `<div class="at-alert" at-status="warning">\n`+
        `    <div class="at-alert-icon"></div>\n`+
        `    <div class="at-alert-close"></div>\n`+
        `    <div class="at-alert-info">\n`+
        `        <b>Alerta!</b>\n`+
        `        <p>Preencha todos campos</p>\n`+
        `    </div>\n`+
        `</div>\n`+
        `<div class="at-alert" at-status="error">\n`+
        `    <div class="at-alert-icon"></div>\n`+
        `    <div class="at-alert-close"></div>\n`+
        `    <div class="at-alert-info">\n`+
        `        <b>Erro!</b>\n`+
        `        <p>Falha ao cadastrar</p>\n`+
        `    </div>\n`+
        `</div>\n`+
        `<div class="at-alert" at-status="success">\n`+
        `    <div class="at-alert-icon"></div>\n`+
        `    <div class="at-alert-close"></div>\n`+
        `    <div class="at-alert-info">\n`+
        `        <b>Sucesso!</b>\n`+
        `        <p>Configurações salvas</p>\n`+
        `    </div>\n`+
        `</div>\n`,
        fields : {
            inputs : 
                `<div class="at-field">\n`+
                `    <input type="text" placeholder="Ex : joaosilva">\n`+
                `    <label><i class="bx bx-user"></i>Login do usuário</label>\n`+
                `</div>\n`+
                `<div class="at-field" at-status="warning">\n`+
                `    <p>Preencha este campo!</p>\n`+
                `    <input type="text" placeholder="Ex : joaosilva">\n`+
                `    <label><i class="bx bx-user"></i>Login do usuário</label>\n`+
                `</div>\n`+
                `<div class="at-field" at-status="error">\n`+
                `    <p>Informe um usuário válido!</p>\n`+
                `    <input type="text" placeholder="Ex : joaosilva">\n`+
                `    <label><i class="bx bx-user"></i>Login do usuário</label>\n`+
                `</div>\n`+
                `<div class="at-field" at-status="success">\n`+
                `    <p>Esse usuário é valido!</p>\n`+
                `    <input type="text" placeholder="Ex : joaosilva">\n`+
                `    <label><i class="bx bx-user"></i>Login do usuário</label>\n`+
                `</div>\n`,
            file : 
            `<div class="at-field">\n`+
            `    <input type="file" id="pictures">\n`+
            `    <label for="pictures"><i class="bx bx-image-add"></i>Clique aqui para selecionar as fotos</label>\n`+
            `</div>\n`,
            checkbox : 
            `<h3>Checkbox</h3>\n`+
            `<div class="at-field">\n`+
            `    <label><input type="checkbox">Ativar o modo dark<p>Essa opção ativa o modo escuro</p></label>\n`+
            `</div><hr>\n`+
            `<h3>Selecione a comida</h3>\n`+
            `<div class="at-field">\n`+
            `    <label><input type="radio" name="comida" checked>Polenta<p>12 unidades</p></label>\n`+
            `</div>\n`+
            `<div class="at-field">\n`+
            `    <label><input type="radio" name="comida">Mini Hamburger<p>4 unidades</p></label>\n`+
            `</div>\n`+
            `<div class="at-field">\n`+
            `    <label><input type="radio" name="comida">Pastel de Carne<p>1 unidade</p></label>\n`+
            `</div>\n`,
            range : 
            `<div class="at-field">\n`+
            `    <input type="range">\n`+
            `    <p>Informe um valor até 100</p>\n`+
            `    <label>Quantidade de itens</label>\n`+
            `</div>\n`,
            textarea : 
            `<div class="at-field">\n`+
            `    <p at-right>0/100</p>\n`+
            `    <textarea placeholder="Digite aqui sua mensagem..."></textarea>\n`+
            `    <label><i class="bx bx-chat"></i>Fale conosco</label>\n`+
            `</div>\n`,
            select : 
            `<div class="at-field">\n`+
            `    <select>\n`+
            `        <option>Desenvolvimento</option>\n`+
            `        <option>Suporte</option>\n`+
            `        <option>Comercial</option>\n`+
            `    </select>\n`+
            `    <label><i class="bx bx-menu"></i>Qual o tipo do ticket?</label>\n`+
            `</div>\n`,
        },
        modal : 
        `<div class="at-modal" at-active>\n`+
        `    <div class="at-modal-container">\n`+
        `        <h1>Esse é um modal</h1>\n`+
        `        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam cupiditate repellendus, debitis labore impedit accusantium praesentium fuga aperiam deleniti voluptas qui ea neque. Delectus, reprehenderit? Error voluptatem sequi dolorem!</p><hr>\n`+
        `        <div class="at-u-mt2" at-right>\n`+
        `            <button class="at-button">Fechar</button>\n`+
        `            <button class="at-button"at-bg="primary">Entendi!</button>\n`+
        `        </div>\n`+
        `    </div>\n`+
        `</div>\n`,
        lists : 
        `<small>Lista ordenada</small>\n`+
        `<h3>Classificação Formula 1</h3>\n`+
        `<ol class="at-list">\n`+
        `    <li><small>Redbull Racing</small>M. Verstappen</li>\n`+
        `    <li><small>Mercedes</small>L. Hamilton</li>\n`+
        `    <li><small>Mercedes</small>V. Bottas</li>\n`+
        `    <li><small>Ferrari</small>C. Sainz</li>\n`+
        `</ol>\n`+
        `<small>Lista não ordenada</small>\n`+
        `<h3>Sabores de Sorvete</h3>\n`+
        `<ul class="at-list">\n`+
        `    <li>Chocolate</li>\n`+
        `    <li>Flocos</li>\n`+
        `    <li>Napolitano</li>\n`+
        `    <li>Creme</li>\n`+
        `</ul>\n`,
        keys : 
        `<h3>Como imprimir pelo atalho de teclado</h3>\n`+
        `<p>Para imprimir uma página, pressione <kbd>Cmd</kbd> +<kbd>P</kbd></p>\n`,
        badges : 
        `<div class="at-badge">Default</div>\n`+
        `<div class="at-badge" at-bg="reverse-light-blue">Reverse Light Blue</div>\n`+
        `<div class="at-badge" at-bg="light-blue">Light Blue</div>\n`+
        `<div class="at-badge" at-bg="reverse-primary">Reverse Primary</div>\n`+
        `<div class="at-badge" at-bg="primary">Primary</div>\n`+
        `<div class="at-badge" at-bg="reverse-secondary">Reverse Secondary</div>\n`+
        `<div class="at-badge" at-bg="secondary">Secondary</div>\n`+
        `<div class="at-badge" at-bg="reverse-success">Reverse Sucess</div>\n`+
        `<div class="at-badge" at-bg="success">Sucess</div>\n`+
        `<div class="at-badge" at-bg="reverse-warning">Reverse Warning</div>\n`+
        `<div class="at-badge" at-bg="warning">Warning</div>\n`+
        `<div class="at-badge" at-bg="reverse-danger">Reverse Danger</div>\n`+
        `<div class="at-badge" at-bg="danger">Danger</div>\n`,
        profile : 
        `<div class="at-profile">\n`+
        `    <div class="at-profile-avatar">\n`+
        `        <img src="../../../assets/avatar.png">\n`+
        `    </div>\n`+
        `    <div class="at-profile-info">\n`+
        `        <b>Gabriel Herrmann Leite</b>\n`+
        `        <p>Developer at Convert Company</p>\n`+
        `    </div>\n`+
        `</div>\n`+
        `<div class="at-profile">\n`+
        `    <div class="at-profile-avatar" at-profile-mockup="GL" at-bg="primary"></div>\n`+
        `    <div class="at-profile-info">\n`+
        `        <b>Gabriel Herrmann Leite</b> <div class="at-badge" at-bg="reverse-primary">Novo Cliente</div>\n`+
        `        <p>Developer at Convert Company</p>\n`+
        `    </div>\n`+
        `</div>\n`
    }
}