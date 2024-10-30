document.addEventListener('DOMContentLoaded', function () {
    const speakerData = [
        {
            name: "John Doe",
            title: "Chief Marketing Officer",
            company: "Specbee",
            image: "/Demo/images/img1.png",
            description: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than"
        },
        {
            name: "Jane Smith",
            title: "Chief Engagement Officer",
            company: "Acquia",
            image: "/Demo/images/img2.png",
            description: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than"
        },
        {
            name: "John Doe",
            title: "Chief Technical Developer",
            company: "Pantheon",
            image: "/Demo/images/img3.png",
            description: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than"
        },
        {
            name: "John Doe",
            title: "Chief Marketing Officer",
            company: "Specbee",
            image: "/Demo/images/img4.png",
            description: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than"
        }
    ];

    const modal = document.getElementById('speakerModal');
    const modalImage = document.getElementById('modal-image');
    const modalName = document.getElementById('modal-name');
    const modalTitle = document.getElementById('modal-title');
    const modalCompany = document.getElementById('modal-company');
    const modalDescription = document.getElementById('modal-description');
    const closeBtn = document.querySelector('.close-btn');

    function showModal(speakerIndex, card) {
        const speaker = speakerData[speakerIndex];
        modalImage.src = speaker.image;
        modalName.textContent = speaker.name;
        modalTitle.textContent = speaker.title;
        modalCompany.textContent = speaker.company;
        modalDescription.textContent = speaker.description;


        modal.classList.add('show');
    }

    function hideModal() {
        modal.classList.remove('show');
    }

    document.querySelectorAll('.speaker-card').forEach((card, index) => {
        card.addEventListener('click', () => {
            showModal(index, card);
        });
    });

    closeBtn.addEventListener('click', hideModal);

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideModal();
        }
    });
});
