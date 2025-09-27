// Criar part￭culas tecnol￳gicas
function createParticles() {
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('tech-particle');
        
        // Posi￧￣o aleat￳ria
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Tamanho aleat￳rio
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Dura￧￣o da anima￧￣o aleat￳ria
        const duration = Math.random() * 20 + 10;
        particle.style.animation = `float ${duration}s infinite linear`;
        
        // Atraso na anima￧￣o
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        container.appendChild(particle);
    }
}

// Criar linhas de circuito
function createCircuitLines() {
    const container = document.querySelector('.container');
    const numLines = 8;
    
    for (let i = 0; i < numLines; i++) {
        const line = document.createElement('div');
        line.classList.add('circuit-line');
        
        // Propriedades aleat￳rias
        const isHorizontal = Math.random() > 0.5;
        const thickness = Math.random() * 1 + 1;
        const length = Math.random() * 100 + 50;
        const posX = Math.random() * 80 + 10;
        const posY = Math.random() * 80 + 10;
        
        if (isHorizontal) {
            line.style.height = thickness + 'px';
            line.style.width = length + 'px';
        } else {
            line.style.width = thickness + 'px';
            line.style.height = length + 'px';
        }
        
        line.style.left = posX + '%';
        line.style.top = posY + '%';
        line.style.animation = `pulse ${Math.random() * 4 + 3}s infinite`;
        
        container.appendChild(line);
    }
}

// Efeito de hover nos links
function setupLinkEffects() {
    const links = document.querySelectorAll('.link-item');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const hexagon = link.querySelector('.link-hexagon');
            hexagon.style.boxShadow = '0 0 15px rgba(204, 238, 102, 0.5)';
        });
        
        link.addEventListener('mouseleave', () => {
            const hexagon = link.querySelector('.link-hexagon');
            hexagon.style.boxShadow = 'none';
        });
    });
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    createCircuitLines();
    setupLinkEffects();
});