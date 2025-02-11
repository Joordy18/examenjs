document.addEventListener('DOMContentLoaded', () => {
    const imageForm = document.getElementById('image-upload-form');
    const imageInput = document.getElementById('image-input');
    const imageContainer = document.getElementById('image-container');

    imageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const files = imageInput.files;
        for (const file of files) {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.classList.add('thumbnail');
            img.draggable = true;
            img.addEventListener('dragstart', handleDragStart);
            img.addEventListener('dragover', handleDragOver);
            img.addEventListener('drop', handleDrop);
            imageContainer.appendChild(img);
        }
    });

    function handleDragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.src);
        e.dataTransfer.effectAllowed = 'move';
    }

    function handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }

    function handleDrop(e) {
        e.preventDefault();
        const src = e.dataTransfer.getData('text/plain');
        const draggedImg = document.querySelector(`img[src="${src}"]`);
        const targetImg = e.target;
        if (draggedImg !== targetImg) {
            const draggedIndex = Array.from(imageContainer.children).indexOf(draggedImg);
            const targetIndex = Array.from(imageContainer.children).indexOf(targetImg);
            if (draggedIndex > targetIndex) {
                imageContainer.insertBefore(draggedImg, targetImg);
            } else {
                imageContainer.insertBefore(draggedImg, targetImg.nextSibling);
            }
        }
    }
});