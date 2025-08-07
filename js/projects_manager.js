// projects_manager.js

// 1. Array of project objects
const projects = [
    {
        title: 'VisualCrypto<br><br>',
        description: 'VisualCrypto is an open-source toolkit for Visual Secret Sharing (VSS), a cryptographic method that splits an image into noise-like shares, which reveal the original only when combined.',
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

$(document).ready(function() {
  // 1) Inject each project as a <div class="swiper-slide">…</div> into #project-cards
  projects.forEach(function(project) {
    let tagsHTML = '';
    project.tags.forEach(function(tag) {
      tagsHTML += '<span class="badge badge-pill bg-secondary">' + tag + '</span> ';
    });

    let cardHTML =
      '<div class="card h-100 project-card mb-5" style="height: 319px;">' +
        '<div class="card-body d-flex flex-column">' +
          '<h5 class="card-title py-2">' + project.title + '</h5>' +
          '<p class="card-text">' + project.description + '</p>' +
          '<div class="flex-grow-1"></div>' +
          '<div class="row">' +
            '<div class="col-auto">'

                if (project.url_report)
                  cardHTML +='<a href="' + project.url_report + '" target="_blank" class="btn btn-secondary btn-sm btn-block mt-2"><i class="fa-solid fa-book"></i>&nbsp View Report</a> '

                if (project.url_code)
                  cardHTML +='  <a href="' + project.url_code + '" target="_blank" class="btn btn-secondary btn-sm btn-block mt-2"> <i class="fa-brands fa-github"></i>&nbsp View on GitHub</a>';

    cardHTML +=
            '</div>' +
          '</div>' +
          '<hr>' +
          '<div class="tags mt-auto">' + tagsHTML + '</div>' +
        '</div>' +
      '</div>';

    // wrap in swiper-slide
    const slideHTML = '<div class="swiper-slide">' + cardHTML + '</div>';
    $('#project-cards').append(slideHTML);
  });

  // 2) Equalize card heights if you still want that “max-height” behavior
  adjustCardHeight();

  // 3) Initialize Swiper once all slides are in place
  new Swiper('.my-projects-swiper', {
    loop: true,
    slidesPerGroup: 1, // Move one slide at a time
    autoplay: {
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
        slidesPerGroup: 1  // Move one at a time on desktop
      },
      768: { 
        slidesPerView: 2, 
        spaceBetween: 16,
        slidesPerGroup: 1  // Move one at a time on tablet
      },
      0: { 
        slidesPerView: 1, 
        spaceBetween: 8,
        slidesPerGroup: 1  // Move one at a time on mobile
      }
    }
  });

});

// Helper to make every .project-card the same height
function adjustCardHeight() {
  let maxH = 0;
  $('.swiper-slide .project-card').each(function() {
    const h = $(this).height();
    if (h > maxH) {
      maxH = h;
    }
  });
  $('.swiper-slide .project-card').height(maxH);
}
