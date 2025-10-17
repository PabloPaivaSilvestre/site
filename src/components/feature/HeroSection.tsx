
import Button from '../base/Button';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="hero-section"
    >
      <div className="hero-overlay"></div>
      
      {/* Optimized animated particles - renderização otimizada */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0s', transform: 'translateZ(0)' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s', transform: 'translateZ(0)' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '2s', transform: 'translateZ(0)' }}></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-white/30 animate-pulse" style={{ animationDelay: '3s', transform: 'translateZ(0)' }}></div>
        <div className="absolute bottom-1/3 right-2/3 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '4s', transform: 'translateZ(0)' }}></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white/30 animate-pulse" style={{ animationDelay: '5s', transform: 'translateZ(0)' }}></div>
      </div>
      
      <div className="hero-container">
        <div className="max-w-4xl mx-auto">
          <h1 className="hero-title">
            <span className="text-white">Baterias Cunha</span>
          </h1>
          <h2 className="hero-subtitle">
            Energia Premium para seu Veículo
          </h2>
          <p className="hero-description">
            Tecnologia avançada e performance excepcional. Redefinindo padrões de excelência em baterias automotivas.
          </p>
          
          <div className="hero-buttons">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => scrollToSection('produtos')}
              aria-label="Explorar produtos de baterias automotivas"
            >
              Explorar Produtos
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contato')}
              aria-label="Entrar em contato com Baterias Cunha"
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
      
      {/* Optimized scroll indicator */}
      <div className="scroll-indicator" aria-hidden="true">
        <div className="scroll-dot"></div>
      </div>
    </section>
  );
}
