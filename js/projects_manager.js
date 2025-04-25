// Custom JavaScript for filtering projects

// Sample projects data (replace with your actual project data)
const projects = [
    {
        title: 'Lottery Scheduling Implementation for FreeRTOS',
        description: 'Explored the complexities of embedded systems by developing a custom FreeRTOS Lottery Scheduler for Arm Cortex-M3 on QEMU, enhancing scheduling capabilities beyond default implementations.',
        url_report: 'files/master/FreeRTOS_Lottery_Scheduling.pdf',
        url_code: 'https://github.com/coduri/FreeRTOS_LotteryScheduling',
        tags: ['C', 'embedded-system']
    },
    {
        title: 'DDoS Attacks Detection with Machine Learning',
        description: 'Analyzed a dataset of benign and malicious packets, applying both supervised and unsupervised learning techniques, along with cluster explainability analysis, to detect DDoS attacks.',
        url_report: 'files/master/DDoS_Attacks_Detection_and_Characterization.pdf',
        url_code: 'https://github.com/coduri/ML_DDoS_Detection',
        tags: ['Python', 'machine-learning']
    },
    {
        title: 'GNSS Signals Analysis and Spoofing Experiments',
        "description": "Investigated GNSS signal behavior by analyzing two datasets, identifying interference patterns, and assessing vulnerabilities such as spoofed positions and signal delay attacks.",
        url_report: 'files/master/GNSS_Spoofing.pdf',
        url_code: null,
        tags: ['MATLAB', 'wireless-security']
    },
]

const filterButtons = [
    {label: 'All', filter: 'all', class: 'btn-secondary'},
    {label: 'Machine Learning', filter: 'machine-learning', class: 'btn-primary'},
    {label: 'Embedded System', filter: 'embedded-system', class: 'btn-primary'},
    {label: 'Wireless Security', filter: 'wireless-security', class: 'btn-primary'}
]



$(document).ready(function() {

    // Add Filter Buttons to the DOM
    const filterButtonContainer = $('.filter-buttons')

    filterButtons.forEach(function(button) {
        const buttonHTML = '<button class="btn btn-sm justify-content-center mt-2 filter-button ' + button.class + '" data-filter="' + button.filter + '">' + button.label + '</button> '
        filterButtonContainer.append(buttonHTML)
    })

    // Add Projects Cards to the DOM
    projects.forEach(function(project) {
        let tagsHTML = ''

        project.tags.forEach(function(tag) {
            tagsHTML += '<span class="badge badge-pill bg-secondary">' + tag + '</span> '
        })

        let cardHTML = '<div class="col-lg-4 col-md-6 mb-4 project-card ' + project.tags.join(' ') + '">' +
            '<div class="card h-100">' +
            '<div class="card-body d-flex flex-column">' +                  // Align elements vertically
            '<h5 class="card-title py-2">' + project.title + '</h5>' +
            '<p class="card-text">' + project.description + '</p>' +
            '<div class="flex-grow-1"></div>' +                             // Push to the bottom

            '<div class="row"><div class="col-auto">' +
            '<a href="' + project.url_report + '" target="_blank" class="btn btn-secondary btn-sm btn-block mt-2">Read the report</a>'

        if (project.url_code !=null)
            cardHTML +=' <a href="' + project.url_code + '" target="_blank" class="btn btn-secondary btn-sm btn-block mt-2">View the code</a>'

        cardHTML += '</div></div><hr>' +
            '<div class="tags mt-auto">' + tagsHTML + '</div>' +

            '</div>' +
            '</div>' +
            '</div>'

        $('#project-cards').append(cardHTML)
    })


    // Filter buttons click event
    $('.filter-button').click(function(){

        // Adjust cards height after filtering
        adjustCardHeight()

        // Old filter button
        $('.filter-button').removeClass('btn-secondary')
        $('.filter-button').addClass('btn-primary')

        // Clicked filter button
        $(this).removeClass('btn-primary')
        $(this).addClass('btn-secondary')

        const filterValue = $(this).attr('data-filter')

        if(filterValue == 'all') {
            // Show all projects if "All" is clicked
            $('#project-cards .project-card').show(300)
        }
        else {
            // Show selected projects and then hide the others
            $('#project-cards .project-card').filter('.' + filterValue).show(300, function(){
                $('#project-cards .project-card').not('.' + filterValue).hide(300)
            })

        }
    })
})

// Adjust the height of all project cards to match the height of the tallest card
function adjustCardHeight() {
    let maxHeight = 0

    // Find the tallest one
    $('#project-cards .project-card').each(function() {
        const cardHeight = $(this).height()
        maxHeight = Math.max(maxHeight, cardHeight)
    })

    // Set the height of all project cards to match the height of the tallest card
    $('#project-cards .project-card').height(maxHeight)
}