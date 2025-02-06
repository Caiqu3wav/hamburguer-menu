📌 NavMenu - Componente de Navegação Responsivo
NavMenu é um componente React para Next.js que fornece uma navegação responsiva com um menu lateral estilizado.

✨ Recursos
✅ Responsivo - Menu hamburguer no mobile e navegação horizontal no desktop.
✅ Acessível - Fecha ao pressionar ESC e ao clicar fora.
✅ Altamente Personalizável - Altere cores de fundo, texto e bordas.
✅ Fácil de Usar - Apenas passe os itens do menu como props.

📦 Instalação
bash

npm install @seu-usuario/navmenu
# ou
yarn add @seu-usuario/navmenu
🚀 Como Usar
tsx

import NavMenu from "@seu-usuario/navmenu";

const menuItems = [
  { title: "Home", path: "/" },
  { title: "Sobre", path: "/sobre" },
  { title: "Contato", path: "/contato" },
];

export default function App() {
  return <NavMenu MenuItems={menuItems} />;
}
🎨 Personalização
Você pode personalizar as cores do aside e do texto usando props:

Prop	Descrição	Valor Padrão
asideBgColor	Cor de fundo do menu lateral	bg-blue-700
asideTextColor	Cor do texto do menu lateral	text-white
asideTextHoverColor	Cor do texto ao passar o mouse	text-red-500
asideBorderTextColor	Cor da borda inferior dos links	border-red-500
Exemplo de Personalização
tsx

<NavMenu
  MenuItems={menuItems}
  asideBgColor="bg-gray-800"
  asideTextColor="text-yellow-400"
  asideTextHoverColor="text-green-400"
  asideBorderTextColor="border-blue-500"
/>
📜 Licença
Este projeto é licenciado sob a MIT License.

Esse README explica claramente como usar sua lib e personalizá-la. Se precisar de ajustes ou quiser adicionar mais detalhes, me avise! 🚀