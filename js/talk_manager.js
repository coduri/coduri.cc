// talk_manager.js

// Array of talk objects
const talks = [
    {
        id: 'talk-pacemakers',
        abstractId: 'talk1-abstract',
        date: 'May 21st, 2026',
        event: 'milan0day 2026',
        eventUrl: 'https://k1nd4sus.it/events/milan0day2026',
        title: 'Breaking Pacemaker Authentication with Formal Methods',
        description: 'A talk on how formal verification (using ProVerif) can uncover subtle authentication flaws in implantable medical device protocols.',
        abstract: `Implantable medical devices such as pacemakers are wireless, networked computers embedded in the human body. Like any connected system, they rely on authentication and access control protocols to determine who can communicate with them and under what conditions.
            This talk begins with an overview of the main security architectures proposed in the medical device literature, including proximity-based schemes, biometric authentication, proxy-based guardians, and hybrid designs. We examine how they work, their security guarantees, and the assumptions on which they depend.
            From there, we shift to a security engineer's perspective. What happens when we stop trusting the design and formally verify it? Using ProVerif, we demonstrate how security protocols can be modeled, how adversarial capabilities are defined, and how formal verification tools can uncover attack paths beyond human intuition.
            Finally, we present the formal analysis of a widely known implantable device protocol. Our verification reveals a subtle authentication flaw that enables session key forgery and device impersonation without breaking any cryptographic primitive. The math holds. The logic doesn't.`,
        recordingUrl: 'https://www.youtube.com/live/vGBYtNop6II?si=_EOR9NEZZX9MyDy_&t=6163',
        slidesUrl: 'files/talks/milan0day2026.pdf'
    }
];

$(document).ready(function() {
    talks.forEach(function(talk) {
        const abstractId = talk.abstractId;
        let buttonsHTML =
            '<a class="btn btn-outline-secondary btn-sm btn-block mt-2 me-2" data-bs-toggle="collapse" href="#' + abstractId + '" role="button" aria-expanded="false" aria-controls="' + abstractId + '">' +
                '<i class="fa-solid fa-file-lines me-2"></i>Abstract' +
            '</a>';

        if (talk.recordingUrl) {
            buttonsHTML +=
                '<a class="btn btn-secondary btn-sm btn-block mt-2 me-2" href="' + talk.recordingUrl + '" target="_blank" rel="noopener noreferrer">' +
                    '<i class="fa-brands fa-youtube me-2"></i>Recording' +
                '</a>';
        }

        if (talk.slidesUrl) {
            buttonsHTML +=
                '<a class="btn btn-secondary btn-sm btn-block mt-2 me-2" href="' + talk.slidesUrl + '" target="_blank" rel="noopener noreferrer">' +
                    '<i class="fa-solid fa-file-powerpoint me-2"></i>Slides' +
                '</a>';
        }

        const talkHTML =
            '<div id="' + talk.id + '" class="card mb-3">' +
                '<div class="card-body">' +
                    '<small class="text-muted">' + talk.date + '</small>' +
                    '<p class="mb-3"><a href="' + talk.eventUrl + '" target="_blank" rel="noopener noreferrer">' + talk.event + '</a></p>' +
                    '<h5 class="card-title mt-3">' + talk.title + '</h5>' +
                    '<p class="card-text">' + talk.description + '</p>' +
                    '<p>' + buttonsHTML + '</p>' +
                    '<div class="collapse mt-3" id="' + abstractId + '">' +
                        '<div class="card card-body">' +
                            '<p class="mb-0">' + talk.abstract + '</p>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>';

        $('#talk-cards').append(talkHTML);
    });
});
