// publications_manager.js

// Array of publication objects
const publications = [
    {
        id: 'imdguard',
        title: 'Formal Verification and Mitigation of Vulnerabilities in the IMDGuard Protocol',
        authors: '<strong>Christian Coduri</strong>, Alessio Sacco, Guido Marchetto, Riccardo Sisto',
        venue: 'PerCom',
        year: 2026,
        description: 'Formal analysis of IMDGuard reveals authentication weaknesses and proposes mitigations to secure IMD communications.',
        abstract: `IMDGuard is a proxy-based authentication protocol designed to secure communications between an Implantable Medical Device (IMD), a technology increasingly used in cardiac care, and its associated Programmer device through a wearable third-party mediator known as the Guardian. In this paper, we formally analyze the security of IMDGuard using the ProVerif verification tool and demonstrate that the protocol is vulnerable to multiple attacks. Our analysis confirms a known susceptibility to denial-of-service attacks and reveals a previously unreported flaw in the authentication mechanism between the Guardian and the Programmer. This vulnerability allows an adversary to impersonate the IMD, inject falsified telemetry data, and issue deceptive responses to legitimate Programmer commands, posing a serious risk to patient safety by potentially leading clinicians to make medical decisions based on compromised information. To mitigate this threat, we propose a remediation mechanism that enforces the mutual authentication process, thereby enhancing protocol resilience against impersonation attacks. The proposed improvements restore the intended security guarantees of IMDGuard, ensuring safer and more reliable communication in cardiac care applications.`,
        abstractImage: {
            src: 'files/img/research/IMDGuard.png',
            alt: 'IMDGuard Protocol'
        },
        paperUrl: 'https://ieeexplore.ieee.org/document/11585400',
        additionalInfo: 'This work was also presented in a talk at <a href="#talk-pacemakers">milan0day 2026</a>.',
        additionalLinks: []
    },
    {
        id: 'vc',
        title: 'A Framework for Secure Sharing of Medical Images Based on Visual Cryptography',
        authors: '<strong>Christian Coduri</strong>, Stelvio Cimato',
        venue: 'COMPSAC',
        year: 2025,
        description: 'A secure method for sharing and storing diagnostic exam results in DICOM format, utilizing steganography and visual cryptography to protect both metadata and pixel data.',
        abstract: `In the domain of medical data security, the confidentiality and integrity of diagnostic exam results is crucial. However, the use of DICOM files, the standard format for storing and sharing medical images like X-rays and MRIs, can pose security risks because they are not subject to encryption requirements. As a result, these files rely heavily on the security measures implemented within the healthcare institution's networks and databases, which are often inadequate in preventing unauthorized access, data tampering, or malicious injections. The goal of this paper is to propose a secure method for sharing and storing diagnostic exam results, ensuring the confidentiality of the information while safeguarding patient privacy. The proposed solution operates directly on DICOM files, utilizing steganography and visual secret sharing to protect and maintain the security of both metadata and pixel data.`,
        abstractImage: {
            src: 'files/img/research/cv4health.gif',
            alt: 'Example of VC'
        },
        paperUrl: 'https://ieeexplore.ieee.org/abstract/document/11126687/',
        additionalInfo: "This work was derived from my Bachelor's thesis.",
        additionalLinks: [
            {
                label: 'Top 100 Italian cryptography theses (2017-2024)',
                url: 'https://www.decifris.it/attivita/centotesi-2017-2024',
                icon: 'fa-solid fa-award'
            },
            {
                label: 'Thesis (ITA)',
                url: 'files/bachelor/thesis.pdf',
                icon: 'fa-regular fa-file-pdf'
            },
            {
                label: 'Recording (ITA)',
                url: 'https://youtu.be/bdZKIu5T2XE',
                icon: 'fab fa-youtube'
            }
        ]
    }
];

$(document).ready(function() {
    publications.forEach(function(publication) {
        const abstractId = 'pub-' + publication.id + '-abstract';
        let imageHTML = '';
        let abstractColumnClass = 'col-12';

        if (publication.abstractImage) {
            abstractColumnClass = 'col-12 col-lg';
            imageHTML =
                '<div class="col-12 col-lg-auto mt-3 mt-lg-0 publication-abstract-image-container">' +
                    '<img src="' + publication.abstractImage.src + '" class="img-fluid publication-abstract-image" alt="' + publication.abstractImage.alt + '" draggable="false">' +
                '</div>';
        }

        let additionalLinksHTML = '';
        (publication.additionalLinks || []).forEach(function(link) {
            additionalLinksHTML +=
                '<a class="btn btn-outline-secondary btn-sm btn-block mt-2 me-2" href="' + link.url + '" target="_blank" rel="noopener noreferrer">' +
                    '<i class="' + link.icon + ' me-2"></i>' + link.label +
                '</a>';
        });

        const publicationHTML =
            '<div class="card mb-4">' +
                '<div class="card-body">' +
                    '<h5 class="card-title">' + publication.title + '</h5>' +
                    '<p class="mb-1">' + publication.authors + '<br><em>' + publication.venue + '</em>, ' + publication.year + '</p>' +
                    '<p class="mb-2">' + publication.description + '</p>' +
                    '<p>' +
                        '<a class="btn btn-outline-secondary btn-sm btn-block mt-2 me-2" data-bs-toggle="collapse" href="#' + abstractId + '" role="button" aria-expanded="false" aria-controls="' + abstractId + '">' +
                            '<i class="fa-solid fa-file-lines me-2"></i>Abstract' +
                        '</a>' +
                        '<a class="btn btn-secondary btn-sm btn-block mt-2" href="' + publication.paperUrl + '" target="_blank" rel="noopener noreferrer">' +
                            '<i class="fa-solid fa-book me-2"></i>Paper' +
                        '</a>' +
                    '</p>' +
                    '<div class="collapse mt-3" id="' + abstractId + '">' +
                        '<div class="card card-body">' +
                            '<div class="row align-items-center g-0">' +
                                '<div class="' + abstractColumnClass + ' publication-abstract-text-col"><p class="mb-0">' + publication.abstract + '</p></div>' +
                                imageHTML +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<hr class="my-3">' +
                    '<p class="mb-2"><strong>Additional information:</strong> ' + publication.additionalInfo + '</p>' +
                    (additionalLinksHTML ? '<p>' + additionalLinksHTML + '</p>' : '') +
                '</div>' +
            '</div>';

        $('#publication-cards').append(publicationHTML);
    });
});
