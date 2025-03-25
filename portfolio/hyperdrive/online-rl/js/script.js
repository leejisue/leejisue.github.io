document.addEventListener('DOMContentLoaded', () => {
    // Previous existing code remains the same...

    // Video Interaction for Training Progress Section
    const trainingVideos = document.querySelectorAll('.training-stage .video-container video');
    
    trainingVideos.forEach(video => {
        // Pause other videos when one starts playing
        video.addEventListener('play', () => {
            trainingVideos.forEach(otherVideo => {
                if (otherVideo !== video) {
                    otherVideo.pause();
                }
            });
        });

        // Add custom controls or interactions
        video.addEventListener('mouseenter', () => {
            video.style.transform = 'scale(1.02)';
        });

        video.addEventListener('mouseleave', () => {
            video.style.transform = 'scale(1)';
        });
    });

    // Video Stage Highlighting
    const trainingStages = document.querySelectorAll('.training-stage');
    
    trainingStages.forEach(stage => {
        const videoContainer = stage.querySelector('.video-container');
        const stageTitle = stage.querySelector('h5');
        
        videoContainer.addEventListener('mouseenter', () => {
            stageTitle.style.color = 'var(--accent-color)';
            videoContainer.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
        });

        videoContainer.addEventListener('mouseleave', () => {
            stageTitle.style.color = 'var(--primary-color)';
            videoContainer.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        });
    });

    // Episode Stage Tooltip and Information
    const algorithmTrainingCards = document.querySelectorAll('.algorithm-training-card');
    
    algorithmTrainingCards.forEach(card => {
        const stages = card.querySelectorAll('.training-stage');
        
        stages.forEach((stage, index) => {
            const tooltip = document.createElement('div');
            tooltip.classList.add('episode-tooltip');
            
            // Define tooltip content based on episode stage
            const tooltipContent = {
                0: 'Initial random policy - agent explores environment without learned strategy',
                1000: 'Early learning stage - basic policy formation and initial skill acquisition',
                2000: 'Advanced stage - refined policy with optimized decision-making'
            }[index * 1000];
            
            tooltip.textContent = tooltipContent;
            tooltip.style.display = 'none';
            
            stage.appendChild(tooltip);
            
            stage.addEventListener('mouseenter', () => {
                tooltip.style.display = 'block';
            });
            
            stage.addEventListener('mouseleave', () => {
                tooltip.style.display = 'none';
            });
        });
    });

    // Performance Metrics Visualization
    const performanceMetrics = document.querySelectorAll('.performance-metrics');
    
    const animatePerformanceMetrics = () => {
        performanceMetrics.forEach(metricsContainer => {
            const metrics = metricsContainer.querySelectorAll('.metric');
            
            metrics.forEach((metric, index) => {
                const progressBar = metric.querySelector('.progress-bar');
                const value = metric.getAttribute('data-value');
                
                // Staggered animation
                setTimeout(() => {
                    progressBar.style.width = `${value}%`;
                }, index * 200);
            });
        });
    };

    // Trigger performance metrics animation on scroll
    const performanceSection = document.querySelector('#comparisons');
    
    const performanceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatePerformanceMetrics();
                performanceObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    if (performanceSection) {
        performanceObserver.observe(performanceSection);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // Previous existing code remains the same...

    // Video Interaction for Training Progress Section
    const trainingVideos = document.querySelectorAll('.training-stage .video-container video');
    
    trainingVideos.forEach(video => {
        // Pause other videos when one starts playing
        video.addEventListener('play', () => {
            trainingVideos.forEach(otherVideo => {
                if (otherVideo !== video) {
                    otherVideo.pause();
                }
            });
        });

        // Add custom controls or interactions
        video.addEventListener('mouseenter', () => {
            video.style.transform = 'scale(1.02)';
        });

        video.addEventListener('mouseleave', () => {
            video.style.transform = 'scale(1)';
        });
    });

    // Video Stage Highlighting
    const trainingStages = document.querySelectorAll('.training-stage');
    
    trainingStages.forEach(stage => {
        const videoContainer = stage.querySelector('.video-container');
        const stageTitle = stage.querySelector('h5');
        
        videoContainer.addEventListener('mouseenter', () => {
            stageTitledocument.addEventListener('DOMContentLoaded', () => {
    // Navigation Smooth Scrolling
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Progress Bar Animation
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const animateProgressBars = () => {
        progressBars.forEach(bar => {
            const value = bar.parentElement.getAttribute('data-value');
            bar.style.setProperty('--progress', `${value}%`);
        });
    };

    // Intersection Observer for Progress Bar Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Observe each algorithm card
    document.querySelectorAll('.algorithm-card').forEach(card => {
        observer.observe(card);
    });

    // Algorithm Card Hover Effects
    const algorithmCards = document.querySelectorAll('.algorithm-card');
    
    algorithmCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Resource Card Interactivity
    const resourceCards = document.querySelectorAll('.resource-card');
    
    resourceCards.forEach(card => {
        const links = card.querySelectorAll('ul li');
        
        links.forEach(link => {
            link.addEventListener('click', () => {
                // Placeholder for potential modal or external link functionality
                console.log(`Clicked resource: ${link.textContent}`);
            });
        });
    });

    // Responsive Menu for Mobile (if needed)
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '☰';
    
    if (window.innerWidth <= 768) {
        const navLinks = document.querySelector('.nav-links');
        navLinks.style.display = 'none';
        
        menuToggle.addEventListener('click', () => {
            if (navLinks.style.display === 'none') {
                navLinks.style.display = 'flex';
            } else {
                navLinks.style.display = 'none';
            }
        });
        
        document.querySelector('.main-nav').insertBefore(menuToggle, document.querySelector('.nav-links'));
    }

    // Window Resize Handling
    window.addEventListener('resize', () => {
        // Responsive adjustments if needed
        if (window.innerWidth > 768) {
            document.querySelector('.nav-links').style.display = 'flex';
        } else {
            document.querySelector('.nav-links').style.display = 'none';
        }
    });
});
