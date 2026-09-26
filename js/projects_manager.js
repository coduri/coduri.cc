// projects_manager.js

// Array of project objects
const projects = [
    {
        title: 'VisualCrypto',
        description: 'VisualCrypto is an open-source toolkit for Visual Secret Sharing (VSS), a cryptographic method that splits an image into noise-like shares, which reveal the original only when combined.',
        url_report: 'https://coduri.github.io/VisualCrypto/',
        url_code: 'https://github.com/coduri/VisualCrypto',
        tags: ['Python', 'cryptography']
    },
    {
        title: 'GNSS Signals Analysis and Spoofing Experiments',
        description: 'Investigated GNSS signal behavior by analyzing two datasets, identifying interference patterns, and assessing vulnerabilities such as spoofed positions and signal delay attacks.',
        url_report: 'files/master/GNSS_Spoofing.pdf',
        url_code: null,
        tags: ['MATLAB', 'wireless-security']
    },
    {
        title: 'FreeRTOS Lottery Scheduler Implementation',
        description: 'Explored the complexities of embedded systems by developing a custom FreeRTOS Lottery Scheduler for Arm Cortex-M3 on QEMU, enhancing scheduling capabilities beyond default implementations.',
        url_report: 'files/master/FreeRTOS_Lottery_Scheduling.pdf',
        url_code: 'https://github.com/coduri/FreeRTOS-Lottery-Scheduling',
        tags: ['C', 'embedded-system']
    },
    {
        title: 'DDoS Attacks Detection with Machine Learning',
        description: 'Analyzed a dataset of benign and malicious packets, applying both supervised and unsupervised learning techniques, along with cluster explainability analysis, to detect DDoS attacks.',
        url_report: 'files/master/DDoS_Attacks_Detection_and_Characterization.pdf',
        url_code: 'https://github.com/coduri/ML_DDoS_Detection',
        tags: ['Python', 'machine-learning']
    }
];

window.addEventListener('DOMContentLoaded', function() {
  const projectCards = document.getElementById('project-cards');

  projects.forEach(function(project) {
    let tagsHTML = '';
    project.tags.forEach(function(tag) {
      tagsHTML += '<span class="badge badge-pill bg-secondary">' + tag + '</span> ';
    });

    let cardHTML =
      '<div class="card h-100 project-card">' +
        '<div class="card-body d-flex flex-column">' +
          '<h5 class="card-title py-2">' + project.title + '</h5>' +
          '<p class="card-text">' + project.description + '</p>' +
          '<div class="flex-grow-1"></div>' +
          '<div class="row">' +
            '<div class="col-auto">'

                if (project.url_report) {
                  cardHTML += '<a href="' + project.url_report + '" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm btn-block mt-2"><i class="fa-solid fa-file-lines me-2" aria-hidden="true"></i>Report</a> ';
                }

                if (project.url_code) {
                  cardHTML += '<a href="' + project.url_code + '" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm btn-block mt-2"><i class="fa-brands fa-github me-2" aria-hidden="true"></i>GitHub</a>';
                }

    cardHTML +=
            '</div>' +
          '</div>' +
          '<hr>' +
          '<div class="tags mt-auto">' + tagsHTML + '</div>' +
        '</div>' +
      '</div>';

    const slideHTML = '<div class="swiper-slide">' + cardHTML + '</div>';
    projectCards.insertAdjacentHTML('beforeend', slideHTML);
  });

  new Swiper('.my-projects-swiper', {
    loop: true,
    slidesPerGroup: 1,
    autoplay: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? false : {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: { 
        slidesPerView: 3, 
        spaceBetween: 24,
        slidesPerGroup: 1
      },
      768: { 
        slidesPerView: 2, 
        spaceBetween: 16,
        slidesPerGroup: 1
      },
      0: { 
        slidesPerView: 1, 
        spaceBetween: 8,
        slidesPerGroup: 1
      }
    }
  });
});
