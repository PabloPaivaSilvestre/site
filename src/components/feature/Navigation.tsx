
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    // Se estamos na página de produtos, navegar para home primeiro
    if (window.location.pathname === '/produtos') {
      window.REACT_APP_NAVIGATE('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const navigateToProducts = () => {
    window.REACT_APP_NAVIGATE('/produtos');
    setIsMenuOpen(false);
  };

  const navigateToHome = () => {
    window.REACT_APP_NAVIGATE('/');
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav-fixed fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b border-gray-700/50 bg-gray-900/95" role="navigation" aria-label="Navegação principal">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 sm:space-x-4 cursor-pointer" onClick={navigateToHome} style={{ touchAction: 'manipulation' }}>
            <img 
              alt="Baterias Cunha - Logo da empresa" 
              className="h-12 sm:h-14 w-auto" 
              src="https://static.readdy.ai/image/679a8cfcb22f2886792df750740da3c7/afd123ca58d16d19aa992ae741847738.png"
              width="56"
              height="56"
              loading="eager"
              fetchpriority="high"
              decoding="sync"
              style={{ contentVisibility: 'auto' }}
            />
            <div className="text-lg sm:text-2xl font-bold text-white">Baterias Cunha</div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
              aria-label="Ir para seção inicial"
              style={{ touchAction: 'manipulation' }}
            >
              Início
            </button>
            <button 
              onClick={navigateToProducts}
              className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
              aria-label="Ver todos os produtos"
              style={{ touchAction: 'manipulation' }}
            >
              Todos os Produtos
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
              aria-label="Ir para seção de serviços"
              style={{ touchAction: 'manipulation' }}
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
              aria-label="Ir para seção sobre a empresa"
              style={{ touchAction: 'manipulation' }}
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
              aria-label="Ir para seção de contato"
              style={{ touchAction: 'manipulation' }}
            >
              Contato
            </button>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            style={{ touchAction: 'manipulation' }}
          >
            <i className="ri-menu-line text-2xl" aria-hidden="true"></i>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-700/50" id="mobile-menu">
            <nav className="flex flex-col space-y-4 pt-4" role="menu">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer text-left"
                role="menuitem"
                aria-label="Ir para seção inicial"
                style={{ touchAction: 'manipulation' }}
              >
                Início
              </button>
              <button 
                onClick={navigateToProducts}
                className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer text-left"
                role="menuitem"
                aria-label="Ver todos os produtos"
                style={{ touchAction: 'manipulation' }}
              >
                Todos os Produtos
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer text-left"
                role="menuitem"
                aria-label="Ir para seção de serviços"
                style={{ touchAction: 'manipulation' }}
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer text-left"
                role="menuitem"
                aria-label="Ir para seção sobre a empresa"
                style={{ touchAction: 'manipulation' }}
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer text-left"
                role="menuitem"
                aria-label="Ir para seção de contato"
                style={{ touchAction: 'manipulation' }}
              >
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
}
