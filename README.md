# 🍔 Hamburger Menu React

Um componente **menu hambúrguer responsivo** e altamente **personalizável**, feito para projetos **React + Tailwind CSS**. 🔥

## 📦 Instalação

Você pode instalar via **npm** ou **yarn**:

```sh
npm install hamburger-menu-lib
# ou
yarn add hamburger-menu-lib

🚀 Como Usar
Basta importar e passar os itens do menu, além das cores opcionais:

tsx
Copiar
Editar
import { HamburgerMenu } from "hamburger-menu-lib";

const menuItems = [
  { title: "Home", path: "/" },
  { title: "Sobre", path: "#about" },
  { title: "Projetos", path: "#projects" },
  { title: "Contato", path: "#contact" },
];

export default function App() {
  return (
    <div>
      <HamburgerMenu 
        menuItems={menuItems}
        buttonColor="blue-500"
        asideColorFrom="gray-900"
        asideColorTo="gray-600"
      />
    </div>
  );
}
🎨 Props Disponíveis
Propriedade	Tipo	Padrão	Descrição
menuItems	MenuItem[]	[]	Lista de itens do menu (com title e path).
buttonColor	string	"white"	Define a cor do ícone do botão hamburguer.
asideColorFrom	string	"orange-400"	Define a cor inicial do gradiente do menu.
asideColorTo	string	"orange-900"	Define a cor final do gradiente do menu.
🖌 As cores devem seguir o padrão do Tailwind CSS (gray-900, blue-500, red-700, etc.).

🛠 Requisitos
React ^18.0.0
Tailwind CSS ^3.0.0 ou ^4.0.0
Next.js (opcional)
📄 Licença
Este projeto está licenciado sob a MIT License.

Pronto! Agora é só publicar no NPM! 🚀🔥
Se precisar de mais alguma coisa, só falar. 😃

markdown
Copiar
Editar

Isso vai deixar sua biblioteca **bem documentada e fácil de usar**. 🚀🔥  
Precisa de algo mais?